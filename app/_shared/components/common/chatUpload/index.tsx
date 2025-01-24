import { useState, useId, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./style.module.scss";
import { Icons } from "assets";
import classNames from "classnames";

interface ChatUploadProps {
  enableVideoUpload?: boolean;
  customUploadContainer?: string;
  enableListingEditMode?: boolean;
  isDocumentUpload?: boolean;
  files: { file: File; preview: string; isVideo: boolean }[];
  setFiles: React.Dispatch<
    React.SetStateAction<{ file: File; preview: string; isVideo: boolean }[]>
  >;
  onFilesChange?: (
    files: { file: File; preview: string; isVideo: boolean }[]
  ) => void;
}

const ChatUpload = ({
  enableVideoUpload = false,
  customUploadContainer,
  enableListingEditMode = false,
  isDocumentUpload = false,
}: ChatUploadProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isVideoList, setIsVideoList] = useState<boolean[]>([]);

  const uniqueId = useId();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (!enableListingEditMode) {
        const file = acceptedFiles[0];
        const isVideo = file.type.startsWith("video");

        setFiles([file]);
        setIsVideoList([isVideo]);
      } else {
        const videoFlags = acceptedFiles.map((file) =>
          file.type.startsWith("video")
        );

        setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
        setIsVideoList((prevIsVideoList) => [
          ...prevIsVideoList,
          ...videoFlags,
        ]);
      }
    },
    [enableListingEditMode]
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: enableVideoUpload
        ? { "image/*": [], "video/*": [] }
        : { "image/*": [] },
      multiple: enableListingEditMode,
    });

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
        <label className={styles.uploadLabel}>
          <div className={styles.uploadText}>
            {isDocumentUpload ? <Icons.AttachIcon /> : ""}
          </div>
        </label>
      </div>
    </div>
  );
};

export default ChatUpload;
