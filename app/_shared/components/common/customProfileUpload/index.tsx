import { useState, useId, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./style.module.scss";
import { Icons } from "assets";
import classNames from "classnames";
import Image from "next/image";

interface customProfileUploadProps {
  onFileChange?: (file: File | null, preview: string | null) => void;
  customUploadContainer?: string;
  error?: string | null;
}

const customProfileUpload = ({
  onFileChange,
  customUploadContainer,
  error,
}: customProfileUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const uniqueId = useId();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const selectedFile = acceptedFiles[0];
      const previewUrl = URL.createObjectURL(selectedFile);

      setFile(selectedFile);
      setPreview(previewUrl);

      if (onFileChange) {
        onFileChange(selectedFile, previewUrl);
      }
    },
    [onFileChange]
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: { "image/*": [] },
      multiple: false,
    });

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className={classNames(styles.uploadContainer)}>
      <div
        className={classNames(
          styles.uploadArea,
          customUploadContainer,
          "white-bg-input-upload",
          {
            [styles.dragActive]: isDragActive,
            [styles.dragReject]: isDragReject,
          }
        )}
        {...getRootProps()}
      >
        <input id={`fileInput-${uniqueId}`} {...getInputProps()} />
        {preview ? (
          <div className={styles.previewContainer}>
            <Image
              src={preview}
              alt="Uploaded preview"
              className={styles.previewImage}
              layout="fill"
            />
            <div className={styles.uploadIcon}>
              <Icons.CameraIcon />
            </div>
          </div>
        ) : (
          <div className={styles.uploadIcon}>
            <Icons.CameraIcon />
          </div>
        )}
      </div>

      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default customProfileUpload;
