// src/pages/AboutUs.tsx

import React from "react";

export function AboutUs() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">About Bytekoin Bank</h1>
      <p className="text-lg mb-4">
        Welcome to Bytekoin Bank, where innovation meets reliability. Our mission is
        to provide cutting-edge financial solutions that empower individuals and
        businesses to achieve their financial goals.
      </p>
      <p className="text-lg mb-4">
        At Bytekoin Bank, we believe in transparency, security, and customer
        satisfaction. Our team of experts is dedicated to delivering the best
        banking experience, ensuring the trust and confidence of our clients.
      </p>
      <p className="text-lg mb-4">
        Key Features:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Secure and user-friendly online banking</li>
        <li>Customized financial solutions for individuals and businesses</li>
        <li>24/7 customer support</li>
        <li>Zero-fee transactions</li>
      </ul>
      <p className="text-lg mb-8">
        Bytekoin Bank is committed to shaping the future of finance. Join us on
        this journey, and let's build a prosperous future together.
      </p>
    </div>
  );
};
