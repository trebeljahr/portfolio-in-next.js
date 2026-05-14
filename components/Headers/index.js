import Head from "next/head";

const currentPortfolioUrl = "https://portfolio.trebeljahr.com/";
const title = "Rico Trebeljahr - Archived Portfolio";
const description =
  "Archived portfolio for Rico Trebeljahr. Visit the current portfolio for recent projects, resume, and contact details.";
const image = "https://portfolio.trebeljahr.com/images/profile.jpg";

function Header() {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="description" />
        <meta name="robots" content="noindex,follow" key="robots" />
        <meta name="googlebot" content="noindex,follow" key="googlebot" />
        <link rel="canonical" href={currentPortfolioUrl} key="canonical" />
        <meta property="og:site_name" content="Rico Trebeljahr Portfolio" key="og-site-name" />
        <meta property="og:type" content="website" key="og-type" />
        <meta property="og:title" content={title} key="og-title" />
        <meta property="og:description" content={description} key="og-description" />
        <meta property="og:url" content={currentPortfolioUrl} key="og-url" />
        <meta property="og:image" content={image} key="og-image" />
        <meta property="og:image:width" content="2500" key="og-image-width" />
        <meta property="og:image:height" content="2500" key="og-image-height" />
        <meta property="og:image:alt" content="Portrait of Rico Trebeljahr" key="og-image-alt" />
        <meta name="twitter:card" content="summary_large_image" key="twitter-card" />
        <meta name="twitter:title" content={title} key="twitter-title" />
        <meta name="twitter:description" content={description} key="twitter-description" />
        <meta name="twitter:image" content={image} key="twitter-image" />
        <meta
          name="twitter:image:alt"
          content="Portrait of Rico Trebeljahr"
          key="twitter-image-alt"
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
