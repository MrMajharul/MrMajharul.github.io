import { useEffect, useState } from 'react'
import {
  ArrowUpRight, Github, Linkedin, Mail, Moon, Sun, Menu, X, Code2,
  FlaskConical, Users, MapPin, GraduationCap, Terminal, Microscope, Cpu,
  FileText, Sparkles, Dna, Database, Check, Copy, Send, Phone
} from 'lucide-react'
import profileImg from './assets/majharul-islam.png'

type Project = {
  number: string
  name: string
  category: string
  description: string
  stack: string[]
  href: string
  featured?: boolean
}

type Education = {
  degree: string
  institution: string
  period: string
  status: string
  detail: string
  link?: string
}

type Certification = {
  title: string
  issuer: string
  date: string
  credentialId: string
  verifyUrl: string
}

const education: Education[] = [
  {
    degree: 'BSc in Computer Science & Engineering',
    institution: 'Green University of Bangladesh',
    period: '2023 — 2027 (Expected)',
    status: 'In Progress',
    detail: 'Focusing on algorithms, data structures, machine learning, and bioinformatics research.',
    link: 'https://cse.green.edu.bd/',
  },
  {
    degree: 'Higher Secondary Certificate (HSC) — Science',
    institution: 'Kabi Nazrul Govt. College, Dhaka',
    period: '2020 — 2021',
    status: 'Completed',
    detail: 'Science discipline with core studies in Mathematics, Physics, and Chemistry.',
    link: 'https://kabinazrulcollege.gov.bd/',
  },
]

const certifications: Certification[] = [
  {
    title: 'Certified Data Scientist',
    issuer: 'DataCamp',
    date: 'Sep 2026',
    credentialId: 'DS0023879370066',
    verifyUrl: 'https://www.datacamp.com/certificate/DS0023879370066',
  },
  {
    title: 'Certified Associate Data Analyst',
    issuer: 'DataCamp',
    date: 'Sep 2026',
    credentialId: 'DAA0014389060988',
    verifyUrl: 'https://www.datacamp.com/certificate/DAA0014389060988',
  },
]

type ResearchInterest = {
  title: string
  desc: string
  icon: typeof Microscope
  keywords: string[]
}

const researchInterests: ResearchInterest[] = [
  {
    title: 'Computational Biology & Oncology',
    desc: 'Genomic biomarker reproducibility, RNA-seq expression analysis, and cancer immunotherapy response validation.',
    icon: Dna,
    keywords: ['Bioinformatics', 'RNA-seq', 'Biomarkers', 'Immunotherapy'],
  },
  {
    title: 'Reproducible Machine Learning',
    desc: 'External cohort validation, statistical benchmarks, exploratory analysis, and cross-cohort generalization.',
    icon: Microscope,
    keywords: ['Statistical EDA', 'Cohort Validation', 'Model Evaluation'],
  },
  {
    title: 'Multimodal Deep Learning',
    desc: 'Parameter-efficient multimodal learning architectures for biomedical prediction and clinical data integration.',
    icon: Cpu,
    keywords: ['PEFT', 'Multimodal AI', 'Clinical Data'],
  },
]

const projects: Project[] = [
  {
    number: '01', name: 'Istiqamaah', category: 'PRODUCT · PRODUCTIVITY',
    description: 'A Muslim habit and productivity app built around Salah, with a responsive dashboard, habit tracking foundations, and Supabase-backed authentication and data access.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    href: 'https://istiqamaah.vercel.app/', featured: true,
  },
  {
    number: '02', name: 'GURPC Portal', category: 'WEB · DATA',
    description: 'Official platform for the Green University Research & Publication Community — showcases research papers, announcements, and events with structured data workflows.',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Data'],
    href: 'https://gurpc.green.edu.bd/',
  },
  {
    number: '03', name: 'JMC Media Club Platform', category: 'WEB · DATA',
    description: 'Interactive digital portal showcasing student journalism, media productions, and event calendars with continuous deployment on Vercel.',
    stack: ['Next.js', 'TypeScript', 'Vercel'],
    href: 'https://jmc-club.vercel.app/',
  },
  {
    number: '04', name: 'UConnect', category: 'FULL-STACK · COMMUNITY',
    description: 'Centralized university community platform connecting students and faculty, with role-based authentication, interactive forums, and optimized SQL data queries.',
    stack: ['React', 'TypeScript', 'Node.js', 'SQL', 'Docker'],
    href: 'https://github.com/MrMajharul/UConnect',
  },
]

