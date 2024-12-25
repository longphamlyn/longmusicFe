import React from 'react'

type Props = {}

const Artist = (props: Props) => {
  return (
    <div className="artist">
  <div className="container">
    <div className="row">
      {/* Artist Image */}
      <div className="col-lg-4 artist_image_col">
        <div className="artist_image">
          <img src="images/artist.png" alt="" />
        </div>
      </div>
      {/* Artist Content */}
      <div className="col-lg-7 offset-lg-1">
        <div className="artist_content">
          <div className="section_title_container">
            <div className="section_subtitle">Events</div>
            <div className="section_title">
              <h1>The Artist</h1>
            </div>
          </div>
          <div className="artist_text">
            <p>
              {" "}
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
              Maecenas sollicitudin est in libero pretium interdum. Nullam
              volutpat dui sem, ac congue purus luctus nec. Curabitur luctus
              luctus erat, sit amet facilisis quam congue quis. Quisque ornare
              luctus erat id dignissim. Nullam ac nunc quis ex porttitor luctus.
            </p>
            <p>
              Integer sed facilisis eros. In iaculis rhoncus velit in malesuada.
              In hac habitasse platea dictumst. Fusce erat ex, consectetur sit
              amet ornare suscipit, porta et erat. Donec nec nisi in nibh
              commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce
              ultricies ante tortor, non vestibulum est feugiat ut.
            </p>
          </div>
          <div className="artist_sig">
            <img src="images/sig.png" alt="" />
          </div>
          <div className="single_player_container d-flex flex-column align-items-start justify-content-center">
            <div className="single_player">
              <div id="jplayer_2" className="jp-jplayer" />
              <div
                id="jp_container_2"
                className="jp-audio"
                role="application"
                aria-label="media player"
              >
                <div className="jp-type-single">
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
                    To play the media you will need to either update your
                    browser to a recent version or update your{" "}
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
</div>

  )
}

export default Artist