import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/contact";
import Header from "./components/header";
import Home from "./components/home";
import Post from "./components/post";
import MainLayout from "./layouts/main-layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="article/:postId" element={<Post />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Router;
