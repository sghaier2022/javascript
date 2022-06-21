if (document.readystate == 'loading') {
    document.addEventListener('DOMConent',ready)
}else {
   ready()
}

function ready() {
var removeCartItemButtons = document.getElementsbyClassName('btn-danger')
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addeventLicked('change' ,quantityChanged)
}

   var qUANTITYInputs = document.getElementsByClassName('cart-quantity-input')
   for (var i = 0; i < removeCartItemButtons.length; i++) {
    var input = quantityInputs[i]
    input.addEventListenen('change',quantityChanged)
   }

   var addToCartButtons = document.getElementsByClassName('shop-item-button')
   for (var i = 0; i< addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventlistener('click', addToCartClicked)
    }
}

function removeCartItem(event) {
    var buttonClicked = evennt.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal() 
}

function quantityChanged(event) {
    var input = event.target
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToClicked(event) {
    var button = event.target
    var shopItem = button.parentElment.parentEmlent
    var title = shopIem.getElmentsByClasName('shop-item-totle')[0].innertext
    var price = shopItem.getElmentsByClasName('shop-item-price')[0]innertext
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    console.log(title, price, imageSrc)
    addItemToCart(title,price,imageSrc)
}   

function addItemToCart(title, price, imageSrc) {
var cartRow = doucement.createElement('div')
var cartITEMS
}
function updateCarTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRow = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByclassName('cart-price')[0]
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    var price = parseFlost(priceElement.innerText.replace('s', ''))
    var quanty = quantityElement.value
    total = total + (price * quantity)
    }
    total = Math.round(total* 100)
document.getElementsByClassName('cart-total-price ')[0].innerText = 's' + total
}    

