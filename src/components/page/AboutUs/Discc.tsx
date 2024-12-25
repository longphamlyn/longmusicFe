import React from 'react'

type Props = {}

const Discc = (props: Props) => {
  return (
    <div className="discs">
  <div className="container">
    <div className="row discs_row">
      {/* Disc */}
      <div className="col-xl-4 col-md-6">
        <div className="disc">
          <a href="/single">
            <div className="disc_image">
              <img
                src="images/disc_1.jpg"
                alt="https://unsplash.com/@tanelah"
              />
            </div>
            <div className="disc_container">
              <div>
                <div className="disc_content_1">
                  <div className="disc_title">Mixtape</div>
                  <div className="disc_subtitle">Music For the People</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      {/* Disc */}
      <div className="col-xl-4 col-md-6">
        <div className="disc">
          <a href="/single">
            <div className="disc_image">
              <img
                src="images/disc_2.jpg"
                alt="https://unsplash.com/@kasperrasmussen"
              />
            </div>
            <div className="disc_container">
              <div>
                <div className="disc_content_2 d-flex flex-column align-items-center justify-content-center">
                  <div>
                    <div className="disc_title">Mixtape</div>
                    <div className="disc_subtitle">the world is ours</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      {/* Disc */}
      <div className="col-xl-4 col-md-6">
        <div className="disc">
          <a href="/single">
            <div className="disc_image">
              <img
                src="images/disc_3.jpg"
                alt="https://unsplash.com/@photones11"
              />
            </div>
            <div className="disc_container">
              <div>
                <div className="disc_content_3">
                  <div>
                    <div className="disc_title">Mixtape</div>
                    <div className="disc_subtitle">Singles</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      {/* Disc */}
      <div className="col-xl-4 col-md-6">
        <div className="disc">
          <a href="/single">
            <div className="disc_image">
              <img
                src="images/disc_4.jpg"
                alt="https://unsplash.com/@rexcuando"
              />
            </div>
            <div className="disc_container">
              <div>
                <div className="disc_content_4 d-flex flex-column align-items-start justify-content-end">
                  <div className="text-left">
                    <div className="disc_title">Mixtape</div>
                    <div className="disc_subtitle">1983</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      {/* Disc */}
      <div className="col-xl-4 col-md-6">
        <div className="disc">
          <a href="/single">
            <div className="disc_image">
              <img
                src="images/disc_5.jpg"
                alt="https://unsplash.com/@alicemoore"
              />
            </div>
            <div className="disc_container">
              <div>
                <div className="disc_content_5">
                  <div className="disc_title">Mixtape</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      {/* Disc */}
      <div className="col-xl-4 col-md-6">
        <div className="disc">
          <a href="/single">
            <div className="disc_image">
              <img src="images/disc_6.jpg" alt="https://unsplash.com/@arstyy" />
            </div>
            <div className="disc_container">
              <div>
                <div className="disc_content_6">
                  <div className="disc_title">Mixtape</div>
                  <div className="disc_subtitle">Music For the People</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Discc