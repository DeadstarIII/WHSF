import Link from 'next/link';
import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'Wesean Student Federation',
  description: 'Website for the World Student Federation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/logo.png" />
      </head>
      {/* <body className="font-sans text-gray-900 leading-normal bg-gray-100"> */}
    <body>
    <Header/>
        <main className="container mx-auto ">{children}</main>
        <footer className="bg-gray-800 text-white text-center py-4">
          <p>&copy; {new Date().getFullYear()} WSF. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

function NavItem({ href, label }) {
  return (
    <li>
      <Link href={href}>
        <span className="text-lg font-medium cursor-pointer hover:text-gray-300">{label}</span>
      </Link>
    </li>
  );
}
