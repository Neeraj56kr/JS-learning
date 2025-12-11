let txt = document.getElementById("text");
function set() {
    let ar = JSON.parse(localStorage.getItem("text")) || []
    ar.push(txt.value)
console.log(ar);

localStorage.setItem("text",JSON.stringify(ar))
}
function show() {
    let ar = JSON.parse(localStorage.getItem("text"))
    ar.forEach((b) => {
        let c = document.createElement("li")
        c.innerHTML = `${b} <button onclick="del()">Delete</button>`;
        console.log(c);
        document.getElementById("list").appendChild(c)
    });
}
show();
function del() {
    alert(d)
}