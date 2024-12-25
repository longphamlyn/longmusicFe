import React from 'react'

type Props = {}

const Video = (props: Props) => {
  return (
    <div className="video">
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="video_container">
          <iframe
            width={560}
            height={315}
            src="https://www.youtube.com/embed/OsKLytDnKGA?rel=0&showinfo=0"
            frameBorder={0}
            allow="autoplay; encrypted-media"
           
          />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Video