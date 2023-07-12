import { useFileMapStore } from "../lib/store";
import { getFiles } from "../lib/utils";
import { FullFileBrowser } from "chonky";
const Files = () => {
  const data = useFileMapStore((state) => state.data);

  const rootFolderId = data.rootFolderId;
  const fileMap = data.fileMap;

  if (fileMap) {
    console.log(rootFolderId, fileMap[rootFolderId]);
  }
  const files = getFiles(rootFolderId, fileMap);

  return (
    <div style={{ height: 600 }}>
      <FullFileBrowser files={files} />
    </div>
  );
};

export default Files;
