import React, { useState } from "react";
import FolderIcon from "../../../assets/icons/folder.svg?react";
import Image from "../../../assets/icons/image.svg?react";
import Paper from "../../../assets/icons/Paper.svg?react";
import Trash from "../../../assets/icons/trashcan.svg?react";
import VideoIcon from "../../../assets/icons/video.svg?react";
import DownloadIcon from "../../../assets/icons/download.svg?react";
import ShareIcon from "../../../assets/icons/share.svg?react";
import StarIcon from "../../../assets/icons/star.svg?react";
import MoreIcon from "../../../assets/icons/more.svg?react";
import "./FileCard.css";
import { Link } from "react-router-dom";
import { extension } from "mime-types";
import FilePreviewModal from "../../UI/PreviewModal/PreviewModal";

const FileCard = ({ file }) => {
  const BASE_URL = "http://localhost:3000/";
  console.log(file, "file");
  const [previewFile, setPreviewFile] = useState(null);
  const getFileIcon = () => {
    switch (file.extension) {
      case "folder":
        return <FolderIcon className="file-card__main-icon" />;
      case "video":
        return <VideoIcon className="file-card__main-icon" />;
      case ".png":
        return <Image className="file-card__main-icon" />;

      case ".pdf":
        return <Paper className="file-card__main-icon" />;

      default:
        return <FolderIcon className="file-card__main-icon" />;
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
      const response = await fetch(`${BASE_URL}directory/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
    } else {
      const response = await fetch(`${BASE_URL}files/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      const data = await response.text();
    }
  };

  const handlePreview = () => {
    if (file.extension != undefined) {

        setPreviewFile(`${BASE_URL}files/${file._id}`); // can be image, pdf, doc, etc.
    }
  };
  return (
    <div className="file-card">
      <div className="file-card__header">
        <div className="file-card__title-section">
          <div
            className="file-card__small-icon"
            style={{ color: getFileIconColor() }}
          >
            {file?.type === "folder" ? <FolderIcon /> : <VideoIcon />}
          </div>
          <span className="file-card__title">{file?.name}</span>
        </div>

        <div className="file-card__actions">
          {file.extension && (
            <button className="file-card__action" title="Download">
              <a href={`${BASE_URL}files/${file._id}?action=download`}>
                <DownloadIcon />
              </a>
            </button>
          )}
          <button className="file-card__action" title="Share">
            <ShareIcon />
          </button>
          <button className="file-card__action" title="Star">
            <StarIcon />
          </button>
          {/* <button className="file-card__action" title="More options">
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

     {  file.extension &&<div className="file-card__content" onClick={handlePreview}>
        {/* <Link
          to={file.extension ? `/files/${file._id}` : `/directory/${file._id}`}
        > */}
          <div
            className="file-card__main-icon-container"
            style={{ color: getFileIconColor() }}
          >
            {getFileIcon()}
          </div>
        {/* </Link> */}
      </div>}
      { !file.extension && <div className="file-card__content" onClick={handlePreview}>
        <Link
          to={file.extension ? `/files/${file._id}` : `/directory/${file._id}`}
        >
          <div
            className="file-card__main-icon-container"
            style={{ color: getFileIconColor() }}
          >
            {getFileIcon()}
          </div>
        </Link>
      </div>}

      <div className="file-card__footer">
        <span className="file-card__last-opened">
          You opened {file?.lastOpened}
        </span>
      </div>


       <div>

      <FilePreviewModal fileUrl={previewFile} onClose={() => setPreviewFile(null)} />
    </div>
    </div>
  );
};

export default FileCard;
