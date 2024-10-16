import React, { useState, useEffect } from 'react';
import { Phone, Facebook, Twitter, Instagram, MessageCircle, UserCheck, Stethoscope, Puzzle, Shield, TrendingUp, Heart, Check } from 'lucide-react';

declare global {
  interface Window {
    fbq: any;
  }
}

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    // Update the document title
    document.title = 'Metamedic | Planes de Salud';

    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Planes de asistencia médica accesibles, con turnos en 72 horas y muy cerca tuyo.';
    document.head.appendChild(metaDescription);

    // Add favicon
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = '/favicon.ico';
    document.head.appendChild(favicon);

    // Initialize Facebook Pixel
    if (typeof window !== 'undefined') {
      window.fbq = window.fbq || function() {
        (window.fbq.q = window.fbq.q || []).push(arguments);
      };
      window.fbq('init', '12345667'); // Replace with your actual Pixel ID
      window.fbq('track', 'PageView');
    }

    // Add Facebook Pixel code
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '12345667');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = 'https://www.facebook.com/tr?id=12345667&ev=PageView&noscript=1';
    noscript.appendChild(img);
    document.head.appendChild(noscript);

    // Cleanup function
    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(favicon);
      document.head.removeChild(script);
      document.head.removeChild(noscript);
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
      text: 'Servicio de ambulancia ante situaciones de riesgo de vida, ofreciendo asistencia inmediata.'
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
      subtitle: 'Tu plan de salud personalizado.',
      color: '#33658A',
      features: [
        'Turnos en médicos en 72hs',
        'Este PLAN Incluye 3 consultas gratis por año',
        'Importantes descuentos en más de 90 especialidades y prácticas médicas',
        'Asistencia por ROBO en Vía Publica',
        'Odontología – 1ra consulta Gratis',
        'Videoconsulta',
        'Descuentos en Farmacias',
        'Seguro de Cirugías',
        'Emergencias médicas 24 hs',
        'Médico a domicilio',
      ],
    },
    {
      name: 'Plan Familiar',
      subtitle: 'Protege a toda tu familia.',
      color: '#29A2AF',
      features: [
        'Chequeo de Rutina bonificado',
        'Importantes descuentos en más de 90 especialidades y prácticas médicas',
        'Este PLAN Incluye 3 consultas gratis por año',
        'Asistencia por ROBO en Vía Publica, para toda tu familia',
        'Descuentos en Farmacias',
        'Seguro por Diagnóstico de Cáncer',
        'Videoconsulta',
        'Emergencias médicas 24 hs',
      ],
    },
    {
      name: 'Plan Mujer',
      subtitle: 'Cuidando la salud femenina.',
      color: '#E56399',
      features: [
        'Chequeo Anual Ginecológico bonificado',
        'Consultas Ginecológicas gratis y sin límite',
        'Seguro de Cáncer Femenino hasta $2.500.000',
        'Asistencia Nutricional Telefónica',
        'Asistencia por ROBO en Vía Publica',
        'Odontología – 1ra consulta Gratis',
        '3 Consultas GRATIS por año',
      ],
    },
    {
      name: 'Plan Tercera Edad',
      subtitle: 'Atención especializada para adultos mayores.',
      color: '#33658A',
      features: [
        'Consultas Clínicas Bonificadas',
        'Tarifa Preferencial en Cuidados en el Hogar (Enfermería, Acompañante, cuidador)',
        'Asistencia Tecnológica Remota',
        'Asesor Previsional',
        'Servicio de Asistencia Legal',
        'Asistencia por ROBO en Vía Publica',
        'Asistencia Nutricional',
        'Servicio Asistente Personal',
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
    { 
      name: 'María G.', 
      comment: 'MetaMedic me salvó en una emergencia. ¡Excelente servicio!', 
      avatar: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rev3-nSkc3afGw64fWAG9EmZdDd7oynNW0k.png'
    },
    { 
      name: 'Juan P.', 
      comment: 'La atención es rápida y eficiente. Totalmente recomendado.', 
      avatar: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rev1-1eciNvDHe85phO5BAjB3kP8a6Ch3VS.png'
    },
    { 
      name: 'Ana L.', 
      comment: 'Los planes son accesibles y la cobertura es muy completa.', 
      avatar: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rev4-8kviJki5xn28UI18736sgxLOqtU02I.png'
    },
    { 
      name: 'Carlos R.', 
      comment: 'Excelente atención y seguimiento. Me siento muy bien cuidado.', 
      avatar: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rev2-LzOpLwKjYvx8VePZGTcL9RK3gx3B35.png'
    },
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
    <div className="flex flex-col min-h-screen bg-white dark:bg-white text-[#262626] dark:text-[#262626] font-poppins">
      {/* Announcement Bar */}
      <div className="bg-black text-white text-center py-2 text-sm">
        15% de descuento en todos los planes llamando hoy
      </div>

      <header className="bg-white dark:bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_metamedic-o31rP5oH92EM1ZggvsTJnUVWTv6UZy.png"
                alt="MetaMedic"
                className="h-8 w-auto"
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
        {/* Hero Section */}
        <section className="bg-[#C5E6FF] dark:bg-[#C5E6FF] py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-[#262626] dark:text-[#262626]">
                  Planes de asistencia médica accesibles, con turnos en 72 horas y muy cerca tuyo.
                </h1>
                <p className="text-lg md:text-xl mb-6 md:mb-8 text-[#4A4A4A] dark:text-[#4A4A4A]">
                  Por fin llegó un plan que se adapta a vos y no al revés.
                </p>
                <a href="#plans" className="inline-block bg-green-500 text-white hover:bg-green-600 px-8 py-3 text-lg mx-auto md:mx-0 rounded-md">
                  Conocé más
                </a>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/meta_character-qfGNgLSyoLwyr3LvOXCYKPKYcPFZ2J.png"
                  alt="Medical professional illustration"
                  className="w-[70%] md:w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto py-12 px-4  sm:px-6 lg:px-8">
          {/* About Section */}
          <section id="about" className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#218A7E] dark:text-[#218A7E] mb-6">¿Qué es MetaMedic?</h2>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-[#262626] dark:text-[#262626]">
              MetaMedic es la solución perfecta para quienes buscan una atención médica rápida, cercana, accesible y personalizada. Además, es el complemento ideal para tu obra social o prepaga.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <img src={point.icon} alt={point.title} className="w-20 h-20 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-[#218A7E] dark:text-[#218A7E]">{point.title}</h3>
                  <p className="text-sm md:text-base text-[#262626] dark:text-[#262626]">{point.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Plans Section */}
          <section id="plans" className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#218A7E] dark:text-[#218A7E] mb-6">Nuestros Planes</h2>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-[#262626] dark:text-[#262626]">
              En MetaMedic entendemos que cada persona tiene necesidades únicas, por  eso ofrecemos planes de salud personalizados.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className="border-2 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl bg-white dark:bg-white" style={{ borderColor: plan.color }}>
                  <div className="p-6" style={{ backgroundColor: plan.color }}>
                    <h3 className="text-white text-center text-2xl font-bold">{plan.name}</h3>
                    <p className="text-white text-center mt-2">{plan.subtitle}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 mt-4 text-left">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="mr-2 h-5 w-5 text-[#218A7E] flex-shrink-0" />
                          <span className="text-[#262626] dark:text-[#262626]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <a 
                        href="https://wa.me/5491136785555?text=Hola!👋%20estoy%20interesado%20en%20los%20planes%20de%20salud%20de%20Metamedic!" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                        onClick={() => {
                          window.fbq?.('track', 'Contact');
                        }}
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#218A7E] dark:text-[#218A7E] mb-6">¿Por qué elegirnos?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="bg-white dark:bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <item.icon className="h-12 w-12 text-[#218A7E] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-[#218A7E] dark:text-[#218A7E]">{item.title}</h3>
                  <p className="text-[#262626] dark:text-[#262626]">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#218A7E] dark:text-[#218A7E] mb-6">Preguntas Frecuentes</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    className="flex justify-between items-center w-full text-left"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-medium text-lg text-[#262626] dark:text-[#262626]">{faq.question}</span>
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
                  {openFaq === index && <p className="mt-2 text-left text-[#262626] dark:text-[#262626]">{faq.answer}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Reviews Section */}
          <section id="reviews" className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#218A7E] dark:text-[#218A7E] mb-6">Opiniones de nuestros clientes</h2>
            <div className="flex overflow-x-auto space-x-6 pb-4">
              {reviews.map((review, index) => (
                <div key={index} className="flex-shrink-0 w-80 border-2 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-white dark:bg-white" style={{ borderColor: ['#E56399', '#33658A', '#29A2AF', '#218A7E'][index] }}>
                  <div className="flex flex-col items-center justify-center p-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#218A7E] mb-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <blockquote className="text-lg italic text-center mb-4 text-[#262626] dark:text-[#262626]">"{review.comment}"</blockquote>
                    <cite className="font-bold text-[#218A7E] dark:text-[#218A7E]">- {review.name}</cite>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* New Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#218A7E] dark:text-[#218A7E] mb-6 text-center">
            Tu salud no puede esperar, ¡Consultá YA!
          </h2>

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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/metamedic_blanco2-XlL4zqig2mhthPNElvpFAY60IV6Yph.png"
                alt="MetaMedic"
                className="h-10 w-auto mb-4"
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