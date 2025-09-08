import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./component/Pages/Home/Home.jsx";  
import Header from "./component/Header/Header.jsx";
import About from "./component/About/About.jsx";
import Resume from "./component/Resume/Resume.jsx";
function App() {
  return (
    
    <BrowserRouter>
      <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume/>}></Route>
       
        </Routes>


      </BrowserRouter>
    
    
    

  );
}
export default App;