using EcologicalNetworks
using EcologicalNetworksPlots
using Plots


U = web_of_life("A_HP_001")
K = convert(BinaryNetwork, U)
P = null2(K)
I0 = initial_random_layout(U)
[graph_layout!(U, I0) for i in 1:600]
EcologicalNetworksPlots.finish_layout!(I0)
p1 = plot(K, I0)
savefig(p1, joinpath("..", "gallery", "bipartite_graph.png"))


I1 = initial_bipartite_layout(U)
[bipartite_layout!(U, I1) for i in 1:600]
EcologicalNetworksPlots.finish_layout!(I1)
EcologicalNetworksPlots.spread_levels!(I1; ratio=0.3)
p2 = plot(U, I1)
savefig(p2, joinpath("..", "gallery", "bipartite_bipartite.png"))


Npart = K |> lp |> (x) -> brim(x...)
p3 = plot(K, I1; nodefill=Npart[2], markercolor=:isolum)
savefig(p3, joinpath("..", "gallery", "bipartite_modular.png"))


p4 = plot(K, I0; nodefill=Npart[2], markercolor=:isolum)
savefig(p4, joinpath("..", "gallery", "graph_modular.png"))


p5 = plot(K, I0; nodefill=Npart[2], markercolor=:isolum, bipartite=true)
savefig(p5, joinpath("..", "gallery", "graph_modular_bipartite.png"))


p6 = plot(U, I0; nodefill=Npart[2], nodesize=degree(K), markercolor=:isolum, bipartite=true, msw=0.0)
savefig(p6, joinpath("..", "gallery", "graph_modular_degree_bipartite.png"))


N = first(nz_stream_foodweb())
I2 = initial_foodweb_layout(N)
[foodweb_layout!(N, I2) for i in 1:2600]
EcologicalNetworksPlots.finish_layout!(I2)
EcologicalNetworksPlots.spread_levels!(I2; ratio=0.75)
p7 = plot(N, I2)
savefig(p7, joinpath("..", "gallery", "foodweb.png"))


I3 = initial_random_layout(N)
[graph_layout!(N, I3) for i in 1:2600]
EcologicalNetworksPlots.finish_layout!(I3)
p8 = plot(N, I3, nodefill=trophic_level(N), nodesize=degree(N), markercolor=:YlGnBu)
savefig(p8, joinpath("..", "gallery", "foodweb_graph.png"))


Wong2011 = (
    orange = "#e69f00",
    sky_blue = "#56b4e9",
    bluish_green = "#009e73",
    yellow = "#f0e442",
    blue = "#0072b2",
    vermillion = "#d55e00",
    reddish_purple = "#cc79a7"
)

Q1 = web_of_life("A_HP_001")
Q2 = web_of_life("A_HP_002")
N1 = convert(BinaryNetwork, Q1)
N2 = convert(BinaryNetwork, Q2)
M = reduce(union, [N1, N2])
I4 = initial_random_layout(M)
[graph_layout!(M, I4) for i in 1:1000]
EcologicalNetworksPlots.finish_layout!(I4)
p9 = plot(M, I4, lc=:grey, msw=0, mc=:grey, bipartite=true)
plot!(p9, intersect(N1, N2), I4, lc=Wong2011.orange, mc=Wong2011.orange, msw=0, bipartite=true)
plot!(p9, setdiff(N2, N1), I4, lc=Wong2011.bluish_green, mc=Wong2011.bluish_green, msw=0, bipartite=true)
plot!(p9, setdiff(N1, N2), I4, lc=Wong2011.vermillion, mc=Wong2011.vermillion, msw=0, bipartite=true)
savefig(p9, joinpath("..", "gallery", "overlays.png"))


Ns = web_of_life.("A_HP_".*lpad.(1:10, 3, "0"))
MW = reduce(union, convert.(BinaryNetwork, Ns))
I5 = initial_random_layout(MW)
[graph_layout!(MW, I5) for i in 1:600]
EcologicalNetworksPlots.finish_layout!(I5)

deg = sort(collect(values(degree(MW))))
deg = deg./maximum(deg)
x = range(0.0; stop=1.0, length=richness(MW))
p10 = plot(x, deg, frame=:origin, c=:black, leg=false)

for s in species(MW)
    I5[s].x += 0.5
    I5[s].x *= 0.4
    I5[s].x += 0.25
    I5[s].y *= 0.3
    I5[s].y += 0.6
end

plot!(p10, MW, I5, frame=:box, ms=3, msw=0, mc=:grey, alpha=0.5)
xaxis!(p10, "Node index", (0.0,1.0))
yaxis!(p10, "Degree", (0.0, 1.0))
savefig(p10, joinpath("..", "gallery", "annotate.png"))
