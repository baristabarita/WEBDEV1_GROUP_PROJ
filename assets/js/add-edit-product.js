
/* Choosing Img File Section START */

const imgFile = document.getElementById("imgFile");
const previewContainer = document.getElementById("imgPrev");
const previewImage = previewContainer.querySelector(".img-preview_img")
const previewDefaultText = previewContainer.querySelector(".img-preview_default-text");

imgFile.addEventListener("change", function(){
    const file = this.files[0];

    if(file){ //if a file is chosen
        //read the file as a data URL
        const reader = new FileReader();

        //showing the image
        previewDefaultText.style.display = "none";
        previewImage.style.display = "block";

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

/* Choosing Img File Section END */