// src/app/layout.js

"use client";
import React from 'react';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loading from '../Loading';

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wesean Student Federation</title>
        <meta name="description" content="Website for the Wesean Student Federation" />
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="bg-white text-gray-900">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <main>{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
