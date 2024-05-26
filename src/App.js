import BackGroundVideo from "./components/home/BackGroundVideo";
import { HashRouter, Routes, Route } from "react-router-dom";
import Catalogue from "./components/home/Catalogue";
import Services from "./components/home/Services";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <>
        <HashRouter> 
          
          <Menu/>
            <Routes>
              <Route path="/" element={<BackGroundVideo/>}/>
              {/*<Route path="/catalogue" element={<Catalogue/>}/>
                <Route path="/services" element={<Services/>}/> */}             
            </Routes> 
          
        </HashRouter>
      </>

    </div>
  );
}

export default App;
