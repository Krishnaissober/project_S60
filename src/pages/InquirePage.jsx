import Navbar from "../components/Navbar";
import MainFooter from "../components/MainFooter";
import qTile from "../assets/images/imgi_136_q-tile.jpg";
import center from "../assets/images/center.jpg";

export default function InquirePage() {
  return (
    <div>
      <Navbar />

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img src={qTile} alt="DB12 Goldfinger Edition" className="w-[60rem] h-[30rem] object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-light mb-2">ARRANGE THE TEST DRIVE</h3>
                  <a href="#" className="inline-flex items-center text-white hover:text-gray-300 transition-colors"><span className="mr-2">Learn more</span><i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img src={center} alt="DBX707 AMR23" className="w-[60rem] h-[30rem] object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-light mb-2">GENRAL INQUIRY</h3>
                  <a href="#" className="inline-flex items-center text-white hover:text-gray-300 transition-colors"><span className="mr-2">Learn more</span><i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MainFooter />
    </div>
  );
}
