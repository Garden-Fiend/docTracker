import { Search } from "lucide-react";

import "./App.css";
import LoginPage from "./pages/login";
import { Route, Routes } from "react-router-dom";
import MainTablePage from "./pages/mainDB";
import DocumentBuilderPage from "./pages/docbuilder";
import FormView from "./pages/formview";
import FormConstructorPage from "./pages/formmaker";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/MainTable" element={<MainTablePage />} />
      <Route path="/DocBuilder" element={<DocumentBuilderPage />} />
      <Route path="/FormView" element={<FormView />} />
      <Route path="/FormBuilder" element={<FormConstructorPage />}></Route>
    </Routes>
  );
}

export default App;
