const Social = () => (
  <div className="full">
    <h3>You can also find me on:</h3>
    <div className="icon-container">
      <a className="social" href="https://github.com/Nrin3141" target="blank">
        Github <i className="fab fa-github" />
      </a>
      <a
        className="social"
        href="https://www.linkedin.com/in/ricotrebeljahr"
        target="blank"
      >
        Linked
        <i className="fab fa-linkedin" />
      </a>
      <a
        className="social"
        href="https://stackoverflow.com/story/ricotrebeljahr"
        target="blank"
      >
        <i className="fab fa-stack-overflow" /> Stackoverflow
      </a>
      <a className="social" href="https://codepen.io/Nrin/" target="blank">
        Codepen <i className="fab fa-codepen" />
      </a>
    </div>
    <style jsx>{`
      .social {
        color: black;
        text-decoration: none;
      }
      .social:hover {
      }
    `}</style>
  </div>
);
export default Social;