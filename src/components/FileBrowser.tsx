import { useFileMapStore } from "../lib/store";
import { FullFileBrowser } from "chonky";
import {
  useFiles,
  useFolderChain,
  findFolderIdByName,
} from "../lib/useFileMap";

const FileBrowser = () => {
  const data = useFileMapStore((state) => state.fileMapData);

  let rootFolderId = data?.rootFolderId || "";
  const fileMap = data?.fileMap || null;

  if (fileMap && rootFolderId) {
    console.log(rootFolderId, fileMap[rootFolderId]);
    rootFolderId = findFolderIdByName(fileMap, "lectures");
  }

  const files = useFiles(rootFolderId, fileMap);
  const chain = useFolderChain(rootFolderId, fileMap);
  return (
    <div style={{ height: 600 }}>
      <FullFileBrowser files={files} folderChain={chain} />
    </div>
  );
};

export default FileBrowser;