const experiences = [
  { 
    role: 'Treasurer', 
    org: 'Green University Computer Club (GUCC)', 
    href: 'https://gucc.green.edu.bd/members/232002256', 
    type: 'LEADERSHIP · 2024 — PRESENT', 
    detail: 'Serving as Treasurer (2026), managing club finances, budget planning, and resource allocation for hackathons. Previously served as Graphics & Multimedia Coordinator (2025) and Executive Member (2024).' 
  },
  { 
    role: 'IT Intern', 
    org: 'Dhaka University Research Society (DURS)', 
    type: 'RESEARCH INTERNSHIP · 2026 — PRESENT', 
    detail: 'Managing internal digital infrastructure, automating data documentation procedures, and supporting technical workflows for academic research projects.' 
  },
  { 
    role: 'Web Developer', 
    org: 'GURPC · Research & Publication Community', 
    href: 'https://gurpc.green.edu.bd/team#:~:text=Majharul%20Islam,Web%20Developer%20I', 
    type: 'COMMUNITY · 2026 — PRESENT', 
    detail: 'Architected and maintain the official web platform for research publication tracking, event management, and structured data handling.' 
  },
  { 
    role: 'Member', 
    org: 'Green Robotics Society', 
    type: 'ENGINEERING', 
    detail: 'Collaborating on robotics hardware, embedded systems exploration, and practical engineering problem-solving.' 
  },
]

