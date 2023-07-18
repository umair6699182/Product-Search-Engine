const search = () => {

    const input = document.getElementById("search-item").value.toUpperCase();
    const productlist = document.getElementById("product-item");
    const product = document.querySelectorAll(".product");
    const pname = document.getElementsByTagName("h2");


    for (var i = 0; i < pname.length; i++) {

        let match = product[i].getElementsByClassName('item')[0];
        if (match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(input) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }



    }
}