#!/usr/bin/node

import { linkedList } from './classes.js';

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
};

export const graph = function representGraph(startCord, endCord) {
	let queue = [startCord];
	let adjacencyList = [];
	let rules = [
		[2, 1],
		[1, 2],
		[-2, -1],
		[-1, -2],
	];
	while (queue.length != 0) {
		let list = new linkedList();
		let visitVertex = queue[0];
		let childVertexRight = [
			visitVertex[0] + rules[0][0],
			visitVertex[1] + rules[0][1],
		];
		let childVertexLeft = [
			visitVertex[0] + rules[1][0],
			visitVertex[1] + rules[1][1],
		];
		list.addVertex(visitVertex);
		list.addNode(childVertexLeft);
		list.addNode(childVertexRight);
		adjacencyList.push(list);
		queue.splice(0, 1);
		if (
			JSON.stringify(childVertexLeft) != JSON.stringify(endCord) &&
			JSON.stringify(childVertexRight) != JSON.stringify(endCord)
		) {
			queue.push(childVertexLeft, childVertexRight);
		}
	}

	return adjacencyList;
};
