ProductDetails.js
import React, { useState } from "react";

function ProductDetails({ onCalculate, onReset }) {
const [productName, setProductName] = useState("");
const [quantity, setQuantity] = useState(0);
const [unitPrice, setUnitPrice] = useState(0);

const handleCalculateClick = () => {
if (productName && quantity > 0 && unitPrice > 0) {
onCalculate(productName, quantity, unitPrice);
} else {
alert("Please enter valid product details!");
}
};

const handleResetClick = () => {
setProductName("");
setQuantity(0);
setUnitPrice(0);
onReset();
};

return (
<div class="Product">
<h2>Product Details</h2>
<label>
Product Name:
<input
type="text"
value={productName}
onChange={(e) => setProductName(e.target.value)}
/>
</label>
<br />
<label>
Quantity:
<input
type="number"
value={quantity}
onChange={(e) => setQuantity(Number(e.target.value))}
/>
</label>
<br />
<label>
Unit Price:
<input
type="number"
value={unitPrice}
onChange={(e) => setUnitPrice(Number(e.target.value))}
/>
</label>
<br />
<button onClick={handleCalculateClick}>Calculate</button>
<button onClick={handleResetClick}>Reset</button>
</div>
);
}

export default ProductDetails;