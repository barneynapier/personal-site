import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutPage from "./pages/About";
import PostPage from "./pages/PostPage";
import AllPosts from "./pages/AllPosts";
import NotFound from "./pages/NotFound";
import Library from "./pages/Library";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/library" element={<Library />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
