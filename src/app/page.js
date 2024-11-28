export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="text-gray-600 bg-white body-font flex-grow flex items-center justify-center w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 lg:px-10 flex flex-col items-center md:flex-row">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center mb-16 md:mb-0">
            <h1 className="title-font sm:text-6xl text-4xl mb-4 font-medium text-gray-900">
              Wesea
            </h1>
            <p className="mb-8 leading-relaxed text-gray-700">
              Wesea, short for Western South East Asia, is a region celebrated
              for its rich cultural diversity, home to over 220 ethnic groups
              and a variety of unique traditions. Discover its vibrant
              landscapes and fascinating cultural heritage.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10">
            <img
              className="object-cover object-center rounded-lg"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
      <footer className="bg-white text-gray-900 text-center py-6 shadow-md mt-auto w-full">
        <div className="w-full border-t border-gray-200 mb-4"></div>
        <p>&copy; {new Date().getFullYear()} WHSF</p>
      </footer>
    </div>
  );
}
