import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { validUser } from "./store/selector";

import {
  Home,
  TodoList,
  Login,
  Register,
  User,
  Calculator,
} from "./components/pages";

function App() {
  const user = useSelector(validUser);
  console.log({ user });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/user" replace /> : <Login />}
        />
        <Route path="/user" element={<User />} />
        <Route path="/register" element={<Register />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>
  );
}

export default App;
