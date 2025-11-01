import { createPortal } from "react-dom";
import "./PreviewModal.css"

function FilePreviewModal({ fileUrl, onClose }) {
  if (!fileUrl) return null;

  return (
    createPortal(
         <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <iframe
          src={fileUrl}
          width="100%"
          height="500px"
          title="file-preview"
        ></iframe>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("previewModal")

    )
   
  );
}
export default FilePreviewModal