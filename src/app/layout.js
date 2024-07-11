// src/app/layout.js
"use client"
import React from 'react';
import './globals.css';
import Header from '@/components/Header'; // Example path, adjust as per your actual file structure
import Footer from '@/components/Footer'; // Example path, adjust as per your actual file structure
import Loading from '../Loading'; // Adjust the path based on your actual file structure


export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wesean Student Federation</title>
        <meta name="description" content= 'Website for the Wesean Student Federation' />
        <link rel="icon" href="/logo.png" />
      </head>
      <body style={{ overflow: 'hidden' }}>
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
