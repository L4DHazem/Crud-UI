var productnameinput = document.getElementById("productname");

var productpriceinput = document.getElementById("productPrice");

var productcategory = document.getElementById("productcategory");

var description = document.getElementById("Comments");

var imageinput = document.getElementById("imageinput");

var searchinputelement = document.getElementById("search");

var btnAdd = document.getElementById("btnAdd");

var btnUpdate = document.getElementById("btnUpdate");

/*---------------- one----------*/

var currentIndex = 0;

var productlist;

if (localStorage.getItem("productcontainer") != null) {
    productlist = JSON.parse(
        localStorage.getItem("productcontainer")
    );
} else {
    productlist = [];
}


/*--------------- two-----*/


function addproduct() {

    var product = {

        name: productnameinput.value,

        price: productpriceinput.value,

        category: productcategory.value,

        desc: description.value,
    };

    productlist.push(product);

    console.log(productlist);

    displaydata();

    localStorage.setItem("productcontainer", JSON.stringify(productlist));

    clearform();
}

/*---------- three-----*/

function clearform() {

    productnameinput.value = null

    productpriceinput.value = null

    productcategory.value = null

    description.value = null
}

/*----------five----*/

function displaydata() {

    var cartona = " ";

    for (var i = 0; i < productlist.length; i++) {

        cartona += `

           <div class="col-md-4 mb-3">
                <div class="card" style="width: 18rem;">
                    <img src="./images/2112080.jpeg" class="card-img-top" alt="${productlist[i].name}">
                    <div class="card-body text-center">
                        <span>Index: ${i}</span>
                        <h3 class="card-title">${productlist[i].name}</h3>
                        <p class="card-text">Price: ${productlist[i].price}</p>
                        <p class="card-text">Category: ${productlist[i].category}</p>
                        <p class="card-text">Description: ${productlist[i].desc}</p>
                        <button onclick="deletpeoduct(${i})" type="button" class="btn btn-danger">Delete</button>
                        <button  onclick="setupdateinfo(${i})" type="button" class="btn btn-warning">Update</button>
                    </div>
                </div>
            </div>

        `
    }

    document.getElementById("display").innerHTML = cartona
}

displaydata();

/*-----------four---*/


function searchinput() {

    var term = searchinputelement.value;

    cartona = " "

    for (var i = 0; i < productlist.length; i++) {

        if (productlist[i].name.toLowerCase().includes(term.toLowerCase())) {

            cartona += `

    <div class="col-md-4 mb-3">
                <div class="card" style="width: 18rem;">
                    <img src="./images/2112080.jpeg" class="card-img-top" alt="${productlist[i].name}">
                    <div class="card-body text-center">
                        <span>Index: ${i}</span>
                        <h3 class="card-title">${productlist[i].name}</h3>
                        <p class="card-text">Price: ${productlist[i].price}</p>
                        <p class="card-text">Category: ${productlist[i].category}</p>
                        <p class="card-text">Description: ${productlist[i].desc}</p>
                        <button onclick="deletpeoduct(${i})" type="button" class="btn btn-danger">Delete</button>
                        <button  onclick="setupdateinfo(${i})" type="button" class="btn btn-warning">Update</button>
                    </div>
                </div>
            </div>
    
    `;
        }
    }

    document.getElementById("display").innerHTML = cartona;

}

/*------------ six---*/

function deletpeoduct(index) {

    productlist.splice(index, 1);

    localStorage.setItem("productcontainer", JSON.stringify(productlist));

    displaydata();
}

/*---------------seven----*/

function setupdateinfo(index) {

    currentIndex = index;

    productnameinput.value = productlist[index].name || "";
    productpriceinput.value = productlist[index].price || "";
    productcategory.value = productlist[index].category || "";
    description.value = productlist[index].desc || "";

    btnAdd.classList.add("d-none");

    btnUpdate.classList.remove("d-none");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/*--------8---*/

function updateproduct() {

    var product = {
        name: productnameinput.value,

        price: productpriceinput.value,

        category: productcategory.value,

        desc: description.value
    };

    productlist.splice(currentIndex, 1, product);

    localStorage.setItem("productcontainer", JSON.stringify(productlist));

    displaydata();

    clearform();

    btnAdd.classList.remove("d-none");

    btnUpdate.classList.add("d-none");
}

/*----------FINISH------*/



