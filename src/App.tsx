import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Mainpage from "./pages/main";
import "./scss/main.scss"

function App() {



  return (
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/main" element={<Mainpage />} />
            </Route>
          </Routes>
        </Router>
  );
}

export default App;
