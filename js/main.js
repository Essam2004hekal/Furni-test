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

    countCart = document.querySelector(".count-item");
    countCart.innerHTML = JSON.parse(localStorage.getItem("id")).length;
    // form validation send email
    function SendMail() {
    let params = {
        name: document.getElementById("f_name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    emailjs
        .send("service_l7kdz47", "template_va47ber", params)
        .then(alert(" Email Sent!!"));
    }

// Add to cart
let items_in_cart = document.querySelector(".items_in_cart");

// Remove Product
    function removeProduct(param) {
    Array.from(document.querySelectorAll(".remove")).map((item) => {
        item.addEventListener("click", () => {
            console.log(item.dataset.id);
            const newData = JSON.parse(localStorage.getItem("id")).filter((e) => {
            return item.dataset.id != e.id;
        });
        localStorage.setItem("id", JSON.stringify(newData));
        item.parentNode.parentNode.remove();
        });
    });
    }

let total_price = document.getElementsByClassName("total-price");
let totalValue = localStorage.getItem("totalValue");
document.getElementsByClassName("total-price").innerHTML = totalValue;
// console.log(totalValue);

// getCartItems();
