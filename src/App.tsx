import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './page/Home';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
