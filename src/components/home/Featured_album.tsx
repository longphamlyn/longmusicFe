import React from 'react'

type Props = {}

const Featured_album = (props: Props) => {
  return (
    <div className="featured_album">
  <div
    className="background_image featured_background"
    style={{ backgroundImage: "url(images/featured.png)" }}
  />
  <div className="container">
    <div className="row">
      <div className="col-lg-6 offset-lg-6">
        <div className="section_title_container">
          <div className="section_subtitle">Events</div>
          <div className="section_title">
            <h1>Featured Album</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="row featured_row row-lg-eq-height">
      {/* Featured Album Image */}
      <div className="col-md-6">
        <div className="featured_album_image">
          <div className="image_overlay" />
          <div
            className="background_image"
            style={{ backgroundImage: "url(images/featured_album.jpg)" }}
          />
          {/* <img src="images/featured_album.jpg" alt=""> */}
        </div>
      </div>
      {/* Featured Album Player */}
      <div className="col-md-6 featured_album_col">
        <div className="featured_album_player_container d-flex flex-column align-items-start justify-content-center">
          <div className="featured_album_player">
            <div className="featured_album_title_bar d-flex flex-row align-items-center justify-content-start">
              <div className="featured_album_title_container">
                <div className="featured_album_artist">Maria Smith</div>
                <div className="featured_album_title">Love is all Around</div>
              </div>
              <div className="featured_album_link ml-auto">
                <a href="#">buy it on itunes</a>
              </div>
            </div>
            <div id="jplayer_1" className="jp-jplayer" />
            <div
              id="jp_container_1"
              className="jp-audio"
              role="application"
              aria-label="media player"
            >
              <div className="jp-type-playlist">
                <div className="jp-playlist">
                  <ul>
                    <li />
                  </ul>
                </div>
                <div className="player_details d-flex flex-row align-items-center justify-content-start">
                  <div className="jp-details">
                    <div>playing</div>
                    <div className="jp-title" aria-label="title">
                      &nbsp;
                    </div>
                  </div>
                  <div className="jp-controls-holder ml-auto">
                    <button className="jp-play" tabIndex={0} />
                  </div>
                </div>
                <div className="player_controls">
                  <div className="jp-gui jp-interface d-flex flex-row align-items-center justify-content-start">
                    <div className="jp-controls-holder time_controls d-flex flex-row align-items-center justify-content-start">
                      <div>
                        <div
                          className="jp-current-time"
                          role="timer"
                          aria-label="time"
                        >
                          &nbsp;
                        </div>
                      </div>
                      <div className="jp-progress">
                        <div className="jp-seek-bar">
                          <div className="jp-play-bar" />
                        </div>
                      </div>
                      <div>
                        <div
                          className="jp-duration ml-auto"
                          role="timer"
                          aria-label="duration"
                        >
                          &nbsp;
                        </div>
                      </div>
                    </div>
                    <div className="jp-volume-controls d-flex flex-row align-items-center justify-content-start ml-auto">
                      <button className="jp-mute" tabIndex={0} />
                      <div className="jp-volume-bar">
                        <div className="jp-volume-bar-value" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="jp-no-solution">
                  <span>Update Required</span>
                  To play the media you will need to either update your browser
                  to a recent version or update your{" "}
                  <a href="http://get.adobe.com/flashplayer/" target="_blank">
                    Flash plugin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Featured_album