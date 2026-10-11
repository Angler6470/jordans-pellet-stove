import { useEffect, useState } from 'react'
import './App.css'

const phoneNumber = 'tel:+18454167021'

const services = [
  {
    number: '01',
    title: 'Comprehensive Seasonal Cleanings',
    description:
      'A meticulous clean from burn pot to exhaust outlet, including blowers, heat exchangers, vent pipes, and the places quick cleanings miss.',
    icon: 'sparkles',
  },
  {
    number: '02',
    title: 'Diagnostic & Mechanical Repair',
    description:
      'Clear answers and dependable repairs for auger motors, vacuum switches, igniters, snap discs, and other stove issues.',
    icon: 'wrench',
  },
  {
    number: '03',
    title: 'Certified Stove Installations',
    description:
      'Expert installations for Harman, Quadra-Fire, Lopi, and more—with proper clearances and fresh-air intake options.',
    icon: 'flame',
  },
  {
    number: '04',
    title: 'Safe Stove Removal & Upgrades',
    description:
      'Thoughtful removal, hearth preparation, and proper decommissioning when it is time to upgrade your stove.',
    icon: 'arrows',
  },
  {
    number: '05',
    title: 'Chimney & Venting Inspection',
    description:
      'Venting checks, code-conscious stainless components, termination caps, and fresh-air kit installation.',
    icon: 'wind',
  },
  {
    number: '06',
    title: '24/7 Winter Emergency Response',
    description:
      'Priority dispatch when your stove stops working during a freeze. Emergency service is available around the clock.',
    icon: 'clock',
  },
]

const projects = [
  {
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    alt: 'Warm, finished living room with a modern hearth',
    label: 'Harman Absolute 43 Install',
    location: 'New Milford, CT',
  },
  {
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    alt: 'Carefully finished interior with stone and wood details',
    label: 'Complete 20-Point Fall Cleaning',
    location: 'Litchfield County, CT',
  },
  {
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85',
    alt: 'Bright home interior with clean architectural finishes',
    label: 'Fresh Air Kit Wall Venting',
    location: 'Pawling, NY',
  },
  {
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
    alt: 'Cozy home interior with natural stone and warm lighting',
    label: 'Hearth Upgrade & Stove Removal',
    location: 'Hudson Valley, NY',
  },
]

const reviewHighlights = [
  {
    theme: 'Thorough from top to bottom',
    detail:
      'A proper seasonal cleaning means more than a quick vacuum. We take the time to get into the heat exchanger, blowers, and venting so your stove is ready to work.',
  },
  {
    theme: 'Straight answers, honest repairs',
    detail:
      'Good diagnostics start with listening, testing, and explaining what is actually wrong—before recommending parts or repairs.',
  },
  {
    theme: 'There when winter cannot wait',
    detail:
      'When the heat goes out in a cold snap, fast communication and a practical plan can make all the difference. Emergency service is available 24/7.',
  },
  {
    theme: 'Respect for your home',
    detail:
      'From arrival time to cleanup, careful work should leave your hearth—and the room around it—in good shape.',
  },
]

