import React from "react";

import Bookings from "./components/Bookings";
import "./App.css";
import Heading from "./components/Heading";
import Footer from "./components/Footer"
import Restaurant from "./components/Restaurant"; // import the restaurant component



const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">CYF Hotel</header> */}
      {/* these are the components that given below */}
      <Heading/>
      <Bookings/>
      <Restaurant/>    
      <Footer addresses= {["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]}/>
    </div>
  );
};



export default App;
