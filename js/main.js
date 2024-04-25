/* Initialize Swiper */ 
    var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
    },
    });




// form validation send email 
function SendMail() {
    let params = {
    name :document.getElementById("f_name").value,
    email :document.getElementById("email").value,
    message  :document.getElementById("message").value
}
    emailjs.send('service_l7kdz47', 'template_va47ber',  params).then( alert(" Email Sent!!"))
}




// Add to cart
let countCart = document.getElementById("count-cart")

let all_products_json;

let items_in_cart = document.querySelector(".items_in_cart");
var product_cart = [];
function addToCart(id, btn) {

    product_cart.push(all_products_json[id]);
    localStorage.setItem('id', JSON.stringify(product_cart), );
    btn.classList.add("active")
    alert('`Added Done`')
    // console.log(product_cart)
    countCart.innerHTML = product_cart.length
}


// Remove Product
function removeProduct(param) {
    Array.from(document.querySelectorAll(".remove")).map(item => {
    item.addEventListener("click", () => {
        console.log(item.dataset.id)
        const newData = JSON.parse(localStorage.getItem("id")).filter((e) => {
        return item.dataset.id != e.id
        })
        localStorage.setItem("id", JSON.stringify(newData))
        item.parentNode.parentNode.remove()
    })
    })
}



let total_price = document.getElementsByClassName("total-price")
let totalValue = localStorage.getItem('totalValue');
document.getElementsByClassName("total-price").innerHTML = totalValue
// console.log(totalValue);

function getCartItems() {
let items_c = "";
product_cart = JSON.parse(localStorage.getItem("id"));
if (product_cart != null) {
    product_cart.map((item) => {
        items_c += `
        <tr class="table-row">
            <td class="w-25"><img src="${item.img}" class="w-50" alt="" /></td>
            <td class="name">  ${item.name}</td>
            <td class="Price">${item.price}</td>
            <td>
            <div class="d-flex align-items-center justify-content-evenly">
                <button class="border-0 fs-5 increment">+</button>
                    <span class="border btn fs-5 m-0 quantity"> 1 </span>
                <button class=" border-0 fs-5 fw-bold decrement">-</button>
            </div>
            </td>
            <td class="total-price" id="total_price_id">${totalValue}</td>
            <td>
            <button class="btn remove" data-id="${item.id}">×</button>
        </td>
        </tr>
        `
        
    });
    items_in_cart.innerHTML = items_c;
    
    removeProduct();
    } 
}
getCartItems();

