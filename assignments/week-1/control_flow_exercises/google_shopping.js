var data = require("./products.json")

1) Number of Available Items

for (i=0; i<data.items.length; i++){
	console.log(i)
}

var counter= 0;

for (i=0; i<data.items.length; i++){
	if(data.items[i].kind ==="shopping#product"){
		counter++
	}
}
console.log(counter);


2) Actual Items Available

var avalItems= '';

for (i=0; i<data.items.length; i++){
	if(data.items[i].product.inventories[0].availability === "inStock"){
		avalItems += (data.items[i].product.title) + ' ';
	}
}

console.log(avalItems);



3.) Find all items with more than one image link.

var morethan1= [];

for (i=0; i<data.items.length; i++){
	if(data.items[i].product.images.length > 1){
	morethan1.push(data.items[i].product.title)
	}
}

console.log(morethan1.join(' '));


4.) Find all `canon` products in the items (careful with case sensitivity).

var canonProducts= [];

for (i=0; i<data.items.length; i++){
	var currentItem= data.items[i].product.title.toLowerCase().split(' ');
	for (j=0; j<currentItem.length; j++){
		if (currentItem[j]=== 'canon'){
			canonProducts.push(data.items[i].product.title)
		}
	}
}

console.log(canonProducts.join(' '));



5.) Find all `items` that have **product** **author** **name** of "eBay" and are brand "Canon".

var eBayCanonProducts= [];

for (i=0; i<data.items.length; i++){
	var currentItem= data.items[i].product.title.toLowerCase().split(' ');
	for (j=0; j<currentItem.length; j++){
		if (currentItem[j]=== 'canon'){
			if(data.items[i].product.author.name === "eBay"){
				eBayCanonProducts.push(data.items[i].product.title)
			}
		}
	}
}

console.log(eBayCanonProducts.join(' '));


6.) Print all the products with their **brand**, **price**, and a **image link**



for (i=0; i<data.items.length; i++){
	console.log(i+1 + ". " + data.items[i].product.title + " brand: " + data.items[i].product.brand + " price:" + data.items[i].product.inventories.price + " image link:" + data.items[i].product.images)
}


console.log(data["items"]);
