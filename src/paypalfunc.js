import React, { useState, useEffect, useRef } from "react";

export default function ReactPayPal() {
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  // To show PayPal buttons once the component loads
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Yogurt proviotico",
                amount: {
                  currency_code: "PEN",
                  value: 18,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          console.log(order);
        },
        onError: (err) => {
          //   setError(err),
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, []);

  // If the payment has been made
  if (paid) {
    return <div>Payment successful.!</div>;
  }

  // If any error occurs
  if (error) {
    return <div>Error Occurred in processing payment.! Please try again.</div>;
  }

  // Default Render
  return (
    <div>
      <h4>Total Amount in Rs. : 500 /-</h4>
      <div ref={paypalRef} />
    </div>
  );
}
