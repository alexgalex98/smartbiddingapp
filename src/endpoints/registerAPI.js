export function registerAPI(name, email, password){
    console.log('APOOO',name,email,password)
    return(fetch('http://localhost:3000/register',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
        .then(response=>response.json())
        .then(user=>{
            if(user.id){
                // console.log("Fuck you")
                return user;
            }
        })
        );

}