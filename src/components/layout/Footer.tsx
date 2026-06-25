import { MessageCircle, ArrowUpRight } from "lucide-react";
import { PHOTOS } from "@/lib/photos";

export default function Footer() {
  const credits = Object.values(PHOTOS);

  return (
    <footer className="relative bg-bg border-t border-border px-6 lg:px-10 py-12">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-display text-xl tracking-wide">
          BODY GROW <span className="text-accent">GYM</span> AZIZ
        </p>

        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://wa.me/919247790025"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-muted hover:text-accent transition-colors"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <a
            href="#"
            className="flex items-center gap-1 text-muted hover:text-accent transition-colors"
          >
            Instagram
            <ArrowUpRight size={13} />
          </a>
          <a
            href="#"
            className="flex items-center gap-1 text-muted hover:text-accent transition-colors"
          >
            Facebook
            <ArrowUpRight size={13} />
          </a>
        </div>

        <p className="text-muted text-xs">
          © {new Date().getFullYear()} Body Grow Gym Aziz. All rights
          reserved.
        </p>
      </div>

      <p className="mx-auto max-w-7xl mt-8 text-[11px] text-muted/60 leading-relaxed">
        Photography:{" "}
        {credits.map((c, i) => (
          <span key={c.creditUrl}>
            <a
              href={c.creditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-accent transition-colors"
            >
              {c.credit}
            </a>
            {i < credits.length - 1 ? ", " : ""}
          </span>
        ))}{" "}
        on Unsplash.
      </p>
    </footer>
  );
}
