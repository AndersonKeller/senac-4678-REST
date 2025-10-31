const baseUrl = "http://localhost:3001"
const headers ={
            "content-type":	"application/json; charset=utf-8"
        }
async function getItemsCardapio() {
    const response = await fetch(`${baseUrl}/users`)
    console.log(response,"response")
    const resJson = await response.json()

    console.log(resJson,"resjosn")
}
getItemsCardapio()

async function createItem() {
    const obj = {
        titulo:"Abajur",
        descricao:"",
        preco:200,
        possuiPreparo:true,
        imagem:"",
        tipo:""
    }
    const response = await fetch(`${baseUrl}/users`,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:headers
    })
    const resJson = await response.json()
    console.log(resJson,"resJson")
}       
createItem()