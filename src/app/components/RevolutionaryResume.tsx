import { motion } from 'motion/react';
import { Mail, MapPin, Award, BookOpen, Briefcase, Users, Star } from 'lucide-react';

export function RevolutionaryResume() {
  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-slate-50 to-amber-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">Revolutionary Resume</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-br from-blue-950 to-blue-900 text-white p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-amber-500 overflow-hidden shadow-xl">
                  <img
                    src="https://cdn.britannica.com/73/250373-050-F4E0D08E/Nicolaus-Copernicus-portrait-Torun.jpg"
                    alt="Nicolaus Copernicus"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name and Title */}
              <div className="flex-1">
                <h3 className="text-4xl md:text-5xl mb-2">Nicolaus Copernicus</h3>
                <div className="text-2xl text-amber-400 mb-4">
                  Planetary Systems Data Analyst
                </div>
                <div className="flex flex-wrap gap-4 text-blue-200">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Warmia, Royal Prussia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>n.copernicus@astronomy.eu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-10">
            {/* Personal Statement */}
            <ResumeSection
              icon={<Star className="w-6 h-6" />}
              title="Personal Statement"
            >
              <p className="text-lg leading-relaxed text-slate-700">
                Forward-thinking astronomer dedicated to redefining humanity's understanding
                of the cosmos through mathematical rigor and empirical observation. Proven
                ability to challenge millennium-old paradigms with evidence-based models.
                Passionate about advancing scientific methodology and inspiring future
                generations to question established dogma in pursuit of truth.
              </p>
            </ResumeSection>

            {/* Education */}
            <ResumeSection
              icon={<BookOpen className="w-6 h-6" />}
              title="Education"
            >
              <div className="space-y-4">
                <EducationItem
                  institution="University of Kraków"
                  degree="Mathematics & Astronomy"
                  period="1491–1495"
                  description="Foundational studies in mathematical sciences and astronomical observation"
                />
                <EducationItem
                  institution="University of Bologna"
                  degree="Canon Law"
                  period="1496–1500"
                  description="Advanced legal studies while continuing astronomical research with Domenico Maria Novara"
                />
                <EducationItem
                  institution="Self-Directed Research"
                  degree="Classical Astronomy & Hellenistic Texts"
                  period="1500–1543"
                  description="Intensive study of Ptolemaic astronomy and ancient Greek astronomical works"
                />
              </div>
            </ResumeSection>

            {/* Key Achievements */}
            <ResumeSection
              icon={<Award className="w-6 h-6" />}
              title="Key Achievements"
            >
              <ul className="space-y-3 text-lg text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-500 mt-2" />
                  <span>
                    <strong>Developed Heliocentric Theory:</strong> Proposed revolutionary
                    model placing the Sun at the center of the universe, with Earth and
                    planets orbiting it
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-500 mt-2" />
                  <span>
                    <strong>Published De revolutionibus orbium coelestium (1543):</strong>{' '}
                    Comprehensive mathematical treatise presenting heliocentric cosmology
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-500 mt-2" />
                  <span>
                    <strong>Challenged Geocentric Cosmology:</strong> Provided mathematical
                    evidence contradicting 1,400 years of Ptolemaic astronomical tradition
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-500 mt-2" />
                  <span>
                    <strong>Influenced Scientific Revolution:</strong> Laid groundwork for
                    Galileo, Kepler, and Newton's transformative discoveries
                  </span>
                </li>
              </ul>
            </ResumeSection>

            {/* Skills */}
            <ResumeSection
              icon={<Briefcase className="w-6 h-6" />}
              title="Core Competencies"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkillBadge skill="Mathematical Modeling" />
                <SkillBadge skill="Observational Astronomy" />
                <SkillBadge skill="Critical Thinking" />
                <SkillBadge skill="Challenging Institutional Norms" />
                <SkillBadge skill="Trigonometric Calculations" />
                <SkillBadge skill="Planetary Motion Analysis" />
              </div>
            </ResumeSection>

            {/* References */}
            <ResumeSection
              icon={<Users className="w-6 h-6" />}
              title="References"
            >
              <div className="space-y-6">
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                      ✓
                    </div>
                    <h4 className="text-xl text-slate-900">Supported by</h4>
                  </div>
                  <p className="text-lg text-slate-700">
                    <strong>Galileo Galilei</strong> — Astronomer & Physicist
                  </p>
                  <p className="text-slate-600 mt-2">
                    "Copernicus's heliocentric model provided the foundation for my
                    telescopic observations. His courage in challenging established doctrine
                    inspired my own work."
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white">
                      ✗
                    </div>
                    <h4 className="text-xl text-slate-900">Opposed by</h4>
                  </div>
                  <p className="text-lg text-slate-700">
                    <strong>Catholic Church Authorities</strong> — Religious Institution
                  </p>
                  <p className="text-slate-600 mt-2">
                    "His theories contradict Holy Scripture and undermine the divine order.
                    De revolutionibus was placed on the Index of Forbidden Books in 1616."
                  </p>
                </div>
              </div>
            </ResumeSection>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface ResumeSectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function ResumeSection({ icon, title, children }: ResumeSectionProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-900 to-blue-950 flex items-center justify-center text-white">
          {icon}
        </div>
        <h4 className="text-2xl md:text-3xl text-slate-900">{title}</h4>
      </div>
      {children}
    </div>
  );
}

interface EducationItemProps {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

function EducationItem({ institution, degree, period, description }: EducationItemProps) {
  return (
    <div className="border-l-2 border-amber-500 pl-6 pb-4">
      <h5 className="text-xl text-slate-900">{institution}</h5>
      <div className="text-amber-600 mb-2">{degree}</div>
      <div className="text-sm text-slate-500 mb-2">{period}</div>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

interface SkillBadgeProps {
  skill: string;
}

function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white px-4 py-3 rounded-lg text-center hover:from-blue-800 hover:to-blue-900 transition-colors">
      {skill}
    </div>
  );
}
