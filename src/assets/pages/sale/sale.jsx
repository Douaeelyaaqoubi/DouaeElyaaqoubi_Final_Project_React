import Nav_barr from "../../../componets/nav_barr";
import Footer from "../../../componets/footer";
import { FaChevronRight } from "react-icons/fa";
function Sale() {
    return(
        <>
        <Nav_barr />
        <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-sm flex text-gray-500 mb-6">
            <span className="hover:text-black cursor-pointer transition">
              Home
            </span>
            <span className="mx-2"><FaChevronRight /></span>
            <span className="text-gray-700 font-medium">Search</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-gray-800">
            Search
          </h1>
        </div>
      </section>


        <Footer />
        </>
    )
}




export default Sale;