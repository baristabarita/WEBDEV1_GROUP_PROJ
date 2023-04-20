
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

saveProductBtn.addEventListener('click', () => {

    let status = prodQuantity.value < 20 ? 'Low in Stock' : 'In Stock';

    productList.innerHTML += `
    <tr>
        <th><span class="custom-checkbox">
                <input type="checkbox" id="checkbox1" name="option[]" value="1">
                <label for="checkbox1"></label></th>
        <th class="item-no">#</th>
        <th class="product-name">${prodName.value}</th>
        <th class="product-category">${dropdown.value}</th>
        <th class="quantity">${prodQuantity.value}</th>
        <th class="price">${prodPrice.value}</th>
        <th class="status">${status}</th>
        <th>
            <a href="../html/product_view.html" class="view">
                <i class="fa-solid fa-eye"></i>
            </a>
            <a href="../html/product_edit.html" class="edit">
                <i class="fa-solid fa-pen"></i>
            </a>
            <a href="#deleteProductModal" class="delete" id="del-btn" data-toggle="modal">
                <i class="fa-solid fa-trash"></i>
            </a>
        </th>
    </tr>
    `
    deleteFunction();
})

//for deleting products

const deleteFunction = () => {
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

document.addEventListener('DOMContentLoaded', deleteFunction());

// for editing products

const editBtn = document.querySelectorAll('.edit');
