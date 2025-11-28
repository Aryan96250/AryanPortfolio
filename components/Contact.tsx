import React from 'react';
import { Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-black/90 pt-24 pb-12 border-t border-white/10 relative overflow-hidden backdrop-blur-sm">
      {/* Footer Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-6">
              Let's build something <br/> <span className="text-gradient">amazing together.</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-md">
              Whether you need a modern web app, a mobile solution, or blockchain integration, 
              I am ready to help you achieve your digital goals.
            </p>

            <div className="space-y-4">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="group flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors border border-white/5">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email Me</p>
                    <p className="font-medium text-white">{PERSONAL_INFO.email}</p>
                  </div>
                </div>
                <ArrowUpRight size={20} className="text-slate-600 group-hover:text-primary transition-colors" />
              </a>

              <a 
                href={`tel:${PERSONAL_INFO.phone}`} 
                className="group flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors border border-white/5">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Call Me</p>
                    <p className="font-medium text-white">{PERSONAL_INFO.phone}</p>
                  </div>
                </div>
                <ArrowUpRight size={20} className="text-slate-600 group-hover:text-secondary transition-colors" />
              </a>
              
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-green-500 border border-white/5">
                  <MapPin size={20} />
                </div>
                <div>
                   <p className="text-sm text-slate-500">Location</p>
                   <p className="font-medium text-white">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>

          <form className="glass p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl bg-black/40" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Your Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Your Email</label>
                  <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="Tell me about your project..."></textarea>
              </div>

              <button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-primary/25 mt-2">
                <Send size={18} />
                Send Message
              </button>
            </div>
          </form>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;