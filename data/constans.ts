import { Service, TeamMember, Review } from './types';

export const SERVICES: Service[] = [
  {
    id: 'pt',
    title: 'Entrenamiento Personal',
    shortDescription: 'Planes a medida para alcanzar tus objetivos físicos.',
    fullDescription: 'Nuestro servicio de entrenamiento personal está diseñado meticulosamente para adaptarse a tus necesidades específicas. Realizamos una evaluación inicial completa de tu composición corporal, movilidad y fuerza. A partir de ahí, diseñamos un programa progresivo que te garantiza resultados, ya sea pérdida de peso, ganancia muscular o mejora del rendimiento atlético.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'crossfit',
    title: 'Box de CrossFit',
    shortDescription: 'Entrenamiento funcional de alta intensidad.',
    fullDescription: 'Únete a nuestra comunidad de CrossFit. Ofrecemos un espacio equipado con material de primera calidad para realizar WODs (Workout of the Day) variados y desafiantes. Nuestros coaches certificados te guiarán en la técnica correcta de levantamientos olímpicos, gimnasia y ejercicios metabólicos.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'physio',
    title: 'Fisioterapia',
    shortDescription: 'Recuperación de lesiones y prevención.',
    fullDescription: 'Nuestro equipo de fisioterapeutas utiliza las últimas técnicas manuales y tecnología para tratar lesiones deportivas, dolores crónicos y problemas posturales. Nos enfocamos no solo en aliviar el dolor, sino en encontrar la causa raíz para prevenir futuras recaídas.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pilates',
    title: 'Pilates / Yoga',
    shortDescription: 'Mejora tu flexibilidad y control corporal.',
    fullDescription: 'Clases dirigidas enfocadas en el control del core, la flexibilidad y la conexión mente-cuerpo. Ideal para complementar entrenamientos de fuerza o para quienes buscan una actividad de bajo impacto pero alta efectividad.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'nutrition',
    title: 'Nutrición Deportiva',
    shortDescription: 'Alimenta tu cuerpo para el máximo rendimiento.',
    fullDescription: 'Asesoramiento nutricional personalizado. No creemos en dietas restrictivas, sino en educación alimentaria. Te enseñamos a comer para rendir mejor en tus entrenamientos y mejorar tu salud general.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'osteopathy',
    title: 'Osteopatía',
    shortDescription: 'Equilibrio estructural para tu cuerpo.',
    fullDescription: 'Tratamientos holísticos que buscan restablecer el equilibrio del cuerpo mediante la manipulación de tejidos blandos y articulaciones.',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'groups',
    title: 'Clases Grupales',
    shortDescription: 'Entrena en equipo, motívate con otros.',
    fullDescription: 'Sesiones dinámicas en grupo pequeño donde la energía colectiva te impulsa a dar más. HIIT, funcional, y más.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'online',
    title: 'Asesoría Online',
    shortDescription: 'Entrena con nosotros desde cualquier lugar.',
    fullDescription: 'Lleva la calidad de Integra a tu casa. Planes de entrenamiento y seguimiento vía app para que no pierdas el ritmo estés donde estés.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
  }
];

export const TEAM: TeamMember[] = [
  { id: '1', name: 'Quique', role: 'CEO', image: 'https://i.pravatar.cc/300?img=11' },
  { id: '2', name: 'David', role: 'Jefe de Proyectos', image: 'https://i.pravatar.cc/300?img=12' },
  { id: '3', name: 'Belén', role: 'Administración', image: 'https://i.pravatar.cc/300?img=5' },
  { id: '4', name: 'Patricia', role: 'Administración', image: 'https://i.pravatar.cc/300?img=9' },
  { id: '5', name: 'Diego', role: 'Programador Senior', image: 'https://i.pravatar.cc/300?img=3' },
  { id: '6', name: 'Raul', role: 'Programador Senior', image: 'https://i.pravatar.cc/300?img=8' },
];

export const REVIEWS: Review[] = [
  { author: 'Cristina Bono', rating: 5, text: '¡Mi experiencia de 10! En concreto tuve sesión de fisio con Ana y es la mejor profesional.' },
  { author: 'Ana Ruiz', rating: 5, text: 'Han conseguido que me guste el deporte, que lo haya integrado como parte de mi rutina.' },
  { author: 'Carlos Checa', rating: 5, text: 'Gran equipo de profesionales. Si estás en Málaga no dudes en venir.' },
];

export const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.7771953889164!2d2.1803447!3d41.422354999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bd2b40bcdfa9%3A0x59e0d23d7125b8ca!2sCentre%20Integra.%20centro%20de%20terapias!5e0!3m2!1ses!2ses!4v1764255346958!5m2!1ses!2ses";
