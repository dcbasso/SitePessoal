document.addEventListener('DOMContentLoaded', function() {
    console.log("Portfólio carregado. Iniciando scripts...");

    // --- Dicionário de Traduções (PT, EN, ES) ---
    const translations = {
        pt: {
            // Navegação
            nav_home: "Início", nav_about: "Sobre", nav_skills: "Skills", nav_exp: "Experiência", nav_resume: "Currículo", nav_contact: "Contato",
            
            // Hero
            hero_greeting: "Olá, eu sou", hero_role_prefix: "Atuo como",
            hero_desc: "Engenheiro de Software experiente e altamente adaptável, com um histórico de sucesso no desenvolvimento de soluções backend e arquiteturas de microsserviços na AWS e GCP.",
            btn_contact: "Entrar em Contato",
            
            // Sobre
            about_title: "Sobre Mim",
            about_text_1: "Com mais de 17 anos de experiência em Java, atuo em todo o ciclo de desenvolvimento, com profundo entendimento de metodologias Ágeis e foco na entrega de valor.",
            about_text_2: "Minha expertise inclui Java (21+), Kotlin, Spring Boot e o uso de tecnologias como Kafka, bancos de dados (PostgreSQL, NoSQL) e Docker. Frequentemente atuo como Tech Lead e Arquiteto, mentorando equipes.",
            
            // Skills
            skills_cat_tools: "Ferramentas & Cloud",
            skills_cat_familiarity: "Conceitos & Familiaridade",
            skills_cat_hard: "Idiomas & Soft Skills",
            
            skill_native: "Português (Nativo)", skill_english: "Inglês (C2)", skill_spanish: "Espanhol (A1)",
            skill_leadership: "Liderança",
            skill_microservices: "Microsserviços",
            skill_unit_testing: "Testes Unitários",

            // Experiência
            exp_title: "Experiência Profissional",
            
            // Globant - Disney
            exp_globant_disney: "Liderança arquitetural no projeto Core da Disney. Responsável pela definição de Infraestrutura como Código (Terraform), padrões de documentação (AsciiDocs) e mentoria avançada do time em Kotlin e AWS.",
            
            // Globant - Royal Caribbean
            exp_globant_rc: "Arquiteto responsável por soluções de resiliência e alta performance. Liderança em Engenharia de Dados utilizando Python e AI, além de integração de sistemas via Kafka, Webflux e Couchbase.",
            
            // Globant - Expedia
            exp_globant_expedia: "Desenvolvimento de microsserviços modernos com Kotlin e Spring Boot. Implementação de APIs GraphQL e estratégias de validação de funcionalidades através de Testes A/B.",

            // Outras
            exp_zup_desc: "Desenvolvimento de microsserviços de alta escala para o setor financeiro (Itaú). Criação de POCs inovadoras utilizando Micronaut e gRPC, além de atuar no aprimoramento técnico do time através de pair programming.",
            exp_wealth_desc: "Engenharia de CRM Cloud, migrando de monolito para microsserviços. Implementação de Neo4j, gerenciamento de arquivos com Apache POI e orquestração de containers com Rancher.",

            // Footer / Resume
            resume_title: "Meu Currículo", resume_text: "Prefere uma versão offline? Baixe meu currículo completo em PDF.", btn_download: "Baixar CV",
            contact_text: "Mora em Cascavel, PR? Vamos tomar um café. Ou entre em contato online:"
        },
        en: {
            // Navigation
            nav_home: "Home", nav_about: "About", nav_skills: "Skills", nav_exp: "Experience", nav_resume: "Resume", nav_contact: "Contact",
            
            // Hero
            hero_greeting: "Hello, I am", hero_role_prefix: "I work as a",
            hero_desc: "Experienced and highly adaptable Software Engineer with a successful track record in developing backend solutions ranging from microservices architectures on AWS and GCP.",
            btn_contact: "Get in Touch",
            
            // About
            about_title: "About Me",
            about_text_1: "Experienced throughout the entire development lifecycle, with a deep understanding of Agile methodologies and an unwavering focus on delivering value.",
            about_text_2: "Expertise in Java (21+), Kotlin, Spring Boot, and the utilization of technologies such as Kafka, databases (PostgreSQL, NoSQL), and Docker. Acting as a Tech Lead and Architect, mentoring teams.",
            
            // Skills
            skills_cat_tools: "Tools & Cloud",
            skills_cat_familiarity: "Concepts & Familiarity",
            skills_cat_hard: "Languages & Soft Skills",
            
            skill_native: "Portuguese (Native)", skill_english: "English (C2)", skill_spanish: "Spanish (A1)",
            skill_leadership: "Leadership",
            skill_microservices: "Microservices",
            skill_unit_testing: "Unit Testing",

            // Experience
            exp_title: "Professional Experience",
            
            // Globant - Disney
            exp_globant_disney: "Architectural leadership on the Disney Core project. Responsible for defining Infrastructure as Code (Terraform), documentation standards (AsciiDocs), and advanced team mentoring in Kotlin and AWS.",

            // Globant - Royal Caribbean
            exp_globant_rc: "Architect responsible for resilience and high-performance solutions. Leadership in Data Engineering using Python and AI, as well as system integration via Kafka, Webflux, and Couchbase.",

            // Globant - Expedia
            exp_globant_expedia: "Development of modern microservices using Kotlin and Spring Boot. Implementation of GraphQL APIs and feature validation strategies through A/B Testing.",

            // Others
            exp_zup_desc: "Development of high-scale microservices for the financial sector (Itaú). Created innovative POCs using Micronaut and gRPC, and improved team technical skills through pair programming.",
            exp_wealth_desc: "Cloud CRM engineering, migrating from monolith to microservices. Implemented Neo4j, file management with Apache POI, and container orchestration with Rancher.",

            // Footer / Resume
            resume_title: "My Resume", resume_text: "Prefer an offline version? Download my full resume in PDF.", btn_download: "Download CV",
            contact_text: "Living in Cascavel, PR? Let's have a coffee. Or get in touch online:"
        },
        es: {
            // Navegación
            nav_home: "Inicio", nav_about: "Sobre Mí", nav_skills: "Habilidades", nav_exp: "Experiencia", nav_resume: "Currículum", nav_contact: "Contacto",
            
            // Hero
            hero_greeting: "Hola, soy", hero_role_prefix: "Trabajo como",
            hero_desc: "Ingeniero de Software experimentado y altamente adaptable, con un historial exitoso en el desarrollo de soluciones backend y arquitecturas de microservicios en AWS y GCP.",
            btn_contact: "Ponerse en Contacto",
            
            // Sobre Mí
            about_title: "Sobre Mí",
            about_text_1: "Con más de 17 años de experiencia en Java, trabajo en todo el ciclo de desarrollo, con un profundo entendimiento de metodologías Ágiles y enfoque en la entrega de valor.",
            about_text_2: "Mi experiencia incluye Java (21+), Kotlin, Spring Boot y el uso de tecnologías como Kafka, bases de datos (PostgreSQL, NoSQL) y Docker. Frecuentemente actúo como Tech Lead y Arquitecto.",
            
            // Skills
            skills_cat_tools: "Herramientas & Cloud",
            skills_cat_familiarity: "Conceptos & Familiaridad",
            skills_cat_hard: "Idiomas & Habilidades",
            
            skill_native: "Portugués (Nativo)", skill_english: "Inglés (C2)", skill_spanish: "Español (A1)",
            skill_leadership: "Liderazgo",
            skill_microservices: "Microservicios",
            skill_unit_testing: "Pruebas Unitarias",

            // Experiencia
            exp_title: "Experiencia Profesional",
            
            // Globant - Disney
            exp_globant_disney: "Liderazgo arquitectónico en el proyecto Core de Disney. Responsable de la definición de Infraestructura como Código (Terraform), estándares de documentación (AsciiDocs) y mentoría avanzada en Kotlin y AWS.",

            // Globant - Royal Caribbean
            exp_globant_rc: "Arquitecto responsable de soluciones de resiliencia y alto rendimiento. Liderazgo en Ingeniería de Datos utilizando Python e IA, además de integración de sistemas vía Kafka, Webflux y Couchbase.",

            // Globant - Expedia
            exp_globant_expedia: "Desarrollo de microservicios modernos con Kotlin y Spring Boot. Implementación de APIs GraphQL y estrategias de validación de funcionalidades mediante Pruebas A/B.",

            // Otros
            exp_zup_desc: "Desarrollo de microservicios de alta escala para el sector financiero (Itaú). Creación de POCs innovadoras con Micronaut y gRPC, y mejora técnica del equipo mediante pair programming.",
            exp_wealth_desc: "Ingeniería de CRM Cloud, migrando de monolito a microservicios. Implementación de Neo4j, gestión de archivos con Apache POI y orquestación de contenedores con Rancher.",

            // Footer / Resume
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
            'Senior Architect',
            'Senior Software Engineer', 
            'Java & Kotlin Specialist', 
            'Tech Lead'
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