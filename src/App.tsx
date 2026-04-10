/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  ChevronRight, 
  Instagram, 
  Facebook,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const MontessoriSeparator = () => (
  <div className="montessori-beads flex h-1.5 w-full overflow-hidden my-12">
    {[...Array(20)].map((_, i) => (
      <motion.div 
        key={i}
        animate={{ 
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          delay: i * 0.1,
          ease: "easeInOut"
        }}
        className={`flex-1 ${
          i % 5 === 0 ? 'bg-m-red' : 
          i % 5 === 1 ? 'bg-m-blue' : 
          i % 5 === 2 ? 'bg-m-green' : 
          i % 5 === 3 ? 'bg-m-yellow' : 'bg-m-purple'
        }`} 
      />
    ))}
  </div>
);

const SectionTitle = ({ title, subtitle, centered = true }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-4xl md:text-5xl mb-6 font-display text-montessori-green tracking-tight">{title}</h2>
    {subtitle && <p className="text-xl text-montessori-grey max-w-3xl mx-auto leading-relaxed font-serif italic opacity-80">{subtitle}</p>}
    <div className={`mt-6 flex gap-2 ${centered ? 'justify-center' : ''}`}>
      {[
        { color: 'bg-montessori-red', delay: 0 },
        { color: 'bg-montessori-blue', delay: 0.2 },
        { color: 'bg-montessori-yellow', delay: 0.4 }
      ].map((dot, i) => (
        <motion.div 
          key={i}
          animate={{ 
            y: [0, -6, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            delay: dot.delay,
            ease: "easeInOut"
          }}
          className={`w-2.5 h-2.5 ${dot.color} rounded-full`} 
        />
      ))}
    </div>
  </div>
);

const LittlePeopleBorder = () => (
  <div className="bg-montessori-yellow/10 py-12 w-full flex items-center justify-center overflow-hidden relative">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
    <div className="flex gap-8 opacity-40">
      {Array.from({ length: 40 }).map((_, i) => (
        <div key={i} className={i % 2 === 0 ? "text-montessori-green" : "text-montessori-red"}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
          </svg>
        </div>
      ))}
    </div>
  </div>
);

const WarmOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] bg-[#FF9900]" />
);

const DecorativeBeads = ({ className }: { className?: string }) => (
  <div className={`absolute flex gap-2 ${className}`}>
    {[
      { color: 'bg-montessori-red', delay: 0 },
      { color: 'bg-montessori-blue', delay: 0.3 },
      { color: 'bg-montessori-yellow', delay: 0.6 },
      { color: 'bg-montessori-green', delay: 0.9 }
    ].map((dot, i) => (
      <motion.div 
        key={i}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          y: [0, -4, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          delay: dot.delay,
          ease: "easeInOut"
        }}
        className={`w-3 h-3 ${dot.color} rounded-full`} 
      />
    ))}
  </div>
);

// --- Pages ---

