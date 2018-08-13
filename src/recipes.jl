@recipe function f(network::T, layout::Dict{K,NodePosition}; nodesize::Union{Dict{K,Any},Nothing}=nothing, nodefill::Union{Function,Nothing}=nothing, bipartite::Bool=false) where {T <: AbstractEcologicalNetwork, K <: AllowedSpeciesTypes}

    # Node positions
    X = [layout[s].x for s in species(network)]
    Y = [layout[s].y for s in species(network)]

    # Default values
    framestyle --> :none
    legend --> false
    aspectratio --> 1

    if typeof(network) <: QuantitativeNetwork
        int_range = (minimum(filter(x -> x > 0.0, network.A)), maximum(network.A))
    end

    for interaction in network
        y = [layout[interaction.from].y, layout[interaction.to].y]
        x = [layout[interaction.from].x, layout[interaction.to].x]
        @series begin
            seriestype := :line
            linecolor --> :darkgrey
            if typeof(network) <: QuantitativeNetwork
                linewidth --> EcologicalNetworksPlots.scale_value(interaction.strength, int_range, (0.5, 3.5))
            end
            if typeof(network) <: ProbabilisticNetwork
                alpha --> interaction.probability
            end
            x, y
        end
    end


    @series begin

        if nodesize !== nothing
            nsi_range = (minimum(values(nodesize)), maximum(values(nodesize)))
            markersize := [EcologicalNetworksPlots.scale_value(nodesize[s], nsi_range, (2,8)) for s in species(network)]
        end

        if nodefill !== nothing
            nfi_range = (minimum(values(nodefill)), maximum(values(nodefill)))
            markerz := [EcologicalNetworksPlots.scale_value(nodefill[s], nfi_range, (0,1)) for s in species(network)]
        end

        if bipartite
            m_shape = Symbol[]
            for (i, s) in enumerate(species(network))
                this_mshape = s ∈ species(network; dims=1) ? :circle : :square
                push!(m_shape, this_mshape)
            end
            marker := m_shape
        end

        seriestype := :scatter
        color --> :white
        X, Y
    end

end