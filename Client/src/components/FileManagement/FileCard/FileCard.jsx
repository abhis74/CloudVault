import React, { useState } from "react";
import FolderIcon from "../../../assets/icons/folder.svg?react";
import Image from "../../../assets/icons/image.svg?react";
import Paper from "../../../assets/icons/Paper.svg?react";
import Trash from "../../../assets/icons/trash.svg?react";
import VideoIcon from "../../../assets/icons/video.svg?react";
import DownloadIcon from "../../../assets/icons/download.svg?react";
import ShareIcon from "../../../assets/icons/share.svg?react";
import StarIcon from "../../../assets/icons/star.svg?react";
import MoreIcon from "../../../assets/icons/more.svg?react";
import "./FileCard.css";
import { Link } from "react-router-dom";
import { extension } from "mime-types";
import FilePreviewModal from "../../UI/PreviewModal/PreviewModal";
// import { deleteDirectory } from '../../../store/slices/directoriesSlice';
import { useDispatch } from "react-redux";
import { useDeleteDirectoryMutation, useDeleteFileMutation, useFetchfileQuery } from "../../../store/slices/directoriesSlice";
import SharePopup from "../../UI/SharePopup/SharePopup";

const FileCard = ({ file }) => {

  const dispatch = useDispatch();
  

  const [deleteDirectory] = useDeleteDirectoryMutation();
  const [deleteFile] = useDeleteFileMutation();
  const BASE_URL = "http://localhost:3000/";
  const [previewFile, setPreviewFile] = useState(null);
  const [popup,setPopup] = useState(false)
  const getFileIcon = () => {
    switch (file.extension) {
      case "folder":
        return <FolderIcon className="file-card_main-icon" />;
      case "video":
        return <VideoIcon className="file-card_main-icon" />;
      case ".png":
        return <Image className="file-card__main-icon" />;
      case ".svg":
        return <Image className="file-card__main-icon" />;
      case ".jpeg":
        return <Image className="file-card__main-icon" />;

      case ".pdf":
        return <Paper className="file-card__main-icon" />;

      default:
        return <FolderIcon className="file-card_main-icon" />;
    }
  };

  const getFileIconColor = () => {
    switch (file.type || file.extension) {
      case "folder":
        return "#3b82f6";
      case "video":
        return "#ef4444";
      default:
        return "#3b82f6";
    }
  };
  const deleteFileAndFolder = async (id, ext) => {
    if (ext == undefined) {
     await deleteDirectory(id)
    } else {
      await deleteFile(id)
    }
  };
 
  const handlePreview = async () => {
    if (file.extension != undefined) {
      console.log(file._id)
        setPreviewFile(`${BASE_URL}files/${file._id}`); // can be image, pdf, doc, etc.
    }
  };
  const  sharePopupHandler = ()=>{
    setPopup(true)
  }
  return (
    <div className="file-card">
      <div className="file-card_header">
        <div className="file-card_title-section">
          <div
            className="file-card_small-icon"
            style={{ color: getFileIconColor() }}
          >
            {file?.type === "folder" ? <FolderIcon /> : <VideoIcon />}
          </div>
          <span className="file-card_title">{file?.name}</span>
        </div>

        <div className="file-card_actions">
          {file.extension && (
            <button className="file-card_action" title="Download">
              <a href={`${BASE_URL}files/${file._id}?action=download`}>
                <DownloadIcon />
              </a>
            </button>
          )}
          <button className="file-card__action" title="Share"  >
            <ShareIcon onClick={sharePopupHandler}/>
          </button>


        { popup && <SharePopup link={`${BASE_URL}files/${file._id}`} closePopup={setPopup} />}

          <button className="file-card__action" title="Star">
            <StarIcon />
          </button>
          {/* <button className="file-card_action" title="More options">
                        <MoreIcon />
                    </button> */}
          <button
            className="file-card__action"
            title="Trash"
            onClick={() => {
              deleteFileAndFolder(file._id, file.extension);
            }}
          >
            <Trash />
          </button>
        </div>
      </div>

      {file.extension && <div className="file-card_content" onClick={handlePreview}>
        {/* <Link
          to={file.extension ? `/files/${file._id}` : `/directory/${file._id}`}
        > */}
        <div
          className="file-card_main-icon-container"
          style={{ color: getFileIconColor() }}
        >
          {getFileIcon()}
        </div>
        {/* </Link> */}
      </div>}
      {!file.extension && <div className="file-card__content" onClick={handlePreview}>
        <Link
          to={`/vault/${file._id}`}
        >
          <div
            className="file-card__main-icon-container"
            style={{ color: getFileIconColor() }}
          >
            {getFileIcon()}
          </div>
        </Link>
      </div>}

      <div className="file-card_footer">
        <span className="file-card_last-opened">
          You opened {file?.lastOpened}
        </span>
      </div>


      <div>

        <FilePreviewModal fileUrl={previewFile} onClose={() => setPreviewFile(null)} fileData={file} />
      </div>
    </div>
  );
};

export default FileCard;
