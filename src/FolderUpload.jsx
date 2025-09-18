import { useState } from "react";

export default function FolderUpload() {
  const [folders, setFolders] = useState([]);

  const handleFolderUpload = (e) => {
    const files = Array.from(e.target.files);

    // Extract unique folder names
    const folderNames = [
      ...new Set(files.map((file) => file.webkitRelativePath.split("/")[0])),
    ];

    setFolders((prev) => [...new Set([...prev, ...folderNames])]);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
      <div className="text-center">
        <h1 className="mb-4 fw-bold">My Drive</h1>

        {/* Upload button */}
        <label className="btn btn-primary mb-4">
          📂 Upload Folder
          <input
            type="file"
            webkitdirectory="true"
            directory=""
            multiple
            hidden
            onChange={handleFolderUpload}
          />
        </label>

        {/* Folder listing */}
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {folders.map((folder, index) => (
            <div
              key={index}
              className="card shadow-sm text-center p-3 d-flex flex-column justify-content-center align-items-center"
              style={{ width: "160px", height: "140px" }}
            >
              <div className="fs-1">📁</div>
              <div className="mt-2 fw-semibold">{folder}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
