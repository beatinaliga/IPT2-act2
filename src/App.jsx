import { useState } from "react";
import './App.css'
import ProductDetails from "./Productdetails";
import BillingDetails from "./Billingdetails";

function App() {
  const [billingInfo, setBillingInfo] = useState(null);

  const handleCalculate = (productName, quantity, unitPrice) => {
    const total = quantity * unitPrice;
    setBillingInfo({ productName, quantity, unitPrice, total });
  };

  const handleReset = () => {
    setBillingInfo(null);
  };

  return (
    <div>
      <h1>Price Checker</h1>
      <h6>Enter product details to calculate the total price</h6>
      <ProductDetails onCalculate={handleCalculate} onReset={handleReset} />
      <BillingDetails billingInfo={billingInfo} />
    </div>
  );
}

export default App;
