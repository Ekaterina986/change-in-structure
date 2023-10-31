const listDec = document.getElementsByClassName('product__quantity-control_dec');
for (decEl of listDec) {
    decEl.addEventListener('click', dec);
}
function dec(e) {
    const decEl = e.currentTarget;
    let count = Number(decEl.nextElementSibling.textContent);
    if (count > 1) {
        count--;
    } else {
        count = 1;
    }
    decEl.nextElementSibling.textContent = count;
}

const listInc = document.getElementsByClassName('product__quantity-control_inc');
for (incEl of listInc) {
    incEl.addEventListener('click', inc);
}
function inc(e) {
    const incEl = e.currentTarget;
    let count = Number(incEl.previousElementSibling.textContent);
    count++;
    incEl.previousElementSibling.textContent = count;
}

const cartEl = document.getElementsByClassName('cart__products')[0];
const listAdd = document.getElementsByClassName('product__add');
for(addEl of listAdd) {
    addEl.addEventListener('click', add);
}
function add(e) {
    const addEl = e.currentTarget;
    const value = Number(addEl.previousElementSibling.getElementsByClassName('product__quantity-value')[0].textContent);
    const src = addEl.parentElement.parentElement.previousElementSibling.src;
    const id = addEl.parentElement.parentElement.parentElement.dataset.id;

    const cartItem = cartEl.querySelectorAll(`[data-id~="${id}"]`);
    if (cartItem[0]) {
        const countEl = cartItem[0].getElementsByClassName('cart__product-count')[0];
        const newValue = Number(countEl.textContent) + value;
        countEl.textContent = newValue;
    } else {
        const html = `
        <div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src="${src}">
            <div class="cart__product-count">${value}</div>
        </div>`;
        cartEl.innerHTML += html;
    }
}