import styles from './ArticleDetail.module.css';
import { ArticleMeta } from '../ArticleMeta';
import { useParams , Link } from 'react-router-dom'; 
import { posts } from '../../data/posts';
import { useEffect } from 'react';

export const ArticleDetail = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  useEffect(() => {
    document.title = `${post.title} | Blog`;
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', '記事詳細ページです。');
  }, []);

  return (
    <>
      <article className={styles.detail}>
        <div className={styles.main}>
          <img src={post.thumbnailUrl} alt="" />
        </div>
        <ArticleMeta createdAt={post.createdAt} categories={post.categories} />
        <div className={styles.body}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.content}>
            <p dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
        <div className={styles.back}>
          <Link to="/" className={styles.btn}>
            記事一覧へ戻る
          </Link>
        </div>
      </article>
    </>
  );
};