let increment = document.querySelectorAll(".increment");
let decrement = document.querySelectorAll(".decrement");
let quantity =document.querySelectorAll(".quantity");
let remove = document.querySelectorAll(".remove");
let price = document.querySelectorAll(".Price");
let total_in_row = document.querySelectorAll(".total-price");
let coupon = document.getElementById("coupon");
let subTotal = document.getElementById("subTotal")


// Add Quantity
increment.forEach((btn, index)=> {
    btn.addEventListener("click" , ()=>{
        // console.log(quantity[index])
        count = Number(quantity[index].innerHTML)
        if (quantity[index].innerHTML < 9) {
                count++;
                quantity[index].innerHTML = count;
                let total = Number(quantity[index].innerHTML) * Number(price[index].innerHTML);
                // localStorage.setItem('totalValue', total)
                total_in_row[index].innerHTML = total
                // calc SubTotal
                let totalSum = 0;
                for (let i = 0; i < total_in_row.length; i++) {
                totalSum += Number(total_in_row[i].innerHTML);
                }
                subTotal.innerHTML = totalSum;
                // Discount When increment
                let sale = Number(document.getElementById("subTotal").innerHTML)
                    if (coupon.value === "mec_20") {
                        document.getElementById("after-disc").innerHTML = sale - (sale * (20 /100)) ; 
                    }
        } else {
            alert('max')
        }
    })
    
    document.getElementById("subTotal").innerHTML = localStorage.getItem("totalValue")
})



let totalPrice = localStorage.getItem('totalPrice');
subTotal.innerHTML = totalPrice;



// Decrement Quantity
decrement.forEach((btn, index)=> {
    btn.addEventListener("click" , ()=>{
        count = Number(quantity[index].innerHTML)
        if (quantity[index].innerHTML > 1) {
                count--
                quantity[index].innerHTML = count;
                let total = Number(quantity[index].innerHTML) * Number(price[index].innerHTML);
                // localStorage.setItem('totalValue', total)
                total_in_row[index].innerHTML = total
                // Calc SubTotal
                let totalSum = 0;
                for (let i = 0; i < total_in_row.length; i++) {
                totalSum += Number(total_in_row[i].innerHTML);
                }
                subTotal.innerHTML = totalSum;
                // Discount When decrement
                let sale = Number(document.getElementById("subTotal").innerHTML)
                if (coupon.value === "mec_20") {
                document.getElementById("after-disc").innerHTML = sale - (sale * (20 /100)) ; 
                }
            } else {
                alert('min')
            }
    })
})




// Discount
let sale = Number(document.getElementById("subTotal").innerHTML)
function discount() {
    if (coupon.value === "mec_20") {
        document.getElementById("after-disc").innerHTML = sale - (sale * (20 /100)); 
    }
}

countCart = document.querySelector('.count-item')
countCart.innerHTML = JSON.parse(localStorage.getItem("id")).length;