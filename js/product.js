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
    btn.classList.add("active");
    swal({
        title: "Added to cart!",
        icon: "success",
        button: "ok",
    });
    countCart.innerHTML = product_cart.length;
    
    // getCartItems()
    }
    totalValue = localStorage.getItem("totalValue");

    function getCartItems() {
    let items_c = "";
    product_cart = JSON.parse(localStorage.getItem("id"));
    if (product_cart) {
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
                `;
        });
        items_in_cart.innerHTML = items_c;

        removeProduct();
    }
    };
    getCartItems()


