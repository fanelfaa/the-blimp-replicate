import { cx } from '@/utils/cx';
import { MotionStyle, motion } from 'framer-motion';

export const PostCard: React.FC<{
  delay?: number;
  style?: MotionStyle;
  lead: string;
  title: string;
  big?: boolean;
  genres: string[];
}> = ({ delay, style, lead, title, big, genres }) => {
  return (
    <motion.li
      className="h-full bg-foreground hover:bg-background text-background hover:text-white transition-colors duration-300"
      variants={{
        hidden: { y: '100%' },
        visible: {
          y: 0,
        },
      }}
      transition={{ type: 'tween', delay }}
      initial="hidden"
      animate="visible"
      style={style}
    >
      <article className="h-full post-card">
        <a className="flex flex-col h-full p-2.5 cursor-pointer crops-f">
          <header>
            <div className="text-xs tracking-wide uppercase font-mono">
              <span>{lead}</span>
            </div>
            <h2
              className={cx(
                'max-w-[350px] uppercase font-superbold',
                big ? 'display-3' : 'display-4',
              )}
            >
              {title}
            </h2>
          </header>
          <footer className="mt-auto flex justify-between items-end">
            <div className="text-xs tracking-wide uppercase font-mono">
              {genres.join(' / ')}
            </div>
            <div className={cx({ 'size-[360px]': big, 'size-[200px]': !big })}>
              <img alt={title} className="bg-neutral-800 size-full" />
            </div>
          </footer>
        </a>
      </article>
    </motion.li>
  );
};
