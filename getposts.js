const baseURL = 'http://3.39.191.68:8080/';


function getPost() {
    const getoption = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    };

    fetch(`${baseURL}api/posts`, getoption)
        .then(res => {
            return res.json()
            
        
        })
        .then(data => {
            console.log(data);
            // data.forEach(post => {
            //     const markup = `<li>${post.id} ${post.title} ${post.description}</li>`;
            //     document.querySelector(`ul`).insertAdjacentHTML('beforeend', markup);
            //     console.log(data)
            })

            
            
        
        .catch(error => {
            console.log(error);
        });
    }




