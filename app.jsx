const { useState, useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "orange",
  "headline": "Lead your care business with clarity, confidence and intention.",
  "showProcessPrize": true,
  "ctaStyle": "orange"
} /*EDITMODE-END*/;

const ACCENT_MAP = {
  orange: { color: "var(--birdie-orange)", bg: "#d78300" },
  teal: { color: "var(--birdie-teal)", bg: "#3fa9a4" },
  mint: { color: "var(--birdie-mint)", bg: "#83e8d3" },
  blue: { color: "var(--birdie-blue)", bg: "#0f6fd6" }
};

const SESSIONS = [
{ num: "01", date: "Tuesday 16 June", title: "Getting out of the weeds and leading more strategically", theme: "Step back from day-to-day fire-fighting. Create the space to lead the business forward." },
{ num: "02", date: "Tuesday 30 June", title: "Delegation, trust and letting go of control", theme: "The hardest shift most leaders make. Build a team that can run without you in the room." },
{ num: "03", date: "Tuesday 14 July", title: "Having the conversations leaders often put off", theme: "Underperformance, feedback, boundaries. The talks that move teams forward when handled well." },
{ num: "04", date: "Tuesday 28 July", title: "Understanding your leadership style", theme: "Pull the series together. Leave with a clearer sense of how you lead — and how you want to." }];


function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <img className="logo" src="assets/logo-birdie-navy.png" alt="Birdie" />
        <span className="nav-tag">Events &amp; community</span>
        <div className="nav-cta">
          <a className="btn btn-hollow" href="#register">Apply for a place</a>
        </div>
      </div>
    </nav>);

}

