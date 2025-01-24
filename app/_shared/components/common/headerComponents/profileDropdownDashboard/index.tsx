import { useState, useRef, useEffect } from "react";
import styles from "./style.module.scss";
import { Icons, Images } from "assets";
import classNames from "classnames";
import { routeConstant } from "routes/constants";
import Link from "next/link";
import { useRouter } from "next13-progressbar";
import { resetRedux } from "utils/helper";
import Image from "next/image";

interface ProfileDropdownDashboardProps {
  path?: any;
}

const ProfileDropdownDashboard = ({ path }: ProfileDropdownDashboardProps) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogout = () => {
    setIsOpen(false);
    resetRedux();
    router.push(routeConstant.login.path);
  };

  const handleOptionSelect = (path: string) => {
    setIsOpen(false);
    router.push(path);
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

  const menuItems = [
    {
      icon: <Icons.SettingsIcon />,
      title: "Profile Settings",
      path: path,
      // path: routeConstant.fellowDashboardProfileSettings.path,
    },
  ];

  return (
    <div
      className={classNames(styles.dropdown, "flex items-center gap-2")}
      ref={dropdownRef}
    >
      <button
        onClick={toggleDropdown}
        className={classNames(
          styles.dropdownToggle,
          "flex items-center gap-2 "
        )}
      >
        {/* <Image width={44} height={44} src={Images.ProfileIcon} alt="profile" /> */}
        <div className="text-left hidden xs:block">
          <h6 className={classNames(styles.userName)}>Arlene McCoy</h6>
          <p className={classNames(styles.userEmail)}>
            contact@arlenemcopy.com
          </p>
        </div>
        <Icons.ChevDownFilled />
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          <ul className={styles.menuItems}>
            <li className="h-16 block xs:hidden bg-[#0092D6]">
              <div className="text-left">
                <h5 className="text-white">Arlene McCoy</h5>
                <p className="text-gray-100 text-xs">contact@arlenemcopy.com</p>
              </div>
            </li>
            {menuItems.map((items, index) => (
              <li
                key={index}
                onClick={() => {
                  handleOptionSelect(items?.path);
                }}
              >
                <Link
                  className="flex items-center gap-3 h-full w-full"
                  href={items.path}
                >
                  {items.icon}
                  {items.title}
                </Link>
              </li>
            ))}
            <li className={classNames(styles.logout)} onClick={handleLogout}>
              <Link
                className={classNames(styles.logout, "flex items-center gap-3")}
                href=""
              >
                <Icons.Logout />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdownDashboard;
