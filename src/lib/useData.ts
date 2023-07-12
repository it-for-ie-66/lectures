import { useEffect } from "react";
import { useFileMapStore } from "./store";
import { type FileMapData } from "./types";
async function getData() {
  const res = await fetch("/filemap.json");
  const data = (await res.json()) as FileMapData;
  return data;
}
function useData() {
  const [setFileMapData] = useFileMapStore((state) => [state.setFileMapData]);
  useEffect(() => {
    getData().then((data) => {
      setFileMapData(data);
    });
  }, []);
}

export default useData;
