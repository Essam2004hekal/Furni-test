fetch('items.json')
        .then(response => response.json())
        .then(data =>{

            let items_product = document.getElementById("items-product")
            all_products_json = data

            console.log(data);
            data.forEach(product => {
                if(product.id) {
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
        })
