import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import logo from "./Images/Phool_by_Siddhi_LOGO.jpeg";

import Siddhi_logo_01 from "./products/Siddhi_logo_01.jpeg";
import Ganapati1 from "./products/Ganapati1.jpg";
import Ganapati2 from "./products/Ganapati2.jpg";
import Ganapati3 from "./products/Ganapati3.jpg";
import Flower01 from "./products/Flower01.jpeg";
import Flower02 from "./products/Flower02.jpeg";
import Flower03 from "./products/Flower03.jpeg";
import Flower04 from "./products/Flower04.jpeg";
import Flower05 from "./products/Flower05.jpeg";
import Flower06 from "./products/Flower06.jpeg";
import Flower07 from "./products/Flower07.jpeg";
import Flower08 from "./products/Flower08.jpeg";
import Flower_Bukeh from "./products/Flower_Bukeh.jpeg"
import Flower_Bukeh_Collage from "./products/Flower_Bukeh_Collage.jpeg"
import HaarGarland01 from "./products/HaarGarland01.jpeg"
import HaarGarland02 from "./products/HaarGarland02.jpeg"
import GanapatiImage4 from "./products/GanapatiImage4.jpeg"


const WA_NUMBER = "919371440016"; // Replace with your WhatsApp number

const products = [
  {
    id: 1,
    title: "Flowers Bukeh",
    category: "Premium",
    price: "From ₹99",
    image: Flower_Bukeh,
    tag: "Best Seller",
    description: "Perfect for Gift and Decor."
  },
  {
    id: 2,
    title: "Haar & Garland 01",
    category: "Premium",
    price: "From ₹399",
    image: HaarGarland01,
    tag: "Festive",
    description: "Perfect for Pooja and Festive."
  },
  {
    id: 3,
    title: "Haar & Garland 02",
    category: "Premium",
    price: "From ₹399",
    image: HaarGarland02,
    tag: "Festive",
    description: "Perfect for Pooja and Festive."
  },
  {
    id: 104,
    title: "Sunflower Keychain",
    category: "Ganpati",
    price: "From ₹99",
    image: Flower01,
    tag: "New",
    description: "Sunflower Keychain for your keys."
  },
  {
    id: 105,
    title: "Mini Sunflower",
    category: "Pooja",
    price: "From ₹99",
    image: Flower02,
    tag: "Premium",
    description: "Elegant mini sunflower for pooja, housewarming and festive corners."
  },
  {
    id: 106,
    title: "Red Hibiscus Flower",
    category: "Pooja",
    price: "From ₹99",
    image: Flower03,
    tag: "Custom",
    description: "Custom Red Hibiscus floral styling for Ganapati festival."
  },
];

/* * REAL PRODUCTS * ------------------------- * Add your actual product photos inside: * * src/Images/products/ * * The filenames below should match your images. */
const realProducts = [
  {
    id: 101,
    title: "Ganpati Floral Haar 01",
    category: "Ganpati",
    price: "Enquire for Price",
    image: Ganapati1,
    tag: "Handmade",
    description:
      "Beautiful handmade floral haar created specially for Ganpati celebrations.",
  },
  {
    id: 102,
    title: "Ganpati Hibiscus Haar 01",
    category: "Ganpati",
    price: "Enquire for Price",
    image: Ganapati2,
    tag: "Popular",
    description:
      "Beautiful handmade Hibiscus floral haar created specially for Ganpati celebrations.",
  },
  {
    id: 103,
    title: "Ganpati Hibiscus Haar 02",
    category: "Ganpati",
    price: "Enquire for Price",
    image: Ganapati3,
    tag: "Popular",
    description:
      "Beautiful handmade Hibiscus floral haar created specially for Ganpati celebrations.",
  },
  {
    id: 104,
    title: "Ganpati Floral Haar 02",
    category: "Ganpati",
    price: "Enquire for Price",
    image: GanapatiImage4,
    tag: "Handmade",
    description:
      "Beautiful handmade floral haar created specially for Ganpati celebrations.",
  },
  {
    id: 105,
    title: "Flower",
    category: "Pooja",
    price: "From ₹99",
    image: Flower04,
    tag: "Handmade",
    description: "Elegant mini flower for pooja, housewarming and festive corners."
  },
  {
    id: 106,
    title: "Flower Bukeh",
    category: "Wedding",
    price: "From ₹399",
    image: Flower05,
    tag: "Custom",
    description: "Perfect for Gift and Decor."
  },
];

const categories = ["All", "Ganpati", "Diwali", "Pooja", "Wedding", "Premium"];

