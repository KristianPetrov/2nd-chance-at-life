import Image from "next/image";
import type { CSSProperties } from "react";

/** Sparse set — delays are staggered so only one ember flies at a time. */
const EMBERS = [
  { left: 42, delay: 0 },
  { left: 55, delay: 3.4 },
  { left: 38, delay: 7.1 },
  { left: 61, delay: 10.8 },
  { left: 48, delay: 14.6 },
  { left: 52, delay: 18.9 },
] as const;

type LogoFlameProps = {
  size?: "sm" | "md" | "lg";
  width: number;
  height: number;
  alt?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
};

export function LogoFlame({
  size = "md",
  width,
  height,
  alt = "",
  priority = false,
  className = "",
  imgClassName = "",
}: LogoFlameProps) {
  return (
    <div
      className={`logo-flame logo-flame--${size}${className ? ` ${className}` : ""}`}
    >
      <div className="logo-flame__stage" aria-hidden="true">
        <span className="logo-flame__glow logo-flame__glow--core" />
        <span className="logo-flame__glow logo-flame__glow--halo" />
        <span className="logo-flame__plume logo-flame__plume--left" />
        <span className="logo-flame__plume logo-flame__plume--center" />
        <span className="logo-flame__plume logo-flame__plume--right" />
        <span className="logo-flame__heat" />

        <div className="logo-flame__embers">
          {EMBERS.map((ember, index) => {
            const style = {
              "--ember-left": `${ember.left}%`,
              "--ember-delay": `${ember.delay}s`,
              "--ember-drift": `${-10 + (index % 5) * 5}px`,
            } as CSSProperties;

            return (
              <span key={index} className="logo-flame__ember" style={style} />
            );
          })}
        </div>
      </div>

      <Image
        src="/2nd-chance-at-life-logo.PNG"
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`logo-flame__mark${imgClassName ? ` ${imgClassName}` : ""}`}
      />
    </div>
  );
}
