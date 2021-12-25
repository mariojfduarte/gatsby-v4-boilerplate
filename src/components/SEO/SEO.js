import React from "react"
import Helmet from "react-helmet"
import { useIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"

const SeoHelmet = ({ title, description, image, canonicalUrl }) => {
  const { site } = useStaticQuery(query)
  const { locale } = useIntl()

  const {
    defaultDescription,
    defaultCreator,
    defaultTitle,
    defaultImage,
    url,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${image || defaultImage}`,
    url: url,
  }

  return (
    <Helmet title={seo.title} htmlAttributes={{ lang: locale }}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      <meta property="og:type" content="website" />
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {defaultCreator && (
        <meta name="twitter:creator" content={defaultCreator} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <meta name="referrer" content="no-referrer-when-downgrade"></meta>
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  )
}

const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        url
        creator
      }
    }
  }
`

export default SeoHelmet
