import "./styles.css";
import React, { useContext } from "react";
import { ProductContext } from "./products";

const Checkout = () => {
  const { productsData, qty, setQty } = useContext(ProductContext);

  return (
    <div className="pages">
      {productsData.map((item) => (
        <div className="container" key={item.id}>
          <div className="imgqty">
            <div className="images">
              <div>
                <img
                  src={item.thumbnail}
                  alt="ProductImages"
                  style={{ width: "150px" }}
                />
              </div>

              <div>
                <h3 style={{ textTransform: "uppercase" }}>{item.title}</h3>
                <p style={{ width: "200px" }}>{item.description}</p>
              </div>
            </div>
            <div className="qtys">
              <div>
                <button onClick={() => setQty(qty - 1)}>➖</button> {qty}{" "}
                <button onClick={() => setQty(qty + 1)}>➕</button>{" "}
              </div>
              <div>
                <h4> ${item.price}.00</h4>
                <button onClick={() => setQty(0)}>Remove</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="middle">
            <div>
              <h4>SUBTOTAL :</h4>
              <h4>SHIPPING :</h4>
            </div>
            <div>
              <h4>${qty * item.price}.00</h4>
              <h4>FREE</h4>
            </div>
          </div>
          <hr />
          <div className="total">
            <h4>TOTAL :</h4>
            <h4>${qty * item.price}.00</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
