# ♞ Knights Travails

This is my solution to the **Knights Travails** project from [The Odin Project](https://www.theodinproject.com/lessons/javascript-knights-travails).  
It finds the **shortest path** for a knight on a chessboard using **Breadth-First Search (BFS)**.


## 📖 Project Description

A knight in chess moves in an **L-shape**: two squares in one direction and one square perpendicular.  
Given a start position and an end position on an `8×8` board, the program computes the **minimum number of moves** needed and returns the path.

Example:

```js
knightMoves([0, 0], [3, 3]);
// Output:
// You made it in 2 moves! Here's your path:
// [0,0]
// [1,2]
// [3,3]
```

## 🛠️ Features

- Generate all valid knight moves from a given position

- Use Breadth-First Search to find the shortest route
 
-  Track visited squares to avoid loops
 
- Reconstruct and return the path from start to finish
 
-  Handle edge cases (like start === end)


## 🎯 Learning Outcomes

- Practice with graph traversal using BFS

- Understand implicit graph modeling (chessboard positions as nodes)

- Gain experience reconstructing paths from parent references

- Apply problem-solving skills to real scenarios

## 🚩 Struggles

One of the trickiest parts of this project was figuring out how to properly represent each square on the board, as well as if I should represent the graph or not since the project mentions ***`"You don’t need to explicitly create a graph object with vertices and edges. Instead, you can think of the graph as implicit.""`***

At first, I was only using arrays like `[x, y]` to keep track of coordinates. This worked for simple movement, but it quickly broke down when I needed to reconstruct the shortest path. Without extra information, I couldn’t easily tell where a square came from or how far away it was from the start.  

After some trial and error, I switched to a **predecessor approach**, where each square corresponds to an object containing:  

- `coordinates` → `[x, y]`  
- `distance` → number of moves from the start  
- `parent` → a reference to the previous square  

This made it much easier to traverse the adjacency list and rebuild the path at the end.  

There was a point where I considered **dropping the adjacency list altogether** (since my initial implementation wasn’t working with just arrays). But after doing some research, I stuck with it, partly to get more familiar with adjacency lists and how they’re used in graph traversal. In the end, that decision paid off, and the solution became a lot more structured and maintainable.


