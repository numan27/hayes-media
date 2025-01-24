import { useState, useId, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import "@react-pdf-viewer/core/lib/styles/index.css";
import styles from "./style.module.scss";
import { Icons } from "assets";
import classNames from "classnames";

interface CustomFileUploadProps {
  onFileChange?: (file: File | null, preview: string | null) => void;
  error?: string | null;
  onRemove?: () => void;
}

const CustomFileUpload: React.FC<CustomFileUploadProps> = ({
  onFileChange,
  error,
  onRemove,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const uniqueId = useId();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const selectedFile = acceptedFiles[0];
      if (selectedFile) {
        const previewUrl = URL.createObjectURL(selectedFile);

        setFile(selectedFile);
        setPreview(previewUrl);

        if (onFileChange) {
          onFileChange(selectedFile, previewUrl);
        }
      }
    },
    [onFileChange]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
  } = useDropzone({
    onDrop,
    accept: { "application/pdf": [] },
    multiple: false,
  });

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleRemove = () => {
    setFile(null);
    setPreview(null);
    if (onRemove) onRemove();
  };

  return (
    <div className={styles.uploadContainer}>
      {!preview && (
        <div
          className={`${styles.uploadArea} ${
            isDragActive
              ? styles.dragActive
              : isDragReject
              ? styles.dragReject
              : ""
          }`}
          {...getRootProps()}
        >
          <input id={`fileInput-${uniqueId}`} {...getInputProps()} />
          <div className={styles.uploadPlaceholder}>
            <p>Drag & drop a PDF file, or click to upload</p>
          </div>
        </div>
      )}

      {preview && (
        <div className={classNames(styles.previewContainer, "mt-4")}>
          <iframe src={preview} width="100%" height="600px" />
          <button
            className={classNames(styles.removeButton)}
            onClick={handleRemove}
          >
            <Icons.Cross />
          </button>
        </div>
      )}

      {fileRejections.length > 0 && (
        <p className={styles.errorText}>Only PDF files are supported.</p>
      )}
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};

export default CustomFileUpload;
