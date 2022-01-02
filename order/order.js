var dropDown = document.querySelector(".dropdown");
var dropBtn = document.querySelector(".dropbtn");
var dropDownContent = document.querySelector(".display-content");
var checked = document.querySelectorAll(".fa-star");
var list = document.querySelectorAll(".list")
var removeItems = document.querySelectorAll(".removeFromCart");
var notify = document.querySelector(".shopping");
var checkOut = document.querySelector(".primaryBtn");
var orderNumberDisplay = document.querySelector(".orderNumber");
var items = document.querySelector(".bestOffersBG");
var numInput = document.querySelectorAll(".orderQuantity");
var addToCart =document.querySelectorAll(".addToCart");
var shoppingCartShow = false;
var dropDownShow = false;


dropDown.addEventListener("click", function() {
    // dropDownContent.classList.toggle("display-content")
    if( dropDownShow){
        dropDownContent.classList.remove("display-content")
         this.innerHTML= `<button class="dropbtn">view less <i class="fa fa-arrow-right"></i></button>`
         this.style.marginLeft = "27.8em";
    }
    else{
        dropDownContent.classList.add("display-content");
        this.innerHTML= `<button class="dropbtn">view All <i class="fa fa-arrow-down"></i></button>`
    }
    dropDownShow= !dropDownShow;
})

function activeLink(){
    list.forEach((items)=>
    items.classList.remove("active")
    );
    this.classList.add("active")
}
list.forEach((items)=>
items.addEventListener("click",activeLink)
);

function star(){
    for(var i = 0; i < checked.length; i++){
        checked[i].addEventListener("click",function(){
            this.classList.toggle("checked");
            // alert("clicked");
        });
    }
}
star();

removeBtn();

// inputQuantity to increase and decrease total;
function inputQuantity(){
    for(var i = 0; i < numInput.length; i++) {
        numInput[i].addEventListener("change", function(){
            if(isNaN(this.value) || this.value <= 0){
                this.value = 1;
            }
            cartTotalUpdate();
        })
    }   
};

;

function removeBtn(){
    for(var i = 0; i < removeItems.length; i++){
        removeItems[i].addEventListener("click", function(){
            this.parentElement.remove();
            cartTotalUpdate();
       });
     }
}


//updating cart total
 function cartTotalUpdate(){
 var cartItems = document.querySelector(".cartItems");
 var cartRows = cartItems.getElementsByClassName("items");
 var Total = 0;
    for(var i = 0; i < cartRows.length; i++){
        var cartRowItems = cartRows[i];
        var orderPrice = cartRowItems.getElementsByClassName("orderPrice")[0];
        var orderQuantity = cartRowItems.getElementsByClassName("orderQuantity")[0];
        //converts order price to integer and removes the dollar sign
        var price = parseFloat(orderPrice.innerHTML.replace("$", ""));
        var quantity = orderQuantity.value; 
        Total = Total + (price * quantity);
  };
   document.getElementsByClassName("Total")[0].innerHTML = "$" + Total;
};

cartTotalUpdate()




//notify for when items purchased
notify.addEventListener("click", function(){
    if( shoppingCartShow){
        document.querySelector(".caustomerDiv").style.display = "none";
    }
    else{
        document.querySelector(".caustomerDiv").style.display = "block";
    }
    shoppingCartShow = !shoppingCartShow;
 //   this.classList.toggle("hide");
 //  refactoring####
//  document.querySelector(".caustomerDiv").classList.toggle("hide");
})

//checkout and pay 
checkOut.addEventListener("click", function(){
    alert("Thanks for purchasing!, your food will be delivered soon");
    var cartItems = document.getElementsByClassName("cartItems")[0];
    while(cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild);
        var A = Number(notify.getAttribute("data-count")|| 0);
        notify.setAttribute("data-count", A =0);
        notify.classList.remove("zero");
    }
    cartTotalUpdate();
    // var add = Number(notify.getAttribute("data-count")|| 0);
    // notify.setAttribute("data-count", add +1);
    // notify.classList.add("zero");
})

// adding items to cart
// when plus sign is clicked
//adding items to cart list
function toCart(){
    //check if addtoCart is less than the class length
   for(var i = 0; i < addToCart.length; i++){
       //then iterate over and add an eventListener
     addToCart[i].addEventListener("click", function(){
        var add = Number(notify.getAttribute("data-count")|| 0);
        notify.setAttribute("data-count", add +1);
        notify.classList.add("zero");
        //adding items to cart
        var items = this.parentElement.parentElement.parentElement.parentElement
        var itemTitle = items.getElementsByClassName("itemTitle")[0].innerText;
        var price = items.getElementsByClassName("price")[0].innerText;
        var imgSrc = items.getElementsByClassName("food")[0].src;
        // console.log(itemTitle, price, imgSrc);
        addItemsToCart(itemTitle, price, imgSrc);
        removeBtn();
        cartTotalUpdate();
        // removeBtn();
        // inputQuantity();
    });
    // removeBtn();
    // cartTotalUpdate();
    // inputQuantity();
 };
 removeBtn();
 inputQuantity()
};
toCart();

// function itemsInCart(){
//     var cartItemNames = cartItems.getElementsByClassName("itemTitle");
//     for(var i = 0; i < cartItemNames.length; i++) {
//        if(cartItemNames[i].innerText == itemTitle) {
//            console.log(cartItemNames[i]);
//        }
//    }
// }

function addItemsToCart(itemTitle, price, imgSrc){
 var cartRow = document.createElement("div");

    //adds a class to the selected div
    //  cartRow.className = "caustomerDiv";
    //  cartRow.classList.add("");
    //##selects where to append the created div##
 var cartItems = document.getElementsByClassName("cartItems")[0];
    var cartItemNames = cartItems.getElementsByClassName("itemTitle");
    for(var i = 0; i < cartItemNames.length; i++) {
       if(cartItemNames[i].textContent === itemTitle) {
           alert("added");
        //    var f = Number(notify.getAttribute("data-count")|| 0);
        //    notify.setAttribute("data-count", f Number("data-count"));
         //make data count same as items in cart
           return;
       }else{
           alert("no items in cart");
           return;
       }
   }
    var cartRowContents = 
    `
        <div class="hgroup2 capitalize items">
                <button class="removeFromCart " >
                    <i class="fa fa-times "></i>
                </button>
                <span >
                    <img src=${imgSrc} alt="">
                </span>
                <p class="itemTitle title">${itemTitle}</p>
                <input value="1" type="number" name="orderQuantity" id="orderQuantity" class="orderQuantity">
                <span class="orderPrice" >${price}</span>
        </div>
     `

 cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow.getElementsByClassName("removeFromCart")[0].addEventListener("click", function(){
            // alert("removed");
            var D = Number(notify.getAttribute("data-count")|| 0);
            notify.setAttribute("data-count", D -1);
            // notify.classList.add("zero");
            this.parentElement.remove();
            cartTotalUpdate();
        });
 cartRow = document.getElementsByClassName("orderQuantity")[i].addEventListener("change", function(){
                if(isNaN(this.value) || this.value <= 0){
                    this.value = 1;
                }
                cartTotalUpdate();
    })
    // toCart();
    inputQuantity();
}
// cartTotalUpdate();
// inputQuantity();