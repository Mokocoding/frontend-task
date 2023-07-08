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
    fetch(`${baseURL}api/posts`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json"
        },
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
    })
}

function postoneview() {
    const postid = document.querySelector("#postid").value

    fetch(`${baseURL}api/posts/${postid}`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json"
        },
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
    })
}

function editdesc() {
    const postid = document.querySelector("#postid").value,
          posttitle = document.querySelector("#title"),
          postdesc = document.querySelector("#description");

    const req = {
    title: posttitle.value,
    description: postdesc.value,
    };
        
    fetch(`${baseURL}api/posts/${postid}`, {
        method: "PATCH",
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

function deletedesc() {
    const postid = document.querySelector("#postid").value;

        
    fetch (`${baseURL}api/posts/${postid}`, {
         method: "DELETE",
         headers: {
         "Content-Type": "application/json"
         },
         })
         .then((res) => res.json())
         .then((res) => {
         console.log(res);
         })
        

}