window.onload = function() {
    let Food_Name = localStorage.getItem("Food_Name");
    let food_attr = localStorage.getItem("food_attr");
    let food_desc = localStorage.getItem("food_desc");
    let food_img = localStorage.getItem("food_img");

    
    let fname = document.getElementById("Food_Name");
    let Desc = document.getElementById("Desc");
    let food_image = document.getElementById("food_img");

    fname.innerHTML = Food_Name;
    Desc.innerHTML = food_desc;
    food_image.src = food_img;

    localStorage.removeItem("Food_Name");
    localStorage.removeItem("food_attr");
    localStorage.removeItem("food_desc");
    localStorage.removeItem("food_img");
}