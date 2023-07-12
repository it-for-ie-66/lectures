export const getFiles = (currentFolderId: any, fileMap: any) => {
  if (!fileMap || !currentFolderId || !fileMap[currentFolderId]) return [];

  const currentFolder = fileMap[currentFolderId];
  const files = currentFolder.childrenIds
    ? currentFolder.childrenIds.map((fileId: any) => fileMap[fileId] ?? null)
    : [];
  return files;
};

export const getFolderChain = (currentFolderId: any, fileMap: any) => {
  if (!fileMap || !currentFolderId || !fileMap[currentFolderId]) return [];

  const currentFolder = fileMap[currentFolderId];
  const folderChain = [currentFolder];

  let parentId = currentFolder.parentId;
  while (parentId) {
    const parentFile = fileMap[parentId];
    if (parentFile) {
      folderChain.unshift(parentFile);
      parentId = parentFile.parentId;
    } else {
      parentId = null;
    }
  }

  return folderChain;
};
