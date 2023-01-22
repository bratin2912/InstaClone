import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Landing from "./Components/Landing_Page/Landing";
import Post from "./Components/Post/Post";
import PostView from "./Components/PostView/PostView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/post" element={<Post/>}/>
        <Route path="/postview" element={<PostView/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
