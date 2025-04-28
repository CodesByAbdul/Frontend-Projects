import React, {useState} from "react";

const MyComponent = () => {
const [count, setCount] = useState(0)
const [name, setName] = useState("");
const [quantity, setQuantity] = useState(1);
const [comment, setComment] = useState("");
const [payment, setPayment] = useState("");
const [shipping, setShipping] = useState("Delivery");

const handleShipping = (event) => {
  setShipping(event.target.value)
}

const handleText = (event) => {
  setName(event.target.value)
}

const handleQuantity = (event) => {
  setQuantity(event.target.value)
}

const handleComment = (event) => {
  setComment(event.target.value)
}

const handlePayment = (event) => {
  setPayment(event.target.value)
}

const decrement = () => {
  setCount(c => c - 1);
}

const reset = () => {
  setCount(0);
}

const increment = () => {
  setCount(c => c + 1)
  
}

  return (
    <>
      <p> {count}</p>
      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
      </div>

      <div>
        <h1>This is a simple onChange attribute</h1>
        <hr />

        <input type="text" onChange={handleText} placeholder="name"/>
        <h4>Name: {name}</h4>

        <input type="number" onChange={handleQuantity} />
        <h4>Quantity: {quantity}</h4>

        <textarea onChange={handleComment} placeholder="name"/>
        <h4>Comment: {comment}</h4>

        <select name="" id="" onChange={handlePayment}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
        </select>
        <h4>Payment option: {payment}</h4>

        <label htmlFor=""><input type="radio" value='Pick up' checked={shipping === "Pick up"} onChange={handleShipping}/> Pick up</label> <br />
        <label htmlFor=""><input type="radio" value='Delivery' checked={shipping === "Delivery"} onChange={handleShipping}/> Delivery</label>

        <h4>Shipping: {shipping}</h4>
      </div>
    </>
  )
}

export default MyComponent