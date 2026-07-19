export default function ArticleList({ post }) {
  const date = new Date(post.createdAt);
  return (
    <article className="article-list">
      <a href={`/posts/${post.id}`} className="article-list-link">
        <div className="article-list-thumb"><img src={post.thumbnailUrl} alt="" /></div>
        <div className="article-list-body">
            <div className="article-meta">
              <div className="article-date">{`${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`}</div>
              <ul className="article-category">
                {post.categories.map(category =>
                  <li key={category}>{category}</li>
                )}
              </ul>
            </div>
            <h2 className="article-list-title">{post.title}</h2>
            <p className="article-list-excerpt" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </a>
      </article>
  );
}