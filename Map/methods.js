let map = new Map();
map.set("a", 1);
map.set("b", 2);

console.log("map ", map);

console.log(map.size);

console.log(map.get("b"));

console.log(map.has("a"));

console.log(map.delete("a"));

map.set("c", 3);

for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}

for (let [key, value] of map) {
  console.log(key, " ", value);
}
