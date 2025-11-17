import { useState } from "react";   

function QuantityPicker(){
    let [quantity, setQuantity] = useState(1);
    
    function increaseQuantity(){
        let newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }
    function decreaseQuantity(){
        let newQuantity = quantity - 1;
        if(newQuantity > 0)
        {
            setQuantity(newQuantity);
        }
    }
    
    return(
    <div className="quantity-picker">
        <button className="btn-plus"  onClick={increaseQuantity}>+</button>
        <label className="label-qty">{quantity}</label>
        <button className="btn-minus" onClick={decreaseQuantity}>-</button>
    </div>
    );
}
export default QuantityPicker;