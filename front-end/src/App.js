import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import Home from "./pages/home";
import CreatePost from "./pages/createPost";

function App() {
    return (
        <div>
            {/*List of Routes*/}
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/createpost" element={<CreatePost />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
