Graph Notes 

What are Graphs?
    Graphs are collections of related data. They're like trees, except connections can be made
    from any node to any other node, even forming loops.
    The nodes in a graph are called vertexes (or vertices or verts), and the connections 
    between the verts are called edges.
    And edge denotes a relationship or linkage between the two verts.

What can they represent?
    Graphs can represent any kind of multiway relational data
    This could be a collection of cities and linking roads
    It could be a collection of computers on a network
    It could be a population of people who know each other
    It could represent trade relationships between nations

Definitions:
    Directed/Undirected Graphs 
        If the edges are "one way" (have an arrow pointing one way), the graph is said to be a directed graph.
        If there are no arrows, the edges are bidirectional and the graph is an undirected graph

    Cyclic/Acyclic Graphs 
        If a cycle can be formed (e.g. you can follow the edges and arrive again at an already-visted vert), the graph is cyclic.
        Otherwise it is acyclic

    Weighted Graphs 
        Graphs with values (weights) associated with the edges are called weighted graphs.

        The meaning of the weight is dependent on the type of graph. A graph of reod network segments might have weight represent the length of the road. 
        The higher the total weight of a route on the graph, the longer the trip is. The weights can be used to help decide if a particular route should be 
        chosen over another.

        Weights can be further modified. For example, if one were building a bicycle map, roads with bad car traffic or very steep uphills could be given unnaturally large weights 
        so a routing algorithm would be unlikely to take them.
        (This is how Google Maps avoids freeways when you ask it for walking directions.)

    Directed Acyclic Graphs (DAGs) 
        A directed acyclic graph (DAG) has a number of applications

        -wiki Exerpt-
            DAGs can model many differnt kinds of information. A spreadsheet can be modeled as a DAG, with a vertex for each cell and an edge whenever the formula in one cell uses the value from another; a topological ordering of this DAG can be used to update all cell values when the spreadsheet is changed. Similarly, topological orderings of DAGs can be used to order the compilation operations in a makefile. The program evaluiation and review technique uses DAGs to model the milestones and activities of large human projects, and schedule these projects to use as little total time as possible. Combinational logic blocks in electronic circuit design, and the operations in dataflow programming languages, involve acyclic networks of processing elements. DAGs can also represent collections of events and their influence on each other, either in a probabilistic structure such as a Bayesian network or as a record of historical data such as family trees or the version histories of distributed revision control systems. DAGs can also be used as a compact representation of sequence data, such as the directed acyclic word graph representation of a collection of strings, or the binary decision diagram representation of sequences of binary choices.
        -end-

        It's notable that git uses a DAG to represent commits. A commit can have a child commit, or more than one child commit (in the case of a branch). A child could come from one parent commit, or from two (in the case of a merge). But theres no way to go back and form a repeating loop in the git commit hierachy.

Practice Challenge:
    Draw examples of the following:
        Undirected graph of 4 verts. done
        Directed graph of 5 verts. done
        Cyclic directed graph of 6 verts. done
        DAG of 7 verts. done

Learn to describe what breadth-first search (BFS) is an its uses, and can manually run a sample BFS
    Overview
        When searching a graph, one of the approaches is called 'breadth first search'. This explores the graph outward in rings of ever increasing distance from the starting vertex.
        The algorithm never attempts to expore a vert that it either has explored or is exploring    

    Uses of BFS (Breadth First Search)
        Pathfinding, Routing
        Find neighbor nodes in a P2P network like Bittorrent
        Web crawlers
        Finding people n connections away on a social site
        Find neighboring locations on a graph
        Broadcasting in a network
        Cycle detection in a graph
        Finding "Connected Components"
        Solving a number of theoretical graph problems

    Colored Vertexes
        As the graph is explored, it's useful to color verts as you arrive at them and as you leave them behind as "already searched".
        Commonly, unvisited verts are white, verts whos neighbords are being explored are gray,and verts with no unexplored neighbors are black.

    Keeping Track of What We Need to Explore
        In BFS, it's useful to track which nodes we need to follow up on. For example, in the diagram above, when we get to node 2, we need to explore node 3 and 4 in the future, in order.
        We can track that by adding neighbors to a queue, and then exploring the verts in the queue.

    Pesudocode for BFS
    ```
        BFS(graph, startVert):
            for v of graph.vertexes:
                v.color = white

            startVert.color = gray
            queue.enqueue(startVert)

            while ~queue.isEmpty():
                u = queue[0] // Peek at head of queue, but do not dequeue!

                for v of u.neighbors:
                    if v.color == white:
                        v.color = gray
                        queue.enqueue(v)

                queue.dequeue()
                u.color = black
    ```

    Code for Graph-Matrix
    ```
        class vertex {
            constructor(value) {
                this.value = value;
            }
        }

        class Graph {
            constructor(rows, cols) {
                this.matrix = new Array(rows);

                for (let i in rows) {
                    this.matrix[i] = new Array(cols).fill(0);
                }
            }

            connectVertex(a, b) {
                this.matrix[a][b] = 1;
            }
        }
    ```

    Code for Graph-List
    ```
        class Edge {
            constructor(destination) {
                this.destination = destination;
            }
        }

        class Vertex {
            constructor(value) {
                this.value = value;
                this.edges = [];
            }
        }

        class Graph {
            constructor() {
                this.vertexes = [];
            }
        }
    ```