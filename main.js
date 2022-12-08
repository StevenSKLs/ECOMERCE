const loaderComponent = () =>{
  const loader = document.getElementById("loader")
  
  setTimeout(()=>{
loader.classList.add("hide")
  }, 2000)
}

const btnTheme = document.getElementById( "theme-btn" )
const body = document.body
const cartBtnOpen = document.getElementById("cart-btn")
const cartBtnClose = document.getElementById("close-cart")
const cartContainer = document.getElementById("cart-container")

const menuBtnOpen = document.getElementById("btn-menu")
const menuBtnClose = document.getElementById("close-menu")
const menuContainer = document.getElementById("menu-container")
const closeMenu = document.getElementById("hello1")
const closeMenu2 = document.getElementById("hello2")

const featur = document.getElementById("features-section")
const cartProductsSelected = document.getElementById("cart-content")
const counter = document.getElementById("cart-counter")
const conteo2 = document.getElementById("cartItems")
const sumarItem = document.getElementById("sumar")





document.addEventListener("DOMContentLoaded",( ) => {
  loaderComponent()
})

const darkThemeChange = () => {

    if( btnTheme.classList.contains("bx-sun") ){
        btnTheme.classList.replace("bx-sun", "bx-moon")
    }else{
        btnTheme.classList.replace("bx-moon", "bx-sun")
    }
    
    body.classList.toggle( "dark" )
}


btnTheme.addEventListener( "click", () => darkThemeChange())

cartBtnOpen.addEventListener( "click", () => cartContainer.classList.remove("hide") )
cartBtnClose.addEventListener( "click", () => cartContainer.classList.add("hide")  )


menuBtnOpen.addEventListener( "click", () => menuContainer.classList.remove("hide") )
menuBtnClose.addEventListener( "click", () => menuContainer.classList.add("hide")  )

closeMenu.addEventListener( "click", () => menuContainer.classList.add("hide"))
closeMenu2.addEventListener( "click", () => menuContainer.classList.add("hide"))


function featcart(product) {
  const contenedorCart = document.createElement("div")

  contenedorCart.className = "features-info"
  
  contenedorCart.innerHTML = `
  <div class="features-image">
    <img src="${product.image} " alt="">
  </div>

  <div class="features-texts">
    <p><span>$ ${product.price}
    </span>| Stock: ${product.quantity} <br>
    ${product.name}</p>
    <button id="${product.id}">+</button>
  </div>
  `
  featur.append(contenedorCart)
  
}
const items = [
  {
    id: 1,
    name: 'Hoodies',
    price: 14.00,
    image: './images/featured1.png',
    category: 'hoodies',
    quantity: 10
  },
  {
    id: 2,
    name: 'Shirts',
    price: 24.00,
    image: './images/featured2.png',
    category: 'shirts',
    quantity: 15
  },
  {
    id: 3,
    name: 'Sweatshirts',
    price: 24.00,
    image: './images/featured3.png',
    category: 'sweatshirts',
    quantity: 20
  }
]
//desde aqui problemas


const addcarito = []

items.forEach( product => 
    {featcart(product)
      const addCart = document.getElementById(product.id)
      addCart.addEventListener("click", () => {
      agregarAlCarrito(product.id)
    })

  })

 



function addProduct(prodId) {
  let itemAdd = addcarito.find( (item) => item.id === prodId )
    
    if( itemAdd && itemAdd.quantity > itemAdd.qs ){
        let index = addcarito.indexOf( itemAdd )
        addcarito[index].qs++
    }
    if (itemAdd == undefined){
        const itemSelected = items.find( item => item.id === prodId )
        itemSelected.qs = 1
        addcarito.push( itemSelected )
}
}

const agregarAlCarrito = (prodId) => {
    
    addProduct(prodId);
    actualizarCart();
    counter.innerText = addcarito.length;
}



