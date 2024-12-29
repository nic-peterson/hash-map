import { LinkedList } from "./linkedList.mjs";

const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("mouse");

console.log(list.toString());
console.log(
  "list.getHead()",
  list.getHead(),
  "**" + list.getHead().getValue() + "**",
  list.getHead().getNextNode()
);
console.log(
  "list.getTail()",
  list.getTail(),
  "**" + list.getTail().getValue() + "**",
  list.getTail().getNextNode()
);
console.log("list.getSize()", list.getSize());
console.log("list.at(2)", list.at(2), "**" + list.at(2).getValue() + "**");
console.log("list.at(100)", list.at(100));
console.log("list.pop()", list.pop());
console.log(list.toString());
console.log("list.contains('dog')", list.contains("dog"));
console.log("list.contains('turtle')", list.contains("turtle"));
console.log("list.find('dog')", list.find("dog"));
console.log("list.find('turtle')", list.find("turtle"));

console.log("list.insertAt('bird', 2)");
list.insertAt("bird", 2);
console.log(list.toString());

console.log("list.removeAt(2)");
list.removeAt(2);
console.log(list.toString());

console.log("list.toArray()", list.toArray());
