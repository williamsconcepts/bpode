import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About the show</h1>
    <hr className="line" />
    <p className="introduction">
      BPODE is a podcast showcasing new thinking from Boo & Bae. It is hosted by two undergrad students, Will and
      Presh. Each episode is an in-depth interview where we discuss and
      explain our field and research. Every episode also has an
      accompanying write-up that we publish right here on our website.
      You can browse all our guests' reading recommendations on our <Link to="/library">library page</Link>. 
    </p>
    <h2>Where to listen</h2>

    <div className="listen-container">
      <a
        className="listen"
        href="https://open.spotify.com/show/4e2OBUBo3pc4Y41RwFakT4"
        target="_blank"
        rel="noopener noreferrer"
      >
        Spotify
      </a>
      <a
        className="listen"
        href="https://anchor.fm/boobaeblog"
        target="_blank"
        rel="noopener noreferrer"
      >
        Anchor Casts
      </a>
      <a
        className="listen"
        href="https://www.breaker.audio/meet-boobae"
        target="_blank"
        rel="noopener noreferrer"
      >
        Beaker Podcasts
      </a>
      <a
        className="listen"
        href="https://pca.st/gk7xambi"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pockect Casts
      </a>
    </div>
    <h2>Social media</h2>
    <p className="introduction">
      If you would like to get in touch with the show to suggest a guest or
      leave feedback, you can fill in our{" "}
      <a
        href="https://forms.gle/TvDjN1f7wRgGokfy8"
        target="_blank"
        rel="noopener noreferrer"
      >
        anonymous feedback form
      </a>{" "}
      or just email us at{" "}
      <span className="obfuscate">
        hello<span></span>@bpode.com
      </span>
      . You can also find us on Facebook and Twitter:
    </p>
    <div className="listen-container">
      <a
        className="listen"
        href="https://www.facebook.com/bpode"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
      <a
        className="listen"
        href="https://twitter.com/bpode"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
    </div>
    <p className="introduction">
      You can also see some of our own book, blog, and podcast recommendations{" "}
      <Link to="/recommendations">here</Link>.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
