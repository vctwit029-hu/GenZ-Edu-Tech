      </section>

      <section className="section testimonials-section" id="testimonials">
        <div className="site-container">
          <SectionHeading
            eyebrow="OUR LEARNING PHILOSOPHY"
            title="Progress starts with one practical step"
            description="We want every learner to leave with more clarity, stronger skills and a next step they can act on."
          />
          <div className="quote-grid">
            <blockquote>
              <span className="quote-mark">“</span>
              <p>Make learning practical, approachable and connected to the goals that matter to each learner.</p>
              <footer>— GenZ Edu Tech philosophy</footer>
            </blockquote>
            <blockquote>
              <span className="quote-mark">“</span>
              <p>Small, consistent improvements in skills and confidence can open up new possibilities over time.</p>
              <footer>— Our approach to growth</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section founder-section" id="founder">
        <div className="site-container founder-grid">
          <div className="founder-photo-frame">
            <img src={founderPhoto} alt="Megadharshini Kandhan, Founder of GenZ Edu Tech" />
            <div className="founder-caption">
              <strong>Megadharshini Kandhan</strong>
              <span>Founder · GenZ Edu Tech</span>
            </div>
          </div>
          <div className="founder-copy">
            <span className="eyebrow">A NOTE FROM THE FOUNDER</span>
            <h2>Helping people move from uncertainty to action.</h2>
            <p>GenZ Edu Tech grew from a belief that people deserve clear guidance, practical learning and opportunities to explore their strengths. My aim is to make skills and career awareness easier to approach while building digital solutions that help businesses grow.</p>
            <p>Whether you are learning a new skill, exploring freelancing or looking for a website for your business, we welcome a conversation about your next step.</p>
            <a className="btn btn-primary" href="#contact">Connect with me <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="site-container contact-grid">
          <div className="contact-copy">
            <span className="eyebrow">LET'S START A CONVERSATION</span>
            <h2>Tell us what you want to build next.</h2>
            <p>Ask about course syllabuses, batch timings, career guidance or website development. We'll help you understand the next step.</p>
            <div className="contact-info">
              <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer">
                <span><MessageCircle /></span>
                <div><small>WhatsApp / Phone</small><strong>+91 63692 16076</strong></div>
              </a>
              <a href={`mailto:${EMAIL}`}>
                <span><Mail /></span>
                <div><small>Email</small><strong>{EMAIL}</strong></div>
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer">
                <span><Globe /></span>
                <div><small>Instagram</small><strong>@genz_edu_tech</strong></div>
              </a>
              <a href={WEBSITE} target="_blank" rel="noreferrer">
                <span><Phone /></span>
                <div><small>Website</small><strong>genzedutech.in</strong></div>
              </a>
            </div>
          </div>

          <div className="contact-action">
            <div className="contact-action-icon"><MessageCircle size={30} /></div>
            <h3>Ready to get started?</h3>
            <p>Send us a message and tell us whether you're interested in training, career guidance or web development.</p>
            <a className="btn btn-primary full-btn" href={whatsapp('Hello GenZ Edu Tech! I would like to know more about your courses and services.')}>
              Message GenZ Edu Tech <ArrowRight size={17} />
            </a>
            <a className="btn btn-secondary full-btn" href={`mailto:${EMAIL}?subject=${encodeURIComponent('Enquiry for GenZ Edu Tech')}`}>
              Send an Email <Mail size={17} />
            </a>
            <small>We look forward to hearing from you.</small>
          </div>
        </div>
      </section>
    </main>}

    <footer className="site-footer">
      <div className="site-container footer-main">
        <a className="brand footer-brand" href={isAiSolutionsPage ? "/" : "#home"}>
          <img src={companyLogo} alt="" />
          <span>GenZ Edu Tech<small>LEARN · BUILD · GROW</small></span>
        </a>
        <p>Practical learning, career awareness and digital solutions for people and businesses ready to grow.</p>
        <div className="footer-links">
          {navLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="site-container">
          <span>© {new Date().getFullYear()} GenZ Edu Tech. All rights reserved.</span>
          <span>Built for learning, growth and opportunity.</span>
        </div>
      </div>
    </footer>

    <a
      className="floating-whatsapp"
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent('Hello GenZ Edu Tech!')}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with GenZ Edu Tech on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>

    {activeCourse && (
      <div className="modal-backdrop" role="presentation" onClick={() => setActiveCourse(null)}>
        <section
          className="syllabus-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="syllabus-title"
          onClick={e => e.stopPropagation()}
        >
          <button className="modal-close" onClick={() => setActiveCourse(null)} aria-label="Close syllabus">
            <X />
          </button>
          <span className="eyebrow">{activeCourse.category} · {activeCourse.duration}</span>
          <h2 id="syllabus-title">{activeCourse.name}</h2>
          <p>{activeCourse.description}</p>
          <h3>What you'll cover</h3>
          <ol>{activeCourse.syllabus.map(item => <li key={item}>{item}</li>)}</ol>
          <div className="modal-bottom">
            <strong>Course fee: ₹{activeCourse.fee.toLocaleString('en-IN')}</strong>
            <a
              className="btn btn-primary"
              href={whatsapp(`Hello GenZ Edu Tech, please share the current batch details for ${activeCourse.name} (fee ₹${activeCourse.fee.toLocaleString('en-IN')}).`)}
              target="_blank"
              rel="noreferrer"
            >
              Ask about this course <ArrowRight size={16} />
            </a>
          </div>
          <small className="modal-note">Syllabus topics may be adjusted to the batch plan. Contact us to confirm details.</small>
        </section>
      </div>
    )}
  </div>;
}
