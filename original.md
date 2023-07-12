"use strict";

const baseURL = 'http://3.39.191.68:8080/'
const posts = {};


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
        document.getElementById("title").innerHTML = res;
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

async function deletedesc () {
    const postid = document.querySelector("#postid").value;

        
    await fetch (`${baseURL}api/posts/${postid}`, {
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



<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="index.js"></script>
    <title>CRUD</title>
</head>
<body>
    <p><input id="title" type="text" placeholder="제목"/></p>
    <p><input id="description" type="text" placeholder="내용"/></p>
    <p><input id="create" type="button" value="게시글 생성" onclick="writedesc()"></p>
    <p><input id="postview" type="button" value="게시글 전체 조회" onclick="postview()"></p>
    <p><input id="postid" type="text" placeholder="id값"/></p>
    <p><input id="postoneview" type="button" value="게시글 단일 조회" onclick="postoneview()"></p>
    <p><input id="postedit" type="button" value="게시글 수정" onclick="editdesc()"></p>
    <p><input id="postdelete" type="button" value="게시글 삭제" onclick="deletedesc()"></p>
</body>

</html>