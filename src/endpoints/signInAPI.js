export function signInAPI(password, email){
    console.log(email)
    return(fetch('http://localhost:3000/signin',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email: email,
                password: password
            }
            )
        })
        .then(response=>response.json())
        .then(user=>{
            if(user.id){
                console.log("Fuck you")
                return user;
            }
        })
        // .then((data) => {
        //     // console.log(data)
        //     return data;
        //   }
        );

}