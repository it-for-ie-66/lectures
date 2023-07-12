import { useFileMapStore } from "../lib/store";

const Files = () => {
  const fileMap = useFileMapStore((state) => state.data);
  return <div>{JSON.stringify(fileMap)}</div>;
};

export default Files;
