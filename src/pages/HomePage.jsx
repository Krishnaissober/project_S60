import Navbar from "../components/Navbar";
import MainFooter from "../components/MainFooter";
import imagePng from "../assets/images/image.png";
import imgPng from "../assets/images/img.png";

export default function HomePage() {
  return (
    <div className="font-sans">
      <section className="relative w-full h-screen overflow-hidden">
        <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="/Vantage S Desktop Hero Video Final.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <Navbar />

        <div className="relative flex flex-col justify-center items-center top-96 z-20 lg:top-3/4">
          <p className="font-medium text-white self-start text-lg ml-3">THRILL.DRIVEN.</p>
          <p className="text-4xl font-semibold self-start text-white ml-3">VANTAGE S</p>
          <div className="flex flex-col w-screen px-3 justify-center items-center space-y-2 md:flex-row md:space-y-0 md:space-x-4 mt-6 lg:flex-row self-start lg:space-y-0 lg:space-x-4 lg:w-1/3">
            <button className="bg-white text-green-700 py-4 w-full rounded-sm border-t border-slate-200" type="button">Explore</button>
            <button className="text-white rounded-sm bg-white/25 backdrop-blur-sm w-full py-4 border-t border-slate-200" type="button">Configure</button>
          </div>
        </div>
      </section>

      <section className="relative w-full h-screen after:content-[''] after:absolute after:inset-0 after:bg-green-300/50">
        <video loop muted autoPlay className="absolute w-full h-full object-cover" src="/ed80ac04-23c5-9c5a-440d-6118535737e6_rendition.mp4"></video>
        <div className="absolute inset-3 py-14 md:flex flex-col justify-center md:px-16">
          <p className="text-slate-200 font-normal text-5xl z-20 self-start md:text-6xl">We have an unstoppable quest for profound gratification. A desire to capture pure human emotions.</p>
          <p className="text-slate-200 font-normal text-2xl z-20 mt-4 text-center md:text-3xl md:text-start">- Aston Martin</p>
        </div>
      </section>

      <section className="relative w-full h-screen flex justify-center items-center after:content-[''] after:absolute after:inset-0 after:bg-black/40">
        <video loop autoPlay muted className="absolute w-full h-full object-cover" src="/Valhalla_LasVegas_Desktop.mp4"></video>
        <div className="absolute flex flex-col justify-center items-center top-96 z-20 lg:top-3/4">
          <p className="font-medium text-white text-center text-lg ml-3">MASTERY.DRIVEN.</p>
          <p className="text-4xl font-semibold text-center text-white ml-3">VANTAGE S</p>
          <div className="flex flex-col w-screen px-3 justify-center items-center space-y-2 md:flex-row md:space-y-0 md:space-x-4 mt-6 lg:flex-row self-start lg:space-y-0 lg:space-x-4 lg:w-96">
            <button className="bg-white text-green-700 py-4 w-full rounded-sm border-t border-slate-200" type="button">Explore</button>
            <button className="text-white rounded-sm bg-white/25 backdrop-blur-sm w-full py-4 border-t border-slate-200" type="button">Configure</button>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex md:flex-row justify-center items-center w-full h-screen overflow-hidden">
        <div className="relative w-full h-screen">
          <video loop autoPlay muted className="absolute w-full h-full object-cover" src="/15794d95-aed6-773e-884f-a65e4cf37d0c_rendition.mp4"></video>
          <button className="absolute bottom-4 left-4 bg-transparent text-white text-bold py-2 px-4 hover:underline transition-all duration-500" type="button">EXPLORE MORE →</button>
        </div>

        <div className="relative w-full h-screen">
          <video loop autoPlay muted className="absolute w-full h-full object-cover" src="/V60 Portrait.mp4"></video>
          <button className="absolute bottom-4 left-4 bg-transparent text-white text-bold py-2 px-4 hover:underline transition-all duration-500" type="button">EXPLORE MORE →</button>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-light text-black tracking-wide">Stories</h2>
            <button className="hidden md:block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-sm font-medium transition-colors duration-300" type="button">Read all stories</button>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img src={imagePng} alt="Aston Martin at Goodwood Festival" className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
              <div className="space-y-3">
                <span className="text-teal-600 text-sm font-medium tracking-wider uppercase">Experience</span>
                <h3 className="text-xl sm:text-2xl font-light text-gray-900 leading-tight group-hover:text-teal-600 transition-colors duration-300">Unleashing the Edge. Sharpened. At Goodwood Festival of Speed 2025.</h3>
                <p className="text-gray-500 text-sm">July 17 2025</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img src={imgPng} alt="Aston Martin at Goodwood Festival" className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
              <div className="space-y-3">
                <span className="text-teal-600 text-sm font-medium tracking-wider uppercase">Product</span>
                <h3 className="text-xl sm:text-2xl font-light text-gray-900 leading-tight group-hover:text-teal-600 transition-colors duration-300">Aston Martin and Apple CarPlay Ultra®</h3>
                <p className="text-gray-500 text-sm">15 May 2025</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" alt="Royal Warrant Heritage" className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
              </div>
              <div className="space-y-3">
                <span className="text-teal-600 text-sm font-medium tracking-wider uppercase">Heritage</span>
                <h3 className="text-xl sm:text-2xl font-light text-gray-900 leading-tight group-hover:text-teal-600 transition-colors duration-300">Aston Martin receives the Royal Warrant</h3>
                <p className="text-gray-500 text-sm">02 Apr 2025</p>
              </div>
            </div>
          </div>

          <div className="my-10 flex justify-center items-center">
            <button className="md:hidden bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-sm font-medium transition-colors duration-300" type="button">Read all stories</button>
          </div>
        </div>
      </section>

      <MainFooter />
    </div>
  );
}
