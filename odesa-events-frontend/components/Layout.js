import Head from 'next/head'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <div className={styles.container}>{children}</div>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Welcome to Odesa Events',
  description: 'Find the latest Odesa events',
  keywords: 'events',
}
