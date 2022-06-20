// Add your code here
function submitData(name, email) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name,
            email
        })
    }

    return fetch("http://localhost:3000/users", configurationObject)
    .then( (resp) => resp.json())
    .then((data) => { (data)

    document.body.innerHTML = data ["id"]
    })

    .catch((error) => {(error)
        document.body.innerHTML = error.message
    });

}