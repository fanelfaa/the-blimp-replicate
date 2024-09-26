import { cx } from '@/utils/cx';
import Image from 'next/image';

export const PostCard: React.FC<
  {
    lead: string;
    title: string;
    big?: boolean;
    genres: string[];
  } & React.HTMLProps<HTMLDivElement>
> = ({ lead, title, big, genres, className, ...otherProps }) => {
  return (
    <article
      className={cx(
        'min-h-[600px] h-full post-card bg-foreground hover:bg-background text-background hover:text-white transition-colors duration-300',
        className,
      )}
      {...otherProps}
    >
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
          <div className={cx('size-[300px]', 'relative')}>
            <Image
              fill
              src="https://blimp.b-cdn.net/app/uploads/2024/07/a3113517095_10-300x300.jpg.webp"
              alt={title}
              className="bg-neutral-800 size-full"
            />
          </div>
        </footer>
      </a>
    </article>
  );
};
