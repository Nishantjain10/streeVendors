import Landing from "./pages/landing";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Profile from "./pages/userprofile"
import Featured from "./pages/featured";
import Store from "./pages/store";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return  (
    <div className="min-h-screen bg-sober-pink">
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userprofile" element={<Profile />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
    </div>
  );
}

export default App;