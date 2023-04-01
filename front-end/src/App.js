import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import Home from "./pages/home";
import PostAPet from "./pages/createPost";
import AnimalPage from "./pages/animalPages/animalPage";

function App() {
    return (
        <div>
            {/*List of Routes*/}
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/createpost" element={<PostAPet />} />
                    <Route path="/animal" element={<AnimalPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
