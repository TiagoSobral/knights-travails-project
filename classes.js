class Node {
	constructor(coordinates, nextNode = null) {
		this.coordinates = coordinates;
		this.nextNode = nextNode;
	}
}

export class linkedList {
	vertex;
	root;
	addVertex(coordinates) {
		this.vertex = coordinates;
	}
	addNode(coordinates) {
		let curr = this.root;
		if (curr == undefined) {
			this.root = new Node(coordinates);
		} else {
			while (curr.nextNode != null) {
				curr = curr.nextNode;
			}
			curr.nextNode = new Node(coordinates);
		}
	}
}
