"use client";
import { Icons, Images } from "assets";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { headerLinks } from "utils/constants";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { routeConstant } from "routes/constants";
import Image from "next/image";

interface SideCanvasProps {
  setIsOpen: (val: boolean) => void;
  isOpen: boolean;
}

const SideCanvas = ({ isOpen, setIsOpen }: SideCanvasProps) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  function handleClick(e: any) {
    const elem: any = document.getElementById("sideCanvas");
    if (!elem.contains(e.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    let elem: any = document.getElementById("backDropContainer");
    elem.addEventListener("click", (event: any) => {
      handleClick(event);
    });
  }, [pathname]);

  return (
    <div
      className={classNames(styles.backDropContainer, "lg:hidden")}
      style={isOpen ? { visibility: "visible" } : { visibility: "hidden" }}
      id="backDropContainer"
    >
      <div
        className={classNames(
          styles.mainContainer,
          isOpen ? styles.shown : styles.hidden
        )}
        id="sideCanvas"
      >
        {/* Logo and Close Button */}
        <div
          className={classNames(
            "flex justify-between items-center px-4 gap-4",
            styles.logoContainer
          )}
        >
          <Link
            href={routeConstant.home.path}
            className={classNames(styles.site__logo)}
          >
            <Image
              data-aos="flip-right"
              src={Images.Logo}
              alt="Hayes Media"
              width={56}
              height={56}
            />
          </Link>
          <div
            className={classNames(styles.crossContainer)}
            onClick={() => setIsOpen(false)}
          >
            <Icons.Cross />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-4 px-4 mt-7">
          {headerLinks?.map((link, index) => (
            <div key={index}>
              {link.children ? (
                // Dropdown for Links with Children
                <div className={classNames(styles.nestedToggle)}>
                  <button
                    className={classNames(
                      styles.dropdownToggle,
                      pathname === link.path && styles.activeLink,
                      "flex items-center justify-between w-full"
                    )}
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                  >
                    {link.title}
                    <Icons.ChevDownFilled
                      className={openDropdown === index ? styles.rotated : ""}
                    />
                  </button>

                  {openDropdown === index && (
                    <div
                      className={classNames(
                        styles.dropdownMenu,
                        "flex flex-col items-start gap-1.5 mt-2 pl-3"
                      )}
                    >
                      {link.children.map((child, childIndex) => (
                        <Link
                          href={child.path}
                          key={childIndex}
                          className={classNames(
                            styles.navLink,
                            pathname === child.path && styles.activeLink
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                // Regular Links
                <Link
                  href={link.path}
                  className={classNames(
                    styles.navLink,
                    pathname === link.path && styles.activeLink
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideCanvas;
