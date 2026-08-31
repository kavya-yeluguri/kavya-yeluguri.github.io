
import { useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceModal from './ExperienceModal';
import EducationModal from './EducationModal';
import { Card, CardContent } from '@/components/ui/card';
import { getAssetPath } from '@/utils/pathUtils';
import { Brain, Cpu, Database } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  period: string;
  image: string;
  details: string;
  technologies: string[];
  achievements: string[];
}

interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  image: string;
  details: string;
  coursework: string[];
}

const About = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [selectedEducation, setSelectedEducation] = useState<Education | null>(null);

  const experiences = [
    {
      company: "PayPal",
      role: "Data Engineer",
      period: "Nov 2024 - Present",
      image: getAssetPath("/paypal-logo.png"),
      details: "Built and maintained large-scale data pipelines on GCP for transactional and user data, processing 100M+ records every 30 minutes using Dataproc, Spark, Airflow, and BigQuery. Developed workflows for complex data transformation and consolidation, supporting reporting, analytics, and API-based consumption. Currently working on evolving these pipelines from micro-batch processing toward near-real-time data processing.",
      technologies: ["GCP", "BigQuery", "PostgreSQL", "Dataproc", "Apache Spark", "Airflow", "Python", "ETL/ELT", "Data Modelling", "MCP", "Data Quality", "Data Governance", "Financial Analytics"],
      achievements: [
        "Engineered distributed Spark pipelines on Dataproc to process ~100M+ records every 30 minutes while meeting a 60-minute processing SLA and maintaining 99.99% pipeline availability.",
        "Optimized BigQuery datasets using partitioning, clustering, and nested data structures, improving query performance across 25+ downstream reporting and analytics workflows.",
        "Built automated data quality and validation checks across pipeline stages to detect schema, null, uniqueness, and data consistency issues before reaching downstream consumers.",
        "Automated Airflow pipeline monitoring and Slack-based failure alerts, improving operational visibility and reducing manual monitoring effort.",
        "Built an AI-assisted incident triage workflow integrated with Jira that generates diagnostic findings from pipeline failures, significantly reducing manual investigation effort."
      ]
    },
    {
      company: "HSBC",
      role: "Senior Data Engineer",
      period: "Aug 2021 - Oct 2024",
      image: getAssetPath("/hsbc.png"),
      details: "Migrated mainframe-based corporate card transaction pipelines (1M+ weekly records) to GCP using Control-M, Compute Engine, BigQuery, PostgreSQL reducing pipeline execution time by 35% and ensuring zero data loss. Guided and resolved 50+ data integrity issues using SQL query optimizations, collaborating with upstream and downstream teams and leveraging SQL on BigQuery to improve data consistency by 100% and ensure compliance. Created ETL workflows using Spark on Google Cloud Dataproc, reducing processing time of real-time financial analytics by 40% and cutting costs by 25% through optimized parallel data processing, improving scalability.",
      technologies: ["GCP", "BigQuery", "PostgreSQL", "Triggers", "Views", , "Sql Functions", "Control-M", "Compute Engine", "SQL", "ETL", "Data Migration", "Apache Spark", "Mainframe", "Financial Analytics"],
      achievements: [
        "Migrated mainframe-based corporate card transaction pipelines (1M+ weekly records) to GCP, reducing execution time by 35% and ensuring zero data loss",
        "Guided and resolved 50+ data integrity issues using SQL query optimizations, improving data consistency by 100% and ensuring compliance",
        "Created ETL workflows using Spark on Google Cloud Dataproc, reducing processing time by 40% and cutting costs by 25%",
        "Improved scalability through optimized parallel data processing"
      ]
    }
  ];

  const educations = [
    {
      institution: "CMR Institute of Technology",
      degree: "Bachelor of Technology in Computer Science",
      period: "Jun 2017 - Jun 2021",
      gpa: "9.1/10",
      image: getAssetPath("/cmr-logo.png"),
      details: "Built a strong foundation in computer science fundamentals and programming, which shaped my logical, analytical, and problem-solving skills.",
      coursework: []
    }
  ];

  const focusAreas = [
    {
      title: 'Data Engineering',
      icon: Database,
      summary: 'Production pipelines, batch and streaming systems, cloud data warehouses, and orchestration at scale.',
      proof: ['Python', 'GCP', 'BigQuery', 'Dataproc', 'Apache Spark', 'Airflow', 'Data Modeling', 'PostgreSQL', 'Linux', 'ETL'],
    },
    {
      title: 'Gen AI',
      icon: Brain,
      summary: 'Exploring how generative AI fits into data engineering workflows — from natural-language interfaces to intelligent tooling.',
      proof: ['LLM Tooling', 'Agents', 'MCP', 'FastMCP', 'skill'],
    },
  ];

  return (
    <section id="about" className="py-20 px-2 md:px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        {/* About Me Section */}
        <div 
          className="text-center"
        >
          <div className="w-full max-w-6xl mx-auto bg-white/60 backdrop-blur-sm px-6 md:px-12 py-12 md:py-20 rounded-3xl relative overflow-hidden border border-white/40 shadow-2xl">
            <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-white/50 mb-6">
              <h2 className="text-sm font-semibold text-slate-600 mb-3 tracking-wider uppercase">
                About Me
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 font-styrene tracking-tight">
                Background & Experience
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-slate-900 via-zinc-400 to-gray-800 rounded-full mx-auto mt-4"></div>
            </div>
          </div>

            <div className="max-w-4xl mx-auto space-y-6 text-base md:text-lg text-slate-800 leading-relaxed font-styrene">
              <p>
                I'm Kavya Yeluguri, a Data Engineer with 5+ years of experience building cloud data pipelines, analytics platforms,
                and AI-enabled workflows. My core expertise is data engineering on GCP, with a particular interest in designing 
                systems that handle data reliably at scale. More recently, I've been expanding into AI systems and exploring 
                how AI can become a practical part of the way we build, solve problems, and make better engineering decisions.
              </p>
              <p>                             
               I currently work as a Data Engineer at PayPal, where I primarily work on micro-batch and real-time data processing systems. 
               I enjoy going deep into problems, understanding how things work beneath the surface, and breaking complex challenges 
               into simpler, practical solutions. I'm especially interested in designing systems that create real value for 
               the products and people using them.
              </p>
              <p>
                I believe good engineering is less about choosing the most sophisticated technology and more about understanding 
                the problem well enough to build a simple, reliable solution that creates real value.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mt-12 text-left">
              {focusAreas.map(({ title, icon: Icon, summary, proof }) => (
                <div key={title} className="bg-white/70 border border-white/60 rounded-2xl p-5 shadow-lg">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4">
                    <Icon size={22} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 font-styrene">{title}</h4>
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">{summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {proof.map((item) => (
                      <span key={item} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
          <div className="w-full max-w-6xl mx-auto bg-white/60 backdrop-blur-sm px-6 md:px-12 py-12 md:py-20 rounded-3xl relative overflow-hidden border border-white/40 shadow-2xl">


            <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-white/50 mb-6">
              {/* <h2 className="text-sm font-semibold text-slate-600 mb-3 tracking-wider uppercase">
                Portfolio
              </h2> */}
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 font-styrene tracking-tight">
                Professional Experience
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-slate-900 via-zinc-400 to-gray-800 rounded-full mx-auto mt-4"></div>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              A journey through innovative companies where I've built scalable data solutions
            </p>
          </div>
            <div className="grid gap-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedExperience(exp)}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/40 backdrop-blur-md">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        {/* Company Image with Grey Background */}
                        <div className="md:w-48 h-40 md:h-auto flex-shrink-0 relative overflow-hidden flex items-center justify-center p-6 bg-gray-100">
                          <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 overflow-hidden">
                            <img 
                              src={exp.image} 
                              alt={exp.company}
                              className={`object-contain rounded-full hover:scale-120 transition-transform duration-300 w-64 h-64 scale-125`}
                            />
                          </div>
                        </div>
                        {/* Content */}
                        <div className="flex-1 p-8">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div>
                              <h5 className="text-2xl font-bold text-black mb-2 font-styrene group-hover:text-slate-700 transition-colors">
                                {exp.company}
                              </h5>
                              <p className="text-slate-700 font-medium text-lg mb-2 font-styrene">
                                {exp.role}
                              </p>
                            </div>
                            <span className="inline-block bg-white/60 text-slate-800 text-sm font-medium px-4 py-2 rounded-full whitespace-nowrap">
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-slate-700 mb-6 leading-relaxed">
                            {exp.details.substring(0, 150)}...
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.slice(0, 6).map((tech, techIndex) => (
                              <span 
                                key={techIndex} 
                                className="text-xs bg-white/60 text-slate-700 px-3 py-1 rounded-full border border-white/40 hover:bg-white/80 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                            {exp.technologies.length > 6 && (
                              <span className="text-xs text-slate-600 px-2 py-1">
                                +{exp.technologies.length - 6} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

        {/* Education Section */}
        <div>
          <div className="w-full max-w-6xl mx-auto bg-white/60 backdrop-blur-sm px-6 md:px-12 py-12 md:py-20 rounded-3xl relative overflow-hidden border border-white/40 shadow-2xl">

            <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-white/50 mb-6">
              {/* <h2 className="text-sm font-semibold text-slate-600 mb-3 tracking-wider uppercase">
                Portfolio
              </h2> */}
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 font-styrene tracking-tight">
                Academic Journey
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-slate-900 via-zinc-400 to-gray-800 rounded-full mx-auto mt-4"></div>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Educational foundation that shaped my analytical thinking and technical expertise
            </p>
          </div>
            <div className="grid gap-8">
              {educations.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedEducation(edu)}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/40 backdrop-blur-md">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        {/* Institution Image with Grey Background */}
                        <div className="md:w-48 h-40 md:h-auto flex-shrink-0 relative overflow-hidden flex items-center justify-center p-6 bg-gray-100">
                          <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 overflow-hidden">
                            <img 
                              src={edu.image} 
                              alt={edu.institution}
                              className="w-28 h-28 object-contain rounded-full hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        </div>
                        {/* Content */}
                        <div className="flex-1 p-8">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div>
                              <h5 className="text-2xl font-bold text-black mb-2 font-styrene group-hover:text-slate-700 transition-colors">
                                {edu.institution}
                              </h5>
                              <p className="text-slate-700 font-medium text-lg mb-2 font-styrene">
                                {edu.degree}
                              </p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <span className="inline-block bg-white/60 text-slate-800 text-sm font-medium px-4 py-2 rounded-full whitespace-nowrap">
                                {edu.period}
                              </span>
                              {edu.gpa && (
                                <span className="inline-block bg-green-50/80 text-green-700 text-sm font-medium px-4 py-2 rounded-full">
                                  GPA: {edu.gpa}
                                </span>
                              )}
                            </div>
                          </div>
                          <p className="text-slate-700 mb-6 leading-relaxed">
                            {edu.details.substring(0, 150)}...
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.slice(0, 6).map((course, courseIndex) => (
                              <span 
                                key={courseIndex} 
                                className="text-xs bg-white/60 text-slate-700 px-3 py-1 rounded-full border border-white/40 hover:bg-white/80 transition-colors"
                              >
                                {course}
                              </span>
                            ))}
                            {edu.coursework.length > 6 && (
                              <span className="text-xs text-slate-600 px-2 py-1">
                                +{edu.coursework.length - 6} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {selectedExperience && (
        <ExperienceModal
          isOpen={!!selectedExperience}
          onClose={() => setSelectedExperience(null)}
          experience={selectedExperience}
        />
      )}

      {selectedEducation && (
        <EducationModal
          isOpen={!!selectedEducation}
          onClose={() => setSelectedEducation(null)}
          education={selectedEducation}
        />
      )}
    </section>
  );
};

export default About;
