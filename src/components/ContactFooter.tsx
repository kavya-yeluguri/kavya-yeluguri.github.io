
import { Mail, MapPin } from 'lucide-react';

const ContactFooter = () => {
  return (
    <section id="contact" className="py-20 px-2 md:px-6 bg-white relative">
      <div className="w-full max-w-4xl mx-auto bg-white/5 backdrop-blur-sm px-4 md:px-12 py-8 md:py-20 rounded-3xl relative overflow-hidden text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Let's Connect
            <span className="text-gray-600">.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Always open to interesting problems, ideas, and conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a 
              href="mailto:yeluguri.kavya9@gmail.com"
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300 hover:scale-105 cursor-pointer"
            >
              <Mail size={20} />
              <span className="underline">yeluguri.kavya9@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;
