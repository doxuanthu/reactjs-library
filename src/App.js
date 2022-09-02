import Calculator from "./components/lab-03/exercise-01/Calculator";
import Ex2 from "./components/lab-03/exercise-02";
import Ex3 from "./components/lab-03/exercise-03";
import Exercise1 from "./components/lab-04/exercise-01";
import Exercise2 from "./components/lab-04/exercise-02";
import Tiles from "./components/lab-04/exercise-03";

function App() {
  return (
    <div className="App">
      {/* Lab 03 */}
      <Calculator />
      <Ex2 />
      <Ex3 />
      {/* ----------- */}

      {/* Lab 04 */}
      <div className="separator"></div>
      <Exercise1 />
      <Exercise2 />
      <Tiles />
    </div>
  );
}

export default App;
