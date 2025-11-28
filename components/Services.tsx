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
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-6">
            What I <span className="text-gradient">Provide</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to modern business needs, from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className="glass-card p-8 rounded-3xl hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-2 group border border-white/5"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:border-primary/50 group-hover:text-white group-hover:bg-primary transition-all duration-300 shadow-lg">
                {getIcon(service.icon)}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed">
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