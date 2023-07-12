import Files from "./components/Files";
import useData from "./lib/useData";

function App() {
  useData();

  return (
    <div>
      <Files />
    </div>
  );
}

export default App;
