import { Node } from "./node.mjs";

export const LinkedList = () => {
  let head = null;
  let tail = null;
  let size = 0;

  const getHead = () => head;

  const getTail = () => tail;

  const getSize = () => size;

  const prepend = (value) => {
    const node = Node(value);
    if (head === null) {
      head = node;
      tail = head;
    } else {
      node.setNextNode(head);
      head = node;
    }
    size++;
  };

  const append = (value) => {
    const node = Node(value);
    if (head === null) {
      head = node;
      tail = node;
    } else {
      tail.setNextNode(node);
      tail = node;
    }
    size++;
  };

  const at = (index) => {
    if (index < 0 || index >= size) {
      console.log(`Index ${index} is out of bounds`);
      return null;
    }
    let currentNode = head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.getNextNode();
    }
    return currentNode;
  };

  const pop = () => {
    if (size === 0) {
      console.log("List is empty");
      return null;
    }
    const lastNode = tail;
    const newTail = at(size - 2);
    newTail.setNextNode(null);
    tail = newTail;
    size--;
    return lastNode;
  };

  const toString = () => {
    let currentNode = head;
    let result = "";
    while (currentNode !== null) {
      result += " ( " + currentNode.getValue() + " ) ->";
      currentNode = currentNode.getNextNode();
    }
    result += " null";
    return result;
  };

  const contains = (value) => {
    if (size === 0) {
      console.log("List is empty");
      return false;
    }
    let currentNode = head;
    while (currentNode !== null) {
      if (currentNode.getValue() === value) {
        return true;
      }
      currentNode = currentNode.getNextNode();
    }
    return false;
  };

  const find = (value) => {
    if (size === 0) {
      console.log("List is empty");
      return null;
    }
    let currentNode = head;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.getValue() === value) {
        return index;
      }
      currentNode = currentNode.getNextNode();
      index++;
    }
    return null;
  };

  const insertAt = (value, index) => {
    if (index < 0 || index > size) {
      console.log(`Index ${index} is out of bounds`);
      return null;
    }
    const node = Node(value);
    const previousNode = at(index - 1);
    node.setNextNode(previousNode.getNextNode());
    previousNode.setNextNode(node);
    size++;
  };

  const removeAt = (index) => {
    if (index < 0 || index >= size) {
      console.log(`Index ${index} is out of bounds`);
      return null;
    }

    let removedNode;

    // Special case: removing first node
    if (index === 0) {
      removedNode = head;
      head = head.getNextNode();
      if (size === 1) {
        tail = null;
      }
    }
    // All other cases
    else {
      const previousNode = at(index - 1);
      removedNode = previousNode.getNextNode();
      previousNode.setNextNode(removedNode.getNextNode());

      // Update tail if removing last node
      if (index === size - 1) {
        tail = previousNode;
      }
    }

    size--;
    return removedNode;
  };

  const toArray = () => {
    const array = [];
    let current = head;
    while (current) {
      array.push(current.getValue());
      current = current.getNextNode();
    }
    return array;
  };

  return {
    getHead,
    getTail,
    getSize,
    at,
    prepend,
    append,
    toString,
    pop,
    contains,
    find,
    insertAt,
    removeAt,
    toArray,
  };
};
