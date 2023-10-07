import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
const Home = lazy(() => import("pages/Home/Home"))
const Movies = lazy(() => import("pages/Movies/Movies"))
const MoviePage = lazy(() => import("pages/MoviePage/MoviePage"))
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="" element={<Suspense><Home /></Suspense>} />
          <Route path="movies" element={<Suspense><Movies/></Suspense>} />
          <Route path="movies/:id" element={<Suspense><MoviePage /></Suspense>}/>
          <Route path="movies/:id/cast" element={<Suspense><MoviePage /></Suspense>}/>
          <Route path="movies/:id/reviews" element={<Suspense><MoviePage /></Suspense>}/>
        </Route>
      </Routes>
    </div>
  );
};
