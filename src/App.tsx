import FileBrowser from "./components/FileBrowser";
import useData from "./lib/useData";

function App() {
  useData();
  return (
    <div>
      <FileBrowser />
    </div>
  );
}

export default App;
