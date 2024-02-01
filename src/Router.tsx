import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/home";
import { Publication } from "./pages/publication/[id]";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/publication/:id" element={<Publication />} />
      </Route>
    </Routes>
  );
};

export default Router;
