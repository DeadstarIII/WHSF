import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../app/globals.css";

export default function Initiatives() {
  return (
    <>
      <title>WHSF - Initiatives</title>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <section className="text-gray-700 bg-white body-font relative flex-grow">
          <div className="container px-6 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-4">
              <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">
                Research Programs for High Schoolers
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
                A collaboration with{" "}
                <span className="text-blue-600">NECHR</span>.
              </p>
            </div>

            <div className="md:w-3/4 lg:w-1/2 mx-auto bg-gray-100 p-10 rounded-xl shadow-lg">
              <div className="text-gray-800">
                <p className="mb-6">
                  To improve academic intellect and bolster research skills
                  among high schoolers in the Wesean region, WSF's High school
                  wing, led by Joshua Hmar (President), has formally partnered
                  with the Northeastern Centre for High School Research,
                  <span className="text-blue-600"> NECHR</span>. Based on this
                  understanding, the Forum for Wesean High Schoolers (a wing of
                  WSF) shall nominate 4 students every six months to work on an
                  independent research project with a NECHR mentor (1-to-1
                  mentorship). For further information on the program, contact
                  us at
                  <span className="text-blue-600"> whsf.enquiry@proton.me</span>
                  .
                </p>
                <p className="mb-6">
                  If you would like to apply to this program, send us an email
                  with your resume and a short note on why you would like to
                  join the program.
                </p>
                <div className="mt-6 text-center text-gray-700">
                  <span className="text-xl font-medium text-gray-900">
                    Joshua Hmar
                  </span>
                  <br />
                  <span className="text-sm text-gray-500">President</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
