import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/contact";
import Header from "./components/header";
import Home from "./components/home";
import PostById from "./components/post-by-id";
import MainLayout from "./layouts/main-layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="article/:postId" element={<PostById />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Router;
