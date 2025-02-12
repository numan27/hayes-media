import CustomModal from "components/common/customModal";
import styles from "./style.module.scss";
import classNames from "classnames";
import BannerVideo from "components/home/heroBanner/banner-video";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string | any;
  videoSrc?: string | any;
}

const VideoModal = ({ isOpen, onClose, title, videoSrc }: ModalProps) => {
  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title=""
      showBackButton={false}
      customContentContainer="noSidePadding"
      showModalFooter={false}
    >
      <div className={classNames(styles.modalContentContainer)}>
        <BannerVideo isHaveAudioControl videoSrc={videoSrc} />
      </div>
    </CustomModal>
  );
};

export default VideoModal;
