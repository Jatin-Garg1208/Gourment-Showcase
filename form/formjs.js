
let food_image_enc;
function sub() {
    let Food_Name = document.getElementById("Fname").value;
    let food_attr = document.getElementById("nveg").value;
    let food_desc = document.getElementById("des").value;
    let food_image_raw = document.querySelector("input[type=file]").files[0];
    
    const reader = new FileReader();

    event.preventDefault();
    reader.addEventListener("load", function () {
        // PREVIEWING THE IMAGE USING THE .result
        food_image_enc = reader.result;
        localStorage.setItem("Food_Name", Food_Name);
        localStorage.setItem("food_attr", food_attr);
        localStorage.setItem("food_desc", food_desc);
        localStorage.setItem("food_img", food_image_enc);

        window.open("templ.html", "_self");
    })
    
    if (food_image_raw){
    reader.readAsDataURL(food_image_raw);
    } else {
        localStorage.setItem("Food_Name", Food_Name);
        localStorage.setItem("food_attr", food_attr);
        localStorage.setItem("food_desc", food_desc);
        localStorage.setItem("food_img", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png");

        window.open("templ.html", "_self");
    }
  }
