import React from "react";
import "./HeaderContent.css";

const HeaderContent = () => {
	return (
		<div className="headerContent container">
			<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 pe-5">
				<h1>
					THE BEST FITNESS <br /> STUDIO IN TOWN{" "}
				</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Nemo nihil perferendis illum totam eveniet quia, eligendi
					impedit architecto asperiores magnam tenetur ducimus
					molestias non, officiis atque eius eos omnis reprehenderit!
				</p>
				<button>JOIN US</button>
			</div>
			<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"></div>
		</div>
	);
};

export default HeaderContent;
