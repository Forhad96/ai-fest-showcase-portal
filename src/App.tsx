import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import FilmPage from "./pages/Film";
import FeedbackBoxPage from "./pages/FeedbackBox";
import GalleryHub from "./pages/GalleryHub";
import PhotosPage from "./pages/Photos";
import WebsitesPage from "./pages/Websites";
import PosterPage from "./pages/PosterPage";
import CreatorsPage from "./pages/Creators";
import FeedbackPage from "./pages/Feedback";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/film" element={<FilmPage />} />
          <Route path="/feedbackbox" element={<FeedbackBoxPage />} />
          <Route path="/gallery" element={<GalleryHub />} />
          <Route path="/gallery/photos" element={<PhotosPage />} />
          <Route path="/gallery/websites" element={<WebsitesPage />} />
          <Route path="/gallery/posters" element={<PosterPage />} />
          <Route path="/creators" element={<CreatorsPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}