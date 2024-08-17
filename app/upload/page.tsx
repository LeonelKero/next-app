"use client";
import { CldUploadWidget } from "next-cloudinary";

function UploadFile() {
  return (
    <div>
      <CldUploadWidget uploadPreset="dhlkcxzu">
        {({ open }) => (
          <button className="btn btn-secondary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
}

export default UploadFile;
