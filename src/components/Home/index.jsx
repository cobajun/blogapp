import { ArticleList } from '../ArticleList'; 
import { useEffect, useState } from 'react';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
     const getData = async () => {
      const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts");
      const data = await res.json();
      setPosts(data.posts);
      setIsLoading(false);
    };
    getData();
  }, []);

  useEffect(() => {
    document.title = 'Blog';
    document.querySelector('meta[name="description"]')
    ?.setAttribute('content', 'Blog Reactの練習用サイトです。');
  }, []);

  if (isLoading) {
    return <p>読み込み中...</p>
  }
  
  const sorted = [...posts].sort(
    (m, n) => new Date(n.createdAt) - new Date(m.createdAt)
  );
  
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
