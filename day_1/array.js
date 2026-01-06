const backend = ["Node", "Express", "MongoDB"];
console.log (backend)

backend.push("Python");
console.log(backend)

const isNodePresent = (backend.includes("Node"));
console.log(isNodePresent)

backend.sort();
console.log(backend)

backend.map((item) => {
    console.log("learning" + item)
    console.log(backend)
});