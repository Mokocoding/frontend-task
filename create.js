const baseURL = 'http://3.39.191.68:8080/'

function create(){
    
    const title = document.getElementById("create_title").value
    const content = document.getElementById("create_content").value
    
    postCreate(title, content);

}

function postCreate(title, description){ //게시글 생성부분
    const createData ={
        title : title,
        description : description,
    }
    console.log(createData)



    const option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(createData)
    }

        fetch(`${baseURL}api/posts`, option)
        .then(res => {
            return res.json()
            
        })
        .then(data => {
            console.log(data)
        })
}


