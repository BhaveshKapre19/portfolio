import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Skills from '../components/Skills';

const Section = ({ children, id, className = "" }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`min-h-screen flex flex-col justify-center ${className}`}
        >
            {children}
        </motion.section>
    );
};

const Home = () => {
    return (
        <div className="overflow-hidden">
            <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-black"></div>

            <Section id="hero" className="pt-0">
                <Hero />
            </Section>

            <Section id="about">
                <About />
            </Section>

            <Section id="skills">
                <Skills />
            </Section>

            <Section id="projects">
                <Projects />
            </Section>

            <Section id="contact">
                <Contact />
            </Section>
        </div>
    );
};

export default Home;
