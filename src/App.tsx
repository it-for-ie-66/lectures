import FileBrowser from "./components/FileBrowser";
import useData from "./lib/useData";

function App() {
  useData();
  return (
    <div className="container mx-auto">
      <div className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        IT for IE 66
      </div>
      <FileBrowser />
    </div>
  );
}

export default App;
