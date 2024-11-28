// src/app/layout.js
"use client";
import React from "react";
import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WHSF</title>
        <meta
          name="description"
          content="Wesean High School Federation - A platform for high schoolers in the Wesean region to collaborate, learn, and grow."
        />
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="bg-white text-gray-900">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