const skills = [
  { label: 'Languages', values: 'Python · Java · C · JavaScript · PHP' },
  { label: 'Frontend', values: 'React · Next.js · TypeScript · HTML · CSS' },
  { label: 'Backend & Data', values: 'Node.js · Django · MySQL · PostgreSQL · Supabase' },
  { label: 'Research & ML', values: 'Scikit-learn · Model evaluation · Bioinformatics · NLP' },
]

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Publications', href: '#publications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('majharul-theme')
    return saved === 'light' ? 'light' : 'dark'
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('majharul-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const closeMenu = () => setMenuOpen(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('majharul.cs@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')
    setTimeout(() => {
      setFormStatus('success')
    }, 600)
  }

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' })
    setFormStatus('idle')
  }

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setContactOpen(false)
    }
    if (contactOpen) {
      document.addEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [contactOpen])

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=majharul.cs@gmail.com&su=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry / Collaboration'
  )}&body=${encodeURIComponent(
    formData.message
      ? `${formData.message}\n\n— Sent by ${formData.name || 'Visitor'} (${formData.email || 'No email provided'})`
      : 'Hi Majharul,\n\nI came across your portfolio and would like to connect.'
  )}`

  const mailtoUrl = `mailto:majharul.cs@gmail.com?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    formData.message ? `${formData.message}\n\n— ${formData.name} (${formData.email})` : ''
  )}`

  return (
    <div className="site-shell">
      <header className="topbar-wrapper">
        <div className="topbar">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Majharul home">
            <span className="brand-mark">M<span>.</span></span>
            <span className="brand-name">MAJHARUL<span> / ISLAM</span></span>
          </a>
          <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
            {navItems.map(item => (
              <a key={item.label} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
          </nav>
          <div className="top-actions">
            <button className="icon-button theme-button" onClick={toggleTheme} aria-label="Toggle color theme">
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button className="availability availability-btn" onClick={() => setContactOpen(true)} type="button">
              <span /> Available for opportunities
            </button>
            <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> SOFTWARE DEVELOPER <span className="eyebrow-dot">✳</span> AI/ML RESEARCHER</div>
            <h1>Building things<br />that move <span className="gradient-text">ideas</span><br />into reality<span className="accent-dot">.</span></h1>
            <p className="hero-lede">I'm Majharul Islam — a computer science undergraduate, developer, and curious researcher exploring the intersection of software, data, and meaningful technology.</p>
            <div className="hero-cta">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="/resume.pdf" target="_blank" rel="noreferrer" title="Download CV / Resume"><FileText size={16} /> Resume / CV</a>
              <button className="button button-ghost" onClick={() => setContactOpen(true)} type="button">
                <Mail size={16} /> Get in touch
              </button>
            </div>
            <div className="hero-meta">
              <span><MapPin size={14} /> Dhaka, Bangladesh</span>
              <span className="meta-divider" />
              <span><GraduationCap size={15} /> CSE Undergraduate · GUB</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Portrait of Majharul Islam">
            <div className="hero-portrait-frame shape-rounded">
              <img
                src={profileImg}
                alt="Majharul Islam — Software Developer & AI/ML Researcher"
                className="portrait-img"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section className="intro-strip">
          <div className="section-wrap strip-inner">
            <span className="strip-label">CURRENTLY FOCUSED ON</span>
            <div className="focus-item"><Code2 size={16}/> Product engineering</div>
            <div className="focus-item"><FlaskConical size={16}/> Applied research</div>
            <div className="focus-item"><Users size={16}/> Tech communities</div>
          </div>
        </section>

        <section className="section-wrap about-section section-pad" id="about">
          <div className="section-heading"><span className="section-kicker">01 / ABOUT</span><span className="heading-rule" /></div>
          <div className="about-grid">
            <div><h2>Curiosity is the<br /><span className="muted-heading">starting point.</span></h2></div>
            <div className="about-body">
              <p className="large-copy">I enjoy turning complex problems into useful, thoughtfully designed digital experiences.</p>
              <p>My work moves between building full-stack applications, experimenting with machine learning, and contributing to student-led technology communities. I care about practical engineering, reproducible research, and products that solve real problems.</p>
              <div className="about-links">
                <a href="https://github.com/MrMajharul" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a>
                <a href="https://www.linkedin.com/in/majharul-cs/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14}/></a>
                <a href="https://orcid.org/0009-0009-0058-947X" target="_blank" rel="noreferrer">ORCID Profile <ArrowUpRight size={14}/></a>
              </div>
            </div>
          </div>
        </section>

        <section className="experience-section section-pad" id="experience">
          <div className="section-wrap">
            <div className="section-heading"><span className="section-kicker">02 / EXPERIENCE & COMMUNITY</span><span className="heading-rule" /><span className="section-aside">LEADERSHIP & ROLES</span></div>
            <div className="experience-grid">
              <div><h2>Growing through<br /><span className="muted-heading">doing together.</span></h2><p className="experience-lede">Technology is better when knowledge, ideas, and opportunities are shared.</p></div>
              <div className="timeline">
                {experiences.map((item, i) => <article className="timeline-item" key={item.org}><div className="timeline-marker">{String(i + 1).padStart(2, '0')}</div><div className="timeline-copy"><span>{item.type}</span><h3>{item.role}</h3><h4>{item.href ? <a href={item.href} target="_blank" rel="noreferrer">{item.org} <ArrowUpRight size={12} /></a> : item.org}</h4><p>{item.detail}</p></div></article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap education-section section-pad" id="education">
          <div className="section-heading">
            <span className="section-kicker">03 / EDUCATION & CREDENTIALS</span>
            <span className="heading-rule" />
            <span className="section-aside">ACADEMIC FOUNDATION</span>
          </div>
          <div className="education-grid">
            <div className="education-intro">
              <h2>Formed by<br /><span className="muted-heading">rigorous learning.</span></h2>
              <p className="education-lede">
                Academic training in computer science and engineering at Green University of Bangladesh, backed by formal industry certifications in data science and machine learning.
              </p>

              <div className="cert-group">
                <span className="cert-heading">INDUSTRY CERTIFICATIONS</span>
                <div className="cert-list">
                  {certifications.map(cert => (
                    <a key={cert.title} href={cert.verifyUrl} target="_blank" rel="noreferrer" className="cert-card" title="Verify credential">
                      <div className="cert-badge-icon"><Sparkles size={14} /></div>
                      <div className="cert-info">
                        <strong>{cert.title}</strong>
                        <small>{cert.issuer} · {cert.date}</small>
                      </div>
                      <ArrowUpRight size={14} className="cert-arrow" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="education-list">
              {education.map((item, idx) => (
                <article className="education-card" key={item.degree}>
                  <div className="edu-top">
                    <span className="edu-index">0{idx + 1}</span>
                    <span className="edu-badge">{item.status}</span>
                  </div>
                  <h3>{item.degree}</h3>
                  <h4>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {item.institution} <ArrowUpRight size={13} />
                      </a>
                    ) : (
                      item.institution
                    )}
                  </h4>
                  <div className="edu-period-tag">{item.period}</div>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap research-section section-pad" id="publications">
          <div id="research" />
          <div className="section-heading">
            <span className="section-kicker">04 / PUBLICATIONS & RESEARCH</span>
            <span className="heading-rule" />
            <span className="section-aside">INTERESTS & PAPERS</span>
          </div>

          <div className="research-grid">
            <div className="research-intro">
              <h2>Questions worth<br /><span className="muted-heading">investigating.</span></h2>
              <p className="research-lede">
                I explore the intersection of machine learning, high-dimensional genomic data, and biomedical discovery — focusing on whether computational models reproduce reliably across real-world patient cohorts.
              </p>

              <div className="orcid-badge-wrap">
                <a className="text-link orcid-btn" href="https://orcid.org/0009-0009-0058-947X" target="_blank" rel="noreferrer">
                  <span>ORCID Profile</span>
                  <strong>0009-0009-0058-947X</strong>
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Research Interests Block */}
              <div className="research-interests-block">
                <span className="ri-section-label">PRIMARY RESEARCH INTERESTS</span>
                <div className="ri-list">
                  {researchInterests.map(ri => (
                    <div className="ri-card" key={ri.title}>
                      <div className="ri-header">
                        <div className="ri-icon"><ri.icon size={15} /></div>
                        <h4>{ri.title}</h4>
                      </div>
                      <p>{ri.desc}</p>
                      <div className="ri-keywords">
                        {ri.keywords.map(kw => <span key={kw}>{kw}</span>)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="research-main">
              <div className="research-subheading">
                <span>PEER-REVIEWED PUBLICATION</span>
                <span className="subheading-count">ACCEPTED</span>
              </div>

              <article className="research-featured-card">
                <div className="pub-badge-row">
                  <span className="pub-tag">IEEE STI 2026 · INTELLIGENT COMPUTING</span>
                  <span className="pub-status-badge">ACCEPTED</span>
                </div>
                <h3>Circadian Gene Signatures Do Not Replicate for Immunotherapy Response</h3>
                <p className="pub-abstract">
                  External validation across three independent patient cohorts, using high-dimensional genomic and clinical data, statistical validation, and exploratory analysis to benchmark biomarker reproducibility for cancer immunotherapy response (immune checkpoint inhibitors).
                </p>
                <div className="pub-meta-grid">
                  <div className="pub-meta-item">
                    <small>CONFERENCE VENUE</small>
                    <span>8th International Conference on Sustainable Technologies for Industry 5.0 (IEEE STI 2026)</span>
                  </div>
                  <div className="pub-meta-item">
                    <small>AUTHORS</small>
                    <span>Muaz Ibn Kamal · Junaira Islam · <b>Majharul Islam</b> · Jannathul Maowa Hasi</span>
                  </div>
                  <div className="pub-meta-item">
                    <small>METHODOLOGY & VALIDATION</small>
                    <span>Three Independent Patient Cohorts · High-Dimensional RNA-seq · Statistical Generalization</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="work-section section-pad" id="projects">
          <div id="work" />
          <div className="section-wrap">
            <div className="section-heading"><span className="section-kicker">05 / SELECTED PROJECTS</span><span className="heading-rule" /><span className="section-aside">A FEW THINGS I'VE BUILT</span></div>
            <div className="work-intro"><h2>Ideas, meet<br /><span className="gradient-text">implementation.</span></h2><p>A selection of projects across product development, developer tooling, and applied machine learning.</p></div>
            <div className="project-grid">
              {projects.map(project => <article className="project-card" key={project.number}>
                <div className="project-top"><span className="project-number">{project.number} / 04</span><span className="project-category">{project.category}</span></div>
                <div className="project-content">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">Explore project <ArrowUpRight size={16}/></a>
                </div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section section-pad" id="skills">
          <div className="section-heading"><span className="section-kicker">06 / TOOLKIT</span><span className="heading-rule" /><span className="section-aside">TOOLS I WORK WITH</span></div>
          <div className="skills-layout"><h2>Built on a<br /><span className="muted-heading">curious mindset.</span></h2><div className="skill-list">{skills.map(skill => <div className="skill-row" key={skill.label}><span>{skill.label}</span><p>{skill.values}</p><ArrowUpRight size={15}/></div>)}</div></div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="section-wrap contact-inner">
            <span className="section-kicker">07 / CONTACT</span>
            <div className="contact-main">
              <h2>Have a good<br />problem? <span className="gradient-text">Let's talk.</span></h2>
              <button className="contact-button" onClick={() => setContactOpen(true)} type="button">
                <Mail size={19}/> Start a conversation <ArrowUpRight size={17}/>
              </button>
            </div>
            <div className="contact-bottom">
              <p>Open to collaboration, research conversations, and opportunities to build meaningful technology.</p>
              <div className="social-links">
                <a href="https://github.com/MrMajharul" target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>
                <a href="https://www.linkedin.com/in/majharul-cs/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  aria-label="Send email"
                  className="social-btn-mail"
                >
                  <Mail size={18}/>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">M<span>.</span></span></a><span>© {new Date().getFullYear()} MAJHARUL ISLAM. BUILT WITH CURIOSITY.</span><a href="#home">BACK TO TOP ↑</a></footer>

      {contactOpen && (
        <div className="contact-modal-overlay" onClick={() => setContactOpen(false)} role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
          <div className="contact-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="modal-kicker">07 / GET IN TOUCH</span>
                <h3 id="contact-modal-title">Start a Conversation</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setContactOpen(false)} aria-label="Close dialog">
                <X size={18} />
              </button>
            </div>

            <div className="quick-contact-strip">
              <button type="button" className="quick-pill copy-pill" onClick={handleCopyEmail} title="Click to copy email address">
                {copiedEmail ? <Check size={14} className="pill-check" /> : <Copy size={14} />}
                <span>{copiedEmail ? 'Copied to clipboard!' : 'majharul.cs@gmail.com'}</span>
              </button>
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noreferrer"
                className="quick-pill"
                title="Compose directly in Gmail"
              >
                <Mail size={14} />
                <span>Open in Gmail</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href="tel:+8801745716332"
                className="quick-pill"
                title="Call phone"
              >
                <Phone size={13} />
                <span>+880 1745716332</span>
              </a>
            </div>

            {formStatus === 'success' ? (
              <div className="form-success-box">
                <div className="success-icon-wrap">
                  <Check size={28} />
                </div>
                <h4>Message Prepared!</h4>
                <p>
                  Thank you, <strong>{formData.name || 'friend'}</strong>! Your message is ready to send. You can send it directly with 1 click in Gmail, or using your default email client.
                </p>
                <div className="success-actions">
                  <a href={gmailComposeUrl} target="_blank" rel="noreferrer" className="button button-primary">
                    <Mail size={15} /> Send with Gmail <ArrowUpRight size={14} />
                  </a>
                  <a href={mailtoUrl} className="button button-ghost">
                    Open Mail App <ArrowUpRight size={14} />
                  </a>
                  <button
                    type="button"
                    className="button button-ghost"
                    onClick={() => { resetForm(); setContactOpen(false); }}
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form className="modal-form" onSubmit={handleFormSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="modal-name">Full Name *</label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Rahman"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="modal-email">Email Address *</label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="modal-subject">Subject</label>
                  <input
                    id="modal-subject"
                    type="text"
                    placeholder="e.g. Research collaboration / Software engineering opportunity"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="modal-message">Message *</label>
                  <textarea
                    id="modal-message"
                    required
                    rows={4}
                    placeholder="Tell me about your project, idea, or questions..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="form-actions">
                  <button type="submit" className="button button-primary submit-btn" disabled={formStatus === 'sending'}>
                    {formStatus === 'sending' ? (
                      <>
                        <span className="btn-spinner" /> Preparing...
                      </>
                    ) : (
                      <>
                        <Send size={15} /> Send Message <ArrowUpRight size={15} />
                      </>
                    )}
                  </button>
                  <span className="form-note">
                    Direct email: <a href="mailto:majharul.cs@gmail.com">majharul.cs@gmail.com</a>
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
