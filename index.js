let cart = [
    {
        image :"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb8%2Fd0%2Fb8d06e38d9144ba75166a75aa8e6ec2c25c1569d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        title : "tshirt",
        mrp : "$56"
    },
  
    {
        image :"https://www.jiomart.com/images/product/original/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg",
        title : "shoes",
        mrp : "$56"
    },
    {
        image :"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61Acku41SwL._AC_UL480_FMwebp_QL65_.jpg",
        title : "shoes",
        mrp : "$56"
    },
    {
        image :"https://cdn.shopify.com/s/files/1/0752/6435/products/petrolshirt.jpg?v=1638725574",
        title : "shirt",
        mrp : "$56"
    },
    {
        image :"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71XXRwqp+XL._AC_UL480_FMwebp_QL65_.jpg",
        title : "tshirt",
        mrp : "$56"
    },
    {
        image :"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81gph2lC4+L._AC_UX385_.jpg",
        title : "shirt",
        mrp : "$56"
    },
    {
        image :"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61Acku41SwL._AC_UL480_FMwebp_QL65_.jpg",
        title : "shoes",
        mrp : "$56"
    },

]
// let y = "shoes"

// for(i in cart){
//    if(y == i.title){
//      console.log(i.title)
//    }  
     
// }


// // console.log(cart[1].title)

const input = document.querySelector("#input")
const btn = document.querySelector('#btn')



input.addEventListener('submit',()=>{
 console.log('hi')
})



window.addEventListener('keypress',(m)=>{
  
  if(m.key === "Enter"){
   
    m.preventDefault()
    console.log(m.key)
    
    let y = cart.filter((e)=>{
        let uppercase = input.value.toLowerCase()
        if(uppercase == e.title){
            console.log(e)
            return e
        }
      
    })
    console.log(y)
        console.log(input.value)
        input.value = ""
        minfunction(y)
  }
})
btn.addEventListener('click',()=>{
     
let y = cart.filter((e)=>{
    let uppercase = input.value.toLowerCase()
    if(uppercase == e.title){
        console.log(e)
        return e
    }
  
})
console.log(y)
    console.log(input.value)
    input.value = ""
    minfunction(y)
})


window.addEventListener("DOMContentLoaded",()=>{
    minfunction(cart)

})


let z = "jacket"

const product = document.querySelector('.product-list')


function minfunction(b){
    let f = b.map((e)=>{
        return `    <div class="product">
        <img width="100px" src="${e.image}" alt="">
        <div class="text">
            <h3>${e.title}</h3>
            <p>${e.mrp}</p>
           
        </div>
    </div>`
    
    }).join('')
    product.innerHTML = f
}


// fetch('https://dog.ceo/api/breeds/image/random')
// .then(response=>response.json())
// .then(json => console.log(json))



// .then(response => response.json())
// .then(json=>{
//     console.l
// })
const target = 'delhi'
const api_key = "4cd0eee81294c867b4bc4cfc64e998c5";
const url = `https://api.weatherapi.com/v1/current.json?key=5b27a6ef3547402582e62007222306&q=${target}`;

fetch(url)
.then(response => response.json())
.then(json=>console.log(json.current))
 




