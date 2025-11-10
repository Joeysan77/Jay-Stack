import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Header } from './components/Header'
import JayStackUi from './pages/JayStackUi'
import JayStackFonts from './pages/JayStackFonts'
import Docs from './pages/Docs'
import About from './pages/About'
import { SpeedInsights } from "@vercel/speed-insights/react"
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
  <div className="relative">
    <Header/>
    <ScrollToTop/>
    <Routes>     
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs/>} />
      <Route path="/jay-stack-ui" element={<JayStackUi/>} />
      <Route path="/jay-stack-fonts" element={<JayStackFonts/>} />
      <Route path="/about" element={<About/>}/>
    </Routes>
    <SpeedInsights/>
  </div>
  );
}