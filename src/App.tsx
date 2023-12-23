import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";
import Beranda from "./pages/Beranda";
import RincianSepatu from "./pages/RincianSepatu";
import TambahSepatu from "./pages/TambahSepatu";
import EditSepatu from "./pages/EditSepatu";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <Nav />
          <main className="flex flex-1 flex-col">
            <Outlet />
          </main>
          <Footer />
        </>
      }
    >
      <Route index element={<Beranda />} />
      <Route path="tambah-sepatu" element={<TambahSepatu />} />
      <Route path="sepatu/:id" element={<RincianSepatu />} />
      <Route path="edit-sepatu/:id" element={<EditSepatu />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
