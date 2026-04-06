export default function MainFooter() {
  return (
    <footer className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-lg font-medium text-black tracking-wide mb-8">ASTON MARTIN</h2>
          <hr className="border-t border-gray-300" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-black font-medium mb-6">Our World</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">Models</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">Owners</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">F1 Team</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">Preowned</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">Experiences</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-medium mb-6">Dealers</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">Enquiry</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">Contact us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-medium mb-6">Corporate</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">Media</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">Investors</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-medium mb-6">Find a dealer</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Town/Postcode"
                className="w-full px-4 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-black transition-colors duration-200"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2" type="button">
                <i className="fas fa-search text-gray-400 hover:text-black transition-colors duration-200"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">United States</span>
                <i className="fas fa-chevron-down text-gray-400 text-xs"></i>
              </div>

              <div className="flex flex-wrap items-center space-x-6">
                <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">Terms & Conditions</a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">Privacy</a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">Cookies</a>
                <span className="text-gray-600 text-sm">© Aston Martin 2025</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-black transition-colors duration-200"><i className="fab fa-instagram text-xl"></i></a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors duration-200"><i className="fab fa-threads text-xl"></i></a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors duration-200"><i className="fab fa-facebook text-xl"></i></a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors duration-200"><i className="fab fa-twitter text-xl"></i></a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors duration-200"><i className="fab fa-youtube text-xl"></i></a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors duration-200"><i className="fab fa-linkedin text-xl"></i></a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors duration-200"><i className="fab fa-tiktok text-xl"></i></a>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-6">
          <div>
            <h4 className="text-black font-medium mb-3 underline">* MODERN SLAVERY ACT STATEMENT</h4>
            <p className="text-gray-600 text-sm leading-relaxed max-w-4xl">
              The emissions/fuel economy figures quoted are sourced from official, regulated test results obtained through laboratory testing. They are for comparability purposes only and may not reflect your real driving experience, which may vary depending on factors including road conditions, weather, vehicle load and driving style.
            </p>
          </div>

          <div>
            <h4 className="text-black font-medium mb-3 underline">* WLTP - CONSUMPTION AND EMISSION VALUES</h4>
          </div>
        </div>
      </div>
    </footer>
  );
}
