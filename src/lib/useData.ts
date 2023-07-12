import { useEffect } from "react";
import { useFileMapStore } from "./store";

async function getData() {
  const res = await fetch("/filemap.json");
  const data = await res.json();
  return data;
}
function useData() {
  const [setData] = useFileMapStore((state) => [state.setData]);

  useEffect(() => {
    console.log("useData");
    getData().then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);
}

export default useData;
