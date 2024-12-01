import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SigninPage } from "./pages/SigninPage"
import { SignupPage } from "./pages/SignupPage"
import { LandingPage } from "./pages/LandingPage"
import { CoursePage } from "./pages/CoursePage"

function App() {
  return <div className="bg-black h-screen overflow-auto">
    <BrowserRouter>
      <Routes>
        <Route element={<SignupPage />} path="/signup"></Route>
        <Route element={<SigninPage />} path="/signin"></Route>
        <Route element={<LandingPage />} path="/"></Route>
        <Route element={<CoursePage />} path="/course"></Route>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App