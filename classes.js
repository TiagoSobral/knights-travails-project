export class Node {
	constructor(coordinates, distance = null, parent = null) {
		this.coordinates = coordinates;
		this.distance = distance;
		this.parent = parent;
	}
}

export class linkedList {
	edges = [];
	constructor(node) {
		this.vertex = node;
	}

	addNode(node) {
		this.edges.push(node);
	}
}
