import { useEffect } from 'react';

export const Contact = () => {
  useEffect(() => {
    document.title = 'お問い合わせ | Blog';
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', 'お問い合わせページです。');
  }, []);

  return (
    <>
      <title>お問い合わせ | Blog</title>
      <meta name="description" content="お問い合わせページです。" /> 
      <p>お問い合わせページ</p>
    </>
  );
};