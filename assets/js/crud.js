
// for image previewer

const imgFile = document.getElementById("imgFile");
const previewContainer = document.getElementById("imgPrev");
const previewImage = previewContainer.querySelector(".img-preview_img")
const previewDefaultText = previewContainer.querySelector(".img-preview_default-text");

imgFile.addEventListener("change", function(event){
    const file = event.target.files[0];

    if(file){ //if a file is chosen
        // read the file as a data URL
        const reader = new FileReader();

        // showing the image
        previewDefaultText.style.display = "none";
        previewImage.style.display = 'block';

        //'this' keyword refers to actual file itself
        reader.addEventListener("load", function(){
            previewImage.setAttribute("src", this.result);
        });

        //inserting the read data URL of the file as the img source
        reader.readAsDataURL(file);

    } else{ //if a file is not chosen
        //sets to default CSS values
        previewDefaultText.style.display = null;
        previewImage.style.display = null;
        previewImage.setAttribute("src", "");
    }
});

// for adding category

const dropdown = document.getElementById('myDropdown');
const addOptionDiv = document.getElementById('addOptionDiv');
const addOptionButton = document.getElementById('addOptionButton');
const addOption = document.getElementById("addNewOption");

dropdown.addEventListener('change', () => {
    if (this.value === 'addOption') {
      // Show the div with the option to add a new option
      addOptionDiv.style.display = 'block';
    } else {
      // Hide the div with the option to add a new option
      addOptionDiv.style.display = 'none';
    }
});

addOptionButton.addEventListener('click', () => {
    const newOption = document.getElementById('newOption').value;
    
    // Create a new option element and append it to the dropdown
    const option = document.createElement('option');

    // Makes sure it doesn't contain only spaces
    if (/^\s*$/.test(newOption) === false) {
        option.text = newOption;
        option.value = newOption;
        dropdown.add(option, addOption);
    }
    
    
    // Clear the input field and hide the div
    document.getElementById('newOption').value = '';
    addOptionDiv.style.display = 'none';
});

// for adding products

const saveProductBtn = document.getElementById('save-product-btn');
const prodName = document.querySelector('.prod-name');
const prodQuantity = document.querySelector('.product-quantity');
const prodPrice = document.querySelector('.product-price');
const prodDescription = document.querySelector('.product-description');
const productList = document.querySelector('.product-list');

const handleAdd = () => {
    let status = prodQuantity.value < 20 ? 'Low in Stock' : 'In Stock';

    productList.innerHTML += `
    <tr>
        <th><span class="custom-checkbox">
                <input type="checkbox" id="checkbox1" name="option[]" value="1">
                <label for="checkbox1"></label></th>
        <th class="item-no">${productList.rows.length+1}</th>
        <th class="product-name">${prodName.value}</th>
        <th class="product-category">${dropdown.value}</th>
        <th class="quantity">${prodQuantity.value}</th>
        <th class="price">${prodPrice.value}</th>
        <th class="status">${status}</th>
        <th>
            <a href="../html/product_view.html" class="view">
                <i class="fa-solid fa-eye"></i>
            </a>
            <a href="#editProductModal" class="edit" data-toggle="modal">
                <i class="fa-solid fa-pen"></i>
            </a>
            <a href="#deleteProductModal" class="delete" id="del-btn" data-toggle="modal">
                <i class="fa-solid fa-trash"></i>
            </a>
        </th>
    </tr>
    `

    prodName.value = '';
    prodPrice.value = '';
    dropdown.selectedIndex = 0;
    prodQuantity.value = 1;
    prodDescription.value = '';

    handleDelete();
    handleEdit();
}

//for deleting products
const handleDelete = () => {
    let product, productName;

    const deleteBtn = document.querySelectorAll('.delete');
    const contBtn = document.getElementById('cont-btn');
    const prodToDelete = document.querySelector('.prod-to-delete');

    deleteBtn.forEach(btn => btn.addEventListener('click', () => {
        product = btn.parentElement.parentElement
        productName = product.querySelector('.product-name').innerHTML
        prodToDelete.innerHTML = productName
    }))

    contBtn.addEventListener('click', () => {
        product.remove();
    })
}

// for editing products
const handleEdit = () => {
    //selects the buttons
    const editBtn = document.querySelectorAll('.edit');
    const saveChanges = document.getElementById('save-changes-btn');

    //stores the current item info
    let currItem, name, category, quantity, price;

    //selects each info on the current modal
    const newName = document.querySelector('.edit-name');
    const newCategory = document.querySelector('.edit-category');
    const newQuantity = document.querySelector('.edit-quantity');
    const newPrice = document.querySelector('.edit-price');

    //initializes the current info once edit is clicked
    editBtn.forEach(btn => btn.addEventListener('click', () => {
        currItem = btn.parentElement.parentElement;
        name = currItem.querySelector('.product-name')
        category = currItem.querySelector('.product-category')
        quantity = currItem.querySelector('.quantity')
        price = currItem.querySelector('.price')

        newName.value = name.innerHTML;
        newCategory.value= category.innerHTML;
        newPrice.value = price.innerHTML;
        newQuantity.value = quantity.innerHTML;
    }));

    //saves the changes
    saveChanges.addEventListener('click', () => {
        name.innerHTML = newName.value;
        category.innerHTML = newCategory.value;
        price.innerHTML = newPrice.value;
        quantity.innerHTML = newQuantity.value;
    })
}

//event listeners
document.addEventListener('DOMContentLoaded', handleDelete());
saveProductBtn.addEventListener('click', () => handleAdd());