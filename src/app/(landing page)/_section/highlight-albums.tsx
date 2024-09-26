import { FadeLi, PostCard } from '@/components/post-card';

export const HighlightAlbums = () => {
  return (
    <div className="sticky top-0">
      <section
        style={{
          padding: '50px 10px',
        }}
        className="bg-bg-light"
      >
        <ul
          style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
          }}
          className="grid gap-5 flex-grow"
        >
          {Array.from(Array(5).keys()).map((i) => (
            <FadeLi key={i} style={{ gridArea: i === 0 ? '1/1/3/3' : undefined }}>
              <PostCard
                lead="IN THE RED"
                title="Alan Vega – Insurrection"
                genres={['ELECTRONICS']}
                big={i === 0}
              />
            </FadeLi>
          ))}
        </ul>
      </section>
    </div>
  );
};
