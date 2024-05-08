fetch("items.json")
.then((response) => response.json())
.then((data) => {
    let items_product = document.getElementById("items-product");
    all_products_json = data;

    console.log(data);
    data.forEach((product) => {
    if (product.id) {
        items_product.innerHTML += `
                <div class="col-6 col-md-4 col-lg-3 mb-5 mb-md-5">
                    <div class="product-item"   >
                        <img src="${product.img}" class="img-fluid product-image">
                        <h3 class="product-title">${product.name}</h3>
                        <strong class="product-price">$${product.price}</strong>
                        <a onclick = "addToCart(${product.id}, this)"><span " class="icon-cross">
                            <i   class="fa-solid fa-plus"></i
                        </span></a>
                    </div>
                </div> 
                    `;
    }
    });
});

let countCart = document.getElementById("count-cart");

let all_products_json;
let product_cart = [];

function addToCart(id, btn) {
console.log(all_products_json[2]);
product_cart.push(all_products_json[id]);
localStorage.setItem("id", JSON.stringify(product_cart));

let totalPrice = calculateTotalPrice(product_cart);
localStorage.setItem('totalPrice', totalPrice);

btn.classList.add("active");
swal({
    title: "Added to cart!",
    icon: "success",
    button: "ok",
});
countCart.innerHTML = product_cart.length;
// getCartItems()
}

function calculateTotalPrice(cart) {
    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });
    return total;
}
