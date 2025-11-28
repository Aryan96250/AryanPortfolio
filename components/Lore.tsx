import React from 'react';
import { Flame, Skull, AlertTriangle, Fingerprint } from 'lucide-react';
import { DRAGON_LORE } from '../constants';

const Lore: React.FC = () => {
  return (
    <section id="lore" className="py-20 relative z-10">
       <div className="container mx-auto px-6 lg:px-12">
          {/* Corrupted Container */}
          <div className="relative max-w-5xl mx-auto">
             
             {/* Glowing border effect */}
             <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-purple-600 to-red-600 rounded-3xl blur opacity-30 animate-pulse"></div>
             
             <div className="glass-card border border-red-900/50 bg-black/80 p-8 md:p-16 rounded-3xl relative overflow-hidden group">
                
                {/* Background noise/scratches */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')]"></div>
                
                {/* Header */}
                <div className="text-center mb-10 relative z-10">
                   <div className="flex justify-center items-center gap-4 text-red-600 mb-4 animate-bounce">
                      <Skull size={32} />
                      <AlertTriangle size={32} />
                      <Skull size={32} />
                   </div>
                   <h2 className="text-5xl md:text-7xl font-horror text-red-600 tracking-wider drop-shadow-[0_4px_10px_rgba(220,38,38,0.8)]">
                      {DRAGON_LORE.title}
                   </h2>
                   <p className="text-xl text-slate-500 font-display uppercase tracking-[0.3em] mt-2">
                      {DRAGON_LORE.subtitle}
                   </p>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-10 items-center">
                   <div className="space-y-6 relative">
                      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 to-transparent opacity-50"></div>
                      {DRAGON_LORE.description.map((text, idx) => (
                         <p key={idx} className="text-lg text-slate-300 font-light leading-relaxed hover:text-white transition-colors">
                            {idx === 1 ? (
                               <>
                                  <span className="text-red-500 font-bold font-horror text-2xl">Vex</span> (The Crimson Hunter) feeds on runtime errors and aggressive user interactions. Its scales burn with the heat of overclocked GPUs.
                               </>
                            ) : idx === 2 ? (
                               <>
                                  <span className="text-purple-500 font-bold font-horror text-2xl">Null</span> (The Void Walker) thrives in the silence of memory leaks, trailing shadows of deleted data.
                               </>
                            ) : (
                               text
                            )}
                         </p>
                      ))}
                   </div>
                   
                   {/* Visual "Card" for the creatures */}
                   <div className="relative h-64 md:h-full min-h-[250px] border border-red-900/30 rounded-xl bg-black/50 flex items-center justify-center overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent"></div>
                       <Fingerprint size={120} className="text-red-800/20 animate-pulse" />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-red-500 font-mono text-xs opacity-50 absolute top-4 left-4">
                             System.Alert: CREATURE_DETECTED
                          </p>
                          <p className="text-center text-red-600 font-horror text-4xl opacity-80 animate-flicker">
                             WARNING
                          </p>
                       </div>
                   </div>
                </div>

                {/* Footer Warning */}
                <div className="mt-12 text-center border-t border-red-900/30 pt-6">
                   <p className="text-red-500 font-mono text-sm tracking-[0.5em] animate-pulse">
                      {DRAGON_LORE.warning}
                   </p>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

export default Lore;