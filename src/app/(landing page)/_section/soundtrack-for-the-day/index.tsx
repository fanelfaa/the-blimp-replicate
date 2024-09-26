import { IconThunderArrow } from '@/components/icons';
import { SpreadChar } from '@/components/spread-char';
import { StaggerFadeText } from '@/components/stagger-fade-text';

import Image from 'next/image';
import { useRef } from 'react';

const description = `A great introduction to the tripped out
world of Ghost Dubs, and the perfect
lead up to the birth of 'Damaged'.`;

export const SoundtrackForTheDay = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section
        ref={containerRef}
        className="uppercase relative h-full text-foreground bg-background z-10"
        style={{ padding: '100px 10px 200px' }}
      >
        <h2 className="font-display display-hero mb-[20vh] px-3">
          <span className="flex justify-between">
            {'Soundtrack'.split('').map((c, i) => (
              <SpreadChar
                key={'char' + c + i}
                isFirst={i === 0}
                targetRef={containerRef}
                offset={['-30% end', 'start start']}
              >
                {c}
              </SpreadChar>
            ))}
          </span>
          <span className="flex justify-between">
            <span>for</span>
            <span className="relative">
              {' the '}
              <div className="text-xs uppercase absolute bottom-0 left-[150%] w-[350px] translate-y-full">
                <StaggerFadeText
                  text="Week: 39"
                  scrollOffset={['start 0.5', 'start 0.1']}
                  targetRef={containerRef}
                  className="lead-1 font-mono"
                  startDevider={5}
                />
                <StaggerFadeText
                  text="23rd sep"
                  scrollOffset={['start 0.5', 'start 0.1']}
                  targetRef={containerRef}
                  startDevider={5}
                  className="display-4"
                />
              </div>
            </span>
            <span className="flex">
              <IconThunderArrow />
              <span>day</span>
            </span>
          </span>
        </h2>
        <StaggerFadeText
          text={description}
          className="font-mono lead-1 max-w-[350px] absolute"
          style={{
            right: '5.5%',
            top: '40%',
          }}
          scrollOffset={['start 0.3', 'start 0.1']}
          targetRef={containerRef}
          startDevider={1.5}
        />
        <div
          className="absolute flex items-center"
          style={{
            left: '10%',
            top: '65%',
          }}
        >
          <span className="lead-1 uppercase font-mono">Explore</span>
          <IconThunderArrow className="-rotate-90 w-6 ml-4" />
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-6 col-start-4">
            <div className="size-[600px] relative mx-auto">
              <Image
                fill
                src="https://blimp.b-cdn.net/app/uploads/2024/07/a1603284286_10.jpg.webp"
                alt="Soundtrack for the day"
                className="bg-neutral-800 size-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