function App() {
  const [active, setActive] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(
    () => active === "All" ? products : products.filter((p) => p.category === active),
    [active]
  );

  const filteredRealProducts = useMemo(
    () =>
      active === "All"
        ? realProducts
        : realProducts.filter((p) => p.category === active),
    [active]
  );
  const whatsapp = (text) =>
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

  const handleInquiry = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message =
      `Hi Phool by Siddhi! I would like to enquire about decoration.%0A` +
      `Name: ${data.get("name")}%0A` +
      `Occasion: ${data.get("occasion")}%0A` +
      `Budget: ${data.get("budget")}%0ADate: ${data.get("date")}%0A` +
      `Message: ${data.get("message")}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="site">
      <div className="announcement">
        <span>🌸 Festive bookings are now open</span>
        <span className="announcement-hide">Ganpati • Diwali • Pooja • Weddings</span>
      </div>

      <header className="header">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">✿</span>
          <span>
            <strong>Phool</strong>
            <small>by Siddhi</small>
          </span>
        </a>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          ☰
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-cta" href={whatsapp("Hi Phool by Siddhi! I would like to enquire about decoration.")} target="_blank" rel="noreferrer">
            WhatsApp Us
          </a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">🫶Crafted with Love, Bloomed by Siddhi🌷</div>
            <h1>Where every<br /><em>celebration blooms.</em></h1>
            <p>
              Beautiful, reusable flower decorations for Ganpati, Diwali,
              pooja, weddings and every little celebration worth remembering.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#collections">Explore Décor <span>→</span></a>
              <a className="btn secondary" href={whatsapp("Hi! I want a custom decoration quote from Phool by Siddhi.")} target="_blank" rel="noreferrer">
                Get a Quote
              </a>
            </div>
            <div className="trust-row">
              <span>✦ Reusable designs</span>
              <span>✦ Custom themes</span>
              <span>✦ Made for Indian celebrations</span>
            </div>
          </div>

          <div className="hero-art">

            <div className="hero-circle"></div>

            <div className="flower flower-a">✿</div>
            <div className="flower flower-b">✽</div>
            <div className="flower flower-c">❀</div>
            <div className="hero-card">
              <span>THIS SEASON</span>
              <strong>Bloom<br />Beautifully</strong>
              <small>Phool by Siddhi</small>
            </div>
            <div className="hero-image">
              <img
                //src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1100&q=90"
                src={logo}
                alt="Colorful flowers"
              />
            </div>
          </div>
        </section>

        <section className="occasion-strip">
          <div><span>🐘</span><strong>Ganpati</strong><small>Makhar & floral décor</small></div>
          <div><span>🪔</span><strong>Diwali</strong><small>Torans & festive corners</small></div>
          <div><span>🌼</span><strong>Pooja</strong><small>Mandir & backdrop décor</small></div>
          <div><span>💍</span><strong>Weddings</strong><small>Custom floral styling</small></div>
        </section>

        <section className="section" id="collections">
          <div className="section-head">
            <div>
              <div className="eyebrow">OUR COLLECTIONS</div>
              <h2>Pick your <em>perfect bloom.</em></h2>
            </div>
            <p>Choose a ready design or message us for a custom setup made around your space and budget.</p>
          </div>

          <div className="filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={active === cat ? "filter active" : "filter"}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filtered.map((product) => (
              <article className="product-card" key={product.id}>
                <button className="image-button" onClick={() => setSelected(product)} aria-label={`View ${product.title}`}>
                  <img src={product.image} alt={product.title} />
                  <span className="tag">{product.tag}</span>
                  <span className="zoom">↗</span>
                </button>
                <div className="product-info">
                  <div>
                    <span className="category">{product.category}</span>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                  </div>
                  <div className="product-bottom">
                    <strong>{product.price}</strong>
                    <a href={whatsapp(`Hi! I'm interested in "${product.title}" from Phool by Siddhi.`)} target="_blank" rel="noreferrer">
                      Enquire →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>


        {/* NEW REAL PRODUCTS SECTION */}
        <section className="section" id="real-products">
          <div className="section-head">
            <div>
              <div className="eyebrow">MADE BY SIDDHI</div>

              <h2>
                Our real <em>products.</em>
              </h2>
            </div>

            <p>
              These are our actual handcrafted creations. Browse our latest
              products and message us directly for availability and pricing.
            </p>
          </div>

          <div className="product-grid">
            {filteredRealProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <button
                  className="image-button"
                  onClick={() => setSelected(product)}
                  aria-label={`View ${product.title}`}
                >
                  <img src={product.image} alt={product.title} />

                  <span className="tag">{product.tag}</span>

                  <span className="zoom">↗</span>
                </button>

                <div className="product-info">
                  <div>
                    <span className="category">{product.category}</span>

                    <h3>{product.title}</h3>

                    <p>{product.description}</p>
                  </div>

                  <div className="product-bottom">
                    <strong>{product.price}</strong>

                    <a
                      href={whatsapp(
                        `Hi Phool by Siddhi! I'm interested in your real product "${product.title}". Please share the price and details.`
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Enquire →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="story" id="about">
          <div className="story-image">
            <img src={Siddhi_logo_01} alt="Pink flowers" />
            <div className="story-note">
              <strong>01</strong>
              <span>Thoughtfully<br />designed</span>
            </div>
          </div>
          <div className="story-copy">
            <div className="eyebrow">THE PHOOL BY SIDDHI STORY</div>
            <h2>Decor that feels<br /><em>like a celebration.</em></h2>
            <p>
              Phool by Siddhi is a small festive décor brand built around one simple idea:
              make Indian celebrations look beautiful without making decoration complicated.
            </p>
            <p>
              Our artificial floral pieces are designed to be reusable, easy to set up,
              and flexible enough to suit your home, mandir or event space.
            </p>
            <div className="signature">With love, <b>Siddhi</b> ✿</div>
          </div>
        </section>

        <section className="gallery-section" id="gallery">
          <div className="section-head centered">
            <div>
              <div className="eyebrow">INSPIRATION</div>
              <h2>A little <em>flower magic.</em></h2>
            </div>
            <p>Use these looks as inspiration. We can change colours, flowers, size and styling to match your celebration.</p>
          </div>
          <div className="gallery">
            <img src={Flower06} alt="Floral inspiration" />
            <img src={Flower05} alt="Bright flowers" />
            <img src={Flower08} alt="Pink flowers" />
            <img src={Flower07} alt="Decor inspiration" />
          </div>
        </section>

        <section className="how">
          <div className="eyebrow">HOW IT WORKS</div>
          <h2>From idea to <em>beautiful setup.</em></h2>
          <div className="steps">
            <div><b>01</b><h3>Tell us your occasion</h3><p>Ganpati, Diwali, pooja, wedding or something completely custom.</p></div>
            <div><b>02</b><h3>Choose your look</h3><p>Share your preferred colours, space size and inspiration photos.</p></div>
            <div><b>03</b><h3>We create the magic</h3><p>We prepare your floral décor and coordinate the final delivery/setup.</p></div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-copy">
            <div className="eyebrow">LET'S CREATE SOMETHING BEAUTIFUL</div>
            <h2>Have a celebration<br /><em>in mind?</em></h2>
            <p>Tell us what you're planning and we'll suggest a decoration that fits your space and budget.</p>
            <a className="whatsapp-big" href={whatsapp("Hi Phool by Siddhi! I would like to discuss a decoration.")} target="_blank" rel="noreferrer">
              <span>☏</span> Chat on WhatsApp
            </a>
          </div>
          <form className="inquiry-form" onSubmit={handleInquiry}>
            <div className="form-grid">
              <label>Name<input name="name" required placeholder="Your name" /></label>
              <label>Occasion<select name="occasion" defaultValue="Ganpati"><option>Ganpati</option><option>Diwali</option><option>Pooja</option><option>Wedding</option><option>Other</option></select></label>
              <label>Budget<select name="budget" defaultValue="₹1,000 – ₹3,000"><option>Under ₹1,000</option><option>₹1,000 – ₹3,000</option><option>₹3,000 – ₹7,000</option><option>₹7,000+</option></select></label>
              <label>Date<input name="date" type="date" /></label>
            </div>
            <label>Tell us about your decoration<textarea name="message" rows="4" placeholder="Space size, colour preference, idol size, delivery location..."></textarea></label>
            <button className="btn primary full" type="submit">Send Enquiry on WhatsApp →</button>
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <a className="brand" href="#home"><span className="brand-mark">✿</span><span><strong>Phool</strong><small>by Siddhi</small></span></a>
          <p>Handcrafted flowers, made with love by Siddhi. From festive Ganpati haar to custom floral creations, every piece is thoughtfully handmade to make your special moments bloom. ✨</p>
        </div>
        <div className="footer-links">
          <a href="#collections">Collections</a>
          <a href="#about">Our Story</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} Phool by Siddhi. All rights reserved.</div>
      </footer>

      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>×</button>
            <img src={selected.image} alt={selected.title} />
            <div>
              <span className="category">{selected.category}</span>
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>
              <strong className="modal-price">{selected.price}</strong>
              <a className="btn primary full" href={whatsapp(`Hi! I want a quote for "${selected.title}".`)} target="_blank" rel="noreferrer">Enquire on WhatsApp</a>
            </div>
          </div>
        </div>
      )}

      <a className="floating-wa" href={whatsapp("Hi Phool by Siddhi! I would like to enquire about your floral decorations.")} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        ☏
      </a>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);