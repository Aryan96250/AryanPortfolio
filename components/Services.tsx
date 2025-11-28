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
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white text-shadow">
            What I <span className="text-accent italic font-serif">Build</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-white/80 mt-6 text-lg max-w-2xl mx-auto font-light text-shadow-sm">
             Delivering robust digital solutions tailored to your ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="glass-panel p-8 rounded-2xl group"
            >
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-black transition-colors shadow-lg">
                {getIcon(service.icon)}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 font-display tracking-wide">
                {service.title}
              </h3>
              
              <p className="text-white/70 text-sm leading-relaxed group-hover:text-white transition-colors">
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