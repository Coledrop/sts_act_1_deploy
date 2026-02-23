import { motion } from 'motion/react';
import { Lightbulb, TrendingUp } from 'lucide-react';

export function ConnectionsAnalysis() {
  return (
    <section id="analysis" className="py-20 bg-gradient-to-br from-blue-950 to-slate-900 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Connections & Impacts Analysis</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto" />
        </motion.div>

        <div className="space-y-12">
          {/* Question 1 */}
          <AnalysisCard
            icon={<Lightbulb className="w-8 h-8" />}
            question="What patterns are visible in how and where innovations emerged?"
            answer="•	Innovations consistently emerged at crossroads of trade, cultural exchange, and necessity. Ancient civilizations developed technologies responding to environmental challenges, the Maya refined astronomy for agricultural timing, the Aztecs created chinampas for limited arable land, and the Incas developed quipu for managing vast territories. Geography played a crucial role: river valleys (Egypt, China) enabled early literacy and record-keeping, while trade routes (Silk Road, Indian Ocean) facilitated knowledge transfer, Indian mathematics reached the Islamic world, then Europe. Religious institutions often preserved and advanced knowledge, with monasteries copying manuscripts and Islamic scholars translating Greek texts. Political stability allowed intellectual flourishing during China's Han Dynasty, Islam's Golden Age, and Renaissance Europe. Innovations rarely arose in isolation but emerged from synthesis, algebra combined Greek geometry with Indian numerals, while the printing press adapted Chinese woodblock technology with European metallurgy."
            delay={0}
          />

          {/* Question 2 */}
          <AnalysisCard
            icon={<TrendingUp className="w-8 h-8" />}
            question="How did intellectual revolutions challenge existing systems differently than incremental technological advances?"
            answer="Intellectual revolutions fundamentally disrupted worldviews and power structures, while incremental advances improved existing paradigms. The Copernican Revolution didn't just improve astronomical calculations—it dethroned humanity from the cosmic center, threatening religious authority and philosophical certainty. Darwin's evolution challenged divine creation narratives and humanity's special status, forcing reconceptualization of our relationship to nature. Freud's psychoanalysis questioned human rationality itself, suggesting unconscious forces govern behavior. These revolutions faced institutional resistance precisely because they threatened established power: the Catholic Church opposed heliocentrism, religious groups rejected evolution, and medical establishments resisted psychoanalysis. In contrast, technologies like papermaking, printing presses, or mechanical clocks integrated into existing systems, enhancing rather than replacing them. Technological advances often gained acceptance through practical utility, while intellectual revolutions required generations to overcome ideological resistance. However, both could be transformative—printing enabled Protestant Reformation by democratizing biblical access, showing how technology can amplify revolutionary ideas."
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}

interface AnalysisCardProps {
  icon: React.ReactNode;
  question: string;
  answer: string;
  delay: number;
}

function AnalysisCard({ icon, question, answer, delay }: AnalysisCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10 hover:bg-white/10 transition-colors"
    >
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl mb-6 text-amber-400">{question}</h3>
          <p className="text-lg leading-relaxed text-slate-200">{answer}</p>
        </div>
      </div>
    </motion.div>
  );
}
