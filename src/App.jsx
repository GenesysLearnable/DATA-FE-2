import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Signin from './pages/Login'
import { Signup } from "./pages/Signup"
import { EmailVerification } from "./pages/EmailVerification"
import { Homepage } from "./pages/Homepage"
import { Onboarding } from "./pages/Onboarding"
import { ForgotPassword } from "./pages/ForgotPassword"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Signup />}/>
          <Route path="SignUp" element={<Signup/>}/>
          <Route path="Login" element={<Signin/>}/>
          <Route path="EmailVerification" element={<EmailVerification/>}/>
          <Route path="Homepage" element={<Homepage/>}/>
          <Route path="Onboarding" element={<Onboarding/>}/>
          <Route path="ForgotPassword" element={<ForgotPassword/>}/>
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
