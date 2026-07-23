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
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`mb-16 ${centered ? 'text-center' : ''}`}
  >
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
  </motion.div>
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
    {/* Hero Section */}
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-[95vh] flex items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-montessori-ivory/60 via-montessori-ivory/20 to-montessori-ivory/80 z-10" />
        <img 
          src="https://res.cloudinary.com/dr78wne7t/image/upload/v1784762154/WhatsApp_Image_2026-04-30_at_2.24.00_PM_asvfgq.jpg" 
          alt="Niños trabajando en ambiente Montessori" 
          className="w-full h-full object-cover opacity-30 scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
          }}
          className="max-w-5xl mx-auto flex flex-col items-center"
        >
          <motion.img 
            variants={{ hidden: { opacity: 0, scale: 0.9, y: 20 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            src="https://res.cloudinary.com/dr78wne7t/image/upload/v1784762558/FullColor_xkeddp.png" 
            alt="La Ribera School" 
            className="h-64 md:h-80 object-contain mb-8 drop-shadow-sm"
          />
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            className="text-2xl md:text-4xl text-montessori-grey mb-12 font-serif italic max-w-3xl mx-auto leading-tight opacity-90"
          >
            “Aprender con sentido, crecer con propósito.”
          </motion.p>
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            className="max-w-3xl mx-auto text-xl text-montessori-grey mb-14 leading-relaxed font-light"
          >
            Nuestro propósito es formar alumnos independientes, con pensamiento crítico, autorregulación y sentido de responsabilidad, preparados para asumir los retos académicos, personales y sociales de su futuro.
          </motion.div>
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPage('contacto')}
              className="bg-montessori-green text-white px-12 py-6 rounded-[40px] shadow-xl hover:shadow-2xl transition-all font-bold text-xl flex items-center gap-3 group"
            >
              Agendar una visita <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>

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
                En <span className="text-montessori-green font-bold">La Ribera School</span>, creemos que la educación no es algo que el maestro hace, sino un proceso natural que se desarrolla espontáneamente en el ser humano. Nuestro ambiente está cuidadosamente preparado para que los niños se sientan en casa, en confianza con los materiales que invitan a la exploración y al descubrimiento.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                "Ambiente preparado",
                "Guías certificadas",
                "Autonomía guiada",
                "Identidad y autoconocimiento",
                "Disciplina que forma y acompaña",
                "Comunidad y corresponsabilidad"
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  key={i} className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl border border-montessori-line/50"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="w-10 h-10 bg-montessori-green/10 rounded-full flex items-center justify-center text-montessori-green"
                  >
                    <CheckCircle2 size={20} />
                  </motion.div>
                  <span className="font-semibold text-montessori-grey">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
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
          </motion.div>
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-[50px] border border-montessori-line shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-3 bg-montessori-blue" />
            <div className="w-20 h-20 bg-montessori-blue/10 rounded-3xl flex items-center justify-center mb-8 group-hover:-rotate-6 transition-transform">
              <span className="text-4xl">📘</span>
            </div>
            <h3 className="text-4xl mb-6 font-display text-montessori-blue">Primaria Baja</h3>
            <p className="mb-10 text-xl leading-relaxed text-montessori-grey font-light">
              Se basa en un enfoque constructivista que promueve el aprendizaje activo a través de la experiencia, la reflexión y la colaboración. Este modelo se complementa con principios de la filosofía Montessori, fomentando la autonomía, la responsabilidad, el respeto por el desarrollo individual y la participación activa de cada estudiante en su proceso de aprendizaje.
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

    {/* CTA Final */}
    <section className="container mx-auto px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.01 }}
        className="bg-montessori-green rounded-[60px] text-white py-24 px-12 text-center shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl mb-10 text-white font-display leading-tight">¿Listos para empezar este viaje?</h2>
          <p className="text-2xl mb-16 opacity-90 leading-relaxed font-light">
            Agenda una cita para conocer nuestro modelo educativo y descubrir cómo puede acompañar el desarrollo de tu hijo.
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

const Nosotros = () => (
  <div className="py-24 space-y-32 relative overflow-hidden">

    <section className="container mx-auto px-6 max-w-6xl">
      <SectionTitle 
        title="Nosotros" 
        subtitle="Conoce nuestra esencia y el propósito que guía nuestra comunidad."
      />
      
      <div className="grid md:grid-cols-2 gap-16 mb-24">
        {/* Misión */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="bg-white p-12 rounded-[40px] shadow-sm border border-montessori-line relative overflow-hidden group hover:shadow-md transition-shadow"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-montessori-green group-hover:w-full transition-all duration-500 opacity-10" />
          <h3 className="text-3xl font-display text-montessori-green mb-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-montessori-green/10 flex items-center justify-center font-bold text-xl">M</div>
            Misión
          </h3>
          <p className="text-xl text-montessori-grey leading-relaxed font-light">
            Nuestra misión es ofrecer un entorno seguro y formativo donde cada niño desarrolle autonomía, fortalezca su carácter y aprenda a convivir con responsabilidad dentro de una comunidad que acompaña su crecimiento.
          </p>
        </motion.div>

        {/* Visión */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-12 rounded-[40px] shadow-sm border border-montessori-line relative overflow-hidden group hover:shadow-md transition-shadow"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-montessori-blue group-hover:w-full transition-all duration-500 opacity-10" />
          <h3 className="text-3xl font-display text-montessori-blue mb-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-montessori-blue/10 flex items-center justify-center font-bold text-xl">V</div>
            Visión
          </h3>
          <p className="text-xl text-montessori-grey leading-relaxed font-light">
            Ser una comunidad educativa sólida donde cada alumno crezca con curiosidad, confianza y amabilidad, convirtiéndose en una persona autónoma y responsable que contribuya de manera positiva a su entorno.
          </p>
        </motion.div>
      </div>

      {/* Valores */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-4xl text-center font-display text-montessori-red mb-16">Nuestros Valores</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "Respeto profundo por la infancia y sus procesos de desarrollo",
            "Autonomía guiada y progresiva",
            "Carácter y responsabilidad personal",
            "Comunidad y corresponsabilidad familia–escuela",
            "Disciplina que forma y acompaña",
            "Compromiso con el entorno"
          ].map((valor, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm border border-montessori-line"
            >
              <div className="w-8 h-8 shrink-0 rounded-full bg-montessori-yellow/20 flex items-center justify-center text-montessori-yellow font-bold mt-1">
                {i + 1}
              </div>
              <p className="text-lg text-montessori-grey font-medium leading-relaxed">{valor}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const Metodo = () => (
  <div className="py-24 space-y-24 relative overflow-hidden bg-white/30">

    <section className="container mx-auto px-6 max-w-6xl">
      <SectionTitle 
        title="Propuesta pedagógica" 
        subtitle="Educar no es transmitir información, sino formar seres humanos capaces de pensar, decidir, crear y contribuir al mundo con autonomía y responsabilidad." 
      />
      
      <div className="grid lg:grid-cols-5 gap-12 items-stretch mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-3 bg-white p-12 md:p-16 rounded-[40px] shadow-xl border border-montessori-line flex flex-col justify-center"
        >
          <p className="text-2xl md:text-3xl leading-relaxed text-montessori-grey font-serif italic">
            "La Ribera School integra la metodología Montessori en preescolar y continúa en primaria con una propuesta educativa centrada en el aprendizaje con propósito, el desarrollo del pensamiento crítico, la autonomía y la formación del carácter."
          </p>
          <div className="mt-8 h-1 w-24 bg-montessori-yellow rounded-full" />
          <p className="mt-8 text-xl text-montessori-grey leading-relaxed">
            Esta propuesta acompaña el desarrollo emocional y académico con equilibrio, dentro de una comunidad respetuosa y estructurada.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-2 relative rounded-[40px] overflow-hidden shadow-xl group"
        >
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
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="bg-white p-12 rounded-[40px] border border-montessori-line shadow-lg flex flex-col"
        >
          <h3 className="text-3xl md:text-4xl mb-6 text-montessori-green font-display">Metodología</h3>
          <p className="text-xl mb-8 leading-relaxed text-montessori-grey flex-grow font-light">
            Seguimos la metodología Montessori en kínder, una filosofía educativa basada en la autodirección, el aprendizaje práctico y la colaboración. En primaria, el modelo evoluciona hacia una mayor estructura académica, fortaleciendo la autonomía, el pensamiento crítico y el compromiso personal.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-12 rounded-[40px] border border-montessori-line shadow-lg flex flex-col"
        >
          <h3 className="text-3xl md:text-4xl mb-6 text-montessori-blue font-display">Filosofía Montessori</h3>
          <p className="text-xl mb-8 leading-relaxed text-montessori-grey flex-grow font-light">
            Es un enfoque educativo donde los niños aprenden de forma activa, eligiendo actividades dentro de un ambiente preparado que respeta su etapa de desarrollo y promueve la autonomía desde los primeros años.
          </p>
        </motion.div>
      </div>
    </section>
  </div>
);

const Niveles = () => (
  <div className="py-24 relative overflow-hidden bg-white/20">
    
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
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="bg-white p-6 rounded-3xl border border-montessori-line shadow-sm text-center font-bold text-montessori-green hover:shadow-md transition-shadow"
                >
                  {item}
                </motion.div>
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
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
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Lenguaje y Comunicación", 
                "Pensamiento Matemático", 
                "Ciencias y Exploración del Mundo",
                "Comunidad, Carácter y Responsabilidad"
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="bg-white p-5 rounded-3xl border border-montessori-line shadow-sm text-center font-bold text-sm text-montessori-blue hover:shadow-md transition-shadow flex items-center justify-center gap-2"
                >
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
            <div className="relative">
              <motion.div 
                animate={{ height: ["20%", "100%", "20%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-4 top-0 w-2 bg-montessori-blue rounded-full" 
              />
              <p className="text-xl leading-relaxed text-montessori-grey pl-8 italic font-serif opacity-80">
                "El aprendizaje con propósito fortalece la autonomía, la capacidad de reflexión, la resolución de problemas y el compromiso con los demás, preparando a los alumnos para aprender con independencia y actuar con responsabilidad."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Galeria = () => {
  const photos = [
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762155/DSC01894_oi8yae.jpg", size: "large" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762153/WhatsApp_Image_2026-04-13_at_2.20.42_PM_wu2v6g.jpg", size: "tall" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762154/DSC01871_nd880r.jpg", size: "small" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762154/WhatsApp_Image_2026-04-16_at_3.06.48_PM_4_j70hsi.jpg", size: "wide" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762154/WhatsApp_Image_2026-04-30_at_2.24.00_PM_asvfgq.jpg", size: "small" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762153/WhatsApp_Image_2026-04-16_at_3.06.48_PM_1_sf4xbl.jpg", size: "large" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762153/WhatsApp_Image_2026-03-24_at_3.05.53_PM_1_xcbxoq.jpg", size: "tall" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762153/WhatsApp_Image_2026-04-15_at_3.14.06_PM_gz0say.jpg", size: "small" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762151/WhatsApp_Image_2026-02-20_at_3.08.37_PM_3_c9g5k5.jpg", size: "wide" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762152/WhatsApp_Image_2026-03-20_at_2.17.24_PM_aarzzg.jpg", size: "small" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762153/WhatsApp_Image_2026-03-06_at_2.23.44_PM_fgtbbh.jpg", size: "tall" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762152/WhatsApp_Image_2026-03-20_at_2.17.25_PM_2_yzsdet.jpg", size: "small" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762152/WhatsApp_Image_2026-03-06_at_2.23.44_PM_1_tgyisv.jpg", size: "wide" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762152/WhatsApp_Image_2026-03-06_at_2.23.40_PM_pizna0.jpg", size: "large" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762151/WhatsApp_Image_2026-02-20_at_3.08.37_PM_2_rmvzed.jpg", size: "tall" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762151/WhatsApp_Image_2026-02-20_at_3.08.35_PM_2_jdifis.jpg", size: "small" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762151/WhatsApp_Image_2026-02-20_at_3.08.29_PM_zwryiy.jpg", size: "wide" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762149/Que_quiero_ser_vzp2kk.jpg", size: "small" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762150/WhatsApp_Image_2026-02-06_at_4.28.52_PM_ai79rm.jpg", size: "tall" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762150/WhatsApp_Image_2026-02-20_at_3.08.29_PM_1_quabkr.jpg", size: "large" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762149/WhatsApp_Image_2026-02-06_at_4.28.51_PM_1_ezakij.jpg", size: "small" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762147/Imagen_de_WhatsApp_2025-05-14_a_las_13.26.59_911c0fe9_p14ltn.jpg", size: "wide" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762148/IMG_1927_dvpgd9.jpg", size: "small" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762147/DSC02063_vmaozs.jpg", size: "tall" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762147/Imagen_de_WhatsApp_2025-08-06_a_las_14.22.19_170fbbb5_mpwyed.jpg", size: "large" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762146/Imagen_de_WhatsApp_2025-05-14_a_las_13.26.59_64e2c133_yws2yv.jpg", size: "wide" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762146/Imagen_de_WhatsApp_2024-09-18_a_las_11.36.16_ac2cd7f4_vkolrl.jpg", size: "small" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762144/DSC02033_qzda1j.jpg", size: "tall" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762144/DSC01018_-_copia_h5w1sk.jpg", size: "small" },
    { src: "https://res.cloudinary.com/dr78wne7t/image/upload/v1784762142/DDR_vtwuhh.jpg", size: "wide" }
  ];

  return (
    <div className="py-24 relative overflow-hidden bg-montessori-ivory/20">
      
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Galería" 
          subtitle="Un vistazo a nuestros ambientes preparados y momentos de aprendizaje." 
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[250px] mb-24 relative z-10">
          {photos.map((photo, i) => {
            let gridClass = "";
            if (photo.size === "large") gridClass = "md:col-span-2 md:row-span-2 col-span-2 row-span-2";
            if (photo.size === "tall") gridClass = "md:row-span-2 row-span-2";
            if (photo.size === "wide") gridClass = "md:col-span-2 col-span-2";
            
            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 5) * 0.1 }}
                whileHover={{ scale: 0.98 }}
                className={`relative group overflow-hidden rounded-[30px] shadow-lg ${gridClass}`}
              >
                <img 
                  src={photo.src.includes('unsplash.com') ? `${photo.src}?auto=format&fit=crop&q=80&w=1200` : photo.src} 
                  alt="Galería La Ribera" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            );
          })}
        </div>

        <div className="bg-montessori-green/5 p-16 rounded-[60px] border-2 border-dashed border-montessori-green/20 text-center relative max-w-4xl mx-auto">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg text-4xl">
            ✨
          </div>
          <p className="text-2xl text-montessori-grey leading-relaxed font-light">
            "Creemos que la educación debe formar personas curiosas, críticas y capaces de construir su propio camino."
          </p>
        </div>
      </div>
    </div>
  );
};

const Contacto = () => (
  <div className="py-24 relative overflow-hidden bg-white/50">
    
    <div className="container mx-auto px-6">
      <SectionTitle 
        title="Contáctanos" 
        subtitle="Estamos aquí para escucharlos y acompañarlos en la elección del mejor camino educativo para sus hijos." 
      />
      
      <div className="grid lg:grid-cols-2 gap-20 items-start max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4 p-8 bg-white rounded-[40px] shadow-sm border border-montessori-line hover:shadow-md transition-shadow flex flex-col items-center text-center"
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 bg-montessori-green/10 rounded-2xl flex items-center justify-center text-montessori-green mb-2"
            >
              <Mail size={32} />
            </motion.div>
            <h4 className="font-bold text-montessori-grey uppercase tracking-widest text-sm">Escríbenos</h4>
            <p className="text-lg font-medium break-all w-full">hola@riberamontessori.mx</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 p-8 bg-white rounded-[40px] shadow-sm border border-montessori-line hover:shadow-md transition-shadow flex flex-col items-center text-center"
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="w-16 h-16 bg-montessori-red/10 rounded-2xl flex items-center justify-center text-montessori-red mb-2"
            >
              <Phone size={32} />
            </motion.div>
            <h4 className="font-bold text-montessori-grey uppercase tracking-widest text-sm">Llámanos</h4>
            <p className="text-lg font-medium">+52 1 624 237 6028</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 p-8 bg-white rounded-[40px] shadow-sm border border-montessori-line hover:shadow-md transition-shadow flex flex-col items-center text-center"
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="w-16 h-16 bg-montessori-blue/10 rounded-2xl flex items-center justify-center text-montessori-blue mb-2"
            >
              <Clock size={32} />
            </motion.div>
            <h4 className="font-bold text-montessori-grey uppercase tracking-widest text-sm">Horario</h4>
            <p className="text-lg font-medium">Lun - Vie | 9:00 - 15:00</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 p-8 bg-white rounded-[40px] shadow-sm border border-montessori-line hover:shadow-md transition-shadow flex flex-col items-center text-center"
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              className="w-16 h-16 bg-montessori-yellow/10 rounded-2xl flex items-center justify-center text-montessori-yellow mb-2"
            >
              <MapPin size={32} />
            </motion.div>
            <h4 className="font-bold text-montessori-grey uppercase tracking-widest text-sm">Ubicación</h4>
            <p className="text-lg font-medium">La Ribera, Baja California Sur</p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-montessori-green/5 rounded-[60px] rotate-2 -z-10" />
          <form className="bg-white p-12 md:p-16 rounded-[50px] shadow-2xl space-y-8 border border-montessori-line relative" onSubmit={(e) => e.preventDefault()}>
            <div className="flex justify-center mb-6">
              <img src="https://res.cloudinary.com/dr78wne7t/image/upload/v1784762559/Terra_z9yf7n.png" alt="Logo La Ribera" className="h-16 object-contain opacity-90" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-display text-montessori-green">Envíanos un mensaje</h3>
              <p className="text-montessori-grey opacity-70">Completa el formulario y nos pondremos en contacto contigo a la brevedad.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-montessori-grey opacity-60">Nombre completo</label>
                <input type="text" className="w-full p-4 bg-montessori-ivory border-b-2 border-montessori-line focus:border-montessori-green focus:outline-none transition-all rounded-t-xl" placeholder="Ej. Ana García" required />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-montessori-grey opacity-60">Teléfono</label>
                <input type="tel" className="w-full p-4 bg-montessori-ivory border-b-2 border-montessori-line focus:border-montessori-green focus:outline-none transition-all rounded-t-xl" placeholder="55 1234 5678" required />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-montessori-grey opacity-60">Correo electrónico</label>
              <input type="email" className="w-full p-4 bg-montessori-ivory border-b-2 border-montessori-line focus:border-montessori-green focus:outline-none transition-all rounded-t-xl" placeholder="ana@ejemplo.com" required />
            </div>
            
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-montessori-grey opacity-60">Mensaje</label>
              <textarea rows={4} className="w-full p-4 bg-montessori-ivory border-b-2 border-montessori-line focus:border-montessori-green focus:outline-none transition-all rounded-t-xl" placeholder="¿En qué podemos ayudarte?" required></textarea>
            </div>
            
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-montessori-green text-white py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl mt-4"
            >
              Enviar mensaje
            </motion.button>
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
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'metodo', label: 'Modelo Educativo' },
    { id: 'niveles', label: 'Niveles' },
    { id: 'galeria', label: 'Galería' },
    { id: 'contacto', label: 'Contáctanos' },
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
            <img 
              src="https://res.cloudinary.com/dr78wne7t/image/upload/v1784762558/FullColor_xkeddp.png" 
              alt="La Ribera School" 
              className="h-16 object-contain transition-transform group-hover:scale-105"
            />
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
            {page === 'nosotros' && <Nosotros />}
            {page === 'metodo' && <Metodo />}
            {page === 'niveles' && <Niveles />}
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
                <img 
                  src="https://res.cloudinary.com/dr78wne7t/image/upload/v1784762603/FullColor_u2jf6p.png" 
                  alt="La Ribera School" 
                  className="h-20 object-contain"
                />
              </div>
              <p className="text-lg text-montessori-grey max-w-md mb-8 leading-relaxed">
                Aprender con sentido, crecer con propósito.
              </p>
              <div className="flex gap-4">
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
                  <span>+52 1 624 237 6028</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-montessori-ivory py-8 border-t border-montessori-line">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-montessori-grey uppercase tracking-widest">
            <p>© 2026 La Ribera School. Todos los derechos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-montessori-green">Aviso de Privacidad</a>
              <a href="#" className="hover:text-montessori-green">Términos y Condiciones</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
