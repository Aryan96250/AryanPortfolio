import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="relative pt-24 pb-12 z-10 bg-black/60 backdrop-blur-xl border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-5xl font-display font-bold text-white mb-8">Let's <span className="text-accent italic font-serif">Connect</span></h2>
            <p className="text-white/70 mb-8 max-w-md leading-relaxed">
              Ready to bring your ideas to life? Reach out and let's discuss your next project in the digital landscape.
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-white/80 hover:text-accent transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
                  <Mail />
                </div>
                <div>
                  <p className="text-xs text-accent uppercase tracking-widest font-bold">Email</p>
                  <p className="text-lg">{PERSONAL_INFO.email}</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-white/80">
                 <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60">
                    <MapPin />
                 </div>
                 <div>
                    <p className="text-xs text-accent uppercase tracking-widest font-bold">Location</p>
                    <p className="text-lg">{PERSONAL_INFO.location}</p>
                 </div>
              </div>
            </div>
          </div>

          <form className="glass-panel p-8 rounded-3xl" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-accent uppercase font-bold ml-1">Name</label>
                <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-accent focus:bg-black/40 outline-none transition-all" placeholder="Enter your name" />
              </div>
              <div>
                <label className="text-xs text-accent uppercase font-bold ml-1">Email</label>
                <input type="email" className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-accent focus:bg-black/40 outline-none transition-all" placeholder="Enter your email" />
              </div>
              <div>
                <label className="text-xs text-accent uppercase font-bold ml-1">Message</label>
                <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-accent focus:bg-black/40 outline-none transition-all resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full bg-accent hover:bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all">
                <Send size={18} />
                Send Message
              </button>
            </div>
          </form>

        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
           &copy; {new Date().getFullYear()} Aryan Chauhan. Crafted with Code.
        </div>
      </div>
    </footer>
  );
};

export default Contact;