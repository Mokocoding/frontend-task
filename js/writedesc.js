"use strict";

const baseURL = 'http://3.39.191.68:8080/'


//       console.log(posttitle,postdesc,postbtn);

function writedesc() {
const posttitle = document.querySelector("#title"),
      postdesc = document.querySelector("#description");

const req = {
    title: posttitle.value,
    description: postdesc.value,
};

fetch(`${baseURL}api/posts`, {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(req),
})
.then((res) => res.json())
.then((res) => {
    console.log(res);
})
}

function postview() {
    let element = document.querySelector('#title');

    fetch(`${baseURL}api/posts`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json"
        },
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
    for (let i = 0; i < `${baseURL}api/posts`.length; i++) {
        // document.write(`<h1>${res}</h1>`);
        element.insertAdjacentHTML("beforeend", `${baseURL}api/posts`.i);
    }
    })
}

{/* <a href = "../board/postoneview.html"></a></a> */}