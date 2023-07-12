function postview() {

    location.href = "../board/postoneview.html";
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