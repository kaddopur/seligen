import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.scss';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
    >
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
      <script>
        {`(adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-8198201199373226",
          enable_page_level_ads: true
        });`}
      </script>
    </Helmet>

    <section className="section">
      <div className="container is-fluid">{children()}</div>
    </section>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
