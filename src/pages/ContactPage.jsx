import Navbar from "../components/Navbar";
import contact from "../assets/images/contact.jpg";
import right from "../assets/images/right.jpg";

export default function ContactPage() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />

      <section className="relative h-64">
        <img src={contact} alt="Aston Martin" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center"><h1 className="text-white text-4xl font-bold">Contact Us</h1></div>
      </section>

      <div className="flex justify-center gap-8 border-b mt-6">
        <button className="border-b-2 border-green-700 pb-2 font-semibold text-green-700" type="button">Customer Support and Feedback</button>
        <button className="pb-2" type="button">Roadside Assistance</button>
      </div>

      <section className="flex flex-col md:flex-row justify-between items-start gap-6 px-6 py-10">
        <div className="md:w-1/2 space-y-4">
          <p><strong>Aston Martin Client Support</strong><br />Banbury Road<br />Gaydon<br />Warwick<br />CV35 0DB<br />United Kingdom</p>
          <p>Mon-Thu: 08:00 - 17:00<br />Fri: 08:00 - 15:30<br />Tel: 44 (0) 1926 644722</p>
          <p><strong>US Customers:</strong> (866) 278-6661</p>
          <p><strong>Gaydon Headquarters</strong><br />Switchboard: +44 (0)1926 644644</p>
          <a href="#" className="text-green-700 underline">Get in touch</a>
        </div>
        <div className="md:w-1/2"><img src={right} alt="Car" className="rounded shadow" /></div>
      </section>

      <section className="px-6 py-10 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-6">Please fill out your details and we will be in touch shortly.</p>

        <form className="space-y-4">
          <div><label className="block mb-1">Subject</label><select className="w-full border p-2 rounded" defaultValue="Please select"><option>Please select</option><option>General Inquiry</option><option>Support</option></select></div>
          <div><label className="block mb-1">Title</label><div className="flex gap-4"><label><input type="radio" name="title" /> Mr.</label><label><input type="radio" name="title" /> Mrs.</label><label><input type="radio" name="title" /> Ms.</label><label><input type="radio" name="title" /> Mx.</label></div></div>
          <div><label className="block mb-1">Full name</label><input type="text" className="w-full border p-2 rounded" /></div>
          <div><label className="block mb-1">Email</label><input type="email" className="w-full border p-2 rounded" /></div>
          <div><label className="block mb-1">Phone</label><input type="tel" placeholder="+44" className="w-full border p-2 rounded" /></div>
          <div><label className="block mb-1">Message</label><textarea rows="4" className="w-full border p-2 rounded"></textarea></div>
          <p className="text-sm">By clicking "Submit" you are agreeing to our <a href="#" className="underline text-green-700">Privacy Policy</a>.</p>
          <button className="bg-green-800 text-white px-6 py-2 rounded" type="button">Submit</button>
        </form>
      </section>

      <footer className="bg-gray-100 mt-10 p-8 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col gap-2"><a href="#">Our World</a><a href="#">Models</a><a href="#">Owners</a><a href="#">F1 Team</a><a href="#">Preowned</a><a href="#">Experiences</a></div>
          <div className="flex flex-col gap-2"><a href="#">Dealers</a><a href="#">Enquiry</a><a href="#">Contact us</a></div>
          <div className="flex flex-col gap-2"><a href="#">Corporate</a><a href="#">About Us</a><a href="#">Media</a><a href="#">Careers</a><a href="#">Investors</a></div>
          <div><label className="block mb-2">Find a dealer</label><input type="text" placeholder="Town/Postcode" className="border p-2 rounded w-full" /></div>
        </div>

        <div className="flex justify-between items-center mt-6 pt-6 border-t">
          <p>© Aston Martin 2025</p>
          <div className="flex gap-3"><a href="#">Instagram</a><a href="#">Facebook</a><a href="#">YouTube</a><a href="#">LinkedIn</a></div>
        </div>
      </footer>
    </div>
  );
}
