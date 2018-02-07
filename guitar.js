var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            myobject = JSON.parse(this.responseText);
            console.log(myobject);
            localStorage.current_json = JSON.stringify(myobject);
        }
    };
    xhttp.open("GET", "guitardata.json", true);
    xhttp.send();
    i = 0;
    a = document.getElementById("101");
    b = document.getElementById("product_div");
    c = document.getElementById("shipping_div");
    d = document.getElementById("cust_div");

        a.src = myobject.allProducts[i].image_path;
        b.innerHTML = myobject.allProducts[i].product_description;
        c.innerHTML = myobject.allProducts[i].shipping_details;
        d.innerHTML = myobject.allProducts[i].customer_reviews;


    function next() {
        if (i < a.src.length){
            guitar_data();
            i++;
        }
        else{
            alert("This is the last image");
        }
        localStorage.setItem("current_index", i);
    }

    function prev() {
        if (i > 0){
            i--;
            guitar_data();
        }
        else {
            alert("This is the last image");
        }
        localStorage.setItem("current_index", i);

    }




function toggle_btn() {
    var element = document.getElementById("product_div");
    element.classList.toggle("toggle_style");

}
function toggle_shipping() {
    var element = document.getElementById("shipping_div");
    element.classList.toggle("toggle_style");

}
function toggle_cust() {
    var element = document.getElementById("cust_div");
    element.classList.toggle("toggle_style");

}