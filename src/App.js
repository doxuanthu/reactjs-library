import Exercise1 from "./components/lab-01/exercise-1";
import Exercise2 from "./components/lab-01/exercise-2";
import Exercise3 from "./components/lab-01/exercise-3";

import Ex1 from "./components/lab-02/exercise-1";
import Game from "./components/lab-02/exercise-2";
import Ex3 from "./components/lab-02/exercise-3";

function App() {
  return (
    <div className="App">
      {/* ------lab-1------ */}
      <Exercise1 />
      <Exercise2 />
      <Exercise3 />
      {/* ----------------- */}

      <Ex1 />
      <Game />
      <Ex3 />
    </div>
  );
}

export default App;
