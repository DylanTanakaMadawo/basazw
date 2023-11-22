import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Homepage } from "./components/Homepage";
import { JobForm } from "./components/JobForm";

import { ShowPost } from "./components/Pages/ShowPost";
import { DeletePost } from "./components/Pages/DeletePost";
import { EditPost } from "./components/Pages/EditPost";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Navbar } from "./components/Navbar";
import { Wishlist } from "./components/Wishlist";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { SignUp } from "./components/SIgnUp/SIgnUp";
// import { ThemeProvider } from "@mui/material";

import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./context/userContext";
import axios from "axios";

axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://localhost:5555";
axios.defaults.baseURL = "https://basazw-api.onrender.com/";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Toaster position="top-right" toastOptions={{ duration: 3500 }} />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/browse" element={<Homepage />} />
            <Route path="/addjob" element={<JobForm />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="posts/details/:id" element={<ShowPost />} />
            <Route path="posts/edit/:id" element={<EditPost />} />
            <Route path="posts/delete/:id" element={<DeletePost />} />
          </Routes>
          {/* <Footer /> */}
          <div className="signature">
            <p>All rights reserved | Dylan Madawo | 2023</p>
          </div>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