function createCardProductSelected(productSelected){
  const cardsInCart = document.createElement("div");
  cardsInCart.className = "cards_in_cart"
  cardsInCart.id = "cards_in_cart"

  

  cardsInCart.innerHTML = `
      <img src="${productSelected.image}" alt="producto seleccionado">
      <div class="cic_description">
          <h4>${productSelected.name}</h4>
          <p>Stock ${productSelected.quantity} |<span id="cic_precio">$ ${productSelected.price}</span></p>
          <h5 id="s_total">Sub Total: $ ${productSelected.price * productSelected.qs} </h5>
          <div class="resumen">
              <div>
                  <button onclick="restar(${productSelected.id})">-</button>
                  <p>${productSelected.qs}</p>
                  <button id="sumar" onclick="sumar(${productSelected.id})">+</button>
              </div>
              <i class='bx bx-trash' onclick="eliminarDelCarrito(${productSelected.id})"></i>
          </div>
      </div>`

  cartProductsSelected.append(cardsInCart)
  
}

const actualizarCart = () => {
  cartProductsSelected.innerHTML= ""
  
  addcarito.forEach(productSelected =>{
      createCardProductSelected(productSelected)
  });
}
const eliminarDelCarrito = (prodId) => {
  const x = addcarito.find( (prod) => prod.id === prodId)
  const index = addcarito.indexOf(x)
  addcarito.splice(index, 1)
  actualizarCart()
  counter.innerHTML = addcarito.length
}

const sumar = (prodId) => {
  const sumItem = addcarito.find( (prod) => prod.id === prodId)
  const index = addcarito.indexOf(sumItem)
  if (sumItem.quantity > sumItem.qs){
      addcarito[index].qs++
  }

  actualizarCart()
  counter.innerHTML = addcarito.length
}

const restar = (prodId) => {
  const resItem = addcarito.find( (prod) => prod.id === prodId)
  const index = addcarito.indexOf(resItem)
  if (resItem.qs > 1){
      
      addcarito[index].qs--
  } else {
      addcarito.splice(index, 1)
  }
  actualizarCart()
  counter.innerHTML = addcarito.length
}

const contadorItems = document.getElementById("cartItems")



// const cartProducts = [ 
//   {
//     id: 1,
//     name: 'Hoodies',
//     price: 14.00,
//     image: 'assets/images/featured1.png',
//     category: 'hoodies',
//     quantity: 10
//   },
//   {
//     id: 2,
//     name: 'Shirts',
//     price: 24.00,
//     image: 'assets/images/featured2.png',
//     category: 'shirts',
//     quantity: 15
//   },
//   {
//     id: 3,
//     name: 'Sweatshirts',
//     price: 24.00,
//     image: 'assets/images/featured3.png',
//     category: 'sweatshirts',
//     quantity: 20
//   }
//    ]


// function addProduct( itemId ){

//     let productSelected = cartProducts.find( product => product.id === itemId )


//     if( productSelected ){

//         //Condicion para saber si aun pueden seleccionar mas productos de ese tipo
//         let index = cartProducts.indexOf( productSelected )

//         cartProducts[index].quantitySelected++
        
//     }else{
        
//         const item = items.find( item => item.id === itemId )
        
//         item.quantitySelected = 1
//         cartProducts.push( item )
//     }



//     showProducts()
// }


// function showProducts (){
//     const content = document.getElementById( "cart-content" )

//     let fragment = ""
//     cartProducts.forEach( product => {
//         fragment += `
//         <section>
//             <h2>${product.name}</h2>
//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eveniet provident optio dolorem? Est accusantium quos consequuntur aliquam quia ad?
//             </p>
//         </section>
//         `
//     } )

//     content.innerHTML = fragment
// }


//document -> documento

//window -> la ventana del navegador

const nav = document.querySelector("nav")

window.addEventListener( "scroll", () =>{
    if(scrollY >= 50){
        nav.classList.add("scroll-bg")
    }else{
        nav.classList.remove("scroll-bg")
    }
} )


const getLocalStorag = () => {
  let cart = window.localStorage.getItem("cart")
  if (cart){
      cart = JSON.parse( cart )
      console.log(cart);
  } else {
      window.localStorage.setItem("cart", JSON.stringify([]))
  }
}