"use client";

import { useState, useEffect } from "react";
import { CartContext, CartItem, CartContextType } from "./CartContext";
import { toast } from "react-toastify";

export const CartProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    // Load cart data from localStorage on initial render
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cartItems");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    // Save cart data to localStorage whenever it changes
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items]);

  const addToCart = (item: CartItem) => {
    const adjustedQuantity = item.quantity > 0 ? item.quantity : 1;  // Default to 1 if quantity is 0 or less
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        const newQuantity = existingItem.quantity + adjustedQuantity;
  
        // Check if the updated quantity exceeds the stock level
        if (newQuantity > existingItem.stock) {
          toast.error(`Cannot add more than ${existingItem.stock} items of this product.`, {
            autoClose: 1000,
          });
          return prevItems;
        }
  
        if (newQuantity > 5) {
          toast.error("Cannot add more than 5 items of the same product.", {
            autoClose: 1000,
          });
          return prevItems;
        }
  
        toast.info("Product Quantity Updated!", { autoClose: 500 });
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: newQuantity } : i
        );
      }
  
      // Check if the quantity exceeds stock before adding to the cart
      if (adjustedQuantity > item.stock) {
        toast.error(`Cannot add more than ${item.stock} items of this product.`, {
          autoClose: 1000,
        });
        return prevItems;
      }
  
      if (adjustedQuantity > 5) {
        toast.error("Cannot add more than 5 items of the same product.", {
          autoClose: 1000,
        });
        return prevItems;
      }
  
      toast.success("Product Added to Cart!", { autoClose: 500 });
      return [...prevItems, { ...item, quantity: adjustedQuantity }];
    });
  };
  

  const removeFromCart = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    toast.info("Product Removed from Cart", { autoClose: 500 });
  };

  const clearCart = () => {
    setItems([]);
    toast.info("Cart Cleared!", { autoClose: 500 });
  };

  const updateQty = (id: string, quantity: number) => {
    const adjustedQuantity = quantity > 0 ? quantity : 1;  // Default to 1 if quantity is 0 or less
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id === id);
  
      if (item && adjustedQuantity > item.stock) {
        toast.error(`Cannot exceed ${item.stock} items of this product.`, {
          autoClose: 1000,
        });
        return prevItems;
      }
  
      if (adjustedQuantity > 5) {
        toast.error("Cannot have more than 5 items of the same product.", {
          autoClose: 1000,
        });
        return prevItems;
      }
  
      toast.info("Product Quantity Updated!", { autoClose: 500 });
      return prevItems.map((item) =>
        item.id === id ? { ...item, quantity: adjustedQuantity } : item
      );
    });
  };
  

  const contextValue: CartContextType = {
    items,
    addToCart,
    clearCart,
    removeFromCart,
    updateQty,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
