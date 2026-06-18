import { Cloud, Code, Database, Globe, Wrench } from 'lucide-react';

export const personalInfo = {
    name: "Bhavesh Kapre",
    role: "Software Engineer | Cloud + Web Developer",
    location: "Burhanpur, India",
    email: "bhaveshkapre19@gmail.com",
    github: "https://github.com/BhaveshKapre19",
    linkedin: "https://www.linkedin.com/in/bhavesh-kapre",
    aboutIntro: "I build practical software across web development, cloud infrastructure, databases, and machine learning. My projects include CMS platforms, MVC applications, NLP tools, ML dashboards, and AWS infrastructure work.",
    aboutOutro: "I care about clear interfaces, maintainable code, and learning fast enough to turn unfamiliar problems into working systems.",
    heroHeadline: "Building practical web apps and cloud systems.",
    heroDescription: "I am Bhavesh Kapre, a developer focused on React interfaces, Python backends, AWS deployments, and database-backed applications that are clear, reliable, and useful.",
    highlights: ['React', 'Python', 'AWS', 'MySQL'],
    stats: [
        { value: '6+', label: 'Projects shipped' },
        { value: '4', label: 'Certifications' },
        { value: 'Cloud', label: 'Infra focus' },
    ],
    strengths: ['Cloud deployments', 'Backend problem solving', 'Clean UI implementation']
};

export const educationData = [
    {
        degree: 'B.Tech - Computer Science & Engineering',
        institution: 'Shivajirao Kadam Institute of Technology and Management',
        graduation: 'July 2022',
        cgpa: '7.5',
    },
    {
        degree: 'Diploma - Computer Science & Engineering',
        institution: 'Thakur Shivkumarsingh Memorial Polytechnic College',
        graduation: 'July 2019',
        cgpa: '7.3',
    },
];

export const skillsData = {
    Programming: { items: ['Python', 'PHP', 'SQL'], icon: Code },
    'Cloud & DevOps': { items: ['AWS', 'Azure', 'Docker', 'Linux Server'], icon: Cloud },
    'Web Development': { items: ['React', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'], icon: Globe },
    Frameworks: { items: ['Flask', 'Django', 'Laravel'], icon: Code },
    Tools: { items: ['Git', 'GitHub', 'Postman'], icon: Wrench },
    Databases: { items: ['MySQL', 'Database Design'], icon: Database },
};

export const certificationsData = [
    {
        name: 'AWS Cloud Technical Essentials',
        issuer: 'Coursera',
        date: 'May 28, 2026',
        grade: '95.51%',
        duration: '20 hours',
        link: 'https://www.coursera.org/account/accomplishments/verify/B8ENYFENJLME'
    },
    {
        name: 'Google IT Support Specialization',
        issuer: 'Coursera',
        date: 'October 29, 2023',
        grade: null,
        duration: '3 months',
        link: 'https://www.coursera.org/account/accomplishments/specialization/MQNLV5ACYGCF',
        courses: [
            'Technical Support Fundamentals',
            'The Bits and Bytes of Computer Networking',
            'Operating Systems and You: Becoming a Power User',
            'System Administration and IT Infrastructure Services',
            'IT Security: Defense against the digital dark arts'
        ]
    },
    {
        name: 'Building Web Applications in PHP',
        issuer: 'Coursera',
        date: 'August 5, 2020',
        grade: '98.90%',
        duration: '28 hours',
        link: 'https://www.coursera.org/account/accomplishments/verify/VHDY4EUCH567'
    },
    {
        name: 'Google Cloud Fundamentals: Core Infrastructure',
        issuer: 'Coursera',
        date: 'August 24, 2020',
        grade: '77.44%',
        duration: '6 hours',
        link: 'https://www.coursera.org/account/accomplishments/verify/9M6KBPFFMU7F'
    }
];
