import React, { useEffect, useState } from "react";
import {VscError} from "react-icons/vsc"
const cartItems = [];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const total = subtotal + tax + shippingCharges;
const discount = 400;

const Cart = () => {
  const [couponCode, setCopunCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(()=>{
    const timeoutId= setTimeout(() => {
      if(Math.random()>0.5) setIsValidCouponCode(true) ;
      else setIsValidCouponCode(false)
    }, 1000);

    return ()=>{
      clearTimeout(timeoutId)
      setIsValidCouponCode(false)
    
    }
  },[couponCode])
  return (
    <div className="cart">
      <main>

        
      </main>

      <aside>
        <p>Subtotal: ₹{subtotal} </p>
        <p>Shipping Charges: ₹{shippingCharges} </p>
        <p>Tax: ₹{tax} </p>
        <p>
          Discount: <em> - ₹{tax} </em>{" "}
        </p>
        <p>
          <b>Total: ₹{discount}</b>
        </p>

        <input
          type="text"
          placeholder="coupon Code"
          value={couponCode}
          onChange={(e) => setCopunCode(e.target.value)}
        />
{couponCode && 
        (isValidCouponCode ? (
          <span className="green">
            ₹{discount} off using the <code>{couponCode}</code>
          </span>
        ) : (
          <span className="red">Invalid Coupon  <VscError />  </span>
        ))}
      </aside>
    </div>
  );
};

export default Cart;
