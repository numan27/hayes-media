import { useState, useRef, useEffect } from "react";
import styles from "./style.module.scss";
import { Icons, Images } from "assets";
import classNames from "classnames";
import Image from "next/image";

const NotificationsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // const menuItems = [
  //   {
  //     img: Images.CoachProfile,
  //     title: "New Message from Your Mentor",
  //     notification: "You have a new message from [Mentor Name].",
  //     timeStamp: "Just now",
  //     isAnEvent: false,
  //   },
  //   {
  //     img: Images.CoachProfile,
  //     title: "New Message from Your Coach",
  //     notification: "You have a new message from [Coach Name].",
  //     timeStamp: "Just now",
  //     isAnEvent: false,
  //   },
  //   {
  //     img: Images.CoachProfile,
  //     title: "Upcoming Event Reminder",
  //     notification:
  //       "Don't forget! [Event Name] is happening tomorrow at 9:00 AM.",
  //     timeStamp: "Just now",
  //     isAnEvent: true,
  //   },
  //   {
  //     img: Images.CoachProfile,
  //     title: "New Job Opportunity",
  //     notification: "A new job opportunity, [Job Title], is available.",
  //     timeStamp: "Just now",
  //     isAJob: true,
  //   },
  //   {
  //     img: Images.CoachProfile,
  //     title: "Portfolio Submission Alert",
  //     notification:
  //       "Your portfolio has been successfully submitted for [Job Title].",
  //     timeStamp: "Just now",
  //     isAConfirmation: true,
  //   },
  //   {
  //     img: Images.CoachProfile,
  //     title: "Admin Assignment Confirmation",
  //     notification:
  //       "You've been assigned a new coach. Connect with [Mentor/Coach Name] for personalized guidance.",
  //     timeStamp: "Just now",
  //     isAConfirmation: true,
  //   },
  //   {
  //     img: Images.CoachProfile,
  //     title: "System Maintenance Notification",
  //     notification:
  //       "Scheduled maintenance is planned for [Date and Time]. The platform may be temporarily unavailable.",
  //     timeStamp: "Just now",
  //     isAnEvent: true,
  //   },
  // ];

  return (
    <div className={classNames(styles.dropdown)} ref={dropdownRef}>
      <div
        onClick={toggleDropdown}
        className={classNames(styles.bellIconContainer)}
      >
        <Icons.Notification />
        <div className={classNames(styles.bellIconWrapper)}>
          <span>2</span>
        </div>
      </div>
    </div>
  );
};

export default NotificationsDropdown;
