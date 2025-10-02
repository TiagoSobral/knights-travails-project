export class Node {
	constructor(coordinates, distance = null, parent = null) {
		this.coordinates = coordinates;
		this.distance = distance;
		this.parent = parent;
	}
}

export class linkedList {
	constructor(vertex, distance, parent) {
		this.vertex = vertex;
		this.distance = distance;
		this.parent = parent;
	}

	addNode(node) {
		let curr = this;
		if (curr.nextNode == undefined) {
			curr.nextNode = node;
		} else {
			while (curr.nextNode != undefined) {
				curr = curr.nextNode;
			}
			curr.nextNode = node;
		}
	}
}
