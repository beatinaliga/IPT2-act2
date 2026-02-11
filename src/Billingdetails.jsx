Billingdetails.js
import React from "react";

function Billingdetails({ billingInfo }) {
if (!billingInfo) {
return <p>No billing details yet.</p>;
}

return (
<div class="Billing">
<h2>Billing Details</h2>
<p>Product: {billingInfo.productName}</p>
<p>Quantity: {billingInfo.quantity}</p>
<p>Unit Price: {billingInfo.unitPrice}</p>
<p><strong>Total: {billingInfo.total}</strong></p>
</div>
);
}

export default Billingdetails;