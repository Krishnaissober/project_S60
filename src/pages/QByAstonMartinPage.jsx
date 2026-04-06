import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import QFooter from "../components/QFooter";
import hero from "../assets/images/hero.jpg";
import one from "../assets/images/1.jpg";
import two from "../assets/images/2.jpg";
import three from "../assets/images/3.jpg";
import four from "../assets/images/4.jpg";
import five from "../assets/images/5.jpg";
import six from "../assets/images/6.jpg";
import seven from "../assets/images/7.jpg";
import garruppo from "../assets/images/imgi_146_astonmartin_garruppo_061123_283_1980.jpg";
import shade from "../assets/images/imgi_125__daf5788-_2000px_width.jpg";
import commission from "../assets/images/imgi_130_aston-martin-lagonda_dbs-59-edition-218_2000width.jpg";
import qTile from "../assets/images/imgi_136_q-tile.jpg";
import center from "../assets/images/center.jpg";
import bowmore from "../assets/images/ight.jpg";
import newYork from "../assets/images/imgi_58_astonmartin_garruppo_061123_283_1980.jpg";

export default function QByAstonMartinPage() {
  const slides = useMemo(() => [one, two, three], []);
  const secondSlides = useMemo(() => [four, five, six, seven], []);
  const [index, setIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(0);

  return (
    <div className="font-sans bg-white text-black">
      <Navbar />

      <section className="flex flex-col items-center justify-center w-full h-screen bg-no-repeat bg-center bg-cover static bg-fixed" style={{ backgroundImage: `url(${hero})` }}>
        <p className="text-white text-[3rem]">Q BY ASTON MARTIN</p>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-light text-black mb-8">Q by Aston Martin</h2>
          <p className="text-gray-700 text-base leading-relaxed max-w-4xl mx-auto">Q by Aston Martin revolutionises car configuration. The ultimate expression of individuality. An opportunity to work with a dedicated team of designers and engineers, to realise your perfect Aston Martin. Our invitation to you. To challenge the perception of the possible. Push the boundaries of luxury car personalisation. Access extended ranges of colours, trims, materials and finishes. Create a unique Aston Martin that's more than a car - create an Aston Martin that's a piece of automotive art.</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-col lg:flex lg:flex-row gap-16 items-center">
            <div className="relative"><img src={garruppo} alt="Q by Aston Martin" className="w-[50rem] h-auto rounded-lg shadow-lg" /></div>
            <div className="text-black">
              <h3 className="text-2xl font-medium mb-8">EVERY SHADE OF YOU</h3>
              <p className="text-gray-700 text-base leading-relaxed mb-6">An extended palette of colour. Extended trim options. Developed exclusively through Q by Aston Martin. Inspired by our heritage and the modern luxury landscape. The paramount palette for your Aston Martin sports car configuration.</p>
              <p className="text-gray-700 text-base leading-relaxed">Explore the world of Q on any of our models to personalise your Aston Martin with a style to suit just you.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((src, i) => (
            <div className="min-w-full flex-shrink-0" key={src}><img src={src} className={`w-full ${i === 0 ? "h-[30rem]" : "h-[500px]"} object-cover`} alt={`Car ${i + 1}`} /></div>
          ))}
        </div>
        <button onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)} className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/70 p-3 rounded-full shadow hover:bg-white" type="button">◀</button>
        <button onClick={() => setIndex((prev) => (prev + 1) % slides.length)} className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/70 p-3 rounded-full shadow hover:bg-white" type="button">▶</button>
      </div>

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="text-black">
              <h3 className="text-2xl font-medium mb-8">HARMONISED WITH YOUR VISION</h3>
              <p className="text-gray-700 text-base leading-relaxed mb-6">Q also offers a vast array of bespoke options, materials and finishes. Defined by our Q by Aston Martin Design team. Inspired by past Q Commission projects. Accessible to you.</p>
              <p className="text-gray-700 text-base leading-relaxed mb-6">Dynamic wheel finishes. Striking carbon fibre tinting. Tailored woven leathers. Painted interior graphics.</p>
              <p className="text-gray-700 text-base leading-relaxed">More unique ways to create a bespoke Aston Martin than ever before.</p>
            </div>
            <div className="relative"><img src={shade} alt="Aston Martin Wheel and Blue Brake Caliper" className="w-[60rem] h-auto rounded-lg shadow-lg" /></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="relative"><img src={commission} alt="Q Commission Interior Detail" className="w-[60rem] h-auto rounded-lg shadow-lg" /></div>
            <div className="text-black">
              <h3 className="text-2xl font-medium mb-4">ART OF THE INDIVIDUAL</h3>
              <h4 className="text-lg font-light text-gray-600 mb-8">Q COMMISSION</h4>
              <p className="text-gray-700 text-base leading-relaxed mb-6">Reserved exclusively for our most creative and ambitious customers. Q Commission is a journey. A journey into another world. The world of the truly bespoke, individual sports cars and luxury SUVs.</p>
              <p className="text-gray-700 text-base leading-relaxed mb-6">Every Q Commission journey involves a personal collaboration with our design team. All working entirely towards your vision. To create your ultimate Aston Martin.</p>
              <p className="text-gray-700 text-base leading-relaxed">The possibilities of Q Commission are limitless. Each project pushing the boundaries of automotive personalisation.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full overflow-hidden">
        <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${secondIndex * 100}%)` }}>
          {secondSlides.map((src, i) => (
            <div className="min-w-full flex-shrink-0" key={src}><img src={src} className={`w-full ${i === 0 ? "h-[30rem]" : "h-[500px]"} object-cover`} alt={`Car ${i + 1}`} /></div>
          ))}
        </div>
        <button onClick={() => setSecondIndex((prev) => (prev - 1 + secondSlides.length) % secondSlides.length)} className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/70 p-3 rounded-full shadow hover:bg-white" type="button">◀</button>
        <button onClick={() => setSecondIndex((prev) => (prev + 1) % secondSlides.length)} className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/70 p-3 rounded-full shadow hover:bg-white" type="button">▶</button>
      </div>

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-light text-black mb-8">Q by Aston Martin creations</h2>
          <p className="text-gray-700 text-base leading-relaxed max-w-4xl mx-auto">Discover the limits of personalisation possibilities. From vision to creation, Q by Aston Martin creations showcase automotive art like no other. Truly bespoke with individuality in mind. Explore our bespoke and unique Aston Martin cars.</p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="group cursor-pointer"><div className="relative overflow-hidden rounded-lg"><img src={qTile} alt="DB12 Goldfinger Edition" className="w-full h-[30rem] object-cover transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div><div className="absolute bottom-6 left-6 text-white"><h3 className="text-2xl font-light mb-2">DB12 Goldfinger Edition</h3><a href="#" className="inline-flex items-center text-white hover:text-gray-300 transition-colors"><span className="mr-2">Learn more</span><i className="fas fa-arrow-right"></i></a></div></div></div>
            <div className="group cursor-pointer"><div className="relative overflow-hidden rounded-lg"><img src={center} alt="DBX707 AMR23" className="w-full h-[30rem] object-cover transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div><div className="absolute bottom-6 left-6 text-white"><h3 className="text-2xl font-light mb-2">DBX707 AMR23</h3><a href="#" className="inline-flex items-center text-white hover:text-gray-300 transition-colors"><span className="mr-2">Learn more</span><i className="fas fa-arrow-right"></i></a></div></div></div>
            <div className="group cursor-pointer"><div className="relative overflow-hidden rounded-lg"><img src={bowmore} alt="DBX Bowmore" className="w-full h-[30rem] object-cover transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div><div className="absolute bottom-6 left-6 text-white"><h3 className="text-2xl font-light mb-2">DBX Bowmore</h3><a href="#" className="inline-flex items-center text-white hover:text-gray-300 transition-colors"><span className="mr-2">Learn more</span><i className="fas fa-arrow-right"></i></a></div></div></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-light text-black mb-8">Q NEW YORK - BESPOKE CAR PERSONALISATION AS AN EXPERIENCE</h2>
          <p className="text-gray-700 text-base leading-relaxed max-w-5xl mx-auto">Q New York is the first ultra-luxury flagship store to bring the highest levels of our bespoke car enhancement service, Q by Aston Martin, to North America. Exclusive and immersive, Q New York provides a thrilling entry to the world of Aston Martin. A one-of-a-kind showroom where Savile Row meets Park Avenue. Where the digital realm blends seamlessly into the real world. The ultimate sanctuary for customers to bring their dream Aston Martin to life.</p>
        </div>

        <div className="max-w-7xl mx-auto"><div className="relative"><img src={newYork} alt="Q New York Showroom Interior" className="w-full h-[20rem] shadow-lg" /></div></div>
      </section>

      <QFooter />
    </div>
  );
}
