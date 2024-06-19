import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Header from "./components/Header"
import Projects from "./pages/Projects"

function App() {
  

  return (
   <BrowserRouter>
   <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
