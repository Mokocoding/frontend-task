'use strict';
const baseURL = 'http://3.39.191.68:8080/';
// const posts = require("./writedesc");

function postview() {
    fetch(`${baseURL}api/posts`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json"
        },
    })
    .then((res) => res.json())
    .then((res) => {
        $("#postlist").append(<a href = "../board/postoneview.html"><h3 id = "title">"#title"</h3></a>);
    })
}