window.addEventListener("load", () =>{

window.addEventListener("load", init);

var init = function () {
	createShop()
}

var createShop = function () {
	var shop = document.getElementById("boutique");
	for(var i = 0; i < catalog.length; i++) {
		shop.appendChild(createProduct(catalog[i], i));
	}
}
var createProduct = function (product, index) {
	// build the div element for product
	var block = document.createElement("div");
	block.className = "produit";
	// set the id for this product
	block.id = index + "-" ;
	// build the h4 part of 'block'
	block.appendChild(createBlock("h2", product.name));
	
	// /!\ should add the figure of the product... does not work yet... /!\ 
	block.appendChild(createFigureBlock(product));

	// build and add the div.description part of 'block' 
	block.appendChild(createBlock("div", product.description, "description"));
	// build and add the div.price part of 'block'
	block.appendChild(createBlock("div", product.price, "prix"));
    //build the size category
	// build and add control div block to product element
	block.appendChild(createOrderControlBlock(product, index));
	return block;
    }

    var createBlock = function (tag, content, cssClass) {
        var element = document.createElement(tag);
        if (cssClass != undefined) {
            element.className =  cssClass;
        }
        element.innerHTML = content;
        return element;
    }

    var createOrderControlBlock = function (product, index) {
        var control = document.createElement("div");
        control.className = "controle";
    
        // create input quantity element
        var input = document.createElement("input");
        input.id = index + '-' + inputIdKey;
        input.type = "number";
        input.value = "0";
        input.min = 0;
        input.max= 9;
    
        // add input to control as its child
        control.appendChild(input);
        
        // create order button
        var button = document.createElement("button");
        button.className = 'commander';
        button.id = index + "-" + orderIdKey;
        // add control to control as its child
        control.appendChild(button);
    
            input.addEventListener('click', () => {
                if ((input.value >= 1) && (input.value <= 9)){
                        button.style.opacity = "1";
                        console.log("tu pourras cliquer");
                } else {
                        button.style.opacity = "0.25";
                        console.log("tu pourras pas cliquer");
                }
            }
        )
            button.addEventListener('click', () => {
                if ((input.value >= 1) && (input.value <= 9)){
                    addCart(product, index, input.id, input.value);
                    input.value=0;
                } else {
                    input.value=0;
                }
            }
        )
        // the built control div node is returned
        return control;
    }

    var createFigureBlock = function (product) {
        return createBlock("figure", "<img src=" + product.image + " alt="+ product.name + ">", );
    }

})