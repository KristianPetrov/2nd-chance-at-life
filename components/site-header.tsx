"use client";

import { useEffect, useId, useState } from "react";
import { LogoFlame } from "@/components/logo-flame";

const navLinks = [
  { href: "#mission", label: "Our mission" },
  { href: "#approach", label: "What we provide" },
  { href: "#intake", label: "Intake" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header${open ? " is-open" : ""}`}>
      <a
        className="brand"
        href="#top"
        aria-label="2nd Chance at Life, home"
        onClick={closeMenu}
      >
        <LogoFlame
          size="sm"
          className="brand__logo"
          width={72}
          height={48}
          alt=""
          priority
        />
        <span className="brand__name">
          <strong>2nd Chance</strong>
          <span>at Life</span>
        </span>
      </a>

      <nav className="nav-desktop" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a
          className="header-call"
          href="tel:+15626186191"
          aria-label="Call 2nd Chance at Life at 562-618-6191"
        >
          Call us <span>562-618-6191</span>
        </a>

        <button
          type="button"
          className={`menu-toggle${open ? " is-open" : ""}`}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`nav-panel${open ? " is-open" : ""}`}
        id={menuId}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <nav className="nav-mobile" aria-label="Mobile navigation">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              style={{ animationDelay: `${80 + index * 50}ms` }}
              tabIndex={open ? 0 : -1}
              onClick={closeMenu}
            >
              <span>0{index + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="nav-panel__call"
          href="tel:+15626186191"
          tabIndex={open ? 0 : -1}
          onClick={closeMenu}
        >
          Call 562-618-6191
        </a>
      </div>

      <button
        type="button"
        className={`nav-backdrop${open ? " is-open" : ""}`}
        aria-label="Close menu"
        tabIndex={-1}
        onClick={closeMenu}
      />
    </header>
  );
}
