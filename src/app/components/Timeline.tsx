import { useState } from 'react';
import { motion } from 'motion/react';
import { TimelineModal } from './TimelineModal';
import { timelineData, type TimelineEntry } from '../data/timeline-data';
import { Telescope, Scroll, Lightbulb, Calculator, FileText, Compass, HeartPulse, Camera, Clock, Printer, Orbit, Dna, Brain } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'maya-calendar': <Telescope className="w-6 h-6" />,
  'aztec-chinampa': <Compass className="w-6 h-6" />,
  'inca-quipu': <Scroll className="w-6 h-6" />,
  'india-zero': <Calculator className="w-6 h-6" />,
  'china-paper': <FileText className="w-6 h-6" />,
  'algebra': <Calculator className="w-6 h-6" />,
  'egypt-papyrus': <HeartPulse className="w-6 h-6" />,
  'camera-obscura': <Camera className="w-6 h-6" />,
  'mechanical-clock': <Clock className="w-6 h-6" />,
  'printing-press': <Printer className="w-6 h-6" />,
  'copernican': <Orbit className="w-6 h-6" />,
  'darwinian': <Dna className="w-6 h-6" />,
  'freudian': <Brain className="w-6 h-6" />,
};

const colorMap: Record<string, { bg: string; icon: string; badge: string }> = {
  ancient: {
    bg: 'from-blue-900 to-blue-950',
    icon: 'bg-blue-900',
    badge: 'bg-blue-600',
  },
  medieval: {
    bg: 'from-purple-900 to-indigo-950',
    icon: 'bg-purple-900',
    badge: 'bg-purple-600',
  },
  revolution: {
    bg: 'from-amber-700 to-orange-900',
    icon: 'bg-amber-700',
    badge: 'bg-amber-600',
  },
};

export function Timeline() {
  const [selectedEntry, setSelectedEntry] = useState<TimelineEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEntryClick = (entry: TimelineEntry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
            Interactive Digital Timeline
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore the evolution of human knowledge from ancient civilizations through
            intellectual revolutions
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="max-w-6xl mx-auto relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-purple-300 to-amber-300" />

          {/* Timeline entries */}
          <div className="space-y-12">
            {timelineData.map((entry, index) => (
              <TimelineCard
                key={entry.id}
                entry={entry}
                onClick={() => handleEntryClick(entry)}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>

      <TimelineModal entry={selectedEntry} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
}

interface TimelineCardProps {
  entry: TimelineEntry;
  onClick: () => void;
  index: number;
  isLeft: boolean;
}

function TimelineCard({ entry, onClick, index, isLeft }: TimelineCardProps) {
  const colors = colorMap[entry.category];
  const icon = iconMap[entry.id];

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.03, y: -4 }}
        onClick={onClick}
        className={`w-5/12 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden group ${
          isLeft ? 'mr-auto' : 'ml-auto'
        }`}
      >
        {/* Image */}
        <div className="relative h-40 overflow-hidden">
          <img
            src={entry.imageUrl}
            alt={entry.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Icon badge */}
          <div className={`absolute top-4 left-4 w-12 h-12 rounded-full ${colors.icon} flex items-center justify-center text-white shadow-lg`}>
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className={`inline-block ${colors.badge} text-white px-3 py-1 rounded-full text-sm mb-3`}>
            {entry.period}
          </div>
          <h4 className="text-xl mb-2 text-slate-900 line-clamp-2">{entry.name}</h4>
          <div className="text-sm text-amber-600 mb-3">{entry.civilization}</div>
          <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
            {entry.description}
          </p>
          <div className="mt-4 text-blue-600 text-sm group-hover:text-blue-700 transition-colors font-medium">
            Click here to learn more →
          </div>
        </div>
      </motion.div>

      {/* Central node */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        className="absolute left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          whileHover={{ scale: 1.3 }}
          className={`w-6 h-6 rounded-full bg-gradient-to-br ${colors.bg} border-4 border-white shadow-lg cursor-pointer`}
          onClick={onClick}
        />
      </motion.div>

      {/* Connecting line */}
      <div
        className={`absolute ${
          isLeft ? 'left-[50%] right-[50%]' : 'left-[50%] right-[50%]'
        } top-1/2 transform -translate-y-1/2 h-0.5 ${colors.icon} w-12 ${
          isLeft ? 'ml-3' : 'mr-3'
        }`}
        style={{
          [isLeft ? 'marginRight' : 'marginLeft']: 'auto',
          width: '8%',
          [isLeft ? 'left' : 'right']: '50%',
          [isLeft ? 'right' : 'left']: 'auto',
        }}
      />
    </motion.div>
  );
}
