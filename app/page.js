"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const revealsRef = useRef([]);

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((r) => observer.observe(r));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Nav */}
      <nav className="nav">
        <a href="#" className="nav-logo">
          <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "28px", height: "28px" }}>
            <polygon points="30,4 56,30 30,56 4,30" stroke="#e8e6e0" strokeWidth="1.8" strokeLinejoin="round" />
            <polygon points="30,18 42,30 30,42 18,30" stroke="#e8e6e0" strokeWidth="1.2" strokeLinejoin="round" opacity="0.45" />
            <line x1="42" y1="9" x2="55" y2="20" stroke="#e8e6e0" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="30" cy="30" r="2.5" fill="#e8e6e0" opacity="0.7" />
          </svg>
          <span className="nav-wordmark">EURUS</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/by-eurus" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <p className="hero-eyebrow">Indie software studio — Est. 2026</p>
        <h1 className="hero-title">
          East wind.
          <br />
          <em>Forward motion.</em>
        </h1>
        <p className="hero-sub">
          We build software that's simple, useful,
          <br />
          and crafted with care — one product at a time.
        </p>
        <div className="hero-mark">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100,10 190,100 100,190 10,100" stroke="white" strokeWidth="2" />
            <polygon points="100,44 156,100 100,156 44,100" stroke="white" strokeWidth="1.4" />
            <line x1="156" y1="22" x2="188" y2="50" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <circle cx="100" cy="100" r="4" fill="white" />
          </svg>
        </div>
      </section>

      <hr className="divider" />

      {/* Products */}
      <section className="products" id="products">
        <p className="section-label">Products</p>
        <div className="products-grid">
          <a className="product-card reveal" href="https://www.rovernote.live" target="_blank" rel="noopener noreferrer">
            <p className="product-num">01</p>
            <h2 className="product-name">RoverNote</h2>
            <p className="product-type">Travel journaling platform</p>
            <p className="product-desc">
              Transform your journeys into stunning digital scrapbooks. Capture photos, write notes, and share adventures
              with a community of travelers.
            </p>
            <span className="product-arrow">↗</span>
          </a>

          <a
            className="product-card reveal"
            href="https://kitbase.tech"
            target="_blank"
            rel="noopener noreferrer"
            style={{ transitionDelay: "0.1s" }}
          >
            <p className="product-num">02</p>
            <h2 className="product-name">Kitbase</h2>
            <p className="product-type">Online utility tools</p>
            <p className="product-desc">
              All your everyday tools in one clean place. PDF, image, text, and developer utilities — fast, private, and
              free. No uploads, no ads.
            </p>
            <span className="product-arrow">↗</span>
          </a>

          <a
            className="product-card reveal"
            href="https://puzzle.nishad-mahmud.me/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ transitionDelay: "0.2s" }}
          >
            <p className="product-num">03</p>
            <h2 className="product-name">Puzzle</h2>
            <p className="product-type">Mini brain games</p>
            <p className="product-desc">
              Dose of daily logic puzzles. Sudoku, Star Track, and crosswords with global streaks, badges, and progress tracking.
            </p>
            <span className="product-arrow">↗</span>
          </a>
        </div>
      </section>

      {/* About */}
      <section className="about reveal" id="about">
        <h2 className="about-title">
          A studio built on
          <br />
          <em>craftsmanship.</em>
        </h2>
        <div className="about-body">
          <p>
            Eurus is an indie software studio founded by Nishad Mahmud — a CS student and developer based in Bangladesh,
            building products that are thoughtful, fast, and genuinely useful.
          </p>
          <p>
            Every product under Eurus is designed from scratch with care — no templates, no shortcuts. Just clean code and
            deliberate design, shipped one product at a time.
          </p>
          <p>More products are on the way.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-left">© 2026 Eurus. All rights reserved.</p>
        <div className="footer-right">
          <a href="https://www.rovernote.live" target="_blank" rel="noopener noreferrer">
            RoverNote
          </a>
          <a href="https://kitbase.tech" target="_blank" rel="noopener noreferrer">
            Kitbase
          </a>
          <a href="https://puzzle.nishad-mahmud.me/" target="_blank" rel="noopener noreferrer">
            Puzzle
          </a>
          <a href="https://www.linkedin.com/company/by-eurus" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}
