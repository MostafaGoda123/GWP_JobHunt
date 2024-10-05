import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jobs from './pages/Jobs';
import PostJob from './pages/PostJob';
import SavedJob from './pages/SavedJob';
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/postJob" element={<PostJob />} />
        <Route path="/savedJob" element={<SavedJob />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
