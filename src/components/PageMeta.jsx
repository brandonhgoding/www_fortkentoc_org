import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Fort Kent Outdoor Center';
const BASE_URL = 'https://www.fortkentoc.org';
const DEFAULT_IMAGE = `${BASE_URL}/og-default.jpg`;

function PageMeta({ title, description, path, image }) {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;
  const imageUrl = image
    ? image.startsWith('http')
      ? image
      : `${BASE_URL}${image}`
    : DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}

export default PageMeta;
