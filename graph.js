#!/usr/bin/node

import { linkedList, Node } from './classes.js';

/* 
	PSEUDOCODE: 

	Info:
	- (u,v) in a undirected graph an edge connects u -> v meaning in this
	example we u = coordinate row column meaning u = (u,v) and v = (u,v)
	to a total of ((u,v),(u,v)) 
	- each square of the node is a vertex

	Rules: 
	- two steps forward one step left (two column moves one row move)
	- one steps forward two steps left (one column move two row moves)

	Traversal BFS: 
	- Two queues each for a different path
	- Traverse both
	- Compare which queue has the shortest length 
	- return the one with the shortest length 


	Moves:
	- Cannot go overboard (need to check with debugger)

	Shortest path:
	- Find a way to traverse the graph and its different paths to the endCord.
	- Need to keep track of the paths to not repeat.


	*/

export const knight = function knightMoves(startCord, endCord) {
	let [startRow, startCol] = startCord;
	let [endRow, endCol] = endCord;
	// both arrays cannot be less than 0 or more than 7;
	if (
		startRow < 0 ||
		startCol < 0 ||
		endRow < 0 ||
		endCol < 0 ||
		startRow > 7 ||
		startCol > 7 ||
		endRow > 7 ||
		endCol > 7
	) {
		throw Error('Wrong Coordinates');
	}

	let adjacencyList = graph(startCol, endCord);
};

export const graph = function representGraph(startCord, endCord) {
	debugger;
	let visitedNodes = [];
	let adjacencyList = [];
	let distance = null;
	let node = new Node(startCord, distance);
	let queue = [node];
	while (queue.length != 0) {
		let visitVertex = queue[0];
		let list = new linkedList(
			visitVertex.coordinates,
			visitVertex.distance,
			visitVertex.parent
		);
		let moves = plays(visitVertex.coordinates);

		if (!hasValue(endCord, queue)) {
			for (let i = 0; i < moves.length; i++) {
				if (!hasValue(moves[i], queue) && !hasValue(moves[i], visitedNodes)) {
					let nextNode = new Node(moves[i], distance + 1, visitVertex);
					list.addNode(nextNode);
					queue.push(nextNode);
					if (JSON.stringify(moves[i]) == JSON.stringify(endCord)) break;
				}
			}
		}
		adjacencyList.push(list);
		queue.splice(0, 1);
		distance += 1;
	}
	return adjacencyList;
};

/* create a node that initially goes on to the queue
- pick that node read it and based on its value coordinates make the next ones
- the new nodes created with the parent node will be put on the queue, and the visited one on the tracking one
- use coordinates vale to check duplicates
- stop once node is discovered
*/

const hasValue = function hasSameValue(coordinates, queue) {
	let result = false;
	for (let cord of queue) {
		let cordStr = JSON.stringify(cord.coordinates);
		let coordinatesStr = JSON.stringify(coordinates);
		if (cordStr == coordinatesStr) {
			result = true;
		}
	}
	return result;
};

const plays = function possiblePlays(visitedNode) {
	let rules = [
		[1, 2],
		[1, -2],
		[-1, 2],
		[-1, -2],
		[2, 1],
		[2, -1],
		[-2, 1],
		[-2, -1],
	];
	let rowCord = visitedNode[0];
	let columnCord = visitedNode[1];
	let moves = [];
	for (let i = 0; i < 8; i++) {
		let coordinates = [rowCord + rules[i][0], columnCord + rules[i][1]];
		if (
			coordinates[0] > 0 &&
			coordinates[0] < 8 &&
			coordinates[1] > 0 &&
			coordinates[1] < 8
		) {
			moves.push(coordinates);
		}
	}
	return moves;
};

const search = function searchGraph(graph) {
	let adjacencyList = graph;
	let curr = adjacencyList[0].root;
	let prev = null;

	for (let i = 0; i < 3; i++) {
		debugger;
		prev = curr;
		curr = curr.nextNode;
	}
};
// use tracker to put nodes there and when iterate check if this value was visited
// if yes use nextNode.
//  if it hits null return to root
