import React from 'react';
import useMetadataDefault from '../hooks/useMetadataDefault';

function SEO({
  title, description, children,
}) {
  const {
    title: defaultTitle, description: defaultDescription,
  } = useMetadataDefault();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {children}
    </>
  );
}

export default SEO;
