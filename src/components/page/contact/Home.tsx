import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className="home">
		<div className="home_inner">
			
			<div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/contact.jpg" data-speed="0.8"></div>
			<div className="home_container">
				<div className="home_content text-center">
					<div className="home_subtitle">Just us</div>
					<div className="home_title">Contact</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Home