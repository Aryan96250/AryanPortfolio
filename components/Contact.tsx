import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="relative pt-24 pb-12 z-10 bg-black/90 border-t border-red-900/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-5xl font-horror text-white mb-8">Final <span className="text-blood">Call</span></h2>
            <p className="text-slate-400 mb-8 max-w-md">
              The jungle is dark and full of bugs. Let's light a fire and build something secure.
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-slate-300 hover:text-red-500 transition-colors group">
                <div className="w-12 h-12 rounded bg-black border border-green-900 flex items-center justify-center group-hover:border-red-500 transition-colors">
                  <Mail />
                </div>
                <div>
                  <p className="text-xs text-green-600 uppercase tracking-widest">Email</p>
                  <p className="text-lg font-bold">{PERSONAL_INFO.email}</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-slate-300">
                 <div className="w-12 h-12 rounded bg-black border border-green-900 flex items-center justify-center text-green-600">
                    <MapPin />
                 </div>
                 <div>
                    <p className="text-xs text-green-600 uppercase tracking-widest">Base</p>
                    <p className="text-lg font-bold">{PERSONAL_INFO.location}</p>
                 </div>
              </div>
            </div>
          </div>

          <form className="glass-jungle p-8 rounded-3xl" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-green-600 uppercase font-bold ml-1">Identity</label>
                <input type="text" className="w-full bg-black/50 border border-green-900/50 rounded-lg p-3 text-white focus:border-red-500 outline-none transition-colors" placeholder="Name" />
              </div>
              <div>
                <label className="text-xs text-green-600 uppercase font-bold ml-1">Frequency</label>
                <input type="email" className="w-full bg-black/50 border border-green-900/50 rounded-lg p-3 text-white focus:border-red-500 outline-none transition-colors" placeholder="Email" />
              </div>
              <div>
                <label className="text-xs text-green-600 uppercase font-bold ml-1">Transmission</label>
                <textarea rows={4} className="w-full bg-black/50 border border-green-900/50 rounded-lg p-3 text-white focus:border-red-500 outline-none transition-colors resize-none" placeholder="Message..."></textarea>
              </div>
              <button className="w-full bg-blood hover:bg-red-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 shadow-[0_0_15px_#8a0303] transition-all">
                <Send size={18} />
                INITIATE
              </button>
            </div>
          </form>

        </div>
        <div className="mt-12 pt-8 border-t border-green-900/20 text-center text-slate-600 text-sm">
           &copy; {new Date().getFullYear()} Aryan Chauhan. Survival Guaranteed.
        </div>
      </div>
    </footer>
  );
};

export default Contact;