var documenterSearchIndex = {"docs":
[{"location":"library/#Prepare-and-apply-a-layout-1","page":"Reference","title":"Prepare and apply a layout","text":"","category":"section"},{"location":"library/#","page":"Reference","title":"Reference","text":"initial\nposition!","category":"page"},{"location":"library/#EcologicalNetworksPlots.initial","page":"Reference","title":"EcologicalNetworksPlots.initial","text":"initial(::Type{RandomInitialLayout}, N::T) where {T <: EcologicalNetworks.AbstractEcologicalNetwork}\n\nRandom disposition of nodes in the unit square. This is a good starting point for any force-directed layout.\n\n\n\n\n\ninitial(::Type{BipartiteInitialLayout}, N::T) where {T <: EcologicalNetworks.AbstractBipartiteNetwork}\n\nRandom disposition of nodes on two levels for bipartite networks.\n\n\n\n\n\ninitial(::Type{FoodwebInitialLayout}, N::T) where {T <: EcologicalNetworks.AbstractUnipartiteNetwork}\n\nRandom disposition of nodes on trophic levels for food webs. Note that the fractional trophic level is used, but the layout can be modified afterwards to use the continuous levels.\n\n\n\n\n\ninitial(::Type{CircularInitialLayout}, N::T) where {T <: EcologicalNetworks.AbstractEcologicalNetwork}\n\nRandom disposition of nodes on a circle. This is the starting point for circle-based layouts.\n\n\n\n\n\ninitial(::Type{UnravelledInitialLayout}, N::T) where {T <: EcologicalNetworks.AbstractUnipartiteNetwork}\n\nUnravelled disposition of nodes on trophic levels for food webs, where the x axis is the omnivory index. Note that the fractional trophic level is used, but the layout can be modified afterwards to use the continuous levels. See the documentation for UnravelledLayout to see how.\n\n\n\n\n\n","category":"function"},{"location":"library/#EcologicalNetworksPlots.position!","page":"Reference","title":"EcologicalNetworksPlots.position!","text":"position!(LA::ForceDirectedLayout, L::Dict{K,NodePosition}, N::T) where {T <: EcologicalNetworks.AbstractEcologicalNetwork} where {K}\n\nOne iteration of the force-directed layout routine. Because these algorithms can take some time to converge, it may be useful to stop every 500 iterations to have a look at the results.\n\n\n\n\n\nposition!(LA::LT, L::Dict{K,NodePosition}, N::T) where {LT <: UnravelledLayout, T <: AbstractEcologicalNetwork} where {K}\n\nPosition species according to the function defined in the UnravelledLayout.\n\n\n\n\n\nposition!(LA::NestedBipartiteLayout, L::Dict{K,NodePosition}, N::T) where {T <: AbstractBipartiteNetwork} where {K}\n\nRank species according to their degree.\n\n\n\n\n\nposition!(LA::CircularLayout, L::Dict{K,NodePosition}, N::T) where {T <: AbstractEcologicalNetwork} where {K}\n\nNodes will be positioned at equal distances along a circle, and nodes that are densely connected will be closer to one another. This is an efficient way to represent modular networks.\n\nReferences\n\nMcGuffin, M.J., 2012. Simple algorithms for network visualization: A tutorial. Tsinghua Science and Technology 17, 383–398. https://doi.org/10.1109/TST.2012.6297585\n\n\n\n\n\n","category":"function"},{"location":"library/#Layouts-1","page":"Reference","title":"Layouts","text":"","category":"section"},{"location":"library/#Force-directed-1","page":"Reference","title":"Force-directed","text":"","category":"section"},{"location":"library/#","page":"Reference","title":"Reference","text":"FoodwebInitialLayout\nRandomInitialLayout\nForceDirectedLayout","category":"page"},{"location":"library/#EcologicalNetworksPlots.FoodwebInitialLayout","page":"Reference","title":"EcologicalNetworksPlots.FoodwebInitialLayout","text":"FoodwebInitialLayout\n\nThis type is used to generate an initial layout, where the nodes are placed on their trophic levels, but their horizontal position is random.\n\n\n\n\n\n","category":"type"},{"location":"library/#EcologicalNetworksPlots.RandomInitialLayout","page":"Reference","title":"EcologicalNetworksPlots.RandomInitialLayout","text":"RandomInitialLayout\n\nThis type is used to generate an initial layout, where the nodes are placed at random.\n\n\n\n\n\n","category":"type"},{"location":"library/#EcologicalNetworksPlots.ForceDirectedLayout","page":"Reference","title":"EcologicalNetworksPlots.ForceDirectedLayout","text":"ForceDirectedLayout\n\nThe fields are, in order:\n\nmove_x, to specificy if the nodes are allowed to move horizontally\nmove_y, to specificy if the nodes are allowed to move vertically\nk, the spring coefficient, set to 0.2 by default in most cases\ncenter, to specify if the nodes are pulled towards the center\nheight, the height of the space, set to 1.0 by default\n\nThe spring coefficient is used to decide how strongly nodes will attract or repel one another, as a function of their distance Δ. Specifically, the default is that connected nodes will attract one another proportionally to Δ²/k, and all nodes will repel one another proportionally to k²/Δ.\n\nIf center=true, the nodes are all attracted to the center at a strength proportional to 75% of the attraction they would have from a connected node.\n\n\n\n\n\n","category":"type"},{"location":"library/#Circular-1","page":"Reference","title":"Circular","text":"","category":"section"},{"location":"library/#","page":"Reference","title":"Reference","text":"CircularInitialLayout\nCircularLayout","category":"page"},{"location":"library/#EcologicalNetworksPlots.CircularInitialLayout","page":"Reference","title":"EcologicalNetworksPlots.CircularInitialLayout","text":"CircularInitialLayout\n\nThis type is used to generate an initial layout, where the nodes are placed at random along a circle.\n\n\n\n\n\n","category":"type"},{"location":"library/#EcologicalNetworksPlots.CircularLayout","page":"Reference","title":"EcologicalNetworksPlots.CircularLayout","text":"CircularLayout\n\nA circular layout has a single field, radius.\n\n\n\n\n\n","category":"type"},{"location":"library/#Nested-(bipartite-only)-1","page":"Reference","title":"Nested (bipartite only)","text":"","category":"section"},{"location":"library/#","page":"Reference","title":"Reference","text":"BipartiteInitialLayout\nNestedBipartiteLayout","category":"page"},{"location":"library/#EcologicalNetworksPlots.BipartiteInitialLayout","page":"Reference","title":"EcologicalNetworksPlots.BipartiteInitialLayout","text":"BipartiteInitialLayout\n\nThis type is used to generate an initial bipartite layout, where the nodes are placed on two levels, but their horizontal position is random.\n\n\n\n\n\n","category":"type"},{"location":"library/#EcologicalNetworksPlots.NestedBipartiteLayout","page":"Reference","title":"EcologicalNetworksPlots.NestedBipartiteLayout","text":"NestedBipartiteLayout\n\nParameters are\n\nalign (whether the two levels should be centered together)\nrelative (whether the two levels should occupy a length equal to their relative richness)\nspread (the distance between the two)\n\nNote that to see the effect of spread, you may have to use aspectratio=1; if not, the spacing between levels will be determined by the dimensions of the plot.\n\n\n\n\n\n","category":"type"},{"location":"library/#Unravelled-1","page":"Reference","title":"Unravelled","text":"","category":"section"},{"location":"library/#","page":"Reference","title":"Reference","text":"UnravelledInitialLayout\nUnravelledLayout","category":"page"},{"location":"library/#EcologicalNetworksPlots.UnravelledInitialLayout","page":"Reference","title":"EcologicalNetworksPlots.UnravelledInitialLayout","text":"UnravelledInitialLayout\n\nThis type is used to generate an initial unravelled layout, where the nodes are sorted vertically by trophic level, and horizontally by omnivory index. Credit for this approach goes to @gvdr – https://github.com/gvdr/unravel#unravel\n\n\n\n\n\n","category":"type"},{"location":"library/#EcologicalNetworksPlots.UnravelledLayout","page":"Reference","title":"EcologicalNetworksPlots.UnravelledLayout","text":"UnravelledLayout\n\nParameters are\n\nx (a function to get the value on x)\ny (a function to get the value on y)\n\nBoth of these functions must accept a unipartite network as input, and return a dictionary with species and a single numerical value as output. Note that x and/or y can be λs.\n\n\n\n\n\n","category":"type"},{"location":"examples/#","page":"Examples","title":"Examples","text":"using EcologicalNetworks\nusing EcologicalNetworksPlots\nusing Plots","category":"page"},{"location":"examples/#Nested-layout-1","page":"Examples","title":"Nested layout","text":"","category":"section"},{"location":"examples/#","page":"Examples","title":"Examples","text":"Unes = web_of_life(\"M_SD_033\")\nI = initial(BipartiteInitialLayout, Unes)\nposition!(NestedBipartiteLayout(0.4), I, Unes)\nplot(I, Unes, aspectratio=1)\nscatter!(I, Unes, bipartite=true)","category":"page"},{"location":"examples/#Circular-layout-1","page":"Examples","title":"Circular layout","text":"","category":"section"},{"location":"examples/#","page":"Examples","title":"Examples","text":"Unes = web_of_life(\"M_SD_033\")\nI = initial(CircularInitialLayout, Unes)\nposition!(CircularLayout(), I, Unes)\nplot(I, Unes, aspectratio=1)\nscatter!(I, Unes, bipartite=true)","category":"page"},{"location":"examples/#Force-directed-layout-1","page":"Examples","title":"Force directed layout","text":"","category":"section"},{"location":"examples/#","page":"Examples","title":"Examples","text":"Umod = web_of_life(\"M_PA_003\")\nI = initial(RandomInitialLayout, Umod)\nfor step in 1:2000\n  position!(ForceDirectedLayout(1.5), I, Umod)\nend\nplot(I, Umod, aspectratio=1)\nscatter!(I, Umod, bipartite=true)","category":"page"},{"location":"examples/#Food-web-layout-1","page":"Examples","title":"Food web layout","text":"","category":"section"},{"location":"examples/#","page":"Examples","title":"Examples","text":"Fweb = simplify(nz_stream_foodweb()[5])\nI = initial(FoodwebInitialLayout, Fweb)\nfor step in 1:4000\n  position!(ForceDirectedLayout(true, false, 2.5), I, Fweb)\nend\nplot(I, Fweb)\nscatter!(I, Fweb)","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"Note that we can replace some properties of the nodes in the layout after the positioning algorithm occurred – so we can, for example, use the actual (instead of fractional) trophic level:","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"Fweb = simplify(nz_stream_foodweb()[5])\nI = initial(FoodwebInitialLayout, Fweb)\nfor step in 1:4000\n  position!(ForceDirectedLayout(true, false, 2.5), I, Fweb)\nend\ntl = trophic_level(Fweb)\nfor s in species(Fweb)\n  I[s].y = tl[s]\nend\nplot(I, Fweb)\nscatter!(I, Fweb)","category":"page"},{"location":"examples/#Node-properties-1","page":"Examples","title":"Node properties","text":"","category":"section"},{"location":"examples/#Color-1","page":"Examples","title":"Color","text":"","category":"section"},{"location":"examples/#","page":"Examples","title":"Examples","text":"Unes = web_of_life(\"M_SD_033\")\nI = initial(BipartiteInitialLayout, Unes)\nposition!(NestedBipartiteLayout(0.4), I, Unes)\nplot(I, Unes, aspectratio=1)\nscatter!(I, Unes, bipartite=true, nodefill=degree(Unes))","category":"page"},{"location":"examples/#Size-1","page":"Examples","title":"Size","text":"","category":"section"},{"location":"examples/#","page":"Examples","title":"Examples","text":"The size of the nodes can be changed using the nodesize argument, which is a dictionary mapping species to values. These values are scaled when making the figures. Note that in this example we also label the number of the node.","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"Unes = web_of_life(\"M_SD_033\")\nI = initial(BipartiteInitialLayout, Unes)\nposition!(NestedBipartiteLayout(0.4), I, Unes)\nplot(I, Unes, aspectratio=1)\nscatter!(I, Unes, bipartite=true, nodesize=degree(Unes), series_annotations = string.(1:richness(Unes)))","category":"page"},{"location":"examples/#Network-subsets-1","page":"Examples","title":"Network subsets","text":"","category":"section"},{"location":"examples/#","page":"Examples","title":"Examples","text":"One important feature of the package is that the layout can contain more nodes than the network. For example, we can use this to our advantage, to represent species with a degree larger than 3 in red:","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"Umod = web_of_life(\"M_PA_003\")\nI = initial(RandomInitialLayout, Umod)\nfor step in 1:4000\n  position!(ForceDirectedLayout(2.5), I, Umod)\nend\nplot(I, Umod, aspectratio=1)\nscatter!(I, Umod)\nN = convert(AbstractUnipartiteNetwork, convert(BinaryNetwork, Umod))\ncore3 = collect(keys(filter(p -> p.second == 3, degree(N))))\nplot!(I, N[core3], lc=:red)\nscatter!(I, N[core3], mc=:red)","category":"page"},{"location":"examples/#Heatmap-1","page":"Examples","title":"Heatmap","text":"","category":"section"},{"location":"examples/#","page":"Examples","title":"Examples","text":"Umod = web_of_life(\"M_PA_003\")\nheatmap(Umod, c=:YlGnBu)","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"Umod = convert(BipartiteNetwork, web_of_life(\"M_PA_003\"))\nheatmap(convert(UnipartiteNetwork, Umod))","category":"page"},{"location":"examples/#Unravelled-layout-1","page":"Examples","title":"Unravelled layout","text":"","category":"section"},{"location":"examples/#","page":"Examples","title":"Examples","text":"The unravelled layout is essentially a scatterplot of network properties with interactions drawn as well. This is inspired by [the work of Giulio Valentina Dalla Riva on this visualisation][gvdr]. By default, it will compare the omnivory index and the trophic level:","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"[gvdr]: https://github.com/gvdr/unravel","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"N = nz_stream_foodweb()[10]\nI = initial(UnravelledInitialLayout, N)\nplot(I, N, lab=\"\", framestyle=:box)\nscatter!(I, N, nodefill=degree(N), colorbar=true, framestyle=:box)","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"Because a lot of species will have the same omnivory index, we might want to use a slightly different function, which adds some randomness to the omnivory:","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"N = nz_stream_foodweb()[10]\nI = initial(UnravelledInitialLayout, N)\n\nfunction random_omnivory(N::T) where {T <: UnipartiteNetwork}\n  o = omnivory(N)\n  for s in species(N)\n    o[s] += (rand()-0.5)*0.08\n  end\n  return o\nend\n\nUL = UnravelledLayout(x=random_omnivory, y=trophic_level)\nposition!(UL, I, N)\n\nplot(I, N, lab=\"\", framestyle=:box)\nscatter!(I, N, nodefill=degree(N), colorbar=true, framestyle=:box, mc=:viridis)","category":"page"},{"location":"#","page":"Index","title":"Index","text":"The EcologicalNetworksPlots package extends EcologicalNetworks to provide plotting functionalities, by allowing network objects to be used with Plots. This documentation has a complete reference of the functions and types, as well as a gallery of examples.","category":"page"},{"location":"#","page":"Index","title":"Index","text":"Plotting a network can be done in two ways. First, as a heatmap, in which case no arguments are necessary. Second, as the usual nodes and links visualization.","category":"page"},{"location":"#","page":"Index","title":"Index","text":"The second option requires to set a layout, of which there are multiple types according to the type of network, the type of layout, and the information to emphasize. Applying a layout consists of a call to initial, followed by one or more calls to position!. The nodes in the network are represented using scatter, and the links using plot.","category":"page"},{"location":"#","page":"Index","title":"Index","text":"Probabilistic networks have link probability denoted as transparency, and quantitative network have link strength represented as width.","category":"page"},{"location":"#","page":"Index","title":"Index","text":"Both the fill and color of the nodes can be changed, using the nodefill and nodesize arguments – these must be dictionnaries mapping all nodes in the network to a single numerical value, and they affect the markerfill and markerz value of Plots, respectively. Note that by default, frametype is :none and legend is false, but this can be changed. It is particularly important to change it for UnravelledLayout, for example.","category":"page"}]
}
