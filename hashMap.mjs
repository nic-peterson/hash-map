import { LinkedList } from "./linkedList.mjs";

export const HashMap = (loadFactor = 0.75, capacity = 16) => {
  let size = 0;
  if (capacity < 16) {
    capacity = 16;
  }
  let buckets = Array.from({ length: capacity }, () => LinkedList());

  const hash = (key) => {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode = (hashCode * 31 + key.charCodeAt(i)) >>> 0;
    }
    return Math.abs(hashCode) % buckets.length;
  };

  const set = (key, value) => {
    if (size / buckets.length >= loadFactor) {
      resize();
    }
    if (
      key === null ||
      key === undefined ||
      key === "" ||
      typeof key !== "string"
    ) {
      throw new Error("Key cannot be null, undefined, or empty string");
    }
    if (
      value === null ||
      value === undefined ||
      value === "" ||
      typeof value !== "string"
    ) {
      throw new Error("Value cannot be null, undefined, or empty string");
    }

    const index = hash(key);
    checkIndex(index);
    // Check if key already exists in the bucket
    const bucket = buckets[index];
    let found = false;

    let current = bucket.getHead();
    while (current !== null) {
      if (current.getValue().key === key) {
        current.getValue().value = value; // Update existing value
        found = true;
        break;
      }
      current = current.getNextNode();
    }

    if (!found) {
      bucket.append({ key, value });
      size++;
    }
  };

  const resize = () => {
    const newCapacity = buckets.length * 2;
    const oldBuckets = buckets;
    buckets = Array.from({ length: newCapacity }, () => LinkedList());
    size = 0;

    oldBuckets.forEach((bucket) => {
      let current = bucket.getHead();
      while (current !== null) {
        const { key, value } = current.getValue();
        set(key, value);
        current = current.getNextNode();
      }
    });
  };

  // We might also add get, remove, has, etc. in a similar style:
  const get = (key) => {
    const index = hash(key);
    checkIndex(index);
    const bucket = buckets[index];

    let current = bucket.getHead();
    while (current !== null) {
      if (current.getValue().key === key) {
        return current.getValue().value;
      }
      current = current.getNextNode();
    }
    return null;
  };

  const checkIndex = (index) => {
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
  };

  const has = (key) => {
    return get(key) !== null;
  };

  const remove = (key) => {
    const index = hash(key);
    checkIndex(index);
    const bucket = buckets[index];

    // Find the node's position in the linked list
    let currentNode = bucket.getHead();
    let listIndex = 0;

    while (currentNode !== null) {
      if (currentNode.getValue().key === key) {
        bucket.removeAt(listIndex);
        size--;
        return true;
      }
      currentNode = currentNode.getNextNode();
      listIndex++;
    }

    return false;
  };

  const length = () => size;

  const clear = () => {
    buckets = Array.from({ length: capacity }, () => LinkedList());
    size = 0;
  };

  const keys = () => {
    const result = [];
    for (const bucket of buckets) {
      let current = bucket.getHead();
      while (current !== null) {
        result.push(current.getValue().key);
        current = current.getNextNode();
      }
    }
    return result;
  };

  const values = () => {
    const result = [];
    for (const bucket of buckets) {
      let current = bucket.getHead();
      while (current !== null) {
        result.push(current.getValue().value);
        current = current.getNextNode();
      }
    }
    return result;
  };

  const entries = () => {
    const result = [];
    for (const bucket of buckets) {
      let current = bucket.getHead();
      while (current !== null) {
        const { key, value } = current.getValue();
        result.push([key, value]);
        current = current.getNextNode();
      }
    }
    return result;
  };

  return {
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
};
