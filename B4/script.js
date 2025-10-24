const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const addProductBtn = document.getElementById('addProductBtn');
const addProductForm = document.getElementById('addProductForm');
const cancelBtn = document.getElementById('cancelBtn');
const errorMsg = document.getElementById('errorMsg');
const newName = document.getElementById('newName');
const newPrice = document.getElementById('newPrice');
const newDesc = document.getElementById('newDesc');
const productList = document.getElementById('productList');

searchBtn.addEventListener('click', function () {
    const keyword = searchInput.value.toLowerCase();
    const products = document.querySelectorAll('.product-item');
    products.forEach(product => {
        const name = product.querySelector('.product-name').textContent.toLowerCase();
        product.style.display = name.includes(keyword) ? '' : 'none';
    });
});

searchInput.addEventListener('keyup', function () {
    searchBtn.click();
});

addProductBtn.addEventListener('click', function () {
    addProductForm.classList.toggle('hidden');
});

cancelBtn.addEventListener('click', function () {
    addProductForm.classList.add('hidden');
    addProductForm.reset();
    errorMsg.textContent = '';
});

addProductForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameValue = newName.value.trim();
    const priceValue = newPrice.value.trim();
    const descValue = newDesc.value.trim();

    if (nameValue === '' || priceValue === '' || isNaN(priceValue) || Number(priceValue) <= 0) {
        errorMsg.textContent = 'Vui lòng nhập tên và giá hợp lệ!';
        return;
    }

    errorMsg.textContent = '';

    const newItem = document.createElement('div');
    newItem.className = 'product-item';
    newItem.innerHTML = `<span class="product-name">${nameValue}</span>
                         <p class="price">${priceValue}đ</p>
                         <p>${descValue}</p>`;

    productList.prepend(newItem);

    addProductForm.reset();
    addProductForm.classList.add('hidden');
});
