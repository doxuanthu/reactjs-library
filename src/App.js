import { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { publicRoutes } from "./routes/routes";
import fakeServer from "./miragejs";
import { getFilms } from "./pages/JazzMovies/moviesSlice";

function App() {
  if (process.env.NODE_ENV === "development") {
    fakeServer();
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          let Layout = Fragment;
          if (route.layout) {
            Layout = route.layout;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <route.component />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
