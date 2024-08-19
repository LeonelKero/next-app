"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryUploadResult {
  public_id: string;
}

function UploadFile() {
  const [uploadedAsset, setUploadedAsset] = useState<CloudinaryUploadResult>();

  return (
    <div>
      {uploadedAsset?.public_id && (
        <CldImage
          src={uploadedAsset?.public_id}
          width={300}
          height={200}
          alt="Uploaded image"
        />
      )}
      <CldUploadWidget
        uploadPreset="dhlkcxzu"
        onSuccess={(result, options) => {
          setUploadedAsset(result?.info as CloudinaryUploadResult);
        }}
      >
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
