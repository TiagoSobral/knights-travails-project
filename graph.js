#!/usr/bin/node

import { linkedList, Node } from './classes.js';

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
	debugger;
	let adjacencyList = graph(startCord, endCord);
	let lastIndex = adjacencyList[adjacencyList.length - 1];
	let distance = lastIndex.distance;
	let path = [lastIndex.vertex];
	let curr = lastIndex.parent;
	while (curr != null) {
		path.unshift(curr.coordinates);
		curr = curr.parent;
	}

	console.log(`You did it in ${distance} moves! Here's your path:`);
	for (let i = 0; i < path.length; i++) {
		console.log(path[i]);
	}
};

export const graph = function representGraph(startCord, endCord) {
	let visitedNodes = [];
	let adjacencyList = [];
	let node = new Node(startCord);
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
					let nextNode = new Node(
						moves[i],
						visitVertex.distance + 1,
						visitVertex
					);
					list.addNode(nextNode);
					queue.push(nextNode);
					if (JSON.stringify(moves[i]) == JSON.stringify(endCord)) break;
				}
			}
		}
		adjacencyList.push(list);
		queue.splice(0, 1);
	}
	return adjacencyList;
};

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
