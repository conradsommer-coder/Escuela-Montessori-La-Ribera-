const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldFooter = `      <footer className="bg-white pt-16">
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
              <p className="text-lg text-brand-knowledge max-w-md mb-8 leading-relaxed">
                Aprender con sentido, crecer con propósito.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-knowledge hover:bg-brand-knowledge hover:text-white transition-all shadow-sm">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-brand-knowledge uppercase tracking-widest font-bold mb-8 text-sm">Navegación</h4>
              <nav className="flex flex-col gap-4">
                {navItems.map(item => (
                  <button key={item.id} onClick={() => setPage(item.id)} className="text-left hover:text-brand-knowledge transition-colors text-lg">
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-brand-knowledge uppercase tracking-widest font-bold mb-8 text-sm">Contacto</h4>
              <div className="space-y-6 text-lg">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-brand-knowledge shrink-0 mt-1" />
                  <span>La Ribera, Ubicación Escolar</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-brand-knowledge shrink-0" />
                  <span>education@riberamontessori.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-brand-knowledge shrink-0" />
                  <span>+52 1 624 237 6028</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-brand-light py-8 border-t border-brand-balance">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-knowledge uppercase tracking-widest">
            <p>© 2026 La Ribera School. Todos los derechos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-brand-knowledge">Aviso de Privacidad</a>
              <a href="#" className="hover:text-brand-knowledge">Términos y Condiciones</a>
            </div>
          </div>
        </div>
      </footer>`;

const newFooter = `      <footer className="bg-brand-knowledge text-white pt-24 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-brand-foundation/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-growth/20 rounded-full blur-3xl pointer-events-none"
        />

        <div className="container mx-auto px-6 pb-20 relative z-10">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-1 md:col-span-12 lg:col-span-5"
            >
              <div className="flex flex-col gap-6 mb-8">
                <img 
                  src="https://res.cloudinary.com/dr78wne7t/image/upload/v1784762559/Terra_z9yf7n.png" 
                  alt="La Ribera School" 
                  className="h-24 object-contain brightness-0 invert origin-left"
                />
                <p className="text-xl md:text-2xl text-brand-light font-serif italic max-w-md leading-relaxed opacity-90">
                  "Aprender con sentido,<br/>crecer con propósito."
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <motion.a 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href="#" 
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-foundation hover:text-white transition-colors shadow-sm"
                >
                  <Facebook size={24} />
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-1 md:col-span-6 lg:col-span-3"
            >
              <h4 className="text-brand-light/60 uppercase tracking-widest font-bold mb-8 text-sm">Navegación</h4>
              <nav className="flex flex-col gap-4">
                {navItems.map((item, i) => (
                  <motion.button 
                    key={item.id} 
                    onClick={() => setPage(item.id)} 
                    whileHover={{ x: 5 }}
                    className="text-left text-brand-light hover:text-brand-foundation transition-colors text-lg flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-brand-foundation transition-all duration-300 group-hover:w-4"></span>
                    {item.label}
                  </motion.button>
                ))}
              </nav>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-1 md:col-span-6 lg:col-span-4"
            >
              <h4 className="text-brand-light/60 uppercase tracking-widest font-bold mb-8 text-sm">Contacto</h4>
              <div className="space-y-6 text-lg text-brand-light">
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-foundation transition-colors">
                    <MapPin size={20} />
                  </div>
                  <span className="mt-1.5 opacity-90">La Ribera, Baja California Sur</span>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-foundation transition-colors">
                    <Mail size={20} />
                  </div>
                  <span className="opacity-90">hola@riberamontessori.mx</span>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-foundation transition-colors">
                    <Phone size={20} />
                  </div>
                  <span className="opacity-90">+52 1 624 237 6028</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-black/20 py-8 border-t border-white/10 relative z-10"
        >
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-brand-light/60 uppercase tracking-widest">
            <p>© {new Date().getFullYear()} La Ribera School. Todos los derechos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-brand-foundation transition-colors">Aviso de Privacidad</a>
              <a href="#" className="hover:text-brand-foundation transition-colors">Términos y Condiciones</a>
            </div>
          </div>
        </motion.div>
      </footer>`;

content = content.replace(oldFooter, newFooter);
fs.writeFileSync('src/App.tsx', content);
