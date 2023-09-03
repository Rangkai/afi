import React from 'react';
import { useLocation } from '@reach/router';
import useMetadataDefault from '../hooks/useMetadataDefault';
import afi2023Logo from '../images/afi-2023.jpg';

function SEO({
  title, description, children,
}) {
  const {
    title: defaultTitle, description: defaultDescription,
  } = useMetadataDefault();
  const location = useLocation();
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${location?.origin || 'https://komunitasfilm.id/'}/${afi2023Logo}`} />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {children}
    </>
  );
}

export default SEO;
