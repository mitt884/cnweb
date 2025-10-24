const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const addProductBtn = document.getElementById('addProductBtn');
const addProductForm = document.getElementById('addProductForm');
const newProductNameInput = document.getElementById('newProductName');
const productList = document.querySelector('.product-list');

searchBtn.addEventListener('click', function () {
    const keyword = searchInput.value.toLowerCase(); 
    const products = document.querySelectorAll('.product-item');

    products.forEach(product => {
        const name = product.querySelector('.product-name').textContent.toLowerCase();
        if (name.includes(keyword)) {
            product.style.display = ''; // hiện lại
        } else {
            product.style.display = 'none'; // ẩn
        }
    });
});

searchInput.addEventListener('keyup', function () {
    searchBtn.click(); 
});

addProductBtn.addEventListener('click', function () {
    addProductForm.classList.toggle('hidden');
});

addProductForm.addEventListener('submit', function (event) {
    event.preventDefault(); // tránh reload trang

    const newName = newProductNameInput.value.trim();
    if (newName !== '') {
        const newDiv = document.createElement('div');
        newDiv.classList.add('product-item');
        newDiv.innerHTML = `<span class="product-name">${newName}</span>`;
        productList.appendChild(newDiv);

        newProductNameInput.value = ''; // reset input
        addProductForm.classList.add('hidden'); // ẩn form sau khi thêm
    }
});
