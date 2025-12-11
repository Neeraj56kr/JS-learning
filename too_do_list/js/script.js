let txt = document.getElementById("text");
function set() {
    if (txt.value === "") {
        alert("Please enter a task");
        return;
    }
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
function del(d) {
    //alert(d)
    let a = JSON.parse(localStorage.getItem("text"))
    a.splice(d,1)
    localStorage.setItem("text", JSON.stringify(a))
    window.location.reload();
}