function search() {
    let input = document.getElementById('serachbar').value.toLowerCase();
    let x = document.getElementsByClassName('menu');
    for (var i = 0; i < x.length; i++) {
        // If the text is within the card...
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = 'none';
        }
        else {

            x[i].style.display = 'inline-block';
        }
    }
}


for (let el of document.getElementsByClassName('menu')) {
    el.addEventListener('click', addToCart)
}

function addToCart() {
    const cartItem = document.getElementById("cartItem")
    const randomId = Math.random() * 100000000000000000
    cartItem.innerHTML += `
    <div id="${randomId}" style="background-color: rgb(209, 210, 210); display: flex; justify-content: space-between; border-radius: 10px; margin: 5px; padding: 5px;">
        <div style="padding: 5px; width: 100px;">${this.childNodes[1].innerText}</div >
        <div class = "price"style="padding: 5px; width: 70px;" id = "price-in-castbox">${this.childNodes[3].innerText}</div >
        <div style=" padding: 5px;">1</div>
        <button class="button is-danger" style="background-color: rgb(255, 255, 255);; border-radius: 10px;
        padding: 5px;" onclick="delItem('${randomId}')">X</button></div >
    </div >
        `
    calculateTotalPrice()
}

function delItem(e) {
    document.getElementById(e).remove()
    calculateTotalPrice()
}


function calculateTotalPrice() {
    const cartItems = document.querySelectorAll("#cartItem > div");
    let totalPrice = 0;

    for (let i = 0; i < cartItems.length; i++) {
        const price = cartItems[i].querySelector(".price").textContent;
        const quantity = cartItems[i].querySelectorAll("div")[2].textContent;
        totalPrice += price * quantity;
    }
    document.getElementById("total").innerHTML =
        '<div style="background-color: rgb(209, 210, 210);  padding: 5px; border-radius: 10px;">Total Price</div>' + totalPrice + " Bath";
}

const menus = document.querySelectorAll(".menu");
menus.forEach(menu => {
    const pic = menu.querySelector(".pic-menu");
    pic.addEventListener("mouseover", () => {
        if (menu.querySelector(".name").style.display === 'none') {
            menu.querySelector(".name").style.display = 'block';
        } else {
            menu.querySelector(".name").style.display = 'none';
        }
    });
});

// const menus = document.querySelectorAll(".menu");
// menus.forEach(menu => {
//     const pic = menu.querySelector(".pic-menu");
//     pic.addEventListener("mouseover", () => {
//         const name = menu.querySelector(".name").textContent;
//         const price = menu.querySelector(".price").textContent;
//         alert(`Name: ${name}\nPrice: ${price}`);
//     });
// });