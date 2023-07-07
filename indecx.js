const baseURL = 'http://3.39.191.68:8080/'

//GET 요청 실습
fetch(`${baseURL}api/posts`)
    .then((res) => {
       return res.json()
    })
    .then(data => console.log(data))
    //요청 성공시
    .catch(err => console.log(err))
    //요청 실패시
    .finally()
    //성공실패 상관없이 실행
    
// POST 요청 실습
const option = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "제목 테스트1",
        description: "내용테스트 1"
    })
}

fetch(`${baseURL}api/posts`, option)
.then(res => {
    return res.json()
})
.then(data => {
    console.log(data)
})

const span = document.getElementById('asdf')
