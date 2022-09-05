

import Home from "./Home/Home";
import About from "./Home/About/About";
import Header from "./Home/Header/Header";
import Footer from "./Home/Footer/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import contact from "./Home/contact/contact";


const App=()=>{

  return (

<BrowserRouter>
<Header/>
   

    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    
    
   


<Footer/>
</BrowserRouter>
  )
}

export default App