var btn = document.getElementById("btn");
var text = document.getElementById("text");

btn.onclick = () => {
    loadXMLDoc("http://localhost:49250/api/str", (response) => {
        text.innerText = JSON.parse(response);
    });
};