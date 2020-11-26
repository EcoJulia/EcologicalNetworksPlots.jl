var documenterSearchIndex = {"docs":
[{"location":"advanced/attributes/#Node-color","page":"Nodes attributes","title":"Node color","text":"","category":"section"},{"location":"advanced/attributes/","page":"Nodes attributes","title":"Nodes attributes","text":"using EcologicalNetworks\nusing EcologicalNetworksPlots\nusing Plots","category":"page"},{"location":"advanced/attributes/","page":"Nodes attributes","title":"Nodes attributes","text":"Unes = web_of_life(\"M_SD_033\")\nI = initial(BipartiteInitialLayout, Unes)\nposition!(NestedBipartiteLayout(0.4), I, Unes)\nplot(I, Unes, aspectratio=1)\nscatter!(I, Unes, bipartite=true, nodefill=degree(Unes), c=:cividis)","category":"page"},{"location":"advanced/attributes/#Node-size","page":"Nodes attributes","title":"Node size","text":"","category":"section"},{"location":"advanced/attributes/","page":"Nodes attributes","title":"Nodes attributes","text":"The size of the nodes can be changed using the nodesize argument, which is a dictionary mapping species to values. These values are scaled when making the figures. Note that in this example we also label the number of the node.","category":"page"},{"location":"advanced/attributes/","page":"Nodes attributes","title":"Nodes attributes","text":"Unes = web_of_life(\"M_SD_033\")\nI = initial(BipartiteInitialLayout, Unes)\nposition!(NestedBipartiteLayout(0.4), I, Unes)\nplot(I, Unes, aspectratio=1)\nscatter!(I, Unes, bipartite=true, nodesize=degree(Unes))","category":"page"},{"location":"advanced/attributes/#Node-annotations","page":"Nodes attributes","title":"Node annotations","text":"","category":"section"},{"location":"advanced/attributes/","page":"Nodes attributes","title":"Nodes attributes","text":"Unes = web_of_life(\"M_SD_033\")\nI = initial(BipartiteInitialLayout, Unes)\nposition!(NestedBipartiteLayout(0.4), I, Unes)\nplot(I, Unes, aspectratio=1)\nscatter!(I, Unes, bipartite=true, series_annotations = string.(1:richness(Unes)))","category":"page"},{"location":"layouts/bipartite/#Layouts","page":"Bipartite","title":"Layouts","text":"","category":"section"},{"location":"layouts/bipartite/","page":"Bipartite","title":"Bipartite","text":"BipartiteInitialLayout\nNestedBipartiteLayout","category":"page"},{"location":"layouts/bipartite/#EcologicalNetworksPlots.BipartiteInitialLayout","page":"Bipartite","title":"EcologicalNetworksPlots.BipartiteInitialLayout","text":"BipartiteInitialLayout\n\nThis type is used to generate an initial bipartite layout, where the nodes are placed on two levels, but their horizontal position is random.\n\n\n\n\n\n","category":"type"},{"location":"layouts/bipartite/#EcologicalNetworksPlots.NestedBipartiteLayout","page":"Bipartite","title":"EcologicalNetworksPlots.NestedBipartiteLayout","text":"NestedBipartiteLayout\n\nParameters are\n\nalign (whether the two levels should be centered together)\nrelative (whether the two levels should occupy a length equal to their relative richness)\nspread (the distance between the two)\n\nNote that to see the effect of spread, you may have to use aspectratio=1; if not, the spacing between levels will be determined by the dimensions of the plot.\n\n\n\n\n\n","category":"type"},{"location":"layouts/bipartite/","page":"Bipartite","title":"Bipartite","text":"using EcologicalNetworks\nusing EcologicalNetworksPlots\nusing Plots","category":"page"},{"location":"layouts/bipartite/#Example","page":"Bipartite","title":"Example","text":"","category":"section"},{"location":"layouts/bipartite/","page":"Bipartite","title":"Bipartite","text":"Unes = web_of_life(\"M_SD_033\")\nI = initial(BipartiteInitialLayout, Unes)\nposition!(NestedBipartiteLayout(0.4), I, Unes)\nplot(I, Unes, aspectratio=1)\nscatter!(I, Unes, bipartite=true)","category":"page"},{"location":"layouts/forcedirected/#Layouts","page":"Force-directed","title":"Layouts","text":"","category":"section"},{"location":"layouts/forcedirected/","page":"Force-directed","title":"Force-directed","text":"FoodwebInitialLayout\nRandomInitialLayout\nForceDirectedLayout","category":"page"},{"location":"layouts/forcedirected/#EcologicalNetworksPlots.FoodwebInitialLayout","page":"Force-directed","title":"EcologicalNetworksPlots.FoodwebInitialLayout","text":"FoodwebInitialLayout\n\nThis type is used to generate an initial layout, where the nodes are placed on their trophic levels, but their horizontal position is random.\n\n\n\n\n\n","category":"type"},{"location":"layouts/forcedirected/#EcologicalNetworksPlots.RandomInitialLayout","page":"Force-directed","title":"EcologicalNetworksPlots.RandomInitialLayout","text":"RandomInitialLayout\n\nThis type is used to generate an initial layout, where the nodes are placed at random within the unit circle.\n\n\n\n\n\n","category":"type"},{"location":"layouts/forcedirected/#EcologicalNetworksPlots.ForceDirectedLayout","page":"Force-directed","title":"EcologicalNetworksPlots.ForceDirectedLayout","text":"ForceDirectedLayout\n\nThe fields are, in order:\n\nmove, a tuple to specify whether moves on the x and y axes are allowed\nk, a tuple (kₐ,kᵣ) giving the strength of attraction and repulsion\nexponents, a tuple (a,b,c,d) giving the exponents for the attraction and repulsion functions\ngravity, the strength of attraction towards the center, set to 0.0 as a default\n\nThe various coefficients are used to decide how strongly nodes will attract or repel one another, as a function of their distance Δ. Specifically, the default is that connected nodes will attract one another proportionally to (Δᵃ)×(kₐᵇ), with a=2 and b=-1, and all nodes repel one another proportionally to (Δᶜ)×(kᵣᵈ) with c=-1 and d=2.\n\nThe parameterization for the Fruchterman-Rheingold layout is the default one, particularly if kₐ=kᵣ. The Force Atlas 2 parameters are kₐ=1 (or b=0), kᵣ set to any value, a=1, c=-1, d=1. Note that in all cases, the gravity is a multiplying constant of the resulting attraction force, so it will also be sensitive to these choices. The FruchtermanRheingold and ForceAtlas2 functions will return a ForceDirectedLayout – as this object is mutable, you can replace the exponents at any time.\n\n\n\n\n\n","category":"type"},{"location":"layouts/forcedirected/","page":"Force-directed","title":"Force-directed","text":"using EcologicalNetworks\nusing EcologicalNetworksPlots\nusing Plots","category":"page"},{"location":"layouts/forcedirected/#Bipartite-example","page":"Force-directed","title":"Bipartite example","text":"","category":"section"},{"location":"layouts/forcedirected/","page":"Force-directed","title":"Force-directed","text":"In this example, we have a quantitative bipartite network, and we will set no gravity (nodes can move as far away as they want from the center). Note that our initial layout is a RandomInitialLayout, but we can use any layout we see fit when starting.","category":"page"},{"location":"layouts/forcedirected/","page":"Force-directed","title":"Force-directed","text":"N = web_of_life(\"M_SD_034\")\nI = initial(RandomInitialLayout, N)\nplot(I, N, aspectratio=1)\nscatter!(I, N, bipartite=true)","category":"page"},{"location":"layouts/forcedirected/","page":"Force-directed","title":"Force-directed","text":"The next step is to actually position the nodes relative to one another. Because this network has disconnected components, and we have no gravity, we expect that they will be quite far from one another:","category":"page"},{"location":"layouts/forcedirected/","page":"Force-directed","title":"Force-directed","text":"for step in 1:2000\n  position!(ForceDirectedLayout(0.3, 0.3; gravity=0.0), I, N)\nend\nplot(I, N, aspectratio=1)\nscatter!(I, N, bipartite=true)","category":"page"},{"location":"layouts/forcedirected/","page":"Force-directed","title":"Force-directed","text":"We can turn gravity on just a little bit:","category":"page"},{"location":"layouts/forcedirected/","page":"Force-directed","title":"Force-directed","text":"I = initial(RandomInitialLayout, N)\nfor step in 1:2000\n  position!(ForceDirectedLayout(0.3, 0.3; gravity=0.2), I, N)\nend\nplot(I, N, aspectratio=1)\nscatter!(I, N, bipartite=true)","category":"page"},{"location":"layouts/forcedirected/","page":"Force-directed","title":"Force-directed","text":"We can also make links attract more strongly than nodes repel (and turn gravity on some more):","category":"page"},{"location":"layouts/forcedirected/","page":"Force-directed","title":"Force-directed","text":"I = initial(RandomInitialLayout, N)\nfor step in 1:2000\n  position!(ForceDirectedLayout(0.3, 0.75; gravity=0.4), I, N)\nend\nplot(I, N, aspectratio=1)\nscatter!(I, N, bipartite=true)","category":"page"},{"location":"layouts/forcedirected/#Standard-layouts","page":"Force-directed","title":"Standard layouts","text":"","category":"section"},{"location":"layouts/forcedirected/","page":"Force-directed","title":"Force-directed","text":"The force-directed code uses a series of exponents in addition to the values, to change the conformation of the resulting diagram.","category":"page"},{"location":"layouts/forcedirected/","page":"Force-directed","title":"Force-directed","text":"FruchtermanRheingold\nForceAtlas2\nSpringElectric","category":"page"},{"location":"layouts/forcedirected/#EcologicalNetworksPlots.FruchtermanRheingold","page":"Force-directed","title":"EcologicalNetworksPlots.FruchtermanRheingold","text":"FruchtermanRheingold(k::Float64; gravity::Float64=0.75)\n\nThe default ForceDirectedLayout uses the Fruchterman-Rheingold parameters - this function is simply here to make the code more explicity, and to use a \"strict\" version where kᵣ=kₐ. \n\n\n\n\n\n","category":"function"},{"location":"layouts/forcedirected/#EcologicalNetworksPlots.ForceAtlas2","page":"Force-directed","title":"EcologicalNetworksPlots.ForceAtlas2","text":"ForceAtlas2(k::Float64; gravity::Float64=0.75)\n\nIn the Force Atlas 2 layout, the attraction is proportional to the distance, and the repulsion to the inverse of the distance. Note that kₐ in this layout is set to 1, so kᵣ is the relative repulsion.\n\n\n\n\n\n","category":"function"},{"location":"layouts/forcedirected/#EcologicalNetworksPlots.SpringElectric","page":"Force-directed","title":"EcologicalNetworksPlots.SpringElectric","text":"SpringElectric(k::Float64; gravity::Float64=0.75)\n\nIn the spring electric layout, attraction is proportional to distance, and repulsion to the inverse of the distance squared.\n\n\n\n\n\n","category":"function"},{"location":"layouts/forcedirected/","page":"Force-directed","title":"Force-directed","text":"The Fruchterman-Rheingold method is the default:","category":"page"},{"location":"layouts/forcedirected/","page":"Force-directed","title":"Force-directed","text":"I = initial(RandomInitialLayout, N)\nfor step in 1:2000\n  position!(FruchtermanRheingold(0.3; gravity=0.2), I, N)\nend\nplot(I, N, aspectratio=1)\nscatter!(I, N, bipartite=true)","category":"page"},{"location":"layouts/forcedirected/","page":"Force-directed","title":"Force-directed","text":"Force Atlas 2 usually gives very good results, and is in particular really good at showing the modules and long paths in a network.","category":"page"},{"location":"layouts/forcedirected/","page":"Force-directed","title":"Force-directed","text":"I = initial(RandomInitialLayout, N)\nfor step in 1:2000\n  position!(ForceAtlas2(1.2; gravity=0.2), I, N)\nend\nplot(I, N, aspectratio=1)\nscatter!(I, N, bipartite=true)","category":"page"},{"location":"layouts/forcedirected/","page":"Force-directed","title":"Force-directed","text":"For the sake of exhaustivity, we have included the spring electric layout. This can give good results too, and is worth investigating as a possible visualisation:","category":"page"},{"location":"layouts/forcedirected/","page":"Force-directed","title":"Force-directed","text":"I = initial(RandomInitialLayout, N)\nfor step in 1:2000\n  position!(SpringElectric(1.2; gravity=0.2), I, N)\nend\nplot(I, N, aspectratio=1)\nscatter!(I, N, bipartite=true)","category":"page"},{"location":"layouts/forcedirected/#Food-web-example","page":"Force-directed","title":"Food web example","text":"","category":"section"},{"location":"layouts/forcedirected/","page":"Force-directed","title":"Force-directed","text":"One convenient way to plot food webs is to prevent them from moving on the y axis, so that every species remains at its trophic level. This can be done by changing the move field (as ForceDirectedLayout is a mutable type). Note that in this example, we update the layout after plotting, by replacing the fractional trophic level by the actual trophic level (and we color the nodes by their degree, which is covered more in-depth in the next section of this documentation).","category":"page"},{"location":"layouts/forcedirected/","page":"Force-directed","title":"Force-directed","text":"Fweb = simplify(pajek()[:Everglades])\nI = initial(FoodwebInitialLayout, Fweb)\nL = SpringElectric(1.2; gravity=0.05)\nL.move = (true, false)\nfor step in 1:2000\n  position!(L, I, Fweb)\nend\ntl = trophic_level(Fweb)\nfor s in species(Fweb)\n  I[s].y = tl[s]\nend\nplot(I, Fweb)\nscatter!(I, Fweb, nodefill=degree(Fweb), c=:YlGn)","category":"page"},{"location":"layouts/initial/#Creating-the-initial-layout","page":"Introduction","title":"Creating the initial layout","text":"","category":"section"},{"location":"layouts/initial/","page":"Introduction","title":"Introduction","text":"The first step is to generate a starting position for the nodes in the network. In a lot of cases, this is a pseudo-random position, which is then refined. The methods for every layouts have different initial conditions.","category":"page"},{"location":"layouts/initial/","page":"Introduction","title":"Introduction","text":"initial","category":"page"},{"location":"layouts/initial/#EcologicalNetworksPlots.initial","page":"Introduction","title":"EcologicalNetworksPlots.initial","text":"initial(::Type{RandomInitialLayout}, N::T) where {T <: EcologicalNetworks.AbstractEcologicalNetwork}\n\nRandom disposition of nodes in the unit square. This is a good starting point for any force-directed layout.\n\n\n\n\n\ninitial(::Type{BipartiteInitialLayout}, N::T) where {T <: EcologicalNetworks.AbstractBipartiteNetwork}\n\nRandom disposition of nodes on two levels for bipartite networks.\n\n\n\n\n\ninitial(::Type{FoodwebInitialLayout}, N::T) where {T <: EcologicalNetworks.AbstractUnipartiteNetwork}\n\nRandom disposition of nodes on trophic levels for food webs. Note that the fractional trophic level is used, but the layout can be modified afterwards to use the continuous levels.\n\n\n\n\n\ninitial(::Type{CircularInitialLayout}, N::T) where {T <: EcologicalNetworks.AbstractEcologicalNetwork}\n\nRandom disposition of nodes on a circle. This is the starting point for circle-based layouts.\n\n\n\n\n\ninitial(::Type{UnravelledInitialLayout}, N::T) where {T <: EcologicalNetworks.AbstractUnipartiteNetwork}\n\nUnravelled disposition of nodes on trophic levels for food webs, where the x axis is the omnivory index. Note that the fractional trophic level is used, but the layout can be modified afterwards to use the continuous levels. See the documentation for UnravelledLayout to see how.\n\n\n\n\n\n","category":"function"},{"location":"layouts/initial/#Applying-the-layout","page":"Introduction","title":"Applying the layout","text":"","category":"section"},{"location":"layouts/initial/","page":"Introduction","title":"Introduction","text":"The second step is to apply the layout. In most cases, this only needs to be done once. Force-directed layouts can require a very large number of iterations, and also tend to scale very poorly with the size of the network.","category":"page"},{"location":"layouts/initial/","page":"Introduction","title":"Introduction","text":"position!","category":"page"},{"location":"layouts/initial/#EcologicalNetworksPlots.position!","page":"Introduction","title":"EcologicalNetworksPlots.position!","text":"position!(LA::ForceDirectedLayout, L::Dict{K,NodePosition}, N::T) where {T <: EcologicalNetworks.AbstractEcologicalNetwork} where {K}\n\nOne iteration of the force-directed layout routine. Because these algorithms can take some time to converge, it may be useful to stop every 500 iterations to have a look at the results.\n\n\n\n\n\nposition!(LA::LT, L::Dict{K,NodePosition}, N::T) where {LT <: UnravelledLayout, T <: AbstractEcologicalNetwork} where {K}\n\nPosition species according to the function defined in the UnravelledLayout.\n\n\n\n\n\nposition!(LA::NestedBipartiteLayout, L::Dict{K,NodePosition}, N::T) where {T <: AbstractBipartiteNetwork} where {K}\n\nRank species according to their degree.\n\n\n\n\n\nposition!(LA::CircularLayout, L::Dict{K,NodePosition}, N::T) where {T <: AbstractEcologicalNetwork} where {K}\n\nNodes will be positioned at equal distances along a circle, and nodes that are densely connected will be closer to one another. This is an efficient way to represent modular networks.\n\nReferences\n\nMcGuffin, M.J., 2012. Simple algorithms for network visualization: A tutorial. Tsinghua Science and Technology 17, 383–398. https://doi.org/10.1109/TST.2012.6297585\n\n\n\n\n\n","category":"function"},{"location":"layouts/unravelled/","page":"Unravel","title":"Unravel","text":"The unravelled layout is essentially a scatterplot of network properties with interactions drawn as well. This is inspired by the work of Giulio V. Dalla Riva on this visualisation. By default, it will compare the omnivory index and the trophic level:","category":"page"},{"location":"layouts/unravelled/#Layouts","page":"Unravel","title":"Layouts","text":"","category":"section"},{"location":"layouts/unravelled/","page":"Unravel","title":"Unravel","text":"UnravelledInitialLayout\nUnravelledLayout","category":"page"},{"location":"layouts/unravelled/#EcologicalNetworksPlots.UnravelledInitialLayout","page":"Unravel","title":"EcologicalNetworksPlots.UnravelledInitialLayout","text":"UnravelledInitialLayout\n\nThis type is used to generate an initial unravelled layout, where the nodes are sorted vertically by trophic level, and horizontally by omnivory index. Credit for this approach goes to @gvdr – https://github.com/gvdr/unravel#unravel\n\n\n\n\n\n","category":"type"},{"location":"layouts/unravelled/#EcologicalNetworksPlots.UnravelledLayout","page":"Unravel","title":"EcologicalNetworksPlots.UnravelledLayout","text":"UnravelledLayout\n\nParameters are\n\nx (a function to get the value on x)\ny (a function to get the value on y)\n\nBoth of these functions must accept a unipartite network as input, and return a dictionary with species and a single numerical value as output. Note that x and/or y can be λs.\n\n\n\n\n\n","category":"type"},{"location":"layouts/unravelled/#Example","page":"Unravel","title":"Example","text":"","category":"section"},{"location":"layouts/unravelled/","page":"Unravel","title":"Unravel","text":"using EcologicalNetworks\nusing EcologicalNetworksPlots\nusing Plots","category":"page"},{"location":"layouts/unravelled/","page":"Unravel","title":"Unravel","text":"N = nz_stream_foodweb()[10]\nI = initial(UnravelledInitialLayout, N)\nplot(I, N, lab=\"\", framestyle=:box)\nscatter!(I, N, nodefill=degree(N), colorbar=true, framestyle=:box)","category":"page"},{"location":"layouts/unravelled/","page":"Unravel","title":"Unravel","text":"Because a lot of species will have the same omnivory index, we might want to use a slightly different function, which adds some randomness to the omnivory:","category":"page"},{"location":"layouts/unravelled/","page":"Unravel","title":"Unravel","text":"N = nz_stream_foodweb()[10]\nI = initial(UnravelledInitialLayout, N)\n\nfunction random_omnivory(N::T) where {T <: UnipartiteNetwork}\n  o = omnivory(N)\n  for s in species(N)\n    o[s] += (rand()-0.5)*0.1\n  end\n  return o\nend\n\nUL = UnravelledLayout(x=random_omnivory, y=trophic_level)\nposition!(UL, I, N)\n\nplot(I, N, lab=\"\", framestyle=:box)\nscatter!(I, N, nodefill=degree(N), colorbar=true, framestyle=:box, mc=:viridis)","category":"page"},{"location":"","page":"Index","title":"Index","text":"The EcologicalNetworksPlots package extends EcologicalNetworks to provide plotting functionalities, by allowing network objects to be used with Plots, which must also be installed and loaded. This documentation has a complete reference of the functions and types, as well as a gallery of examples.","category":"page"},{"location":"","page":"Index","title":"Index","text":"Plotting a network can be done in two ways. First, as a heatmap, in which case no arguments are necessary. Second, as the usual nodes and links visualization.","category":"page"},{"location":"","page":"Index","title":"Index","text":"The second option requires to set a layout, of which there are multiple types according to the type of network, the type of layout, and the information to emphasize. Applying a layout consists of a call to initial, followed by one or more calls to position!. The nodes in the network are represented using scatter, and the links using plot. Probabilistic networks have link probability denoted as transparency, and quantitative network have link strength represented as width.","category":"page"},{"location":"","page":"Index","title":"Index","text":"Both the fill and color of the nodes can be changed, using the nodefill and nodesize arguments – these must be dictionaries mapping all nodes in the network to a single numerical value, and they affect the markerfill and markerz value of Plots, respectively. Note that by default, frametype is :none and legend is false, but this can be changed. It is particularly important to change it for UnravelledLayout, for example.","category":"page"},{"location":"","page":"Index","title":"Index","text":"An important point, which can be used to create complex visualisations, is that you can call the scatter and plot functions on dictionaries of positions that have more points that are in the network. This can, among other things, allow you to use different colormaps for the degree of different nodes, or color different sub-graphs in the network. There are a few example of these uses in the documentation.","category":"page"},{"location":"advanced/subsets/","page":"Networks subsets","title":"Networks subsets","text":"using EcologicalNetworks\nusing EcologicalNetworksPlots\nusing Plots","category":"page"},{"location":"advanced/subsets/#core-plot","page":"Networks subsets","title":"3-core plot","text":"","category":"section"},{"location":"advanced/subsets/","page":"Networks subsets","title":"Networks subsets","text":"One important feature of the package is that the layout can contain more nodes than the network. For example, we can use this to our advantage, to represent species with a degree larger than 3 in red:","category":"page"},{"location":"advanced/subsets/","page":"Networks subsets","title":"Networks subsets","text":"Umod = web_of_life(\"M_PA_003\")\nI = initial(RandomInitialLayout, Umod)\nfor step in 1:4000\n  position!(ForceDirectedLayout(2.5, 0.4), I, Umod)\nend\nplot(I, Umod, aspectratio=1)\nscatter!(I, Umod)\nN = convert(AbstractUnipartiteNetwork, convert(BinaryNetwork, Umod))\ncore3 = collect(keys(filter(p -> p.second == 3, degree(N))))\nplot!(I, N[core3], lc=:red)\nscatter!(I, N[core3], mc=:red)","category":"page"},{"location":"advanced/subsets/#Modularity","page":"Networks subsets","title":"Modularity","text":"","category":"section"},{"location":"advanced/subsets/","page":"Networks subsets","title":"Networks subsets","text":"We can also use this ability to show the modular structure of a network:","category":"page"},{"location":"advanced/subsets/","page":"Networks subsets","title":"Networks subsets","text":"N = convert(BinaryNetwork, Umod)\nI = initial(RandomInitialLayout, N)\nfor step in 1:2000\n  position!(ForceAtlas2(1.2; gravity=0.2), I, N)\nend\n\n# Modularity\n_, P = brim(lp(N)...)\nplot(I, N, aspectratio=1)\nscatter!(I, N, msw=0.0, nodefill=P, c=:isolum)","category":"page"},{"location":"layouts/circular/#Layouts","page":"Circular","title":"Layouts","text":"","category":"section"},{"location":"layouts/circular/","page":"Circular","title":"Circular","text":"CircularInitialLayout\nCircularLayout","category":"page"},{"location":"layouts/circular/#EcologicalNetworksPlots.CircularInitialLayout","page":"Circular","title":"EcologicalNetworksPlots.CircularInitialLayout","text":"CircularInitialLayout\n\nThis type is used to generate an initial layout, where the nodes are placed at random along a circle.\n\n\n\n\n\n","category":"type"},{"location":"layouts/circular/#EcologicalNetworksPlots.CircularLayout","page":"Circular","title":"EcologicalNetworksPlots.CircularLayout","text":"CircularLayout\n\nA circular layout has a single field, radius.\n\n\n\n\n\n","category":"type"},{"location":"layouts/circular/","page":"Circular","title":"Circular","text":"using EcologicalNetworks\nusing EcologicalNetworksPlots\nusing Plots","category":"page"},{"location":"layouts/circular/#Example","page":"Circular","title":"Example","text":"","category":"section"},{"location":"layouts/circular/","page":"Circular","title":"Circular","text":"Unes = web_of_life(\"M_SD_033\")\nI = initial(CircularInitialLayout, Unes)\nposition!(CircularLayout(), I, Unes)\nplot(I, Unes, aspectratio=1)\nscatter!(I, Unes, bipartite=true)","category":"page"}]
}
