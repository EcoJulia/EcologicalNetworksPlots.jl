var documenterSearchIndex = {"docs":
[{"location":"#Initial-layouts-1","page":"Index","title":"Initial layouts","text":"","category":"section"},{"location":"#","page":"Index","title":"Index","text":"initial","category":"page"},{"location":"#EcologicalNetworksPlots.initial","page":"Index","title":"EcologicalNetworksPlots.initial","text":"Random disposition of nodes\n\n\n\n\n\nRandom disposition of nodes on two levels for bipartite networks\n\n\n\n\n\nRandom disposition of nodes on trophic levels for food webs\n\n\n\n\n\nRandom disposition of nodes on a circle\n\n\n\n\n\n","category":"function"},{"location":"#","page":"Index","title":"Index","text":"RandomInitialLayout\nBipartiteInitialLayout\nFoodwebInitialLayout\nCircularInitialLayout","category":"page"},{"location":"#EcologicalNetworksPlots.RandomInitialLayout","page":"Index","title":"EcologicalNetworksPlots.RandomInitialLayout","text":"RandomInitialLayout\n\nThis type is used to generate an initial layout, where the nodes are placed at random.\n\n\n\n\n\n","category":"type"},{"location":"#EcologicalNetworksPlots.BipartiteInitialLayout","page":"Index","title":"EcologicalNetworksPlots.BipartiteInitialLayout","text":"BipartiteInitialLayout\n\nThis type is used to generate an initial bipartite layout, where the nodes are placed on two levels, but their horizontal position is random.\n\n\n\n\n\n","category":"type"},{"location":"#EcologicalNetworksPlots.FoodwebInitialLayout","page":"Index","title":"EcologicalNetworksPlots.FoodwebInitialLayout","text":"FoodwebInitialLayout\n\nThis type is used to generate an initial layout, where the nodes are placed on their trophic levels, but their horizontal position is random.\n\n\n\n\n\n","category":"type"},{"location":"#EcologicalNetworksPlots.CircularInitialLayout","page":"Index","title":"EcologicalNetworksPlots.CircularInitialLayout","text":"CircularInitialLayout\n\nThis type is used to generate an initial layout, where the nodes are placed at random along a circle.\n\n\n\n\n\n","category":"type"},{"location":"#Layouts-1","page":"Index","title":"Layouts","text":"","category":"section"},{"location":"#Force-directed-layout-1","page":"Index","title":"Force-directed layout","text":"","category":"section"},{"location":"#","page":"Index","title":"Index","text":"ForceDirectedLayout","category":"page"},{"location":"#EcologicalNetworksPlots.ForceDirectedLayout","page":"Index","title":"EcologicalNetworksPlots.ForceDirectedLayout","text":"ForceDirectedLayout\n\n\n\n\n\n","category":"type"},{"location":"#Circular-layout-1","page":"Index","title":"Circular layout","text":"","category":"section"},{"location":"#","page":"Index","title":"Index","text":"CircularLayout","category":"page"},{"location":"#EcologicalNetworksPlots.CircularLayout","page":"Index","title":"EcologicalNetworksPlots.CircularLayout","text":"CircularLayout\n\nA circular layout has a single field, radius.\n\n\n\n\n\n","category":"type"},{"location":"#Static-layouts-1","page":"Index","title":"Static layouts","text":"","category":"section"},{"location":"#","page":"Index","title":"Index","text":"NestedBipartiteLayout","category":"page"},{"location":"#EcologicalNetworksPlots.NestedBipartiteLayout","page":"Index","title":"EcologicalNetworksPlots.NestedBipartiteLayout","text":"NestedBipartiteLayout\n\nParameters are\n\nalign (whether the two levels should be centered together)\nrelative (whether the two levels should occupy a length equal to their relative richness)\nspread (the distance between the two)\n\nNote that to see the effect of spread, you may have to use aspectratio=1; if not, the spacing between levels will be determined by the dimensions of the plot.\n\n\n\n\n\n","category":"type"},{"location":"#Apply-layout-to-network-1","page":"Index","title":"Apply layout to network","text":"","category":"section"},{"location":"#","page":"Index","title":"Index","text":"position!","category":"page"},{"location":"#EcologicalNetworksPlots.position!","page":"Index","title":"EcologicalNetworksPlots.position!","text":"One iteration of the force-directed layout routine\n\n\n\n\n\nposition!(LA::CircularLayout, L::Dict{K,NodePosition}, N::T) where {T <: AbstractEcologicalNetwork} where {K}\n\nTODO\n\nReferences\n\nMcGuffin, M.J., 2012. Simple algorithms for network visualization: A tutorial. Tsinghua Science and Technology 17, 383–398. https://doi.org/10.1109/TST.2012.6297585\n\n\n\n\n\n","category":"function"},{"location":"examples/#","page":"Examples","title":"Examples","text":"using EcologicalNetworks\nusing EcologicalNetworksPlots\nusing Plots","category":"page"},{"location":"examples/#Static-layouts-1","page":"Examples","title":"Static layouts","text":"","category":"section"},{"location":"examples/#Nested-1","page":"Examples","title":"Nested","text":"","category":"section"},{"location":"examples/#","page":"Examples","title":"Examples","text":"Unes = web_of_life(\"M_SD_033\")\nI = initial(BipartiteInitialLayout, Unes)\nposition!(NestedBipartiteLayout(0.4), I, Unes)\nplot(I, Unes, aspectratio=1)\nscatter!(I, Unes, bipartite=true)","category":"page"},{"location":"examples/#Circular-1","page":"Examples","title":"Circular","text":"","category":"section"},{"location":"examples/#","page":"Examples","title":"Examples","text":"Unes = web_of_life(\"M_SD_033\")\nI = initial(CircularInitialLayout, Unes)\nposition!(CircularLayout(), I, Unes)\nplot(I, Unes, aspectratio=1)\nscatter!(I, Unes, bipartite=true)","category":"page"},{"location":"examples/#Dynamic-layouts-1","page":"Examples","title":"Dynamic layouts","text":"","category":"section"},{"location":"examples/#Force-directed-1","page":"Examples","title":"Force directed","text":"","category":"section"},{"location":"examples/#","page":"Examples","title":"Examples","text":"Umod = web_of_life(\"M_PA_003\")\nI = initial(RandomInitialLayout, Umod)\nfor step in 1:4000\n  position!(ForceDirectedLayout(2.5), I, Umod)\nend\nplot(I, Umod, aspectratio=1)\nscatter!(I, Umod, bipartite=true)","category":"page"},{"location":"examples/#Food-web-layout-1","page":"Examples","title":"Food web layout","text":"","category":"section"},{"location":"examples/#","page":"Examples","title":"Examples","text":"Fweb = simplify(nz_stream_foodweb()[5])\nI = initial(FoodwebInitialLayout, Fweb)\nfor step in 1:4000\n  position!(ForceDirectedLayout(true, false, 2.5), I, Fweb)\nend\nplot(I, Fweb)\nscatter!(I, Fweb)","category":"page"},{"location":"examples/#Node-properties-1","page":"Examples","title":"Node properties","text":"","category":"section"},{"location":"examples/#Color-1","page":"Examples","title":"Color","text":"","category":"section"},{"location":"examples/#","page":"Examples","title":"Examples","text":"Unes = web_of_life(\"M_SD_033\")\nI = initial(BipartiteInitialLayout, Unes)\nposition!(NestedBipartiteLayout(0.4), I, Unes)\nplot(I, Unes, aspectratio=1)\nscatter!(I, Unes, bipartite=true, nodefill=degree(Unes))","category":"page"},{"location":"examples/#Size-1","page":"Examples","title":"Size","text":"","category":"section"}]
}