function Icon({ name }: { name: string }) {
  const common = {
    'aria-hidden': true as const,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  if (name === 'sparkles') {
    return (
      <svg {...common}>
        <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z" />
        <path d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" />
      </svg>
    )
  }
  if (name === 'wrench') {
    return (
      <svg {...common}>
        <path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4l-3.1 3.1-3-3 3.1-3.1Z" />
      </svg>
    )
  }
  if (name === 'flame') {
    return (
      <svg {...common}>
        <path d="M12 22a7 7 0 0 0 7-7c0-4-3-6-4-10-2 2-2 4-2 5-2-2-3-4-3-7-3 3-5 7-5 12a7 7 0 0 0 7 7Z" />
        <path d="M12 22a3 3 0 0 0 3-3c0-1.5-1-2.5-2-4-1 1.5-4 3-4 5a3 3 0 0 0 3 2Z" />
      </svg>
    )
  }
  if (name === 'arrows') {
    return (
      <svg {...common}>
        <path d="M7 7h13l-3-3" />
        <path d="m20 7-3 3M17 17H4l3 3" />
        <path d="m4 17 3-3" />
      </svg>
    )
  }
  if (name === 'wind') {
    return (
      <svg {...common}>
        <path d="M3 8h12a3 3 0 1 0-3-3M2 12h17a3 3 0 1 1-3 3M4 16h6a3 3 0 1 1-3 3" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

function App() {
  const [activeProject, setActiveProject] = useState(0)
  const [activeReview, setActiveReview] = useState(0)
  const [isGalleryPaused, setIsGalleryPaused] = useState(false)
  const [isReviewPaused, setIsReviewPaused] = useState(false)

  useEffect(() => {
    if (isGalleryPaused) return
    const interval = window.setInterval(() => {
      setActiveProject((current) => (current + 1) % projects.length)
    }, 3500)
    return () => window.clearInterval(interval)
  }, [isGalleryPaused])

  useEffect(() => {
    if (isReviewPaused) return
    const interval = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % reviewHighlights.length)
    }, 4500)
    return () => window.clearInterval(interval)
  }, [isReviewPaused])

  const moveProject = (index: number) => setActiveProject(index)
  const moveReview = (index: number) => setActiveReview(index)

  return (
    <main>
      <div className="urgent-strip">
        <span className="urgent-flame" aria-hidden="true">🔥</span>
        <span>
          FALL CLEANINGS &amp; INSTALLATIONS — LIMITED SPOTS LEFT
          <span className="urgent-divider"> • </span>24/7 Emergency Service
        </span>
        <a href={phoneNumber}>Call (845) 416-7021</a>
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Jordan's Pellet Stove Service home">
          <span className="brand-mark"><Icon name="flame" /></span>
          <span className="brand-name">
            <strong>JORDAN&apos;S</strong>
            <span>PELLET STOVE SERVICE</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#work">Work Showcase</a>
          <a href="#reviews">Reviews</a>
          <a href="#area">Service Area</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <a className="button button-small button-outline header-book" href="#contact">Book Fall Cleaning</a>
          <a className="button button-small button-hot" href={phoneNumber}>Call (845) 416-7021</a>
        </div>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-image" role="img" aria-label="Warm modern living room ready for a cold winter evening" />
        <div className="hero-vignette" />
        <div className="hero-content page-width">
          <div className="eyebrow"><span /> YOUR LOCAL HEARTH &amp; HOME EXPERTS</div>
          <h1>Keep Your Home Warm All Winter. <em>Zero Dealership Hassle.</em></h1>
          <p className="hero-copy">
            Connecticut &amp; New York&apos;s dedicated pellet stove specialists. Expert cleaning,
            precision repairs, and certified installations backed by 97+ five-star reviews.
          </p>
          <div className="hero-badges">
            <span><Icon name="clock" /> 24/7 Emergency Service</span>
            <span><b className="badge-stars">★★★★★</b> 100% Recommended · 97+ Reviews</span>
            <span><Icon name="sparkles" /> NY &amp; CT Licensed / Insured</span>
          </div>
          <div className="hero-actions">
            <a className="button button-hot button-large" href="#contact">Schedule Stove Service <span aria-hidden="true">→</span></a>
            <a className="button button-glass button-large" href={phoneNumber}><span className="phone-icon" aria-hidden="true">☎</span> Call (845) 416-7021</a>
          </div>
          <div className="hero-proof">
            <span className="proof-stars">★★★★★</span>
            <span><strong>100% recommended</strong><small>by 97+ verified Facebook reviews</small></span>
          </div>
        </div>
        <div className="hero-side-note"><span>LOCAL SERVICE. REAL EXPERTISE.</span><i /></div>
      </section>

      <section className="trust-bar" aria-label="Service highlights">
        <div><strong>24/7</strong><span>Emergency availability</span></div>
        <div><strong>97+</strong><span>Verified Facebook reviews</span></div>
        <div><strong>NY + CT</strong><span>Serving two states</span></div>
        <div><strong>Always Open</strong><span>Here when the heat is not</span></div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="page-width">
          <div className="section-heading">
            <div>
              <div className="eyebrow eyebrow-dark"><span /> COMPLETE STOVE CARE</div>
              <h2>Comfort starts with <em>the right hands.</em></h2>
            </div>
            <p>One trusted local specialist for everything your pellet stove needs—from an annual clean to a cold-night repair.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span className="service-icon"><Icon name={service.icon} /></span>
                  <span className="service-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" aria-label={`Ask about ${service.title}`}>Explore service <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
          <div className="service-footnote">
            <span className="footnote-icon"><Icon name="flame" /></span>
            <p><strong>Serving all major brands</strong> including Harman Absolute 43, Quadra-Fire, Breckwell, Lopi, and more.</p>
            <a href="#contact">Tell us what you have <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="page-width">
          <div className="section-heading work-heading">
            <div>
              <div className="eyebrow"><span /> RECENT PROJECTS</div>
              <h2>Good work. <em>Built to last.</em></h2>
            </div>
            <p>From a spotless seasonal clean to a fresh new installation, every detail matters.</p>
          </div>
          <div
            className="gallery"
            onMouseEnter={() => setIsGalleryPaused(true)}
            onMouseLeave={() => setIsGalleryPaused(false)}
            onFocus={() => setIsGalleryPaused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setIsGalleryPaused(false)
              }
            }}
            aria-roledescription="carousel"
            aria-label="Recent stove service projects"
          >
            <div className="gallery-image-wrap">
              {projects.map((project, index) => (
                <img
                  className={`gallery-image${index === activeProject ? ' is-active' : ''}`}
                  key={project.image}
                  src={project.image}
                  alt={project.alt}
                  aria-hidden={index !== activeProject}
                />
              ))}
              <div className="gallery-shade" />
              <span className="gallery-count">{String(activeProject + 1).padStart(2, '0')} <i>/</i> {String(projects.length).padStart(2, '0')}</span>
              <div className="gallery-caption" aria-live="polite">
                <span className="project-tag"><span /> {projects[activeProject].label}</span>
                <h3>Precision service.<br />A warmer home.</h3>
                <p>{projects[activeProject].location}</p>
              </div>
              <div className="gallery-arrows">
                <button type="button" aria-label="Previous project" onClick={() => moveProject((activeProject - 1 + projects.length) % projects.length)}>←</button>
                <button type="button" aria-label="Next project" onClick={() => moveProject((activeProject + 1) % projects.length)}>→</button>
              </div>
            </div>
            <div className="gallery-thumbnails" aria-label="Choose a project">
              {projects.map((project, index) => (
                <button
                  type="button"
                  className={`gallery-thumb${index === activeProject ? ' is-active' : ''}`}
                  key={project.image}
                  onClick={() => moveProject(index)}
                  aria-label={`Show project ${index + 1}: ${project.label}`}
                  aria-pressed={index === activeProject}
                >
                  <img src={project.image} alt="" />
                  <span><i>0{index + 1}</i>{project.label}</span>
                </button>
              ))}
            </div>
            <div className="gallery-dots" aria-label="Project slide indicators">
              {projects.map((project, index) => (
                <button
                  type="button"
                  key={project.image}
                  className={index === activeProject ? 'is-active' : ''}
                  onClick={() => moveProject(index)}
                  aria-label={`Go to project ${index + 1}`}
                  aria-pressed={index === activeProject}
                />
              ))}
            </div>
          </div>
          <p className="gallery-disclaimer">Project imagery is representative of the quality and style of work we provide.</p>
        </div>
      </section>

      <section className="reviews-section section-pad" id="reviews">
        <div className="review-glow" />
        <div className="page-width reviews-layout">
          <div className="reviews-intro">
            <div className="eyebrow"><span /> WORD GETS AROUND</div>
            <h2>Trusted by your <em>neighbors.</em></h2>
            <div className="review-score">
              <strong>100%</strong>
              <div><span className="review-stars">★★★★★</span><small>recommended on Facebook</small></div>
            </div>
            <p>More than 97 verified reviews from homeowners across Connecticut and the Hudson Valley.</p>
            <a className="text-link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">See us on Facebook <span aria-hidden="true">↗</span></a>
          </div>
          <div
            className="review-carousel"
            onMouseEnter={() => setIsReviewPaused(true)}
            onMouseLeave={() => setIsReviewPaused(false)}
            onFocus={() => setIsReviewPaused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setIsReviewPaused(false)
              }
            }}
            aria-roledescription="carousel"
            aria-label="Customer review highlights"
          >
            <div className="review-card" aria-live="polite">
              <div className="review-card-top">
                <span className="review-stars">★★★★★</span>
                <span className="verified-label"><span>✓</span> CUSTOMER FEEDBACK THEME</span>
              </div>
              <h3>{reviewHighlights[activeReview].theme}</h3>
              <p>{reviewHighlights[activeReview].detail}</p>
              <div className="reviewer">
                <span className="reviewer-avatar"><Icon name="flame" /></span>
                <span><strong>Feedback highlights</strong><small>Across NY &amp; CT</small></span>
                <span className="review-source">NOT DIRECT QUOTES</span>
              </div>
            </div>
            <div className="review-controls">
              <div className="review-dots" aria-label="Review highlight indicators">
                {reviewHighlights.map((review, index) => (
                  <button
                    type="button"
                    className={index === activeReview ? 'is-active' : ''}
                    key={review.theme}
                    onClick={() => moveReview(index)}
                    aria-label={`Show highlight ${index + 1}: ${review.theme}`}
                    aria-pressed={index === activeReview}
                  />
                ))}
              </div>
              <div className="review-arrows">
                <button type="button" aria-label="Previous review highlight" onClick={() => moveReview((activeReview - 1 + reviewHighlights.length) % reviewHighlights.length)}>←</button>
                <button type="button" aria-label="Next review highlight" onClick={() => moveReview((activeReview + 1) % reviewHighlights.length)}>→</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="area-section section-pad" id="area">
        <div className="page-width area-layout">
          <div className="area-copy">
            <div className="eyebrow eyebrow-dark"><span /> CLOSE TO HOME</div>
            <h2>Local service.<br /><em>Two-state reach.</em></h2>
            <p>Based in New Milford, Connecticut, Jordan serves homeowners throughout Litchfield County and the Hudson Valley—including Dutchess County, New York.</p>
            <a className="text-link text-link-dark" href={phoneNumber}>Ask if we serve your town <span aria-hidden="true">→</span></a>
          </div>
          <div className="area-map" role="img" aria-label="Service area covering Litchfield County, Connecticut and Dutchess County, New York">
            <div className="map-grid" />
            <div className="map-route route-one" />
            <div className="map-route route-two" />
            <span className="map-label map-label-ny">DUTCHESS COUNTY, NY</span>
            <span className="map-label map-label-ct">LITCHFIELD COUNTY, CT</span>
            <span className="map-town town-new-milford"><i /> NEW MILFORD</span>
            <span className="map-town town-pawling"><i /> PAWLING</span>
            <span className="map-pin"><Icon name="flame" /></span>
            <span className="map-legend"><i /> JORDAN&apos;S HOME BASE</span>
          </div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="contact-backdrop" />
        <div className="page-width contact-layout">
          <div className="contact-copy">
            <div className="eyebrow"><span /> ALWAYS OPEN FOR YOU</div>
            <h2>Let&apos;s get your<br /><em>stove ready.</em></h2>
            <p>Book your fall cleaning, talk through a repair, or get help when the heat goes out. Jordan is just a call away.</p>
            <div className="contact-details">
              <a href={phoneNumber}><span className="contact-icon">☎</span><span><small>CALL ANYTIME · 24/7 EMERGENCY</small><strong>(845) 416-7021</strong></span></a>
              <a href="mailto:jordanc697@yahoo.com"><span className="contact-icon">✉</span><span><small>EMAIL JORDAN</small><strong>jordanc697@yahoo.com</strong></span></a>
            </div>
          </div>
          <div className="contact-card">
            <span className="contact-card-label"><span /> BOOK YOUR SERVICE</span>
            <h3>Start with a quick call.</h3>
            <p>Tell Jordan what your stove needs. You&apos;ll get straightforward advice and the next steps—no dealership runaround.</p>
            <a className="button button-hot button-large contact-call" href={phoneNumber}>Call (845) 416-7021 <span aria-hidden="true">→</span></a>
            <a className="contact-email" href="mailto:jordanc697@yahoo.com">Prefer email? Send a note <span aria-hidden="true">↗</span></a>
            <div className="availability"><span className="availability-dot" /> 24/7 EMERGENCY SERVICE AVAILABLE <b>·</b> ALWAYS OPEN</div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-width footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark"><Icon name="flame" /></span>
            <span className="brand-name"><strong>JORDAN&apos;S</strong><span>PELLET STOVE SERVICE</span></span>
          </a>
          <p>NY &amp; CT&apos;s most trusted stove cleaning, repair, removal, and installation company.</p>
          <a className="footer-phone" href={phoneNumber}>(845) 416-7021 <span aria-hidden="true">↗</span></a>
        </div>
        <div className="page-width footer-bottom">
          <span>© {new Date().getFullYear()} Jordan&apos;s Pellet Stove Service</span>
          <span>Based in New Milford, CT · Serving CT &amp; the Hudson Valley, NY</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
      <a className="mobile-call" href={phoneNumber}><span aria-hidden="true">☎</span> Call Jordan · (845) 416-7021</a>
    </main>
  )
}

export default App
