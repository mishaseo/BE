import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import loginPage from "./pages/loginPage";
function App() {
    return (
        <div>
            {/*List of Routes*/}
            <Router>
                <Routes>
                    <Route path="/" element={<loginPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
