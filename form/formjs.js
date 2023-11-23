
function print_log(){
    const inputs = document.getElementById("foodform").elements;
    var newwin = window.open("templ.html");
    newwin.document.write(inputs.outerHTML);
    newwin.print();
    newwin.close();

    const food_name = inputs["Fname"];
    const food_image = inputs["image"];
    const food_desc = inputs["Description"];
    const food_attr = inputs["veg"];

    window.alert(food_name)
}
