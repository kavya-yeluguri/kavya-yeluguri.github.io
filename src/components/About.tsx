import { useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceModal from './ExperienceModal';
import EducationModal from './EducationModal';
import { Card, CardContent } from '@/components/ui/card';
import { getAssetPath } from '@/utils/pathUtils';
import { Brain, Database } from 'lucide-react';

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
      technologies: ["GCP", "BigQuery", "PostgreSQL", "Triggers", "Views", "Sql Functions", "Control-M", "Compute Engine", "SQL", "ETL", "Data Migration", "Apache Spark", "Mainframe", "Financial Analytics"],
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
    <section id="about" className="py-20 px-4 sm:px-6 relative bg-dot-pattern">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* 1. About Me Section Card */}
        <div className="group bg-slate-50/70 backdrop-blur-md border border-slate-300/60 rounded-[2.5rem] p-6 sm:p-12 shadow-md space-y-8 transition-all duration-300">
          
          {/* Title Pill Container */}
          <div className="mx-auto w-fit bg-white border border-slate-200/90 rounded-2xl px-10 py-5 text-center shadow-md">
            <p className="font-mono text-xs tracking-widest text-slate-400 uppercase mb-1">
              ABOUT ME
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#3b82f6] tracking-tight transition-colors duration-300">
              Background & Experience
            </h2>
            <div className="w-10 h-0.5 bg-[#3b82f6] mx-auto mt-2.5 rounded-full transition-colors duration-300"></div>
          </div>

          {/* Bio Text Paragraphs */}
          <div className="max-w-3xl mx-auto space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base text-center">
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

          {/* Focus Areas Sub-cards */}
          <div className="grid sm:grid-cols-2 gap-5 pt-4">
            {focusAreas.map(({ title, icon: Icon, summary, proof }) => (
              <div key={title} className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h4 className="text-lg font-bold text-slate-900">{title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{summary}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proof.map((item) => (
                    <span key={item} className="text-[11px] bg-slate-100 border border-slate-200 text-slate-700 px-2.5 py-0.5 rounded-full font-mono">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 2. Professional Experience Card */}
        <div className="group bg-slate-50/70 backdrop-blur-md border border-slate-300/60 rounded-[2.5rem] p-6 sm:p-12 shadow-md space-y-8 transition-all duration-300">
          
          <div className="mx-auto w-fit bg-white border border-slate-200/90 rounded-2xl px-10 py-5 text-center shadow-md">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#3b82f6] tracking-tight transition-colors duration-300">
              Professional Experience
            </h2>
            <div className="w-10 h-0.5 bg-[#3b82f6] mx-auto mt-2.5 rounded-full transition-colors duration-300"></div>
          </div>

          <p className="text-center text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            A journey through innovative companies where I've built scalable data solutions
          </p>

          <div className="grid gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedExperience(exp)}
                className="cursor-pointer"
              >
                <Card className="overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all bg-white rounded-2xl">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-44 h-36 md:h-auto flex-shrink-0 flex items-center justify-center p-4 bg-slate-50 border-r border-slate-100">
                        <div className="w-20 h-20 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center p-2">
                          <img 
                            src={exp.image} 
                            alt={exp.company}
                            className="object-contain w-full h-full rounded-full"
                          />
                        </div>
                      </div>

                      <div className="flex-1 p-6 space-y-3">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">
                              {exp.company}
                            </h3>
                            <p className="text-slate-600 font-medium text-sm">
                              {exp.role}
                            </p>
                          </div>
                          <span className="inline-block bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono px-3 py-1 rounded-full w-fit">
                            {exp.period}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {exp.details.substring(0, 150)}...
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {exp.technologies.slice(0, 6).map((tech, techIndex) => (
                            <span 
                              key={techIndex} 
                              className="text-[11px] bg-slate-100 border border-slate-200 text-slate-700 px-2.5 py-0.5 rounded-full font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                          {exp.technologies.length > 6 && (
                            <span className="text-[11px] text-slate-500 font-mono px-2 py-0.5">
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

        {/* 3. Academic Journey Card */}
        <div className="group bg-slate-50/70 backdrop-blur-md border border-slate-300/60 rounded-[2.5rem] p-6 sm:p-12 shadow-md space-y-8 transition-all duration-300">
          
          <div className="mx-auto w-fit bg-white border border-slate-200/90 rounded-2xl px-10 py-5 text-center shadow-md">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#3b82f6] tracking-tight transition-colors duration-300">
              Academic Journey
            </h2>
            <div className="w-10 h-0.5 bg-[#3b82f6] mx-auto mt-2.5 rounded-full transition-colors duration-300"></div>
          </div>

          <p className="text-center text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Educational foundation that shaped my analytical thinking and technical expertise
          </p>

          <div className="grid gap-6">
            {educations.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedEducation(edu)}
                className="cursor-pointer"
              >
                <Card className="overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all bg-white rounded-2xl">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-44 h-36 md:h-auto flex-shrink-0 flex items-center justify-center p-4 bg-slate-50 border-r border-slate-100">
                        <div className="w-20 h-20 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center p-2">
                          <img 
                            src={edu.image} 
                            alt={edu.institution}
                            className="object-contain w-full h-full rounded-full"
                          />
                        </div>
                      </div>

                      <div className="flex-1 p-6 space-y-3">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">
                              {edu.institution}
                            </h3>
                            <p className="text-slate-600 font-medium text-sm">
                              {edu.degree}
                            </p>
                          </div>
                          <div className="flex flex-col items-start md:items-end gap-1">
                            <span className="inline-block bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono px-3 py-1 rounded-full">
                              {edu.period}
                            </span>
                            {edu.gpa && (
                              <span className="inline-block bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono px-2.5 py-0.5 rounded-full">
                                GPA: {edu.gpa}
                              </span>
                            )}
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {edu.details}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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