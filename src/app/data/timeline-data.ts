export interface TimelineEntry {
  id: string;
  period: string;
  name: string;
  civilization: string;
  imageUrl: string;
  description: string;
  impact: string;
  category: 'ancient' | 'medieval' | 'revolution';
}

export const timelineData: TimelineEntry[] = [
  // Ancient Civilizations
  {
    id: 'maya-calendar',
    period: 'c. 250–900 CE',
    name: 'Astronomical Calendar System',
    civilization: 'Maya Civilization',
    imageUrl: 'https://images.unsplash.com/photo-1612829309733-7db8880497e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXlhbiUyMGFzdHJvbm9teSUyMGFuY2llbnQlMjB0ZW1wbGV8ZW58MXx8fHwxNzcxODM0MjgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'The Maya developed one of the most sophisticated astronomical calendar systems in history, combining three interlocking calendars. Their astronomical observations were remarkably precise, tracking celestial bodies with accuracy that rivals modern calculations.',
    impact: 'This calendar system enabled accurate prediction of eclipses, seasonal changes, and agricultural cycles. It demonstrated advanced mathematical understanding including the concept of zero, influencing Mesoamerican culture for centuries and providing insights into pre-Columbian astronomy.',
    category: 'ancient',
  },
  {
    id: 'aztec-chinampa',
    period: '1400s CE',
    name: 'Chinampa Agricultural System',
    civilization: 'Aztec Empire',
    imageUrl: 'https://images.unsplash.com/photo-1647220501061-7a0871fd4764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwYXp0ZWMlMjBweXJhbWlkJTIwbWV4aWNvfGVufDF8fHx8MTc3MTgzNDI5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'The Aztecs created chinampas, or "floating gardens," which were artificial islands built in shallow lake beds. These highly productive agricultural plots used a sophisticated irrigation system that allowed year-round cultivation.',
    impact: 'Chinampas revolutionized agriculture in the Valley of Mexico, supporting dense urban populations and enabling the rise of Tenochtitlan as one of the world\'s largest cities. This sustainable farming method demonstrated advanced understanding of hydrology and soil management.',
    category: 'ancient',
  },
  {
    id: 'inca-quipu',
    period: '1400s CE',
    name: 'Quipu Record System',
    civilization: 'Inca Empire',
    imageUrl: 'https://images.unsplash.com/photo-1610733897865-dc168963bcbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwaW5jYSUyMHF1aXB1JTIwa25vdHMlMjByb3BlfGVufDF8fHx8MTc3MTgzNDI4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'The Incas developed quipus, a sophisticated recording device using colored knotted strings to store numerical and possibly narrative information. This unique system enabled administrative control across their vast empire without a written alphabet.',
    impact: 'Quipus allowed the Inca Empire to maintain detailed records of census data, tax collection, and resource distribution across thousands of miles of territory. It represents an alternative form of information technology that challenges Western notions of literacy and record-keeping.',
    category: 'ancient',
  },
  {
    id: 'india-zero',
    period: '5th Century CE',
    name: 'Concept of Zero',
    civilization: 'Ancient India',
    imageUrl: 'https://images.unsplash.com/photo-1729335511904-9b8690184935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwaW5kaWFuJTIwbWF0aGVtYXRpY3MlMjB6ZXJvJTIwc3ltYm9sfGVufDF8fHx8MTc3MTgzNDI4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Indian mathematicians developed the concept of zero as both a placeholder and a number in its own right. This revolutionary idea, first recorded in the Brahmasphutasiddhanta, transformed mathematics globally.',
    impact: 'The concept of zero fundamentally changed mathematics, enabling the development of algebra, calculus, and modern computing. Its transmission to the Islamic world and then Europe became the foundation for the decimal system used worldwide today.',
    category: 'ancient',
  },
  {
    id: 'china-paper',
    period: '2nd Century BCE',
    name: 'Papermaking',
    civilization: 'Ancient China (Han Dynasty)',
    imageUrl: 'https://images.unsplash.com/photo-1763225271111-dd9363584249?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwY2hpbmVzZSUyMHBhcGVyJTIwbWFudXNjcmlwdHxlbnwxfHx8fDE3NzE4MzQyODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'The invention of paper in China revolutionized information storage and transmission. Made from plant fibers, paper provided a lightweight, affordable alternative to bamboo slips and silk for writing.',
    impact: 'Paper manufacturing spread along the Silk Road, eventually reaching Europe. It democratized knowledge by making books more affordable and portable, laying the groundwork for mass communication and literacy. Paper remains essential to human civilization today.',
    category: 'ancient',
  },
  {
    id: 'algebra',
    period: '9th Century CE',
    name: 'Algebra',
    civilization: 'Islamic Golden Age (Al-Khwarizmi)',
    imageUrl: 'https://images.unsplash.com/photo-1685694594842-1c60b79aecf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0JTIwaXNsYW1pYyUyMG1hdGhlbWF0aWNzJTIwYWxnZWJyYXxlbnwxfHx8fDE3NzE4MzQyODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Muhammad ibn Musa al-Khwarizmi wrote "Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala" (The Compendious Book on Calculation by Completion and Balancing), founding algebra as a systematic mathematical discipline.',
    impact: 'Al-Khwarizmi\'s work introduced systematic methods for solving linear and quadratic equations, establishing algebra as a fundamental branch of mathematics. His name gave us the word "algorithm," and his work bridged Greek, Indian, and Islamic mathematical traditions.',
    category: 'ancient',
  },
  {
    id: 'egypt-papyrus',
    period: 'c. 1500 BCE',
    name: 'Medical Papyrus',
    civilization: 'Ancient Egypt',
    imageUrl: 'https://images.unsplash.com/photo-1734357288506-5271d99f306c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZWd5cHQlMjBtZWRpY2FsJTIwcGFweXJ1cyUyMGhpZXJvZ2x5cGhpY3N8ZW58MXx8fHwxNzcxODM0Mjg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'The Edwin Smith Papyrus and Ebers Papyrus documented surgical procedures, anatomical observations, and medical treatments. These texts reveal sophisticated understanding of human anatomy and rational approaches to medicine.',
    impact: 'Ancient Egyptian medical knowledge influenced Greek and Roman medicine, forming the foundation of Western medical practice. Their empirical approach to diagnosis and treatment, documented systematically, represents early scientific methodology in healthcare.',
    category: 'ancient',
  },
  // Medieval Innovations
  {
    id: 'camera-obscura',
    period: '11th Century CE',
    name: 'Camera Obscura',
    civilization: 'Islamic Golden Age (Ibn al-Haytham)',
    imageUrl: 'https://images.unsplash.com/photo-1627385183709-ff1e7ec7ca1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwY2FtZXJhJTIwb2JzY3VyYSUyMG9wdGljYWwlMjBkZXZpY2V8ZW58MXx8fHwxNzcxODM0Mjg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Ibn al-Haytham (Alhazen) developed the camera obscura and conducted groundbreaking experiments in optics. His "Book of Optics" established principles of light, vision, and image formation through rigorous experimentation.',
    impact: 'Ibn al-Haytham\'s work established the scientific method in optics and influenced European scientists for centuries. The camera obscura became essential for artists and eventually led to the invention of photography, fundamentally changing how we capture and perceive reality.',
    category: 'medieval',
  },
  {
    id: 'mechanical-clock',
    period: '13th Century CE',
    name: 'Mechanical Clock',
    civilization: 'Medieval Europe',
    imageUrl: 'https://images.unsplash.com/photo-1761865843206-dba02ec8c82d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMG1lY2hhbmljYWwlMjBjbG9jayUyMHRvd2VyfGVufDF8fHx8MTc3MTgzNDI4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'The invention of mechanical clocks with escapement mechanisms revolutionized timekeeping. These tower clocks, appearing in European cities and monasteries, provided unprecedented precision in measuring hours.',
    impact: 'Mechanical clocks transformed society by standardizing time, enabling coordinated activities, trade schedules, and scientific experiments. This innovation contributed to the development of capitalism, industrialization, and modern notions of punctuality and productivity.',
    category: 'medieval',
  },
  {
    id: 'printing-press',
    period: '1440 CE',
    name: 'Printing Press',
    civilization: 'Europe (Johannes Gutenberg)',
    imageUrl: 'https://images.unsplash.com/photo-1581508512961-0e3b9524db40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMHByaW50aW5nJTIwcHJlc3MlMjBvbGQlMjBib29rc3xlbnwxfHx8fDE3NzE4MzQyODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Johannes Gutenberg\'s movable type printing press enabled mass production of books. His innovative use of metal type, oil-based ink, and a wooden press transformed European literacy and learning.',
    impact: 'The printing press catalyzed the Renaissance, Reformation, and Scientific Revolution by democratizing access to knowledge. It enabled rapid dissemination of ideas, standardized texts, and mass literacy, fundamentally altering the course of human history.',
    category: 'medieval',
  },
  // Intellectual Revolutions
  {
    id: 'copernican',
    period: '1543 CE',
    name: 'Copernican Revolution: Heliocentric Theory',
    civilization: 'Nicolaus Copernicus',
    imageUrl: 'https://images.unsplash.com/photo-1711560217836-f42ac4a11a4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHN5c3RlbSUyMGhlbGlvY2VudHJpYyUyMGNvcGVybmljdXMlMjBwbGFuZXRzfGVufDF8fHx8MTc3MTgzNDI4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Copernicus proposed that the Earth revolves around the Sun, challenging the geocentric model that had dominated for over a millennium. His book "De revolutionibus orbium coelestium" presented mathematical evidence for a heliocentric universe.',
    impact: 'The Copernican Revolution fundamentally displaced humanity from the center of the universe, challenging religious doctrine and philosophical assumptions. It initiated the Scientific Revolution, inspiring Galileo, Kepler, and Newton, and transformed our understanding of our place in the cosmos.',
    category: 'revolution',
  },
  {
    id: 'darwinian',
    period: '1859 CE',
    name: 'Darwinian Revolution: Theory of Evolution',
    civilization: 'Charles Darwin',
    imageUrl: 'https://images.unsplash.com/photo-1760479891023-7b420075b16f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJ3aW4lMjBldm9sdXRpb24lMjBuYXR1cmFsJTIwc2VsZWN0aW9uJTIwZm9zc2lsc3xlbnwxfHx8fDE3NzE4MzQyODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Darwin\'s "On the Origin of Species" introduced natural selection as the mechanism driving evolution. Through careful observation of finches, fossils, and breeding, he demonstrated that species change over time through adaptation.',
    impact: 'Darwin\'s theory revolutionized biology by providing a unifying explanation for the diversity of life. It challenged creation narratives, influenced fields from psychology to medicine, and established evolution as the foundation of modern biological science.',
    category: 'revolution',
  },
  {
    id: 'freudian',
    period: 'Late 19th - Early 20th Century',
    name: 'Freudian Revolution: Psychoanalysis',
    civilization: 'Sigmund Freud',
    imageUrl: 'https://images.unsplash.com/photo-1709651669999-57741c9bf085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmV1ZCUyMHBzeWNob2xvZ3klMjBwc3ljaG9hbmFseXNpcyUyMGJyYWlufGVufDF8fHx8MTc3MTgzNDI4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Freud developed psychoanalysis, proposing that unconscious processes, childhood experiences, and repressed desires shape human behavior. His concepts of the id, ego, and superego provided a new framework for understanding the mind.',
    impact: 'The Freudian Revolution transformed psychology, psychiatry, and cultural understanding of human motivation. While many specific theories have been challenged, Freud\'s emphasis on the unconscious and psychological development profoundly influenced 20th-century thought, art, literature, and therapy.',
    category: 'revolution',
  },
];
