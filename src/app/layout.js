// src/app/layout.js
"use client";
import React from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wesean Students Forum</title>
        <meta
          name="description"
          content="Website for the Wesean Students Forum"
        />
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
