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
  // const [dropdownOpenState, setDropdownOpenState] = useState<number | null>(
  //   null
  // );

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
    // @ts-ignore
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
            <Image src={Images.Logo} alt="Hayes Media" width={56} height={56} />
          </Link>
          <div
            className={classNames(styles.crossContainer)}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Icons.Cross />
          </div>
        </div>

        <div className="flex flex-col gap-4 px-4 mt-7">
          {headerLinks?.map((link, inx) => (
            <Link
              href={link.path ? link.path : ""}
              key={inx}
              className={classNames(
                styles.navLink,
                pathname === link.path && styles.activeLink
              )}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideCanvas;
