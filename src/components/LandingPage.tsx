import React, { useState, useEffect } from 'react';
import { Phone, Facebook, Twitter, Instagram, MessageCircle, UserCheck, Stethoscope, Puzzle, Shield, TrendingUp, Heart, Check } from 'lucide-react';

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const keyPoints = [
    { 
      icon: "https://assets.cdn.filesafe.space/HNqB08brMOVzuhjCgZwU/media/66fb107af9b60c163ad17690.png",
      title: "Profesionales",
      text: 'Accede a una red de especialistas médicos comprometidos con tu bienestar.'
    },
    { 
      icon: "https://assets.cdn.filesafe.space/HNqB08brMOVzuhjCgZwU/media/66f57e688b5a295b8ea05495.png",
      title: "Tecnología",
      text: 'Atención médica disponible 24/7, accesible desde cualquier lugar, con seguimiento continuo.'
    },
    { 
      icon: "https://assets.cdn.filesafe.space/HNqB08brMOVzuhjCgZwU/media/66f57e68cf8c7ab9d7e56830.png",
      title: "Emergencias",
      text: 'Servicio de ambulancia ante situaciones de riesgo vital, ofreciendo asistencia inmediata.'
    },
    { 
      icon: "https://assets.cdn.filesafe.space/HNqB08brMOVzuhjCgZwU/media/66fb107a2087e5c08bd5e261.png",
      title: "Siempre cerca tuyo",
      text: 'Recibe atención médica cerca de tu hogar y ahorra tiempo en tu rutina diaria.'
    },
  ];

  const plans = [
    {
      name: 'Plan Individual',
      color: '#33658A',
      features: [
        'Cuidados personalizados, diseñados para ti.',
        'Atención médica 24/7, disponible todo el año.',
        'Videoconsultas con especialistas, para una atención rápida y eficaz.',
        'Descuentos en farmacias, para que cuides tu salud al mejor precio.',
        'Acceso a nuestra red de centros médicos.',
      ],
    },
    {
      name: 'Plan Mujer',
      color: '#E56399',
      features: [
        'Diseñado para acompañarte en cada etapa de tu vida.',
        'Acceso a ginecología y obstetricia.',
        'Atención personalizada enfocada en la salud integral de la mujer.',
        'Apoyo en salud mental y bienestar.',
        'Programas de prevención y cuidado específicos para la mujer.',
      ],
    },
    {
      name: 'Plan Familiar',
      color: '#29A2AF',
      features: [
        'Protege a quienes más quieres con planes integrales para toda la familia.',
        'Turnos prioritarios para niños y adultos.',
        'Servicios de emergencia y urgencias médicas, siempre disponibles.',
        'Chequeos preventivos anuales para toda la familia.',
      ],
    },
    {
      name: 'TERCERA EDAD',
      color: '#33658A',
      features: [
        'Consultas Clínicas Bonificadas',
        'Tarifa Preferencial en Cuidados en el Hogar (Enfermería, Acompañante, Cuidador)',
        'Asistencia Tecnológica Remota',
        'Asesor Previsional',
        'Servicio de Asistencia Legal',
        'Asistencia por ROBO en vía pública',
        'Asistencia Nutricional',
        'Servicio de Asistente Personal',
        'Asistencia Veterinaria',
      ],
    },
  ];

  const whyChooseUs = [
    { icon: UserCheck, title: "Centrado en el paciente", description: "El bienestar y la satisfacción del paciente son nuestra máxima prioridad." },
    { icon: Stethoscope, title: "Accesibilidad", description: "Ponemos la salud al alcance de todos, ofreciendo planes adaptados a diferentes presupuestos." },
    { icon: Puzzle, title: "Personalización", description: "Cada persona y familia tiene necesidades únicas, por lo que ofrecemos soluciones a medida." },
    { icon: Shield, title: "Confianza", description: "Construimos relaciones sólidas basadas en la transparencia y la honestidad." },
    { icon: TrendingUp, title: "Mejora continua", description: "Estamos siempre buscando nuevas formas de mejorar nuestros servicios y adaptarnos a las necesidades de nuestros clientes y del sector de la salud." },
    { icon: Heart, title: "Compromiso social", description: "Contribuimos al bienestar de la comunidad y promovemos hábitos de vida saludables." },
  ];

  const reviews = [
    { name: 'María G.', comment: 'MetaMedic me salvó en una emergencia. ¡Excelente servicio!', avatar: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sin%20t%C3%ADtulo%20(1)-mg1YEBSrKZrhY4POgsO0lnyoEGcOdB.jpeg' },
    { name: 'Juan P.', comment: 'La atención es rápida y eficiente. Totalmente recomendado.', avatar: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sin%20t%C3%ADtulo-tUUJfUvOHTQecfraR5WLfKJbZYcxE2.jpeg' },
    { name: 'Ana L.', comment: 'Los planes son accesibles y la cobertura es muy completa.', avatar: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sin%20t%C3%ADtulo%20(2)-BwjOI8tmyp5kVcOTbYRim5HmEXzDpc.jpeg' },
  ];

  const faqs = [
    { 
      question: '¿Cuánto tarda en programarse un turno con un especialista?',
      answer: 'Solo deberás esperar 72 horas. El beneficiario puede comunicarse al 0810 220 3220 o vía WhatsApp al 113678 5555 (lunes a viernes de 9 a 17 hs), identificándose con su DNI y coordinando el turno.'
    },
    { 
      question: '¿Qué debo hacer en caso de urgencia?',
      answer: 'En situaciones de riesgo vital, robo en la vía pública o si necesitas un médico a domicilio, estamos disponibles 24/7 los 365 días del año. Solo comunícate al 0810 220 3220 y selecciona la opción correspondiente.'
    },
    { 
      question: '¿Quiénes están cubiertos por los planes de MetaMedic?',
      answer: 'Plan Individual: Hombres y mujeres a partir de los 18 años. Plan Familiar: Titular, cónyuge e hijos hasta los 21 años. Plan Mujer: Mujeres mayores de 18 años, con beneficios exclusivos. Tercera Edad: Adultos mayores de 60 años, con servicios especializados.'
    },
    { 
      question: '¿Qué medios de pago aceptan?',
      answer: 'El servicio es mensual y se renueva automáticamente. El pago se debitará de la tarjeta de crédito, débito o cuenta bancaria proporcionada al momento de la contratación.'
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#262626] font-poppins">
      {/* Announcement Bar */}
      <div className="bg-black text-white text-center py-2 text-sm">
        15% de descuento en todos los planes llamando hoy
      </div>

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img
                className="h-8 w-auto"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_metamedic-o31rP5oH92EM1ZggvsTJnUVWTv6UZy.png"
                alt="MetaMedic"
              />
            </div>
            <div className="flex items-center">
              <a href="tel:08102203220" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center whitespace-nowrap">
                <Phone className="mr-2 h-5 w-5" />
                <span>0810 220 3220</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Updated Hero Section with button linking to "Nuestros Planes" */}
        <section className="bg-[#C5E6FF] py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-[#262626]">
                  Planes de asistencia médica eficientes, rápidos y siempre cerca tuyo
                </h1>
                <p className="text-lg md:text-xl mb-6 md:mb-8 text-[#4A4A4A]">
                  Por fin llegó un plan que se adapta a vos y no al revés.
                </p>
                <a href="#nuestros-planes" className="bg-green-500 text-white hover:bg-green-600 px-8 py-3 text-lg mx-auto md:mx-0 inline-block rounded-md">
                  Ver Planes
                </a>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/meta_character-qfGNgLSyoLwyr3LvOXCYKPKYcPFZ2J.png"
                  width={280}
                  height={280}
                  alt="Medical professional illustration"
                  className="w-[70%] md:w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* About Section */}
          <section id="about" className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#218A7E] mb-6">¿Qué es MetaMedic?</h2>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              MetaMedic es la solución perfecta para quienes buscan una atención médica rápida, cercana, accesible y personalizada. Además, es el complemento ideal para tu obra social o prepaga.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <img src={point.icon} alt={point.title} className="w-20 h-20 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-[#218A7E]">{point.title}</h3>
                  <p className="text-sm md:text-base">{point.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Updated Plans Section with correct id */}
          <section id="nuestros-planes" className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#218A7E] mb-6">Nuestros Planes</h2>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              En MetaMedic entendemos que cada persona tiene necesidades únicas, por eso ofrecemos planes de salud diseñados a tu medida. ¡Elige el que mejor se adapte a ti y regístrate ahora!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className="border-2 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl" style={{ borderColor: plan.color }}>
                  <div className="p-6" style={{ backgroundColor: plan.color }}>
                    <h3 className="text-white text-center text-2xl font-bold">{plan.name}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 mt-4 text-left">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="mr-2 h-5 w-5  text-[#218A7E] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <a 
                        href="https://wa.me/5491126717461" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Contactar por WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section id="why-us" className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#218A7E] mb-6">¿Por qué elegirnos?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <item.icon className="h-12 w-12 text-[#218A7E] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-[#218A7E]">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#218A7E] mb-6">Preguntas Frecuentes</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    className="flex justify-between items-center w-full text-left"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-medium text-lg">{faq.question}</span>
                    {openFaq === index ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#218A7E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#218A7E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                  {openFaq === index && <p className="mt-2 text-left text-gray-600">{faq.answer}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Reviews Section */}
          <section id="reviews" className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#218A7E] mb-6">Opiniones de nuestros clientes</h2>
            <div className="flex overflow-x-auto space-x-6 pb-4">
              {reviews.map((review, index) => (
                <div key={index} className="flex-shrink-0 w-80 border-2 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300" style={{ borderColor: ['#E56399', '#33658A', '#29A2AF'][index] }}>
                  <div className="flex flex-col items-center justify-center p-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#218A7E] mb-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <blockquote className="text-lg italic text-center mb-4">"{review.comment}"</blockquote>
                    <cite className="font-bold text-[#218A7E]">- {review.name}</cite>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Message Section */}
          <section className="mb-20 bg-[#33658A] text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Te cuidamos como vos queres</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              En Metamedic entendemos que los inconvenientes medicos pueden ser estresantes,
              por eso estamos comprometidos a acompariarte a vos ya tu familia cuando mas lo necesitas
            </p>
          </section>
        </div>
      </main>

      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <img
                className="h-10 w-auto mb-4"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/metamedic_blanco2-XlL4zqig2mhthPNElvpFAY60IV6Yph.png"
                alt="MetaMedic"
              />
              <p>Emergencias: 0810 220 3220</p>
              <p>Email: info@metamedic.com</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-8 w-8" />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-8 w-8" />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-8 w-8" />
              </a>
            </div>
          </div>
          <p className="mt-8 text-center text-base">&copy; 2024 MetaMedic. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}