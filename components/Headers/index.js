import Head from "next/head";

function Header() {
  return (
    <div>
      <Head>
        <title>Rico Trebeljahr - Archived Portfolio</title>
        <meta
          name="description"
          content="Archived portfolio for Rico Trebeljahr. Visit the current portfolio for recent projects, resume, and contact details."
          key="description"
        />
        <meta name="robots" content="noindex,follow" key="robots" />
        <meta name="googlebot" content="noindex,follow" key="googlebot" />
        <link rel="canonical" href="https://portfolio.trebeljahr.com/" key="canonical" />
        <meta property="og:site_name" content="Rico Trebeljahr Portfolio" key="og-site-name" />
        <meta property="og:type" content="website" key="og-type" />
        <meta property="og:title" content="Rico Trebeljahr - Archived Portfolio" key="og-title" />
        <meta
          property="og:description"
          content="Archived portfolio for Rico Trebeljahr. Visit the current portfolio for recent projects, resume, and contact details."
          key="og-description"
        />
        <meta property="og:url" content="https://portfolio.trebeljahr.com/" key="og-url" />
        <meta name="twitter:card" content="summary" key="twitter-card" />
        <meta
          name="twitter:title"
          content="Rico Trebeljahr - Archived Portfolio"
          key="twitter-title"
        />
        <meta
          name="twitter:description"
          content="Archived portfolio for Rico Trebeljahr. Visit the current portfolio for recent projects, resume, and contact details."
          key="twitter-description"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      </Head>
      <style jsx global>{`
        body {
          margin: 0;
          font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
          line-height: calc(
            1.3em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300))
          );
          font-family: "Roboto", sans-serif;
        }
      `}</style>
    </div>
  );
}

export default Header;
