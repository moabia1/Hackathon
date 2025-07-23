import React from "react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#efe2c1] mt-20">
      <Navbar />
      <div className="flex-grow w-full max-w-6xl mx-auto p-4 sm:p-6 pb-32">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-[#1a1a1a]">
          Your Cart
        </h1>
        {cartItems.length === 0 ? (
          <p className="text-lg">Your cart is empty.</p>
        ) : (
          <div className="space-y-4 w-full">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center bg-white rounded-lg shadow p-4 w-full"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-contain rounded border border-gray-300"
                />
                <div className="sm:ml-4 mt-4 sm:mt-0 flex-1 w-full">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600">Rs. {item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-lg"
                    >
                      -
                    </button>
                    <span className="px-4 text-lg">{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-4 sm:mt-0 sm:ml-4 text-red-500 hover:text-red-700 font-medium"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Subtotal Rkhna h */}
            <div className="bg-white rounded-lg shadow p-4 w-full flex flex-col sm:flex-row items-center justify-between mt-6">
              <h2 className="text-xl font-semibold">Subtotal:</h2>
              <p className="text-lg font-bold text-[#1a1a1a]">
                Rs. {subtotal.toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </div>

      
      <Footer className="fixed bottom-0 left-0 w-full" />
    </div>
  );
};

export default CartPage;
