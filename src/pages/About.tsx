'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  pipelineStages,
  ecosystemEntities,
  earningsStages,
  courseTracks,
  stats
} from '@/data/about';

const About = () => {
  const [courseFilter, setCourseFilter] = useState('all');
  const filterOptions = ['all', 'ai', 'build', 'money', 'creative', 'fast'];

  const isCourseCategoryVisible = (courseFilters: string[]): boolean => {
    if (courseFilter === 'all') return true;
    return courseFilters.includes(courseFilter);
  };

  const filteredCourses = courseTracks.filter((track) =>
    courseFilter === 'all' ? true : track.filters.includes(courseFilter)
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 flex items-center gap-2"
          >
            <div className="h-0.5 w-5 bg-primary"></div>
            <span className="text-xs font-mono uppercase tracking-widest text-primary">Our Approach</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-900 uppercase leading-tight mb-6"
          >
            Building <span className="text-gradient-gold">Industry Ready</span> Professionals
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground font-light leading-relaxed"
          >
            From Student to Expert. Through Internee and Shadow. A four-stage pipeline connecting education to opportunity.
          </motion.p>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="py-12 px-6 md:px-12 border-b border-border bg-card/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 md:grid-cols-5 gap-8"
          >
            {stats.map((stat, idx) => (
              <motion.div key={idx} variants={itemVariants} className="text-center">
                <div className="text-2xl md:text-3xl font-display font-900 text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pipeline Section */}
      <section className="py-20 px-6 md:px-12 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-900 uppercase mb-4">The Pipeline</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Four stages of professional growth. Real earning. Real advancement.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {pipelineStages.map((stage, idx) => (
              <motion.div
                key={stage.number}
                variants={itemVariants}
                className={`p-8 rounded border transition-all hover:scale-105 ${
                  stage.color === 'blue'
                    ? 'bg-blue-500/10 border-blue-500/30'
                    : stage.color === 'purple'
                      ? 'bg-purple-500/10 border-purple-500/30'
                      : stage.color === 'cyan'
                        ? 'bg-cyan-500/10 border-cyan-500/30'
                        : 'bg-primary/10 border-primary/30'
                }`}
              >
                <div className="text-4xl font-display font-900 mb-3 text-primary">{stage.number}</div>
                <h3 className="text-xl font-display font-bold mb-2">{stage.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{stage.description}</p>
                <div className="text-xs font-mono text-muted-foreground mb-3">Duration: {stage.duration}</div>
                <div className={`text-sm font-semibold ${'text-primary'}`}>
                  Earning: {stage.earning}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 px-6 md:px-12 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-900 uppercase mb-4">Connected Ecosystem</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Education and opportunity working in tandem. Two arms. One vision.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {ecosystemEntities.map((entity) => (
              <motion.div
                key={entity.number}
                variants={itemVariants}
                className={`p-8 rounded border transition-all ${
                  entity.featured
                    ? 'bg-primary/10 border-primary/50 ring-2 ring-primary/20'
                    : 'bg-card border-border hover:border-border/50'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-2xl font-display font-900 text-primary">{entity.number}</div>
                  {entity.featured && (
                    <span className="px-3 py-1 text-xs font-mono bg-primary/20 text-primary rounded-full">
                      Connected
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">{entity.title}</h3>
                <p className="text-sm text-primary mb-3">{entity.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-4">{entity.description}</p>
                <a
                  href={entity.link}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-6 md:px-12 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-900 uppercase mb-6">All Tracks</h2>
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setCourseFilter(filter)}
                  className={`px-4 py-2 rounded text-xs font-mono uppercase tracking-widest transition-all ${
                    courseFilter === filter
                      ? 'bg-primary text-background'
                      : 'bg-card border border-border text-muted-foreground hover:border-primary'
                  }`}
                >
                  {filter === 'all' && 'All Tracks'}
                  {filter === 'ai' && 'AI'}
                  {filter === 'build' && 'Build'}
                  {filter === 'money' && 'Money'}
                  {filter === 'creative' && 'Creative'}
                  {filter === 'fast' && 'Fast Track'}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCourses.map((track) => (
              <motion.div
                key={track.id}
                variants={itemVariants}
                className={`p-6 rounded border transition-all hover:scale-105 ${
                  track.featured
                    ? 'bg-primary/10 border-primary/50 md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-3'
                    : 'bg-card border-border'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl font-display font-900 text-accent">{track.number}</div>
                    <div>
                      <span className={`px-2 py-1 text-xs font-mono rounded-full ${
                        track.badgeType === 'ai'
                          ? 'bg-blue-500/20 text-blue-400'
                          : track.badgeType === 'build'
                            ? 'bg-purple-500/20 text-purple-400'
                            : track.badgeType === 'money'
                              ? 'bg-green-500/20 text-green-400'
                              : track.badgeType === 'creative'
                                ? 'bg-pink-500/20 text-pink-400'
                                : track.badgeType === 'fast'
                                  ? 'bg-orange-500/20 text-orange-400'
                                  : 'bg-cyan-500/20 text-cyan-400'
                      }`}>
                        {track.badge}
                      </span>
                    </div>
                  </div>
                  {track.featured && (
                    <span className="px-2 py-1 text-xs font-mono bg-primary/30 text-primary rounded">
                      FEATURED
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-display font-bold mb-2">{track.title}</h3>
                <p className="text-xs text-accent mb-3">Market Gap: {track.gap}</p>
                <p className="text-sm text-muted-foreground mb-4">{track.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {track.skills.slice(0, 3).map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs bg-background/50 text-muted-foreground rounded">
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-xs font-mono text-muted-foreground mb-2">Duration: {track.duration}</p>
                <p className="text-xs text-accent">{track.outcome}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Earnings Section */}
      <section className="py-20 px-6 md:px-12 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-900 uppercase mb-4">Earnings Progression</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Income grows with advancement. From education to independence.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {earningsStages.map((stage) => (
              <motion.div
                key={stage.number}
                variants={itemVariants}
                className={`p-8 rounded border transition-all ${
                  stage.featured
                    ? 'bg-primary/10 border-primary/50 ring-2 ring-primary/20 md:col-span-3 grid grid-cols-3 gap-6'
                    : 'bg-card border-border'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">Stage {stage.number}</p>
                    <h3 className="text-lg font-display font-bold mb-3">{stage.title}</h3>
                    <div className="mb-3">
                      <div className={`text-2xl font-display font-900 ${stage.color === 'primary' ? 'text-primary' : 'text-primary'}`}>
                        {stage.amount}
                        <span className="text-sm text-muted-foreground ml-2">{stage.unit}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{stage.description}</p>
                    {stage.note && <p className="text-xs text-primary font-mono">{stage.note}</p>}
                  </div>
                  {stage.featured && (
                    <span className="text-primary font-bold text-sm">Peak</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 md:px-12 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 bg-card border border-border rounded"
          >
            <CheckCircle2 className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              We connect market demand to real talent. Education that leads to opportunity. Professionals trained not for jobs that might exist, but for clients we already serve.
            </p>
            <p className="text-muted-foreground text-base">
              Every course at Big Binary Tech has one purpose: bridge the gap between what the market needs and what graduates can deliver. From pipelines to paycheck.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-900 uppercase mb-6">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Pick a track aligned with your market gap. Begin today.
            </p>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-background font-display font-bold uppercase rounded hover:opacity-90 transition-opacity"
            >
              Explore Courses <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
