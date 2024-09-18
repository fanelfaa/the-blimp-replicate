'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

import 'lenis/dist/lenis.css';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <div className="sticky top-0">
        <section
          style={{
            padding: '50px 10px',
            height: 777,
          }}
          className="bg-bg-light flex flex-col"
        >
          <ul
            style={{
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridTemplateRows: 'repeat(2, 1fr)',
            }}
            className="grid gap-5 flex-grow"
          >
            <li className="relative" style={{ gridArea: '1/1/3/3' }}>
              <article className="h-full bg-foreground"></article>
            </li>
            <li>
              <article className="h-full bg-foreground"></article>
            </li>
            <li>
              <article className="h-full bg-foreground"></article>
            </li>
            <li>
              <article className="h-full bg-foreground"></article>
            </li>
            <li>
              <article className="h-full bg-foreground"></article>
            </li>
          </ul>
        </section>
      </div>

      <div className="sticky top-0">
        <section
          style={{
            padding: '50px 10px',
            height: 777,
          }}
          className="bg-blue-200 flex flex-col"
        >
          <ul
            style={{
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridTemplateRows: 'repeat(2, 1fr)',
            }}
            className="grid flex-grow"
          ></ul>
        </section>
      </div>
    </main>
  );
}
