import { createPortal } from "react-dom";
import "./PreviewModal.css"
 function  FilePreviewModal ({ fileUrl, onClose,fileData }) {
  if (!fileUrl) return null;

  return (
    createPortal(
   <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>

        {fileUrl && (
  fileData.extension.match(/(.jpg|.jpeg|png|gif|svg|webp)$/i) ? (
    <img
      src={fileUrl}
      alt="preview"
      crossOrigin="use-credentials"
       referrerPolicy="no-referrer"
      
      style={{ width: "100%", height: "auto", objectFit: "contain" }}
    />
  ) : (
    <iframe
      src={fileUrl}
      title="file-preview"
     crossOrigin="anonymous"
       referrerPolicy="no-referrer"
       credentials='include'
      style={{ width: "100%", height: "auto", objectFit: "contain" }}
    />
  )
)}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("previewModal")

    )
   
  );
}
export default FilePreviewModal