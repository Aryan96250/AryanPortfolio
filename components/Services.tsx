import React from 'react';
import { SERVICES } from '../constants';
import { Layout, Smartphone, Link, Palette } from 'lucide-react';

const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Layout': return <Layout size={32} />;
      case 'Smartphone': return <Smartphone size={32} />;
      case 'Link': return <Link size={32} />;
      case 'Palette': return <Palette size={32} />;
      default: return <Layout size={32} />;
    }
  };

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-horror text-white mb-6 drop-shadow-[0_2px_5px_rgba(0,0,0,1)]">
            What I <span className="text-blood">Forge</span>
          </h2>
          <div className="w-24 h-1 bg-blood mx-auto rounded-full shadow-[0_0_15px_#ef4444]"></div>
          <p className="text-slate-300 mt-6 text-lg max-w-2xl mx-auto font-light">
             Elite digital capabilities forged in the depths of the code jungle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="glass-jungle p-8 rounded-2xl group transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-black/80 border border-green-900 flex items-center justify-center text-green-600 mb-6 group-hover:text-red-500 group-hover:border-red-600 transition-colors shadow-lg">
                {getIcon(service.icon)}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 font-display tracking-wide group-hover:text-red-400">
                {service.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;