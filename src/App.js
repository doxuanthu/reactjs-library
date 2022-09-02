import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/routes";
import fakeServer from "./miragejs";

function App() {
  if (process.env.NODE_ENV === "development") {
    fakeServer();
  }
  return (
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
  );
}

export default App;
