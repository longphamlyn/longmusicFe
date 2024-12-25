import React from 'react'

type Props = {}

const Milestones = (props: Props) => {
  return (
    <div className="milestones">
    <div className="milestones_container">
      <div
        className="parallax_background parallax-window"
        data-parallax="scroll"
        data-image-src="images/milestones.jpg"
        data-speed="0.8"
      />
      <div className="container">
        <div className="row milestones_row">
          {/* Milestone */}
          <div className="col-xl-3 col-md-6 milestone_col">
            <div className="milestone d-flex flex-row align-items-center justify-content-start">
              <div className="milestone_icon">
                <img
                  src="images/icon_1.svg"
                  alt="https://www.flaticon.com/authors/smashicons"
                />
              </div>
              <div className="milestone_content">
                <div
                  className="milestone_counter"
                  data-end-value={298}
                  data-sign-after="k"
                >
                  0
                </div>
                <div className="milestone_text">Albums sold</div>
              </div>
            </div>
          </div>
          {/* Milestone */}
          <div className="col-xl-3 col-md-6 milestone_col">
            <div className="milestone d-flex flex-row align-items-center justify-content-start">
              <div className="milestone_icon">
                <img
                  src="images/icon_2.svg"
                  alt="https://www.flaticon.com/authors/smashicons"
                />
              </div>
              <div className="milestone_content">
                <div className="milestone_counter" data-end-value={183}>
                  0
                </div>
                <div className="milestone_text">Live Concerts</div>
              </div>
            </div>
          </div>
          {/* Milestone */}
          <div className="col-xl-3 col-md-6 milestone_col">
            <div className="milestone d-flex flex-row align-items-center justify-content-start">
              <div className="milestone_icon">
                <img
                  src="images/icon_3.svg"
                  alt="https://www.flaticon.com/authors/smashicons"
                />
              </div>
              <div className="milestone_content">
                <div className="milestone_counter" data-end-value={37}>
                  0
                </div>
                <div className="milestone_text">Awards won</div>
              </div>
            </div>
          </div>
          {/* Milestone */}
          <div className="col-xl-3 col-md-6 milestone_col">
            <div className="milestone d-flex flex-row align-items-center justify-content-start">
              <div className="milestone_icon">
                <img
                  src="images/icon_4.svg"
                  alt="https://www.flaticon.com/authors/smashicons"
                />
              </div>
              <div className="milestone_content">
                <div className="milestone_counter" data-end-value={14}>
                  0
                </div>
                <div className="milestone_text">New Singles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Milestones