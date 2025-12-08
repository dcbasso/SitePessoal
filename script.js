document.addEventListener('DOMContentLoaded', function() {
    console.log("Portfólio carregado. Iniciando scripts...");

    // --- Dicionário de Traduções (PT, EN, ES) ---
    const translations = {
        pt: {
            nav_home: "Início", nav_about: "Sobre", nav_skills: "Skills", nav_exp: "Experiência", nav_resume: "Currículo", nav_contact: "Contato",
            hero_greeting: "Olá, eu sou", hero_role_prefix: "Atuo como",
            hero_desc: "Engenheiro de Software experiente e altamente adaptável, com um histórico de sucesso no desenvolvimento de soluções backend e arquiteturas de microsserviços na AWS e GCP.",
            btn_contact: "Entrar em Contato",
            about_title: "Sobre Mim",
            about_text_1: "Com mais de 17 anos de experiência em Java, atuo em todo o ciclo de desenvolvimento, com profundo entendimento de metodologias Ágeis e foco na entrega de valor.",
            about_text_2: "Minha expertise inclui Java (21+), Kotlin, Spring Boot e o uso de tecnologias como Kafka, bancos de dados (PostgreSQL, NoSQL) e Docker. Frequentemente atuo como Tech Lead, mentorando equipes e definindo arquiteturas.",
            
            // Novos Títulos de Seções
            skills_cat_tools: "Ferramentas & Cloud",
            skills_cat_familiarity: "Conceitos & Familiaridade",
            skills_cat_hard: "Idiomas & Soft Skills",
            
            skill_native: "Português (Nativo)", skill_english: "Inglês (C2)", skill_spanish: "Espanhol (A1)",
            skill_leadership: "Liderança",
            skill_microservices: "Microsserviços",
            skill_unit_testing: "Testes Unitários",

            exp_title: "Experiência Recente",
            exp_globant_desc: "Atuação como Tech Lead, desenvolvendo microsserviços com Java 21, Spring Boot, GCP e Programação Reativa.",
            exp_rezolve_desc: "Manutenção de microsserviços Java com dados geoespaciais, utilizando Kubernetes e RabbitMQ.",
            exp_wealth_desc: "Planejamento de CRM em nuvem com microsserviços e integrações AWS S3 e Neo4J.",
            resume_title: "Meu Currículo", resume_text: "Prefere uma versão offline? Baixe meu currículo completo em PDF.", btn_download: "Baixar CV",
            contact_text: "Mora em Cascavel, PR? Vamos tomar um café. Ou entre em contato online:"
        },
        en: {
            nav_home: "Home", nav_about: "About", nav_skills: "Skills", nav_exp: "Experience", nav_resume: "Resume", nav_contact: "Contact",
            hero_greeting: "Hello, I am", hero_role_prefix: "I work as a",
            hero_desc: "Experienced and highly adaptable Software Engineer with a successful track record in developing backend solutions ranging from microservices architectures on AWS and GCP.",
            btn_contact: "Get in Touch",
            about_title: "About Me",
            about_text_1: "Experienced throughout the entire development lifecycle, with a deep understanding of Agile methodologies and an unwavering focus on delivering value.",
            about_text_2: "Expertise in Java (21+), Kotlin, Spring Boot, and the utilization of technologies such as Kafka, databases (PostgreSQL, NoSQL), and Docker. Acting as a Tech Lead and mentoring teams.",
            
            // New Section Titles
            skills_cat_tools: "Tools & Cloud",
            skills_cat_familiarity: "Concepts & Familiarity",
            skills_cat_hard: "Languages & Soft Skills",
            
            skill_native: "Portuguese (Native)", skill_english: "English (C2)", skill_spanish: "Spanish (A1)",
            skill_leadership: "Leadership",
            skill_microservices: "Microservices",
            skill_unit_testing: "Unit Testing",

            exp_title: "Recent Experience",
            exp_globant_desc: "Acting as a Tech Lead, developing microservices using Java 21 with Spring Boot, GCP and Reactive Programming.",
            exp_rezolve_desc: "Maintain Java microservices using Geospatial data, Kubernetes, and RabbitMQ.",
            exp_wealth_desc: "Planning a CRM cloud system with microservices. Developed backend with AWS S3 and Neo4J.",
            resume_title: "My Resume", resume_text: "Prefer an offline version? Download my full resume in PDF.", btn_download: "Download CV",
            contact_text: "Living in Cascavel, PR? Let's have a coffee. Or get in touch online:"
        },
        es: {
            nav_home: "Inicio", nav_about: "Sobre Mí", nav_skills: "Habilidades", nav_exp: "Experiencia", nav_resume: "Currículum", nav_contact: "Contacto",
            hero_greeting: "Hola, soy", hero_role_prefix: "Trabajo como",
            hero_desc: "Ingeniero de Software experimentado y altamente adaptable, con un historial exitoso en el desarrollo de soluciones backend y arquitecturas de microservicios en AWS y GCP.",
            btn_contact: "Ponerse en Contacto",
            about_title: "Sobre Mí",
            about_text_1: "Con más de 17 años de experiencia en Java, trabajo en todo el ciclo de desarrollo, con un profundo entendimiento de metodologías Ágiles y enfoque en la entrega de valor.",
            about_text_2: "Mi experiencia incluye Java (21+), Kotlin, Spring Boot y el uso de tecnologías como Kafka, bases de datos (PostgreSQL, NoSQL) y Docker. Frecuentemente actúo como Tech Lead, asesorando equipos y definiendo arquitecturas.",
            
            // Nuevos Títulos
            skills_cat_tools: "Herramientas & Cloud",
            skills_cat_familiarity: "Conceptos & Familiaridad",
            skills_cat_hard: "Idiomas & Habilidades",
            
            skill_native: "Portugués (Nativo)", skill_english: "Inglés (C2)", skill_spanish: "Español (A1)",
            skill_leadership: "Liderazgo",
            skill_microservices: "Microservicios",
            skill_unit_testing: "Pruebas Unitarias",

            exp_title: "Experiencia Reciente",
            exp_globant_desc: "Actuando como Tech Lead, desarrollando microservicios con Java 21, Spring Boot, GCP y Programación Reactiva.",
            exp_rezolve_desc: "Mantenimiento de microservicios Java con datos geoespaciales, utilizando Kubernetes y RabbitMQ.",
            exp_wealth_desc: "Planificación de sistema CRM en la nube con microservicios e integraciones AWS S3 y Neo4J.",
            resume_title: "Mi Currículum", resume_text: "¿Prefieres una versión offline? Descarga mi CV completo en PDF.", btn_download: "Descargar CV",
            contact_text: "¿Vives en Cascavel, PR? Tomemos un café. O ponte en contacto online:"
        }
    };

    // --- Função de Troca de Idioma ---
    function changeLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.innerText = translations[lang][key];
            }
        });

        // Atualiza a cor dos botões
        const btns = document.querySelectorAll('.lang-btn');
        btns.forEach(btn => btn.classList.remove('active'));
        
        const activeBtn = document.getElementById(`btn-${lang}`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    }

    // --- Configuração dos Eventos (Cliques) ---
    const btnPt = document.getElementById('btn-pt');
    const btnEn = document.getElementById('btn-en');
    const btnEs = document.getElementById('btn-es');

    if (btnPt && btnEn && btnEs) {
        btnPt.addEventListener('click', () => changeLanguage('pt'));
        btnEn.addEventListener('click', () => changeLanguage('en'));
        btnEs.addEventListener('click', () => changeLanguage('es'));
    }

    // --- Efeito de Digitação (Typewriter) ---
    const textElement = document.getElementById('typewriter');
    if (textElement) {
        const texts = [
            'Senior Software Engineer', 
            'Java & Kotlin Specialist', 
            'Tech Lead',
            'Cloud Architect'
        ];
        let count = 0;
        let index = 0;
        let currentText = '';
        let letter = '';

        (function type() {
            if (count === texts.length) {
                count = 0;
            }
            currentText = texts[count];
            letter = currentText.slice(0, ++index);

            textElement.textContent = letter;

            if (letter.length === currentText.length) {
                count++;
                index = 0;
                setTimeout(type, 2000); 
            } else {
                setTimeout(type, 100);
            }
        }());
    }

    // --- Menu Mobile ---
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Inicialização ---
    changeLanguage('pt');
});