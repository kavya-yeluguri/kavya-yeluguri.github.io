import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 pb-32 px-4 sm:px-6 relative bg-dot-pattern">
      <div className="max-w-4xl mx-auto">
        
        {/* Glass Container matching About page layout */}
        <div className="bg-slate-50/70 backdrop-blur-md border border-slate-300/60 rounded-[2.5rem] p-8 sm:p-14 shadow-md text-center space-y-6">
          
          {/* Header Pill */}
          <div className="mx-auto w-fit bg-white border border-slate-200/90 rounded-2xl px-10 py-5 text-center shadow-md">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              <span className="text-[#3b82f6]"> Let's Connect</span>
            </h2>
            <div className="w-10 h-0.5 bg-slate-900 mx-auto mt-2.5 rounded-full"></div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Always open to interesting problems, ideas, and conversations.
          </p>

          {/* Styled Email Pill */}
          <div className="pt-2">
            <a
              href="mailto:yeluguri.kavya9@gmail.com"
              className="inline-flex items-center gap-2.5 bg-white border border-slate-200/90 hover:border-slate-300 text-slate-800 hover:text-[#3b82f6] px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:shadow transition-all group"
            >
              <Mail size={16} className="text-slate-500 group-hover:text-[#3b82f6] transition-colors" />
              <span>yeluguri.kavya9@gmail.com</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;