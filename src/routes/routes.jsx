import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// COMPONENTS IMPORT
import Layout from "../components/Layout";
import HostLayout from "../components/HostLayout";
import Error from "../components/Error";

// PAGES IMPORT
import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "../pages/About";
import Vans from "../pages/Vans/Vans";
import VanDetail from "../pages/Vans/VanDetail";
import Dashboard from "../pages/Host/Dashboard";
import Income from "../pages/Host/Income";
import Reviews from "../pages/Host/Reviews";
import HostVans from "../pages/Host/Vans/Vans";
import HostVanDetail from "../pages/Host/Vans/VanDetail";
import HostVanInfo from "../pages/Host/Vans/VanInfo";
import HostVanPricing from "../pages/Host/Vans/VanPricing";
import HostVanPhotos from "../pages/Host/Vans/VanPhotos";
import NotFound from "../pages/NotFound";

// LOADERS IMPORT
import { loader as loginLoader } from "../pages/Login";
import { loader as vansLoader } from "../pages/Vans/Vans";
import { loader as vanDetailLoader } from "../pages/Vans/VanDetail";
import { loader as hostVansLoader } from "../pages/Host/Vans/Vans";
import { loader as hostVanDetailLoader } from "../pages/Host/Vans/VanDetail";

// OTHER IMPORTS
import { requireAuth } from "../utils";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} loader={loginLoader} />
      <Route path="vans" element={<Vans />} loader={vansLoader} />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => await requireAuth()}
        />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async () => await requireAuth()}
          />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
