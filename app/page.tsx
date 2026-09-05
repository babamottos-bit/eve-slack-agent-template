'use client'

import { useState } from 'react'
import { ArrowUpRight, BarChart3, Check, ChevronDown, CircleDollarSign, Clock3, Menu, ShieldCheck, Sparkles, X, Zap } from 'lucide-react'

const faqs = [
  {
    question: 'What is Billd?',
    answer: 'Billd is the construction operations platform that connects teams, money, and materials in one clear workspace. It helps builders keep projects moving without the spreadsheet sprawl.',
  },
  {
    question: 'Who is Billd for?',
    answer: 'Billd is built for general contractors, specialty contractors, owners, and finance teams who need a shared source of truth from preconstruction through closeout.',
  },
  {
    question: 'How quickly can we get started?',
    answer: 'Most teams can map their current workflow and launch a first project in days. Our implementation team helps connect the people, processes, and reporting you already use.',
  },
  {
    question: 'Does Billd replace our existing tools?',
    answer: 'Billd works alongside the tools your team already knows. It brings the critical project workflow together and makes handoffs between systems easier to see and manage.',
  },
]

const navLinks = [
  ['Platform', '#platform'],
  ['Solutions', '#solutions'],
  ['Resources', '#resources'],
  ['Company', '#company'],
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Billd home"><span className="brand-mark">B</span><span>billd</span></a>
          <nav className={menuOpen ? 'desktop-nav is-open' : 'desktop-nav'} aria-label="Primary navigation">
            {navLinks.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="mobile-cta" href="#contact" onClick={() => setMenuOpen(false)}>Talk to sales <ArrowUpRight size={16} /></a>
          </nav>
          <div className="nav-actions"><a className="login-link" href="#contact">Log in</a><a className="button button-dark nav-cta" href="#contact">Talk to sales <ArrowUpRight size={16} /></a><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button></div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> Construction, connected</div>
            <h1>Build with <em>clarity.</em><br />Move with confidence.</h1>
            <p className="hero-text">Billd gives construction teams the visibility and control to make every project more predictable—from first estimate to final payment.</p>
            <div className="hero-actions"><a className="button button-orange" href="#contact">See Billd in action <ArrowUpRight size={17} /></a><a className="text-link" href="#platform">Explore the platform <span>→</span></a></div>
            <div className="hero-proof"><div className="avatar-stack"><span>JM</span><span>AK</span><span>RD</span><span>+2k</span></div><p>Trusted by <strong>2,000+</strong> construction teams</p></div>
          </div>
          <div className="hero-visual" aria-label="Billd project overview dashboard illustration">
            <div className="blueprint blueprint-one" /><div className="blueprint blueprint-two" />
            <div className="dashboard-card">
              <div className="dash-top"><div><span className="dash-label">Portfolio overview</span><strong>$12.8M</strong></div><span className="status-pill"><span /> On track</span></div>
              <div className="chart"><div className="chart-y"><span>15m</span><span>10m</span><span>5m</span><span>0</span></div><div className="chart-lines"><i /><i /><i /><i /><i /><i /><svg viewBox="0 0 390 145" preserveAspectRatio="none" aria-hidden="true"><path d="M0 116 C30 105 45 110 68 96 S104 85 127 91 S164 66 190 73 S222 44 246 59 S274 45 295 48 S323 22 343 30 S370 15 390 9" /></svg></div></div>
              <div className="dash-bottom"><div><span className="mini-icon"><BarChart3 size={14} /></span><span>Project velocity</span></div><strong>+24.8%</strong></div>
            </div>
            <div className="floating-card"><span className="mini-icon orange"><Zap size={15} /></span><div><small>Schedule health</small><strong>92% on time</strong></div><span className="trend">↑ 8.4%</span></div>
          </div>
        </div>
        <div className="container logo-strip"><span>Teams building better with Billd</span><div className="logo-list"><strong>northstar</strong><strong>HORIZON<span>.</span></strong><strong>VERDANT</strong><strong>HATCH</strong><strong>axis<span>+</span></strong></div></div>
      </section>

      <section className="section statement" id="solutions"><div className="container statement-grid"><div className="section-kicker">The construction advantage</div><div><h2>Less chasing.<br /><span>More building.</span></h2><p>Construction moves fast. Your systems should too. Billd turns scattered project data into a clear, shared view—so your team can spend less time looking for answers and more time making progress.</p><a className="text-link dark-link" href="#platform">Why teams choose Billd <span>→</span></a></div></div></section>

      <section className="section platform-section" id="platform"><div className="container"><div className="section-intro"><div><div className="section-kicker">One platform. Every project.</div><h2>The details that keep<br /><span>work moving.</span></h2></div><p>From financial visibility to field execution, Billd brings the work together in one calm, connected workspace.</p></div><div className="feature-grid"><article className="feature-card feature-large"><div className="feature-copy"><span className="icon-box"><CircleDollarSign size={20} /></span><h3>Know where your money stands.</h3><p>See commitments, costs, and cash flow in real time. Make decisions from the same set of numbers—without the end-of-month scramble.</p><a href="#contact" className="card-link">Explore financial visibility <ArrowUpRight size={15} /></a></div><div className="finance-ui"><div className="finance-head"><span>Committed cost</span><strong>$847,200</strong><small>↓ 4.2% vs. forecast</small></div><div className="bars"><i style={{height:'44%'}} /><i style={{height:'66%'}} /><i style={{height:'54%'}} /><i style={{height:'82%'}} /><i style={{height:'70%'}} /><i style={{height:'91%'}} /><i style={{height:'77%'}} /></div><div className="bar-labels"><span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span></div></div></article><article className="feature-card feature-dark"><span className="icon-box light"><Clock3 size={20} /></span><h3>Find the next move.</h3><p>Keep every commitment visible, assign clear owners, and turn open items into forward motion.</p><div className="task-list"><div><Check size={13} /> Site walk complete <span>Today</span></div><div><Check size={13} /> Submittal approved <span>2h</span></div><div className="pending"><span /> Material delivery <span>Tomorrow</span></div></div></article><article className="feature-card feature-light"><span className="icon-box"><ShieldCheck size={20} /></span><h3>Build trust into the process.</h3><p>Give every partner the context they need, exactly when they need it. Better handoffs make better outcomes.</p><div className="trust-row"><span>Client</span><span>GC</span><span>Trades</span><span>Owners</span></div></article></div></div></section>

      <section className="section stats-section" id="company"><div className="container stats-grid"><div className="stats-heading"><div className="section-kicker">Built for the builders</div><h2>A better way to <span>get it done.</span></h2></div><div className="stat"><strong>32%</strong><span>faster project<br />closeout</span></div><div className="stat"><strong>4.7<span>x</span></strong><span>more visibility<br />across teams</span></div><div className="stat"><strong>89%</strong><span>of customers<br />renew annually</span></div></div></section>

      <section className="section story-section" id="resources"><div className="container story-grid"><div className="story-image"><div className="image-caption"><span>Project 014</span><strong>Southbank Commons</strong><span>Denver, CO · 2024</span></div><div className="building"><div className="building-sun" /><div className="building-main"><div className="floor" /><div className="floor" /><div className="floor" /><div className="floor" /></div><div className="building-side" /></div></div><div className="story-copy"><div className="section-kicker">Customer story</div><blockquote>“Billd gave us the confidence to take on bigger projects without adding more complexity.”</blockquote><div className="person"><span className="person-avatar">ER</span><div><strong>Elena Ramirez</strong><span>VP of Operations, Northstar Build Co.</span></div></div><a className="text-link dark-link" href="#contact">Read the full story <span>→</span></a></div></div></section>

      <section className="section faq-section"><div className="container faq-grid"><div><div className="section-kicker">Questions, answered</div><h2>Let&apos;s clear<br /><span>things up.</span></h2><p>Still curious? Our team is here to help you find the right fit for the way you build.</p><a className="text-link dark-link" href="#contact">Talk to an expert <span>→</span></a></div><div className="faq-list">{faqs.map((faq, index) => <div className={openFaq === index ? 'faq-item open' : 'faq-item'} key={faq.question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{faq.question}</span><ChevronDown size={20} /></button>{openFaq === index && <p>{faq.answer}</p>}</div>)}</div></div></section>

      <section className="cta-section" id="contact"><div className="container cta-inner"><div><div className="section-kicker light-kicker">Ready when you are</div><h2>Let&apos;s build<br /><em>what&apos;s next.</em></h2></div><div className="cta-right"><p>See how Billd can bring more clarity to your next project.</p><a className="button button-orange" href="mailto:hello@billd.com">Start a conversation <ArrowUpRight size={17} /></a></div></div></section>

      <footer className="site-footer"><div className="container footer-top"><div><a className="brand footer-brand" href="#top"><span className="brand-mark">B</span><span>billd</span></a><p>The operating system<br />for modern construction.</p></div><div className="footer-links"><div><strong>Explore</strong><a href="#platform">Platform</a><a href="#solutions">Solutions</a><a href="#resources">Resources</a></div><div><strong>Company</strong><a href="#company">About Billd</a><a href="#contact">Contact</a><a href="#contact">Careers</a></div><div><strong>Connect</strong><a href="#contact">LinkedIn</a><a href="mailto:hello@billd.com">Email us</a></div></div></div><div className="container footer-bottom"><span>© 2025 Billd, Inc. All rights reserved.</span><div><a href="#top">Privacy</a><a href="#top">Terms</a></div><span>Made for the people who build.</span></div></footer>
    </main>
  )
}
