import { rm } from "fs/promises";
import Directory from "../models/directoryModel.js";
import File from "../models/fileModel.js";

export const getDirectoy = async (req, res) => {
  const user = req.user;
  const id = user.rootDirId.toString();
  const folderdata = await Directory.findOne({ _id: id }).lean();
  if (!folderdata) {
    return res.status(404).json({ message: "Directory not found" });
  }
  const files = await File.find({ parentDirId: folderdata._id }).lean();
  const directories = await Directory.find({ parentId: id }).lean();
  res
    .status(200)
    .json({ ...folderdata, files: files, directories: directories });
};

export const gerDirectoryByID = async (req, res) => {
  const id = req.params.id;
  const folderdata = await Directory.findOne({ _id: id });

  if (!folderdata) {
    return res.status(404).json({ message: "Directory not found" });
  }
  const files = await File.find({ parentDirId: folderdata._id }).lean();
  const directories = await Directory.find({ parentId: id }).lean();
  res
    .status(200)
    .json({ ...folderdata, files: files, directories: directories });
};

export const CreateDirectory = async (req, res) => {
  const user = req.user;
  const parentId = user.rootDirId;
  const { dirname } = req.headers || "New Folder";
  try {
    const parentDirData = await Directory.findOne({ _id: parentId }).lean();
    if (!parentDirData) {
      return res.status(404).json({ message: "Parent Directory not found" });
    }
    const saveedFolder = await Directory.insertOne({
      name: dirname,
      parentId,
      userID: user._id,
      type:'folder'
    });

    return res.status(201).json({ message: "Directory Created" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Could not create directory" });
  }
};

export const createDirectoyByParentDirId = async (req, res) => {
  const user = req.user;
  const parentId = req.params.parentDirId;
  const { dirname } = req.headers || "New Folder";
  try {
    const parentDirData = await Directory.findOne({ _id: parentId });
    if (!parentDirData) {
      return res.status(404).json({ message: "Parent Directory not found" });
    }
    const saveedFolder = await Directory.insertOne({
      name: dirname,
      parentId,
      userID: user._id,
      type:'folder'
    });
    return res.status(201).json({ message: "Directory Created" });
  } catch (err) {
    return res.status(500).json({ message: "Could not create directory" });
  }
};

export const renameDirecoty = async (req, res) => {
  const { id } = req.params;
  const { DirName } = req.body;
  const user = req.user;
  try {
    const updateFolder = await Directory.findOneAndUpdate(
      { _id: id, userID: user._id },
      { name: DirName }
    );
    return res.status(200).json({ message: "directory name updated" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Could not update directory name" });
  }
};

export const deleteDirectory = async (req, res) => {
  const { id } = req.params;
  const user = req.user;
  const isfolder = await Directory.findOne({ _id: id, userID: user._id })
    .select("_id")
    .lean();

  if (!isfolder) {
    return res.status(404).json({ message: "Folder Not Found" });
  }

  async function getFolderContent(DirObjId) {
    let files = await File.find(
      { parentDirId: DirObjId },
      { extension: 1 }
    ).lean();
    let folders = await Directory.find(
      { parentId: DirObjId },
      { _id: 1 }
    ).lean();
    for await (const { _id, name } of folders) {
      const { files: childfiles, folders: childFolder } =
        await getFolderContent(_id);
      files = [...files, ...childfiles];
      folders = [...folders, ...childFolder];
    }
    return { files, folders };
  }

  const { files, folders } = await getFolderContent(id);

  for (const { _id, extension } of files) {
    const filepath = `${process.cwd()}/storage/${_id.toString()}${extension}`;
    await rm(filepath);
  }
  await File.deleteMany({
    _id: { $in: files.map(({ _id }) => _id) },
  });
  await Directory.deleteMany({
    _id: { $in: [...folders.map(({ _id }) => _id), id] },
  });
  return res.json({ message: "Files deleted successfully" });
};
