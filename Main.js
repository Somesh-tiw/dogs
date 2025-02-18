
const fetchdata=( async()=>{
    let data = await fetch("https://dog.ceo/api/breeds/image/random")
    let result = await data.json()
    let image=document.querySelector('.img')
    console.log(result)
    image.src=result.message
    
 
})

fetchdata()



