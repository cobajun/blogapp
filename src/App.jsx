import { Header } from './components/Header';
import { ArticleList } from './components/ArticleList'; 
import { posts } from './data/posts';

export const App = () => {
  const sorted = [...posts].sort(
    (m, n) => new Date(n.createdAt) - new Date(m.createdAt)
  );
  return (
    <>
      <Header />
      <main className="main">
        <div className="inner">
          <h1 className="pagetitle">記事一覧</h1>
          <section>
            {sorted.map(elem =>
              <ArticleList post={elem} key={elem.id} />
            )}
          </section>
        </div>
      </main>

    </>
  );
}