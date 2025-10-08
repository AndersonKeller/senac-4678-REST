//http://localhost:5130
const baseUrl = "http://localhost:3001"

const headers ={
            "content-type":	"application/json; charset=utf-8"
        }
async function getUsers(){
    const response = await fetch(`${baseUrl}/users`)
    const users = await response.json()

}
getUsers()

function init(){
        const form = document.querySelector("form")
    form.addEventListener("submit",(event)=>{
        event.preventDefault()
        createUser()
        // updateUser()
        // removeUser()
    })
}
init()
async function createUser(){
    const name = document.querySelector("#name")
    const email = document.querySelector("#email")
    const usuario = {
        name:name.value,
        email:email.value
    }
    const response = await fetch(`${baseUrl}/users`,{
        method:"POST",
        headers:headers,
        body:JSON.stringify(usuario)
    })
    console.log(response,"response")
    const users = await response.json()
    console.log(users,"users")
}

async function updateUser(){
      const name = document.querySelector("#name")
    const email = document.querySelector("#email")
    const usuario = {
        name:name.value,
        email:email.value
    }
    const response = await fetch(`${baseUrl}/users/1`,{
        method:"PUT",
         headers:headers,
        body:JSON.stringify(usuario)
    })
    const user = await response.json()
    console.log(user,"user atualizado")
    
}
async function removeUser(){
    const response = await fetch(`${baseUrl}/users/1`,{
        method:"DELETE"
    })
    console.log(response,"response delete")
}