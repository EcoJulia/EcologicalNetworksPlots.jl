"""
    NodePosition

Represents the position and velocity of a node during force directed layouts. The
fields are `x` and `y` for position, and `vx` and `vy` for their relative
velocity.
"""
mutable struct NodePosition
    x::Float64
    y::Float64
    vx::Float64
    vy::Float64
end

"""
    BipartiteInitialLayout

This type is used to generate an initial bipartite layout, where the nodes are
placed on two levels, but their horizontal position is random.
"""
struct BipartiteInitialLayout end

"""
    FoodwebInitialLayout

This type is used to generate an initial layout, where the nodes are
placed on their trophic levels, but their horizontal position is random.
"""
struct FoodwebInitialLayout end


"""
    RandomInitialLayout

This type is used to generate an initial layout, where the nodes are
placed at random.
"""
struct RandomInitialLayout end
