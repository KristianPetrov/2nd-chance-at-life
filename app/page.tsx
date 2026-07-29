const pillars = [
  {
    number: "01",
    title: "Stability",
    description:
      "A safe, dependable foundation where veterans can step out of survival mode and begin again.",
    icon: <path d="M3 11.5 12 4l9 7.5M5.5 10v10h13V10M9 20v-6h6v6" />,
  },
  {
    number: "02",
    title: "Recovery",
    description:
      "A sober, structured environment built around accountability, compassion, and lasting wellness.",
    icon: (
      <>
        <path d="M12 21s-7-4.35-7-11a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 6.65-7 11-7 11Z" />
        <path d="M12 7.5V14m-3-3.25h6" />
      </>
    ),
  },
  {
    number: "03",
    title: "Independence",
    description:
      "Practical resources and steady support that lead to dignity, self-sufficiency, and renewed purpose.",
    icon: (
      <>
        <path d="M4 18 10 12l4 4 6-7" />
        <path d="M15 9h5v5" />
      </>
    ),
  },
];

function Mark({ light = false }: { light?: boolean }) {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span className={light ? "brand-mark__two is-light" : "brand-mark__two"}>
        2
      </span>
      <span className={light ? "brand-mark__star is-light" : "brand-mark__star"}>
        ★
      </span>
    </span>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11m-4.5-4.5L15 10l-4.5 4.5" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="2nd Chance at Life, home">
          <Mark />
          <span className="brand__name">
            <strong>2nd Chance</strong>
            <span>at Life</span>
          </span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#mission">Our mission</a>
          <a href="#approach">What we provide</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-call" href="tel:+17148767622">
          Call us <span>714-876-7622</span>
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__content">
            <p className="eyebrow animate-in">Serving those who served</p>
            <h1 id="hero-title" className="animate-in animate-delay-1">
              Every veteran deserves a{" "}
              <span className="accent-script">second chance.</span>
            </h1>
            <p className="hero__intro animate-in animate-delay-2">
              We help veterans move beyond homelessness with a stable, sober,
              and compassionate foundation for recovery—and a clear path toward
              lasting independence.
            </p>
            <div className="hero__actions animate-in animate-delay-3">
              <a className="button button--primary" href="#mission">
                Discover our mission <Arrow />
              </a>
              <a className="text-link" href="tel:+17148767622">
                <span className="phone-dot" aria-hidden="true" />
                714-876-7622
              </a>
            </div>
          </div>

          <div
            className="hero__art animate-in animate-delay-2"
            aria-hidden="true"
          >
            <div className="hero__sun" />
            <div className="hero__arch">
              <div className="hero__door">
                <span />
              </div>
            </div>
            <div className="hero__stars">★&nbsp;&nbsp; ★&nbsp;&nbsp; ★</div>
            <p>
              Hope
              <span>has a home.</span>
            </p>
          </div>

          <div className="hero__side-note" aria-hidden="true">
            <span />
            Dignity&nbsp; · &nbsp;Recovery&nbsp; · &nbsp;Purpose
          </div>
        </section>

        <section className="statement" id="mission">
          <div className="section-label">
            <span>01</span>
            Our mission
          </div>
          <div className="statement__body">
            <p className="statement__lead">
              We walk beside veterans as they rebuild their lives—
              <em>not just for today, but for the future.</em>
            </p>
            <div className="statement__copy">
              <p>
                2nd Chance at Life empowers veterans to transcend homelessness
                by providing the structured support, compassionate community,
                and practical resources needed for long-term recovery and
                successful reintegration.
              </p>
              <p>
                Our commitment is simple: meet every veteran with dignity and
                help create a sustainable path toward a safe home, renewed
                purpose, and self-sufficient life.
              </p>
            </div>
          </div>
        </section>

        <section className="approach" id="approach">
          <div className="approach__heading">
            <div className="section-label section-label--light">
              <span>02</span>
              The foundation
            </div>
            <div>
              <h2>A path forward, built to last.</h2>
              <p>
                Recovery takes more than a roof. It takes consistency,
                connection, and people who refuse to give up.
              </p>
            </div>
          </div>

          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <article className="pillar" key={pillar.title}>
                <div className="pillar__top">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {pillar.icon}
                  </svg>
                  <span>{pillar.number}</span>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="vision" aria-labelledby="vision-title">
          <div className="vision__graphic" aria-hidden="true">
            <div className="vision__rings">
              <Mark />
            </div>
            <span className="vision__caption">A new chapter begins here</span>
          </div>
          <div className="vision__content">
            <div className="section-label">
              <span>03</span>
              Our vision
            </div>
            <h2 id="vision-title">
              A future where no veteran has to face homelessness alone.
            </h2>
            <p>
              We envision every veteran having a stable, supportive, and
              sustainable path out of homelessness and into self-sufficiency—a
              life shaped by hope, belonging, and opportunity.
            </p>
          </div>
        </section>

        <section className="contact" id="contact">
          <div>
            <p className="eyebrow eyebrow--light">Take the first step</p>
            <h2>Recovery begins with a conversation.</h2>
          </div>
          <div className="contact__action">
            <p>
              Whether you need support, know a veteran who does, or want to
              stand with our mission—we’re here to talk.
            </p>
            <a className="button button--cream" href="tel:+17148767622">
              Call 714-876-7622 <Arrow />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand brand--footer" href="#top">
          <Mark light />
          <span className="brand__name">
            <strong>2nd Chance</strong>
            <span>at Life</span>
          </span>
        </a>
        <p>Serving veterans with dignity, compassion, and purpose.</p>
        <div className="footer__right">
          <a
            href="tel:+17148767622"
            aria-label="Call 2nd Chance at Life at 714-876-7622"
          >
            714-876-7622
          </a>
          <span>© {new Date().getFullYear()} 2nd Chance at Life</span>
        </div>
      </footer>
    </>
  );
}
