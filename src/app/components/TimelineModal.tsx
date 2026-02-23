import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { TimelineEntry } from '../data/timeline-data';

interface TimelineModalProps {
  entry: TimelineEntry | null;
  isOpen: boolean;
  onClose: () => void;
}

export function TimelineModal({ entry, isOpen, onClose }: TimelineModalProps) {
  if (!entry) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/10 hover:bg-slate-900/20 transition-colors z-10"
            >
              <X className="w-6 h-6 text-slate-900" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1">
              {/* Image */}
              <div className="relative w-full h-64 md:h-96 bg-gradient-to-br from-blue-900 to-blue-950">
                <img
                  src={entry.imageUrl}
                  alt={entry.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <div className="text-sm md:text-base font-medium text-amber-400 mb-2">
                    {entry.period}
                  </div>
                  <h2 className="text-3xl md:text-4xl mb-2">{entry.name}</h2>
                  <div className="text-lg md:text-xl text-blue-200">
                    {entry.civilization}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 lg:p-12 space-y-8">
                <div>
                  <h3 className="text-2xl mb-4 text-slate-900">Overview</h3>
                  <p className="text-lg leading-relaxed text-slate-700">
                    {entry.description}
                  </p>
                </div>

                <div className="border-t border-amber-200 pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-amber-600" />
                    <h3 className="text-2xl text-slate-900">Impact on Society</h3>
                  </div>
                  <p className="text-lg leading-relaxed text-slate-700">
                    {entry.impact}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