const Home = ({ setPage }: { setPage: (p: string) => void }) => (
  <div className="space-y-24 pb-24 relative overflow-hidden bg-montessori-ivory/30">
    {/* Background Blobs for Warmth */}
    <motion.div 
      animate={{ 
        scale: [1, 1.1, 1],
        x: [0, 20, 0],
        y: [0, 30, 0]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="blob-bg w-[600px] h-[600px] bg-montessori-yellow/20 top-[-10%] left-[-10%]" 
    />
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        x: [0, -30, 0],
        y: [0, -20, 0]
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="blob-bg w-[500px] h-[500px] bg-montessori-red/10 top-[20%] right-[-15%]" 
    />
    <motion.div 
      animate={{ 
        scale: [1, 1.15, 1],
        x: [0, 40, 0],
        y: [0, -40, 0]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="blob-bg w-[400px] h-[400px] bg-montessori-blue/10 bottom-[10%] left-[5%]" 
    />

    {/* Hero Section */}
    <section className="relative min-h-[95vh] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-montessori-ivory/60 via-montessori-ivory/20 to-montessori-ivory/80 z-10" />
        <img 
          src="https://res.cloudinary.com/dr78wne7t/image/upload/q_auto/f_auto/v1775777688/_MG_0096.CR2-2025-6-26_14.48.56_uwhvml.jpg" 
          alt="Niños trabajando en ambiente Montessori" 
          className="w-full h-full object-cover opacity-30 scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-block mb-6 px-6 py-2 bg-montessori-green/10 text-montessori-green rounded-full font-bold text-sm uppercase tracking-[0.2em]">
            Comunidad Educativa La Ribera
          </div>
          <h1 className="text-7xl md:text-[10rem] mb-8 leading-[0.85] font-display text-montessori-green drop-shadow-sm">
            Montessori <br />
            <span className="text-montessori-red font-serif italic">La Ribera</span>
          </h1>
          <p className="text-2xl md:text-4xl text-montessori-grey mb-12 font-serif italic max-w-3xl mx-auto leading-tight opacity-90">
            “Donde el aprendizaje nace del asombro y crece con libertad.”
          </p>
          <div className="max-w-3xl mx-auto text-xl text-montessori-grey mb-14 leading-relaxed font-light">
            Un espacio cálido y seguro diseñado para que cada niño descubra su potencial a través del respeto, la autonomía y el acompañamiento cercano de guías apasionadas.
          </div>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPage('contacto')}
              className="bg-montessori-green text-white px-12 py-6 rounded-[40px] shadow-xl hover:shadow-2xl transition-all font-bold text-xl flex items-center gap-3 group"
            >
              Agendar una visita <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPage('metodo')}
              className="bg-white border-2 border-montessori-green/30 text-montessori-green px-12 py-6 rounded-[40px] hover:bg-montessori-green/5 transition-all font-bold text-xl shadow-md"
            >
              Nuestro Método
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-10 w-20 h-20 bg-montessori-yellow/20 rounded-full blur-xl hidden lg:block"
      />
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-10 w-32 h-32 bg-montessori-blue/10 rounded-full blur-2xl hidden lg:block"
      />
    </section>

    <LittlePeopleBorder />

    {/* Propuesta Educativa */}
    <section className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-display text-montessori-green leading-tight">Una educación para la vida</h2>
              <motion.div 
                animate={{ width: ["4rem", "8rem", "4rem"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="h-2 bg-montessori-yellow rounded-full" 
              />
            </div>
            <div className="space-y-6 text-xl leading-relaxed text-montessori-grey font-light">
              <p>
                En <span className="text-montessori-green font-bold">Montessori La Ribera</span>, creemos que la educación no es algo que el maestro hace, sino un proceso natural que se desarrolla espontáneamente en el ser humano.
              </p>
              <p>
                Nuestro ambiente está cuidadosamente preparado para que los niños se sientan en casa, rodeados de materiales que invitan a la exploración y al descubrimiento.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                "Respeto a la individualidad",
                "Ambientes de paz",
                "Materiales científicos",
                "Guías certificadas",
                "Conexión con la naturaleza",
                "Desarrollo emocional"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl border border-montessori-line/50">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="w-10 h-10 bg-montessori-green/10 rounded-full flex items-center justify-center text-montessori-green"
                  >
                    <CheckCircle2 size={20} />
                  </motion.div>
                  <span className="font-semibold text-montessori-grey">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <motion.div 
              initial={{ rotate: 5 }}
              whileHover={{ rotate: 0 }}
              className="absolute -inset-6 bg-montessori-red/10 rounded-[60px] -z-10"
            />
            <motion.div 
              initial={{ rotate: -3 }}
              whileHover={{ rotate: 0 }}
              className="absolute -inset-6 bg-montessori-yellow/10 rounded-[60px] -z-10"
            />
            <img 
              src="https://res.cloudinary.com/dr78wne7t/image/upload/v1774579317/IMG_1927_l5dokl.jpg" 
              alt="Ambiente educativo Montessori" 
              className="rounded-[50px] shadow-2xl w-full h-[600px] object-cover border-8 border-white"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-montessori-blue/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>

    <MontessoriSeparator />

    {/* Niveles Preview */}
    <section className="py-12 bg-white/40 backdrop-blur-sm rounded-[100px] mx-4 md:mx-12">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Nuestros Niveles" 
          subtitle="Acompañamos el crecimiento de tus hijos con programas diseñados para cada etapa de su desarrollo." 
        />
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-[50px] border border-montessori-line shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-3 bg-montessori-green" />
            <div className="w-20 h-20 bg-montessori-green/10 rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
              <span className="text-4xl">🌿</span>
            </div>
            <h3 className="text-4xl mb-6 font-display text-montessori-green">Casa de Niños</h3>
            <p className="mb-10 text-xl leading-relaxed text-montessori-grey font-light">
              Un espacio de libertad y descubrimiento para niños de 3 a 6 años, donde florece la autonomía y el amor por el trabajo.
            </p>
            <button 
              onClick={() => setPage('niveles')} 
              className="text-montessori-green font-bold text-lg flex items-center gap-2 group-hover:gap-4 transition-all"
            >
              Explorar este nivel <ArrowRight size={20} />
            </button>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-[50px] border border-montessori-line shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-3 bg-montessori-blue" />
            <div className="w-20 h-20 bg-montessori-blue/10 rounded-3xl flex items-center justify-center mb-8 group-hover:-rotate-6 transition-transform">
              <span className="text-4xl">📘</span>
            </div>
            <h3 className="text-4xl mb-6 font-display text-montessori-blue">Primaria Baja</h3>
            <p className="mb-10 text-xl leading-relaxed text-montessori-grey font-light">
              El paso hacia la investigación y el razonamiento abstracto, manteniendo la esencia del respeto y la individualidad.
            </p>
            <button 
              onClick={() => setPage('niveles')} 
              className="text-montessori-blue font-bold text-lg flex items-center gap-2 group-hover:gap-4 transition-all"
            >
              Explorar este nivel <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>

    <MontessoriSeparator />

    {/* Comunidad Quote */}
    <section className="container mx-auto px-6 py-12">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <div className="relative inline-block">
          <div className="absolute -inset-8 bg-montessori-red/5 rounded-full blur-3xl -z-10" />
          <h2 className="text-5xl md:text-7xl font-display text-montessori-red leading-tight">Una comunidad que abraza</h2>
        </div>
        <p className="text-2xl md:text-3xl leading-relaxed text-montessori-grey font-light italic max-w-4xl mx-auto">
          "La educación es un proceso natural llevado a cabo por el niño y no se adquiere escuchando palabras, sino mediante experiencias sobre el medio."
        </p>
        <div className="flex justify-center gap-4">
          {[
            { color: 'bg-montessori-red', delay: 0 },
            { color: 'bg-montessori-blue', delay: 0.2 },
            { color: 'bg-montessori-green', delay: 0.4 },
            { color: 'bg-montessori-yellow', delay: 0.6 }
          ].map((dot, i) => (
            <motion.div 
              key={i}
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: dot.delay,
                ease: "easeInOut"
              }}
              className={`w-3 h-3 ${dot.color} rounded-full`} 
            />
          ))}
        </div>
      </div>
    </section>

    {/* CTA Final */}
    <section className="container mx-auto px-6 py-12">
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="bg-montessori-green rounded-[60px] text-white py-24 px-12 text-center shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="blob-bg w-[400px] h-[400px] bg-white/10 top-[-20%] right-[-10%]" />
        <div className="blob-bg w-[300px] h-[300px] bg-montessori-yellow/20 bottom-[-10%] left-[-5%]" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl mb-10 text-white font-display leading-tight">¿Listos para empezar este viaje?</h2>
          <p className="text-2xl mb-16 opacity-90 leading-relaxed font-light">
            Agenda una cita para conocer nuestros ambientes y descubrir cómo el método Montessori puede transformar la vida de tus hijos.
          </p>
          <button 
            onClick={() => setPage('contacto')}
            className="bg-white text-montessori-green px-16 py-6 rounded-full hover:bg-montessori-ivory hover:shadow-2xl transition-all font-bold text-2xl shadow-xl"
          >
            Agendar una visita hoy
          </button>
        </div>
      </motion.div>
    </section>
  </div>
);

const Ambientes = () => (
  <div className="py-24 space-y-32 relative overflow-hidden">
    {/* Decorative Blobs for Warmth */}
    <motion.div 
      animate={{ 
        scale: [1, 1.1, 1],
        x: [0, 30, 0],
        y: [0, 20, 0]
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="blob-bg w-[600px] h-[600px] bg-montessori-yellow top-[5%] left-[-15%] opacity-20" 
    />
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        x: [0, -20, 0],
        y: [0, -30, 0]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="blob-bg w-[500px] h-[500px] bg-montessori-red bottom-[20%] right-[-10%] opacity-15" 
    />
    <motion.div 
      animate={{ 
        scale: [1, 1.15, 1],
        x: [0, 40, 0],
        y: [0, -40, 0]
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="blob-bg w-[400px] h-[400px] bg-montessori-green top-[40%] right-[10%] opacity-10" 
    />

    <DecorativeBeads className="top-20 left-1/4" />
    <DecorativeBeads className="bottom-40 right-1/4" />
    <DecorativeBeads className="top-1/2 left-10 rotate-90" />

    <section className="container mx-auto px-6">
      <SectionTitle 
        title="Nuestros Ambientes" 
        subtitle="Espacios diseñados científicamente para fomentar la independencia, el orden y la concentración en cada etapa del desarrollo."
      />
      
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-32">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-montessori-green/10 rounded-[60px] rotate-3 group-hover:rotate-0 transition-transform duration-500" />
          <img 
            src="https://res.cloudinary.com/dr78wne7t/image/upload/v1774579342/DSC01018_tcq2qj.jpg" 
            alt="Ambiente Casa de Niños" 
            className="relative rounded-[50px] shadow-2xl w-full h-[500px] object-cover border-8 border-white"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="space-y-8">
          <motion.div 
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block px-4 py-1 bg-montessori-green/10 text-montessori-green rounded-full font-bold text-sm uppercase tracking-widest mb-2"
          >
            3 a 6 años
          </motion.div>
          <h3 className="text-5xl text-montessori-green font-display leading-tight">Casa de Niños</h3>
          <p className="text-xl leading-relaxed text-montessori-grey font-light">
            Casa de Niños se fundamenta en la filosofía Montessori como base del modelo INDIVIDUA. En esta etapa se construyen las bases de la autonomía, el orden interno y la concentración a través de materiales que invitan al descubrimiento espontáneo.
          </p>
          <div className="p-8 bg-white/60 backdrop-blur-sm rounded-3xl border-l-8 border-montessori-green shadow-sm italic text-xl text-montessori-grey relative font-serif">
            <span className="absolute -top-4 -left-4 text-6xl text-montessori-green/20 font-serif">“</span>
            La primera tarea de la educación es agitar la vida, pero dejarla libre para que se desarrolle.
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto my-24">
        <MontessoriSeparator />
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <div className="order-2 md:order-1 space-y-8">
          <div className="inline-block px-4 py-1 bg-montessori-blue/10 text-montessori-blue rounded-full font-bold text-sm uppercase tracking-widest mb-2">
            6 a 12 años
          </div>
          <h3 className="text-5xl text-montessori-blue font-display leading-tight">Primaria | Modelo INDIVIDUA</h3>
          <p className="text-xl leading-relaxed text-montessori-grey font-light">
            Nuestra Primaria representa la evolución del modelo hacia una mayor estructura académica sin perder la esencia de la autonomía. Los ambientes son dinámicos y colaborativos, fomentando la investigación profunda y el pensamiento crítico.
          </p>
          <div className="p-8 bg-white/60 backdrop-blur-sm rounded-3xl border-l-8 border-montessori-blue shadow-sm italic text-xl text-montessori-grey relative font-serif">
            <span className="absolute -top-4 -left-4 text-6xl text-montessori-blue/20 font-serif">“</span>
            El niño que tiene libertad y oportunidad de manipular y usar su mano en una forma lógica, desarrolla una fuerte personalidad.
          </div>
        </div>
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="order-1 md:order-2 relative group"
        >
          <div className="absolute -inset-4 bg-montessori-blue/10 rounded-[60px] -rotate-3 group-hover:rotate-0 transition-transform duration-500" />
          <img 
            src="https://res.cloudinary.com/dr78wne7t/image/upload/v1774579316/IMG-20250430-WA0020_atgcpk.jpg" 
            alt="Ambiente Primaria" 
            className="relative rounded-[50px] shadow-2xl w-full h-[500px] object-cover border-8 border-white"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  </div>
);

const Metodo = () => (
  <div className="py-24 space-y-24 relative overflow-hidden bg-white/30">
    {/* Decorative Blobs */}
    <div className="blob-bg w-[700px] h-[700px] bg-montessori-red top-[10%] right-[-15%] opacity-10" />
    <div className="blob-bg w-[500px] h-[500px] bg-montessori-yellow bottom-[5%] left-[-10%] opacity-20" />

    <DecorativeBeads className="top-10 right-1/4 rotate-12" />
    <DecorativeBeads className="bottom-20 left-1/3 -rotate-6" />

    <section className="container mx-auto px-6 max-w-6xl">
      <SectionTitle 
        title="Nuestra Propuesta Pedagógica" 
        subtitle="Un equilibrio perfecto entre la tradición Montessori y la innovación educativa del modelo INDIVIDUA." 
      />
      
      <div className="grid lg:grid-cols-5 gap-12 items-stretch mb-24">
        <div className="lg:col-span-3 bg-white p-12 md:p-16 rounded-[40px] shadow-xl border border-montessori-line flex flex-col justify-center">
          <p className="text-2xl md:text-3xl leading-relaxed text-montessori-grey font-serif italic">
            "Montessori La Ribera integra la filosofía Montessori en preescolar y evoluciona hacia el modelo educativo INDIVIDUA en primaria."
          </p>
          <div className="mt-8 h-1 w-24 bg-montessori-yellow rounded-full" />
          <p className="mt-8 text-xl text-montessori-grey leading-relaxed">
            Esta propuesta acompaña el desarrollo emocional y académico con equilibrio: autonomía con guía, libertad con propósito y formación del carácter dentro de una comunidad respetuosa y estructurada.
          </p>
        </div>
        <div className="lg:col-span-2 relative rounded-[40px] overflow-hidden shadow-xl group">
          <img 
            src="https://res.cloudinary.com/dr78wne7t/image/upload/v1774579322/Imagen_de_WhatsApp_2025-05-14_a_las_13.26.59_911c0fe9_imhvqz.jpg" 
            alt="Niño trabajando" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-montessori-green/60 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <p className="text-lg font-bold uppercase tracking-widest opacity-80 mb-2">Aprendizaje Activo</p>
            <h4 className="text-2xl text-white">Libertad con propósito</h4>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-12 rounded-[40px] border border-montessori-line shadow-lg relative group overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 w-48 h-48 bg-montessori-green/5 rounded-full -mr-24 -mt-24 group-hover:scale-125 transition-transform duration-500" />
          <div className="mb-8 w-16 h-16 bg-montessori-green/10 rounded-2xl flex items-center justify-center text-montessori-green">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-4xl mb-6 text-montessori-green font-display">Filosofía Montessori</h3>
          <p className="text-xl mb-8 leading-relaxed text-montessori-grey flex-grow">
            Es un enfoque educativo donde los niños aprenden de forma activa, eligiendo actividades dentro de un ambiente preparado que respeta su etapa de desarrollo y promueve la autonomía desde los primeros años.
          </p>
          <div className="bg-montessori-ivory p-8 rounded-3xl border border-montessori-line/50">
            <h4 className="text-xl mb-4 text-montessori-green font-bold uppercase tracking-wider">Desarrollo Integral:</h4>
            <p className="text-lg italic leading-relaxed text-montessori-grey font-serif">
              Favorece el desarrollo de niños seguros de sí mismos, responsables y motivados por aprender, fortaleciendo la concentración y el gusto por el aprendizaje.
            </p>
          </div>
        </div>

        <div className="bg-montessori-blue p-12 rounded-[40px] text-white shadow-2xl relative overflow-hidden flex flex-col">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full -mb-32 -mr-32" />
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="mb-8 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white">
              <ArrowRight size={32} />
            </div>
            <h3 className="text-4xl mb-6 text-white font-display">Modelo INDIVIDUA</h3>
            <p className="text-xl mb-10 opacity-90 leading-relaxed flex-grow">
              Integramos autonomía con acompañamiento, formación del carácter y compromiso con la comunidad, formando personas capaces de actuar con criterio propio.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {[
                "Autonomía guiada",
                "Individualidad con compromiso",
                "Equilibrio entre libertad y estructura",
                "Disciplina formativa"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20">
                  <div className="w-2 h-2 bg-montessori-yellow rounded-full" />
                  <span className="font-semibold text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const Niveles = () => (
  <div className="py-24 relative overflow-hidden bg-white/20">
    {/* Decorative Blobs */}
    <motion.div 
      animate={{ 
        scale: [1, 1.1, 1],
        x: [0, 20, 0],
        y: [0, 30, 0]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="blob-bg w-[600px] h-[600px] bg-montessori-blue top-[10%] left-[-15%] opacity-10" 
    />
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        x: [0, -30, 0],
        y: [0, -20, 0]
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="blob-bg w-[500px] h-[500px] bg-montessori-yellow bottom-[10%] right-[-10%] opacity-15" 
    />
    
    <DecorativeBeads className="top-1/4 right-10" />
    <DecorativeBeads className="bottom-1/4 left-10" />
    
    <div className="container mx-auto px-6">
      <SectionTitle 
        title="Niveles Educativos" 
        subtitle="Cada ambiente está diseñado para responder a las necesidades específicas de la etapa de desarrollo, respetando el ritmo individual." 
      />
      
      <div className="space-y-32">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1 space-y-10">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1 bg-montessori-green/10 text-montessori-green rounded-full font-bold text-sm uppercase tracking-widest">
                Preescolar
              </div>
              <h3 className="text-5xl text-montessori-green font-display">Casa de Niños</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Vida práctica", "Sensorial", "Lenguaje", "Matemáticas"].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-montessori-line shadow-sm text-center font-bold text-montessori-green hover:shadow-md transition-shadow">
                  {item}
                </div>
              ))}
            </div>
            <div className="relative">
              <motion.div 
                animate={{ height: ["20%", "100%", "20%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 top-0 w-2 bg-montessori-green rounded-full" 
              />
              <p className="text-xl leading-relaxed text-montessori-grey pl-8 italic font-serif opacity-80">
                "El ambiente preparado favorece la elección con propósito, la independencia progresiva y los primeros pasos en la responsabilidad social."
              </p>
            </div>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="order-1 md:order-2 relative"
          >
            <div className="absolute -inset-4 bg-montessori-green/5 rounded-[60px] rotate-3" />
            <img 
              src="https://res.cloudinary.com/dr78wne7t/image/upload/v1774579342/DSC01018_tcq2qj.jpg" 
              alt="Niños trabajando" 
              className="relative rounded-[50px] shadow-2xl w-full h-[550px] object-cover border-8 border-white"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <MontessoriSeparator />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-montessori-blue/5 rounded-[60px] -rotate-3" />
            <img 
              src="https://res.cloudinary.com/dr78wne7t/image/upload/v1774579316/IMG-20250430-WA0020_atgcpk.jpg" 
              alt="Primaria" 
              className="relative rounded-[50px] shadow-2xl w-full h-[550px] object-cover border-8 border-white"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1 bg-montessori-blue/10 text-montessori-blue rounded-full font-bold text-sm uppercase tracking-widest">
                Primaria
              </div>
              <h3 className="text-5xl text-montessori-blue font-display">Primaria Baja</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Pensamiento lógico", 
                "Gestión del tiempo", 
                "Metas personales",
                "Proyectos guiados"
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-3xl border border-montessori-line shadow-sm text-center font-bold text-sm text-montessori-blue hover:shadow-md transition-shadow">
                  {item}
                </div>
              ))}
            </div>
            <div className="relative">
              <motion.div 
                animate={{ height: ["20%", "100%", "20%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-4 top-0 w-2 bg-montessori-blue rounded-full" 
              />
              <p className="text-xl leading-relaxed text-montessori-grey pl-8 italic font-serif opacity-80">
                "INDIVIDUA funciona como un puente metodológico entre la base Montessori y los retos académicos y sociales de la primaria."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Comunidad = () => (
  <div className="py-24 space-y-24 relative overflow-hidden bg-montessori-ivory/50">
    {/* Decorative Blobs */}
    <motion.div 
      animate={{ 
        scale: [1, 1.15, 1],
        x: [0, 30, 0],
        y: [0, 20, 0]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="blob-bg w-[600px] h-[600px] bg-montessori-red bottom-[-10%] left-[-15%] opacity-10" 
    />
    <motion.div 
      animate={{ 
        scale: [1, 1.1, 1],
        x: [0, -20, 0],
        y: [0, -30, 0]
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="blob-bg w-[500px] h-[500px] bg-montessori-yellow top-[10%] right-[-10%] opacity-15" 
    />
    
    <section className="container mx-auto px-6 max-w-6xl">
      <SectionTitle 
        title="Comunidad y Familia" 
        subtitle="La educación es un esfuerzo compartido entre la escuela y el hogar, basado en la confianza y el respeto mutuo." 
      />
      
      <div className="bg-white p-12 md:p-20 rounded-[50px] shadow-2xl mb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-montessori-red" />
        <p className="text-3xl md:text-4xl leading-tight text-montessori-grey font-serif italic text-center max-w-4xl mx-auto opacity-90">
          "La relación se basa en corresponsabilidad. La escuela guía y estructura. La familia respalda y modela."
        </p>
        <div className="mt-12 flex justify-center">
          <motion.div 
            animate={{ width: ["4rem", "8rem", "4rem"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="h-1 bg-montessori-red/30 rounded-full" 
          />
        </div>
        <p className="mt-12 text-xl text-montessori-grey text-center max-w-3xl mx-auto leading-relaxed">
          Existe comunicación clara, respetuosa y constante, alineada a la visión institucional para acompañar el desarrollo integral de cada niño.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className="text-5xl text-montessori-green font-display">Actividades Complementarias</h3>
            <p className="text-2xl leading-relaxed text-montessori-grey font-light">
              Nuestras actividades están diseñadas para fortalecer la concentración, la disciplina formativa, la expresión personal y la autorregulación.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[40px] shadow-lg border border-montessori-line text-center group"
            >
              <div className="w-24 h-24 bg-montessori-red/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-montessori-red group-hover:text-white transition-all duration-500 shadow-inner">
                <span className="text-5xl">💃</span>
              </div>
              <span className="font-display font-bold text-montessori-red text-2xl">Danza</span>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[40px] shadow-lg border border-montessori-line text-center group"
            >
              <div className="w-24 h-24 bg-montessori-blue/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-montessori-blue group-hover:text-white transition-all duration-500 shadow-inner">
                <span className="text-5xl">🎨</span>
              </div>
              <span className="font-display font-bold text-montessori-blue text-2xl">Arte</span>
            </motion.div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-montessori-yellow/10 rounded-[60px] rotate-3 -z-10" />
          <div className="absolute -inset-6 bg-montessori-red/5 rounded-[60px] -rotate-3 -z-10" />
          <img 
            src="https://res.cloudinary.com/dr78wne7t/image/upload/q_auto/f_auto/v1774579326/Imagen_de_WhatsApp_2025-05-14_a_las_13.26.59_64e2c133_ep6kmc.jpg" 
            alt="Comunidad" 
            className="rounded-[50px] shadow-2xl w-full h-[600px] object-cover border-8 border-white"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  </div>
);

const Galeria = () => {
  const photos = [
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1774579865/IMG_0756_em3owg.jpg", size: "large", caption: "Momentos de aprendizaje" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1774579513/IMG_0739_h42ai0.jpg", size: "tall", caption: "Exploración y juego" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1774579512/IMG_0738_odobwy.jpg", size: "small", caption: "Concentración total" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1774579508/IMG_0727_kdzu5w.jpg", size: "wide", caption: "Vida escolar" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1774579493/IMG_0423_n3wxen.jpg", size: "small", caption: "Descubrimiento" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1774579457/IMG_2934_z4qw0y.jpg", size: "large", caption: "Ambientes preparados" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1774579456/IMG-20250901-WA0006_pbhljy.jpg", size: "tall", caption: "Trabajo en equipo" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1774579347/DSC01005_l8b78b.jpg", size: "small", caption: "Materiales Montessori" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1774579342/DSC01018_tcq2qj.jpg", size: "wide", caption: "Desarrollo integral" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1774579338/IMG-20250425-WA0010_vrtbwe.jpg", size: "small", caption: "Creatividad" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1774579335/DSC01014_v7cmoa.jpg", size: "tall", caption: "Independencia" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1774579328/DSC01015_d9i755.jpg", size: "small", caption: "Respeto y paz" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1774579325/Imagen_de_WhatsApp_2025-05-09_a_las_12.46.32_58ff6c61_kfxfyj.jpg", size: "wide", caption: "Comunidad" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1774579324/IMG_1884_gideac.jpg", size: "large", caption: "Alegría de aprender" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1774579322/Imagen_de_WhatsApp_2025-05-15_a_las_13.16.45_492f23c0_fcuepv.jpg", size: "tall", caption: "Curiosidad natural" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1774579322/Imagen_de_WhatsApp_2025-05-14_a_las_13.26.59_911c0fe9_imhvqz.jpg", size: "small", caption: "Enfoque" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1774579317/IMG_1927_l5dokl.jpg", size: "wide", caption: "Espacios de luz" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1774579316/IMG-20250430-WA0022_hhvhqm.jpg", size: "small", caption: "Armonía" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1774579316/IMG-20250430-WA0021_hxbyjn.jpg", size: "tall", caption: "Crecimiento" }
  ];

  return (
    <div className="py-24 relative overflow-hidden bg-montessori-ivory/20">
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, 40, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="blob-bg w-[800px] h-[800px] bg-montessori-yellow/10 top-[-20%] right-[-10%]" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, -40, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="blob-bg w-[600px] h-[600px] bg-montessori-blue/5 bottom-[-10%] left-[-10%]" 
      />
      
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Nuestra Vida Escolar" 
          subtitle="Un vistazo a los momentos de descubrimiento, trabajo concentrado y alegría que definen el día a día en nuestra escuela."
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px] mb-24">
          {photos.map((photo, i) => {
            let gridClass = "";
            if (photo.size === "large") gridClass = "md:col-span-2 md:row-span-2 col-span-2 row-span-2";
            if (photo.size === "tall") gridClass = "md:row-span-2 row-span-2";
            if (photo.size === "wide") gridClass = "md:col-span-2 col-span-2";
            
            return (
              <motion.div 
                key={i} 
                whileHover={{ scale: 0.98 }}
                className={`relative group overflow-hidden rounded-[30px] shadow-lg ${gridClass}`}
              >
                <img 
                  src={photo.src.includes('unsplash.com') ? `${photo.src}?auto=format&fit=crop&q=80&w=1200` : photo.src} 
                  alt={photo.caption} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-display font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="bg-montessori-green/5 p-16 rounded-[60px] border-2 border-dashed border-montessori-green/20 text-center relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg text-4xl">
            ✨
          </div>
          <blockquote className="italic text-3xl md:text-5xl text-montessori-green font-serif max-w-4xl mx-auto leading-tight opacity-90">
            “La esencia de la educación Montessori es ayudar al niño en su desarrollo y ayudarlo a adaptarse a cualquier condición que el presente le requiera.”
          </blockquote>
          <cite className="block mt-8 text-xl font-bold text-montessori-grey uppercase tracking-widest">— Maria Montessori</cite>
        </div>
      </div>
    </div>
  );
};

const Contacto = () => (
  <div className="py-24 relative overflow-hidden bg-white/50">
    <motion.div 
      animate={{ 
        scale: [1, 1.1, 1],
        x: [0, 20, 0],
        y: [0, 30, 0]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="blob-bg w-[600px] h-[600px] bg-montessori-green/10 bottom-[-10%] right-[-10%]" 
    />
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        x: [0, -30, 0],
        y: [0, -20, 0]
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="blob-bg w-[500px] h-[500px] bg-montessori-red/5 top-[-5%] left-[-5%]" 
    />
    
    <div className="container mx-auto px-6">
      <SectionTitle 
        title="Iniciemos una conversación" 
        subtitle="Estamos aquí para escucharlos y acompañarlos en la elección del mejor camino educativo para sus hijos." 
      />
      
      <div className="grid lg:grid-cols-2 gap-20 items-start max-w-7xl mx-auto">
        <div className="space-y-16">
          <div className="space-y-8">
            <h3 className="text-5xl text-montessori-green font-display leading-tight">Visítanos y siente la diferencia</h3>
            <p className="text-2xl leading-relaxed text-montessori-grey font-light">
              Nada sustituye la experiencia de ver a los niños trabajando en armonía. Agenda una visita personalizada para conocer nuestras instalaciones y resolver todas tus dudas.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-10">
            <div className="space-y-4 p-8 bg-white rounded-[40px] shadow-sm border border-montessori-line hover:shadow-md transition-shadow">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 bg-montessori-green/10 rounded-2xl flex items-center justify-center text-montessori-green"
              >
                <Mail size={32} />
              </motion.div>
              <h4 className="font-bold text-montessori-grey uppercase tracking-widest text-sm">Escríbenos</h4>
              <p className="text-lg font-medium">hola@riberamontessori.mx</p>
            </div>
            <div className="space-y-4 p-8 bg-white rounded-[40px] shadow-sm border border-montessori-line hover:shadow-md transition-shadow">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="w-16 h-16 bg-montessori-red/10 rounded-2xl flex items-center justify-center text-montessori-red"
              >
                <Phone size={32} />
              </motion.div>
              <h4 className="font-bold text-montessori-grey uppercase tracking-widest text-sm">Llámanos</h4>
              <p className="text-lg font-medium">+52 (55) 1234 5678</p>
            </div>
            <div className="space-y-4 p-8 bg-white rounded-[40px] shadow-sm border border-montessori-line hover:shadow-md transition-shadow">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="w-16 h-16 bg-montessori-blue/10 rounded-2xl flex items-center justify-center text-montessori-blue"
              >
                <Clock size={32} />
              </motion.div>
              <h4 className="font-bold text-montessori-grey uppercase tracking-widest text-sm">Horario</h4>
              <p className="text-lg font-medium">Lun - Vie | 8:00 - 15:00</p>
            </div>
            <div className="space-y-4 p-8 bg-white rounded-[40px] shadow-sm border border-montessori-line hover:shadow-md transition-shadow">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                className="w-16 h-16 bg-montessori-yellow/10 rounded-2xl flex items-center justify-center text-montessori-yellow"
              >
                <MapPin size={32} />
              </motion.div>
              <h4 className="font-bold text-montessori-grey uppercase tracking-widest text-sm">Ubicación</h4>
              <p className="text-lg font-medium">La Ribera, Ciudad de México</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-[50px] shadow-2xl h-[400px]">
            <div className="absolute inset-0 bg-montessori-green/20 group-hover:bg-transparent transition-colors z-10" />
            <img 
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1000" 
              alt="Mapa" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <button className="bg-white text-montessori-green px-8 py-4 rounded-full font-bold shadow-xl flex items-center gap-2 hover:scale-105 transition-all">
                Ver en Google Maps <MapPin size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-montessori-green/5 rounded-[60px] rotate-2 -z-10" />
          <form className="bg-white p-12 md:p-16 rounded-[50px] shadow-2xl space-y-10 border border-montessori-line relative">
            <div className="space-y-4">
              <h3 className="text-3xl font-display text-montessori-green">Solicitud de Información</h3>
              <p className="text-montessori-grey opacity-70">Completa el formulario y nos pondremos en contacto contigo a la brevedad.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-montessori-grey opacity-60">Nombre del Padre/Madre</label>
                <input type="text" className="w-full p-5 bg-montessori-ivory border-b-2 border-montessori-line focus:border-montessori-green focus:outline-none transition-all rounded-t-xl" placeholder="Ej. Ana García" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-montessori-grey opacity-60">Correo electrónico</label>
                <input type="email" className="w-full p-5 bg-montessori-ivory border-b-2 border-montessori-line focus:border-montessori-green focus:outline-none transition-all rounded-t-xl" placeholder="ana@ejemplo.com" />
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-montessori-grey opacity-60">Teléfono de contacto</label>
                <input type="tel" className="w-full p-5 bg-montessori-ivory border-b-2 border-montessori-line focus:border-montessori-green focus:outline-none transition-all rounded-t-xl" placeholder="55 1234 5678" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-montessori-grey opacity-60">Edad del alumno(a)</label>
                <input type="text" className="w-full p-5 bg-montessori-ivory border-b-2 border-montessori-line focus:border-montessori-green focus:outline-none transition-all rounded-t-xl" placeholder="Ej. 4 años" />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-montessori-grey opacity-60">Nivel de interés</label>
              <div className="relative">
                <select className="w-full p-5 bg-montessori-ivory border-b-2 border-montessori-line focus:border-montessori-green focus:outline-none transition-all rounded-t-xl appearance-none cursor-pointer font-medium">
                  <option>Casa de Niños (3-6 años)</option>
                  <option>Primaria Baja (6-8 años)</option>
                </select>
                <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 rotate-90 text-montessori-green" size={20} />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-montessori-grey opacity-60">¿Cómo nos conociste?</label>
              <input type="text" className="w-full p-5 bg-montessori-ivory border-b-2 border-montessori-line focus:border-montessori-green focus:outline-none transition-all rounded-t-xl" placeholder="Ej. Recomendación, Redes Sociales..." />
            </div>
            
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-montessori-grey opacity-60">Mensaje adicional</label>
              <textarea rows={3} className="w-full p-5 bg-montessori-ivory border-b-2 border-montessori-line focus:border-montessori-green focus:outline-none transition-all rounded-t-xl" placeholder="Cuéntanos un poco más sobre tu hijo(a)..."></textarea>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-montessori-green text-white py-6 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all shadow-xl"
            >
              Enviar solicitud de admisión
            </motion.button>
            <p className="text-center text-sm text-montessori-grey opacity-50">Al enviar este formulario, aceptas nuestra política de privacidad.</p>
          </form>
        </div>
      </div>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [page, setPage] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'ambientes', label: 'Ambientes' },
    { id: 'metodo', label: 'Método' },
    { id: 'niveles', label: 'Niveles' },
    { id: 'comunidad', label: 'Comunidad' },
    { id: 'galeria', label: 'Galería' },
    { id: 'contacto', label: 'Admisiones / Contacto' },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-montessori-green/20">
      <WarmOverlay />
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 border-b-4 border-montessori-red shadow-sm">
        <div className="container mx-auto px-6 h-28 flex items-center justify-between">
          <div 
            className="flex items-center gap-4 cursor-pointer group" 
            onClick={() => setPage('inicio')}
          >
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-14 h-14 bg-montessori-green rounded-full flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform shadow-md"
            >
              M
            </motion.div>
            <div>
              <span className="block font-display font-semibold text-2xl leading-tight text-montessori-green">Montessori</span>
              <span className="block text-sm tracking-[0.3em] uppercase text-montessori-grey font-bold">La Ribera</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`text-xs font-bold uppercase tracking-[0.15em] transition-all hover:text-montessori-green relative py-2 ${
                  page === item.id ? 'text-montessori-green' : 'text-montessori-grey'
                }`}
              >
                {item.label}
                {page === item.id && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-montessori-green"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-montessori-grey"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-xl font-medium uppercase tracking-widest text-left ${
                    page === item.id ? 'text-montessori-green font-bold' : 'text-montessori-grey'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {page === 'inicio' && <Home setPage={setPage} />}
            {page === 'ambientes' && <Ambientes />}
            {page === 'metodo' && <Metodo />}
            {page === 'niveles' && <Niveles />}
            {page === 'comunidad' && <Comunidad />}
            {page === 'galeria' && <Galeria />}
            {page === 'contacto' && <Contacto />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-16">
        <div className="container mx-auto px-6 pb-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 bg-montessori-green rounded-full flex items-center justify-center text-white font-bold text-xl"
                >
                  M
                </motion.div>
                <span className="font-display font-semibold text-2xl text-montessori-green">Montessori La Ribera</span>
              </div>
              <p className="text-lg text-montessori-grey max-w-md mb-8 leading-relaxed">
                Una comunidad educativa comprometida con el desarrollo auténtico de cada niño, fomentando autonomía, carácter y responsabilidad.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-montessori-ivory flex items-center justify-center text-montessori-green hover:bg-montessori-green hover:text-white transition-all shadow-sm">
                  <Instagram size={24} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-montessori-ivory flex items-center justify-center text-montessori-green hover:bg-montessori-green hover:text-white transition-all shadow-sm">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-montessori-grey uppercase tracking-widest font-bold mb-8 text-sm">Navegación</h4>
              <nav className="flex flex-col gap-4">
                {navItems.map(item => (
                  <button key={item.id} onClick={() => setPage(item.id)} className="text-left hover:text-montessori-green transition-colors text-lg">
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-montessori-grey uppercase tracking-widest font-bold mb-8 text-sm">Contacto</h4>
              <div className="space-y-6 text-lg">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-montessori-green shrink-0 mt-1" />
                  <span>La Ribera, Ubicación Escolar</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-montessori-green shrink-0" />
                  <span>education@riberamontessori.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-montessori-green shrink-0" />
                  <span>+52 (000) 000-0000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-montessori-ivory py-8 border-t border-montessori-line">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-montessori-grey uppercase tracking-widest">
            <p>© 2026 Montessori La Ribera. Todos los derechos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-montessori-green">Aviso de Privacidad</a>
              <a href="#" className="hover:text-montessori-green">Términos y Condiciones</a>
            </div>
          </div>
        </div>
        <LittlePeopleBorder />
      </footer>
    </div>
  );
}
