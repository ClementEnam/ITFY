"use client";

import Image from "next/image";
import { useState } from "react";

// Accepts any YouTube link (watch, youtu.be, shorts, embed, live) or a bare video ID.
function toYouTubeId(input?: string) {
  if (!input) return "";
  const s = input.trim();
  if (/^[\w-]{11}$/.test(s)) return s;
  const m = s.match(/(?:youtu\.be\/|[?&]v=|\/(?:embed|shorts|live)\/)([\w-]{11})/);
  return m ? m[1] : "";
}

// A photo that turns into a YouTube player when a video is set and the play button is pressed.
// The video only loads after the click, so the page stays fast.
export default function VideoPhoto({
  image,
  youtubeId,
  title,
}: {
  image: { src: string; alt: string };
  youtubeId?: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);
  youtubeId = toYouTubeId(youtubeId);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-ink shadow-[0_40px_80px_-40px_rgba(16,32,74,0.55)]">
      {playing && youtubeId ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <>
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          {youtubeId && (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`Play video: ${title}`}
              className="group absolute inset-0 grid place-items-center bg-ink/20 transition-colors hover:bg-ink/30"
            >
              <span className="grid h-20 w-20 place-items-center rounded-full bg-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-8 w-8 text-ink">
                  <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14z" />
                </svg>
              </span>
            </button>
          )}
        </>
      )}
    </div>
  );
}