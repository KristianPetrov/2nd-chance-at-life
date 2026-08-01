import { ContactForm } from "@/components/contact-form";
import { IntakeForm } from "@/components/intake-form";
import { LogoFlame } from "@/components/logo-flame";
import { SiteHeader } from "@/components/site-header";

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
      <SiteHeader />

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__art animate-in">
            <LogoFlame
              size="lg"
              width={1800}
              height={1200}
              alt="2nd Chance at Life"
              priority
              className="hero__seal"
            />
          </div>

          <div className="hero__content">
            <p className="eyebrow animate-in animate-delay-1">
              Serving those who served
            </p>
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
              <a className="button button--primary" href="#intake">
                Start intake <Arrow />
              </a>
              <a className="text-link" href="tel:+15626186191">
                <span className="phone-dot" aria-hidden="true" />
                562-618-6191
              </a>
            </div>
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

        <section className="vision" id="vision" aria-labelledby="vision-title">
          <div className="vision__graphic">
            <LogoFlame
              size="md"
              width={640}
              height={427}
              alt=""
              className="vision__logo"
            />
            <span className="vision__caption">Rise again</span>
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

        <section className="intake" id="intake" aria-labelledby="intake-title">
          <div className="intake__intro">
            <div className="section-label">
              <span>04</span>
              Veteran intake
            </div>
            <h2 id="intake-title">Ready for a second chance? Start here.</h2>
            <p>
              Share a few details and our team will follow up with next steps.
              If you need help today, call us anytime at{" "}
              <a href="tel:+15626186191">562-618-6191</a>.
            </p>
          </div>
          <IntakeForm />
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact__layout">
            <div className="contact__info">
              <div className="section-label section-label--light">
                <span>05</span>
                Contact
              </div>
              <h2 id="contact-title">We’re here when you’re ready.</h2>
              <p>
                Reach out for support, referrals, volunteering, or partnership
                questions. Every conversation is confidential and handled with
                care.
              </p>

              <dl className="contact__details">
                <div>
                  <dt>Phone</dt>
                  <dd>
                    <a href="tel:+15626186191">562-618-6191</a>
                  </dd>
                </div>
                <div>
                  <dt>Focus</dt>
                  <dd>Veteran recovery &amp; reintegration</dd>
                </div>
                <div>
                  <dt>Promise</dt>
                  <dd>Heal. Hope. Purpose.</dd>
                </div>
              </dl>

              <a className="button button--cream" href="tel:+15626186191">
                Call now <Arrow />
              </a>
            </div>

            <div className="contact__form-wrap">
              <h3>Send a message</h3>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand brand--footer" href="#top">
          <LogoFlame
            size="sm"
            width={72}
            height={48}
            alt=""
            className="brand__logo brand__logo--footer"
          />
          <span className="brand__name">
            <strong>2nd Chance</strong>
            <span>at Life</span>
          </span>
        </a>
        <p>Serving veterans with dignity, compassion, and purpose.</p>
        <div className="footer__right">
          <a
            href="tel:+15626186191"
            aria-label="Call 2nd Chance at Life at 562-618-6191"
          >
            562-618-6191
          </a>
          <span>© {new Date().getFullYear()} 2nd Chance at Life</span>
        </div>
      </footer>
    </>
  );
}
