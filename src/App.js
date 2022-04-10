import logo from "./logo.svg";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import NewPost from "./components/Content/Pages/Crud/NewPost";
import Section from "./components/Content/Pages/Home/Section";
import EditPost from "./components/Content/Pages/Crud/EditPost";
import DetailPost from "./components/Content/Pages/Home/DetailPost";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Content />}>
          <Route path="/" exact element={<Section />} />
          <Route path="create" element={<NewPost />} />
          <Route path="update" element={<NewPost />}>
            <Route path=":id" element={<NewPost />} />
          </Route>
          <Route path="posts" element={<DetailPost />}>
            <Route path=":id" element={<DetailPost />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
