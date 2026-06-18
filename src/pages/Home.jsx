import { motion as Motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';

const Section = ({ children, className = "" }) => {
    return (
        <Motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`min-h-screen flex flex-col justify-center ${className}`}
        >
            {children}
        </Motion.section>
    );
};

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const target = location.state?.scrollTo;
        if (!target) return;

        const timeout = window.setTimeout(() => {
            const element = document.getElementById(target);
            if (element) {
                const headerOffset = 84;
                const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
            navigate('.', { replace: true, state: null });
        }, 120);

        return () => window.clearTimeout(timeout);
    }, [location.state, navigate]);

    return (
        <div className="overflow-hidden">
            <div className="fixed inset-0 z-[-1] bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.13),_transparent_28%),linear-gradient(135deg,#080D18_0%,#0F172A_48%,#07111F_100%)]"></div>

            <Section className="pt-0">
                <Hero />
            </Section>

            <Section>
                <About />
            </Section>

            <Section>
                <Skills />
            </Section>

            <Section>
                <Certifications />
            </Section>

            <Section>
                <Projects />
            </Section>

            <Section>
                <Contact />
            </Section>
        </div>
    );
};

export default Home;

