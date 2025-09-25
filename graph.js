#!/usr/bin/node

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
	let queue = [startCord];
	let queueTwo = [...queue];
	let endCordStr = JSON.stringify(endCord);

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

	let i = 0;
	while (
		JSON.stringify(queue[queue.length - 1]) != JSON.stringify(endCord) &&
		JSON.stringify(queueTwo[queueTwo.length - 1]) != JSON.stringify(endCord)
	) {
		let visitVertexQueueOne = queue[i];
		let discoverVertexQueueOne = [
			visitVertexQueueOne[0] + 2,
			visitVertexQueueOne[1] + 1,
		];
		queue.push(discoverVertexQueueOne);
		let visitVertexQueueTwo = queue[i];
		let discoverVertexQueueTwo = [
			visitVertexQueueTwo[0] + 1,
			visitVertexQueueTwo[1] + 2,
		];
		queueTwo.push(discoverVertexQueueTwo);
		i += 1;
	}

	if (
		JSON.stringify(queue[queue.length - 1]) == endCordStr &&
		JSON.stringify(queueTwo[queueTwo.length - 1]) == endCordStr
	) {
		console.log(queue, queueTwo);
	} else if (JSON.stringify(queue[queue.length - 1]) == endCordStr) {
		console.log(queue);
	} else {
		console.log(queueTwo);
	}
};
