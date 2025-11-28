import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-slate-400 mb-8 text-lg">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to drop a message.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email Me</p>
                  <p className="font-medium">{PERSONAL_INFO.email}</p>
                </div>
              </a>

              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-secondary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Call Me</p>
                  <p className="font-medium">{PERSONAL_INFO.phone}</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-slate-300 p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-green-500">
                  <MapPin size={20} />
                </div>
                <div>
                   <p className="text-sm text-slate-500">Location</p>
                   <p className="font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Your Name</label>
                <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Your Email</label>
                <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                <textarea rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Tell me about your project..."></textarea>
              </div>

              <button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <Send size={18} />
                Send Message
              </button>
            </div>
          </form>

        </div>

        <div className="text-center pt-8 border-t border-slate-900 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;