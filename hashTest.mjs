import { HashMap } from "./hashMap.mjs";

const map = HashMap();

// Test set() and get()
console.log("\n--- Testing set() and get() ---");
map.set("apple", "red");
map.set("banana", "yellow");
console.log('get("apple"):', map.get("apple")); // should return "red"
console.log('get("banana"):', map.get("banana")); // should return "yellow"
console.log('get("orange"):', map.get("orange")); // should return null

// Test has()
console.log("\n--- Testing has() ---");
console.log('has("apple"):', map.has("apple")); // should return true
console.log('has("orange"):', map.has("orange")); // should return false

// Test length()
console.log("\n--- Testing length() ---");
console.log("Initial length:", map.length()); // should return 2

// Test remove()
console.log("\n--- Testing remove() ---");
map.remove("apple");
console.log('After removing "apple"');
console.log('has("apple"):', map.has("apple")); // should return false
console.log("New length:", map.length()); // should return 1

// Test clear()
console.log("\n--- Testing clear() ---");
map.clear();
console.log("Length after clear:", map.length()); // should return 0
console.log('has("banana"):', map.has("banana")); // should return false

// Test keys()
console.log("\n--- Testing keys() ---");
map.set("dog", "brown");
map.set("cat", "black");
map.set("bird", "blue");
console.log("Keys:", map.keys()); // should return ["dog", "cat", "bird"]

// Test values()
console.log("\n--- Testing values() ---");
console.log("Values:", map.values()); // should return ["brown", "black", "blue"]

// Test entries()
console.log("\n--- Testing entries() ---");
console.log("Entries:", map.entries()); // should return [["dog", "brown"], ["cat", "black"], ["bird", "blue"]]

// Test updating existing key
console.log("\n--- Testing update of existing key ---");
map.set("dog", "white");
console.log('get("dog"):', map.get("dog")); // should return "white"
console.log("Length after update:", map.length()); // should still be 3
