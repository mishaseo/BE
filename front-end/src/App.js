import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
function App() {
    return (
        <div>
            {/*List of Routes*/}
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/" element={<SignUpPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
