let increment = document.querySelectorAll(".increment");
let decrement = document.querySelectorAll(".decrement");
let quantity =document.querySelectorAll(".quantity");
let remove = document.querySelectorAll(".remove");
let price = document.querySelectorAll(".Price");
let total = document.querySelectorAll(".total");
let coupon = document.getElementById("coupon");
// let tableRow = document.querySelectorAll(".table-row");

count = 1
// Add Quantity
increment.forEach((btn, index)=> {
    btn.addEventListener("click" , ()=>{
        console.log(quantity[index])
        if (quantity[index].innerHTML < 9) {
                    count++;
                quantity[index].innerHTML = count;
                } else {
                    alert('max')
                }
    })
    document.getElementById("subTotal").innerHTML = localStorage.getItem("totalValue")
})

increment.forEach((btn, index)=> {
    btn.addEventListener("click" , ()=>{
        console.log(Number(price[index].innerHTML))
        let total = Number(quantity[index].innerHTML) * Number(price[index].innerHTML);
        localStorage.setItem('totalValue', total)
        console.log(total)
        document.getElementById("subTotal").innerHTML = total
    })
})




// Decrement Quantity
decrement.forEach((btn, index)=> {
    btn.addEventListener("click" , ()=>{
        if (quantity[index].innerHTML > 1) {
                    count--
                    quantity[index].innerHTML = count;
                } else {
                    alert('min')
                }
    })
})



// Discount
let sale = Number(document.getElementById("subTotal").innerHTML)
function discount() {
    if (coupon.value === "mec_20") {
        document.getElementById("after-disc").innerHTML = sale - (sale * (20 /100)) ; 
        console.log(document.getElementById("after-disc").innerHTML = sale - (sale * (20 /100)));
    }
}

countCart = document.querySelector('.count-item')
countCart.innerHTML = JSON.parse(localStorage.getItem("id")).length;