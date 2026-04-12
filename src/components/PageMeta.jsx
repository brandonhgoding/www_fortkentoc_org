import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Fort Kent Outdoor Center';
const BASE_URL = 'https://www.fortkentoc.org';

function PageMeta({ title, description, path }) {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

export default PageMeta;
