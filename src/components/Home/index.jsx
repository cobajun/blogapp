import { ArticleList } from '../ArticleList'; 
import { posts } from '../../data/posts';
import { useEffect } from 'react';

export const Home = () => {
  const sorted = [...posts].sort(
    (m, n) => new Date(n.createdAt) - new Date(m.createdAt)
  );
  useEffect(() => {
    document.title = 'Blog';
    document.querySelector('meta[name="description"]')
    ?.setAttribute('content', 'Blog Reactの練習用サイトです。');
  }, []);

  return (
    <>
      
      
      <h1 className="pagetitle">記事一覧</h1>
      <section>
        {sorted.map(elem =>
          <ArticleList post={elem} key={elem.id} />
        )}
      </section>
    </>
  );
};