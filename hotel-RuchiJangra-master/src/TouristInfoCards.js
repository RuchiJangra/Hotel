import React from "react";
const TouristInfoCards = () =>{
 return (
    <div className = "imageContainer">
<div className="card">
	<img src="https://media.istockphoto.com/id/469974825/photo/squinty-bridge-glasgow.jpg?s=612x612&w=0&k=20&c=or3NNSPV7Q-t1lZ5Z6UITQZ5Q3KoF35Je5wq9-fSrvg=" className="card-img-top" />
	<div className="card-body">
		<a href="http://peoplemakeglasgow.com/" className="btn btn-primary">Go GlassGow</a>
	</div>
</div>
<div className="card">
	<img src="https://media.wired.co.uk/photos/6357b98e09e6f1942a2a8a9a/16:9/w_1280,c_limit/HSBC%20MANCHESTER.jpeg" className="card-img-top" />
	<div className="card-body">
		<a href="https://www.visitmanchester.com/" className="btn btn-primary">Go Manchester</a>
	</div>

    </div>
    <div className="card">
	<img src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Best-Things-to-do-in-London-1200x900.jpg.optimal.jpg" className="card-img-top" />
	<div className="card-body">
		<a href="https://www.visitlondon.com/" className="btn btn-primary">Go London</a>
	</div>
</div>
</div>
 )

}
export default TouristInfoCards;