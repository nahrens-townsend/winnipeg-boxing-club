import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import logo from "../assets/images/logo.png";
import "./Navbar.scss";

const NAV_LINKS = [
  { label: "Our Story", to: "/our-story" },
  { label: "The Coach", to: "/the-coach" },
  { label: "Training", to: "/training" },
  { label: "Book a Session", to: "/book" },
];

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.45 } },
};

const linkItem: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

const overlayItem: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Instagram — top right */}
      <a
        href="https://www.instagram.com/winnipegboxingclub/"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar__instagram"
        aria-label="Follow Winnipeg Boxing Club on Instagram"
      >
        <FaInstagram />
      </a>

      {/* Desktop content */}
      <div className="navbar__content">
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/" className="navbar__logo-link" aria-label="Home">
            <img src={logo} alt="Winnipeg Boxing Club" className="navbar__logo" />
          </Link>
        </motion.div>

        <motion.nav
          className="navbar__nav"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <motion.div key={link.to} variants={linkItem}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `navbar__link${isActive ? " navbar__link--active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            </motion.div>
          ))}
        </motion.nav>

        <motion.div
          className="navbar__divider"
          style={{ transformOrigin: "left center" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.65, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.p
          className="navbar__tagline"
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.42em" }}
          transition={{ duration: 0.7, delay: 1.05, ease: "easeOut" }}
        >
          Step In. Stand Tall. Never Fold.
        </motion.p>
      </div>

      {/* Mobile burger */}
      <button
        className={`navbar__burger${menuOpen ? " navbar__burger--open" : ""}`}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.nav
              className="navbar__overlay-nav"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={staggerContainer}
            >
              {NAV_LINKS.map((link) => (
                <motion.div
                    key={link.to}
                    variants={overlayItem}
                  >
                  <NavLink
                    to={link.to}
                    className="navbar__overlay-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
