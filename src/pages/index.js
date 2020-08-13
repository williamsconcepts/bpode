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
      BPODE is a podcast showcasing new thinking from EBUBE. It is hosted by two undergrads students, Will and
      Presh. You are about to experience something you never heard or seen before. In this show we will be having self-improvement
      conversations with my Robot friends.
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
        href="https://podcasts.apple.com/us/podcast/daily-tips/id1524537916"
        target="_blank"
        rel="noopener noreferrer"
      >
        Apple Podcasts
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
        href="https://www.facebook.com/boobaeblog"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
      <a
        className="listen"
        href="https://twitter.com/williamschuddy"
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
