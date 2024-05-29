"use client";
import React, { useState } from "react";
import ReactCreditCards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Link from "next/link";

export default function BillingInfo({ finalizePurchase }) {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
    isValid: false,
    // issuer: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  // Function to validate the form
  const validateForm = () => {
    // Check if all fields are filled
    const { number, expiry, cvc, name } = state;
    if (number && expiry && cvc && name) {
      setState((prev) => ({ ...prev, isValid: true }));
    } else {
      setState((prev) => ({ ...prev, isValid: false }));
    }
  };

  //   const handleCallback = ({ issuer }, isValid) => {
  //     if (isValid) {
  //       this.setState({ issuer });
  //     }
  //   };

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col my-auto">
        <div className="grid grid-rows-2 gap-10 my-10 mx-6">
          <div className="m-auto">
            <div>
              <ReactCreditCards
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
              />
            </div>
            <form
              className="grid grid-cols-2 grid-rows-2 gap-4 items-center"
              onSubmit={(e) => {
                e.preventDefault();
                validateForm(); // Validate the form before submitting
              }}
            >
              <div className="flex flex-col p-2 gap-2">
                <label htmlFor="number">Number on card</label>
                <input
                  type="tel"
                  name="number"
                  className="shadow-inner p-1 text-dark-grey-00"
                  placeholder="Card Number"
                  pattern="[\d ]{16,22}"
                  maxLength={16}
                  minLength={16}
                  required
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  //   callback={handleCallback}
                />
              </div>
              <div className="flex flex-col p-2 gap-2">
                <label htmlFor="name">Name on card</label>
                <input
                  type="text"
                  name="name"
                  className="shadow-inner p-1 text-dark-grey-00"
                  placeholder="Name"
                  required
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
              <div className="flex flex-col p-2 gap-2 ">
                <label htmlFor="expiry">Expiration data</label>
                <input
                  type="tel"
                  name="expiry"
                  className="shadow-inner p-1 text-dark-grey-00 "
                  placeholder="Valid Thru"
                  required
                  minLength={4}
                  maxLength={4}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
              <div className="flex flex-col p-2 gap-2">
                <label htmlFor="cvc">CVC</label>
                <input
                  type="tel"
                  name="cvc"
                  className="shadow-inner p-1 text-dark-grey-00"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  minLength={3}
                  maxLength={3}
                  required
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
              {/* <input type="hidden" name="issuer" value={issuer} /> */}
              <button
                className=" col-span-full bg-white-off-00 text-dark-grey-00 font-semibold hover:cursor-pointer hover:[text-shadow:_0_1px_5px_rgb(41,37,37,0.3)] h-auto w-36 mx-auto p-2 rounded-md"
                onClick={() => {
                  if (state.isValid) {
                    finalizePurchase();
                  }
                }}
              >
                Finalize purchase
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