function Hero({ tweaks }) {
  const accent = ACCENT_MAP[tweaks.accentColor] || ACCENT_MAP.orange;
  const ctaClass = tweaks.ctaStyle === "orange" ? "btn-orange" : "btn-hollow-white";
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <div className="hero-eyebrow">Birdie presents · A four-part series</div>
          <h1>
            {tweaks.headline.split(/(\bclarity\b|\bconfidence\b|\bintention\b)/i).map((chunk, i) =>
            /\b(clarity|confidence|intention)\b/i.test(chunk) ?
            <span key={i} className="accent" style={{ color: accent.color }}>{chunk}</span> :
            <React.Fragment key={i}>{chunk}</React.Fragment>
            )}
          </h1>
          <p className="lede">Four virtual workshops for care business leaders - live, interactive, and built around the real challenges of running an agency.

          </p>

          <div className="hero-meta">
            <div className="item"><i data-lucide="calendar"></i> June – July 2026</div>
            <div className="item"><i data-lucide="clock"></i> Tuesdays · midday</div>
            <div className="item"><i data-lucide="video"></i> Live on Zoom</div>
            <div className="item"><i data-lucide="users"></i> Breakouts + Q&amp;A</div>
          </div>

          <div className="hero-ctas">
            <a className={`btn ${ctaClass} btn-lg`} href="#register" style={tweaks.ctaStyle === "orange" ? { background: accent.color, color: "var(--birdie-navy)" } : {}}>
              Apply for a place on all four sessions
            </a>
          </div>
          <div className="hero-sub">One registration. All four sessions. Free to attend.</div>
        </div>

        <div className="hero-logo-wrap">
          <div className="date-chip top">
            <div className="icon"><i data-lucide="calendar-days"></i></div>
            <div>
              <div className="l1">Starts</div>
              <div className="l2">16 June</div>
            </div>
          </div>
          <img className="hero-logo" src="assets/lunch-club-logo.png" alt="The Leadership Lunch Club with Alexis Neighbour" />
          <div className="date-chip bot">
            <div className="icon"><i data-lucide="sparkles"></i></div>
            <div>
              <div className="l1">Prize draw</div>
              <div className="l2">£2,000 coaching</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function Intro() {
  return (
    <section className="intro">
      <div className="intro-inner">
        <div>
          <div className="intro-eyebrow">Why this series</div>
          <h2>The work of actually leading gets squeezed into the gaps.</h2>
        </div>
        <div>
          <p>Running a care business means your days fill up fast. Operations, staff, clients, compliance. The work of actually leading - the kind that moves your business forward - gets squeezed into the gaps.</p>
          <p>The Leadership Lunch Club is a four-part series designed to change that. Every fortnight from June to July, leadership coach and former homecare franchise owner Alexis Neighbour leads a <strong>live, interactive virtual workshop</strong> on the realities of managing people and running a care business.</p>
          <p>You won't just be listening. You'll work through real challenges with other leaders in structured breakout discussions, and bring your questions directly to Alexis. <strong>Each session builds on the last</strong>, so you'll end the series with a new, developed sense of your leadership style.</p>
        </div>
      </div>
    </section>);

}

function Sessions() {
  return (
    <section className="sessions" id="sessions">
      <div className="sessions-inner">
        <div className="section-head">
          <div className="eyebrow">The four sessions</div>
          <h2>A programme designed to compound.</h2>
          <p>Each workshop stands on its own - but the real shift happens by working through all four, together with other leaders.</p>
        </div>
        <div className="session-list">
          {SESSIONS.map((s) =>
          <div className="session" key={s.num}>
              <div className="num">{s.num}</div>
              <div className="date">{s.date}</div>
              <h3>{s.title}</h3>
              <p className="theme">{s.theme}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function How({ tweaks }) {
  const items = [
  { icon: "video", title: "One hour on Zoom, every other Tuesday at midday", body: "Each session runs for approximately an hour - long enough to go deep, short enough to fit around a working day." },
  { icon: "users", title: "Talk, don't just listen", body: "Alexis opens with a short talk to frame the problem. Then it's over to you — guided breakout groups, report-backs, and the chance to go on stage with Alexis to explore what you found." },
  { icon: "message-square", title: "A private Flock group between sessions", body: "Everyone who registers gets invited to a dedicated group on Flock — a private space to continue the conversation and access resources from Alexis directly." },
  { icon: "calendar-clock", title: "Weekly posts and questions from Alexis", body: "Alexis posts between sessions, so you come to each new workshop with ideas and questions. She shapes her content around what you bring." }];

  if (tweaks.showProcessPrize) {
    items.push({ icon: "trophy", title: "Attend all four, enter a prize draw", body: "Participants who attend all four sessions are entered into a draw for a paid-for group coaching session with Alexis (worth £2,000), scoped entirely around your business and your team.", prize: true });
  }

  return (
    <section className="how" id="how">
      <div className="how-inner">
        <div className="how-head">
          <div className="eyebrow">How it works</div>
          <h2>Built for busy leaders who want to make a change</h2>
          <p>A rhythm of live workshops, in-between conversation, and practical reflection - designed to actually change how you lead.</p>
        </div>
        <div className="how-list">
          {items.map((it, i) =>
          <div className="how-item" key={i}>
              <div className="how-icon"><i data-lucide={it.icon}></i></div>
              <div>
                <h4 className={it.prize ? "prize" : ""}>{it.title}</h4>
                <p>{it.body}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function WhoFor() {
  return (
    <section className="who-for">
      <div className="who-inner">
        <img className="who-cal" src="assets/cal-tilt-right.png" alt="" />
        <div>
          <h2>This is for leaders.</h2>
          <p>The Leadership Lunch Club is designed for <strong>managers, directors, and owners</strong> - the people responsible for how a team performs and a business grows.</p>
          <p>If you aren't currently in a leadership role, this series isn't the right fit for you. But don't worry - we have plenty of other resources at <a href="https://birdie.care">birdie.care</a> to help you on your journey.</p>
        </div>
      </div>
    </section>);

}

function About() {
  return (
    <section className="about" id="alexis">
      <div className="about-inner">
        <div className="about-photo-wrap">
          <div className="placeholder">
            <div className="placeholder-initials">AN</div>
          </div>
          <div className="placeholder-note">Photo of Alexis to replace this placeholder.</div>
        </div>
        <div>
          <div className="about-eyebrow">Your host</div>
          <h2>Alexis Neighbour knows this world from the inside.</h2>
          <p>Alexis owned and ran a Home Instead homecare franchise for over 11 years. She built a team, navigated CQC, worked on staff retention and culture, and eventually sold the business in 2023.</p>
          <p>She now coaches homecare leaders drawing directly on that experience, backed by 25 years of coaching practice.</p>
          <div className="about-creds">
            <span className="cred"><i data-lucide="award"></i> 11+ years owner / Registered Manager</span>
            <span className="cred"><i data-lucide="check-circle-2"></i> ICF-accredited Professional &amp; Executive Coach</span>
            <span className="cred"><i data-lucide="briefcase"></i> Advisor, British Franchise Association</span>
            <span className="cred"><i data-lucide="clock"></i> 25 years coaching practice</span>
          </div>
        </div>
      </div>
    </section>);

}

function Register({ tweaks }) {
  const accent = ACCENT_MAP[tweaks.accentColor] || ACCENT_MAP.orange;
  const formRef = useRef(null);
  const createdRef = useRef(false);

  useEffect(() => {
    if (createdRef.current) return;
    const tryCreate = () => {
      if (window.hbspt && window.hbspt.forms && formRef.current) {
        createdRef.current = true;
        window.hbspt.forms.create({
          portalId: "4789280",
          formId: "9b08dcee-35f5-4469-8b90-1cb698b0d793",
          region: "na1",
          target: "#hs-form-target"
        });
        return true;
      }
      return false;
    };
    if (tryCreate()) return;
    const iv = setInterval(() => {if (tryCreate()) clearInterval(iv);}, 200);
    return () => clearInterval(iv);
  }, []);

  return (
    <section className="register" id="register">
      <div className="register-inner">
        <div className="register-copy">
          <div className="hero-eyebrow">Apply for your place</div>
          <h2>
            Four Tuesdays. <span className="accent" style={{ color: accent.color }}>One better way</span> to lead.
          </h2>
          <p>One registration covers all four sessions. You'll get the Zoom links, the Flock invite, and Alexis's pre-session prompts.</p>
          <ul className="register-list">
            <li><i data-lucide="check"></i> Live, interactive workshops with Alexis</li>
            <li><i data-lucide="check"></i> Private Flock community between sessions</li>
            <li><i data-lucide="check"></i> Entry to the £2,000 coaching prize draw</li>
          </ul>
          <div className="register-sub">Tuesdays at midday · June – July 2026</div>
        </div>
        <div className="register-card">
          <div className="register-card-head">
            <div className="register-card-title">Apply for a place</div>
            <div className="register-card-sub">Takes less than a minute.</div>
          </div>
          <div id="hs-form-target" ref={formRef} className="hs-form-target"></div>
        </div>
      </div>
    </section>);

}

function Footer() {
  return (
    <footer>
      <div className="foot-inner">
        <img src="assets/logo-birdie-navy.png" alt="Birdie" />
        <div className="note">© 2026 Birdie Care Ltd · birdie.care</div>
      </div>
    </footer>);

}

function Tweaks({ tweaks, setTweak }) {
  if (!window.TweaksPanel) return null;
  const { TweaksPanel, TweakSection, TweakRadio, TweakText, TweakToggle } = window;
  return (
    <TweaksPanel>
      <TweakSection title="Headline">
        <TweakText
          label="Hero headline"
          value={tweaks.headline}
          onChange={(v) => setTweak('headline', v)} />
        
      </TweakSection>
      <TweakSection title="Colour accent">
        <TweakRadio
          label="Accent on key words"
          value={tweaks.accentColor}
          options={['orange', 'teal', 'mint', 'blue']}
          onChange={(v) => setTweak('accentColor', v)} />
        
      </TweakSection>
      <TweakSection title="CTA style">
        <TweakRadio
          label="Hero button"
          value={tweaks.ctaStyle}
          options={['orange', 'hollow']}
          onChange={(v) => setTweak('ctaStyle', v)} />
        
      </TweakSection>
      <TweakSection title="Content">
        <TweakToggle
          label="Include prize-draw line"
          value={tweaks.showProcessPrize}
          onChange={(v) => setTweak('showProcessPrize', v)} />
        
      </TweakSection>
    </TweaksPanel>);

}

function App() {
  const [tweaks, setTweak] = window.useTweaks ?
  window.useTweaks(TWEAK_DEFAULTS) :
  [TWEAK_DEFAULTS, () => {}];

  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });

  return (
    <React.Fragment>
      <Nav />
      <Hero tweaks={tweaks} />
      <Intro />
      <Sessions />
      <How tweaks={tweaks} />
      <WhoFor />
      <About />
      <Register tweaks={tweaks} />
      <Footer />
      <Tweaks tweaks={tweaks} setTweak={setTweak} />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);