"use client";
import { Icons, Images } from "assets";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { routeConstant } from "routes/constants";
import { headerLinks } from "utils/constants";
import { MyContext } from "utils/myContext";
import SideCanvas from "../sideCanvas";
import DynamicActions from "./dynamicActions";
import styles from "./style.module.scss";

interface HeaderProps {
  userCookie: any;
}

const Header = ({ userCookie }: HeaderProps) => {
  const pathname = usePathname();
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);

  return (
    <>
      <SideCanvas isOpen={openSideBar} setIsOpen={setOpenSideBar} />
      <header className={classNames(styles.header)}>
        <nav className={classNames(styles.customContainer, "w-full")}>
          <div
            className={classNames(" flex justify-between items-center gap-4")}
          >
            <div
              className={classNames(
                "flex items-center md:justify-start justify-between gap-3 md:w-fit w-full"
              )}
            >
              <Icons.Hamburger
                className={classNames(styles.hamIcon, "flex md:hidden")}
                onClick={() => {
                  setOpenSideBar(true);
                }}
              />
              <Link
                href={routeConstant.home.path}
                className={classNames(styles.site__logo)}
              >
                <Image
                  src={Images.Logo}
                  alt="Career Labs"
                  width={56}
                  height={56}
                />
              </Link>
            </div>
            <div>
              <ul
                className={classNames(
                  styles.main__menu,
                  "md:flex items-center gap-5 hidden ms-2"
                )}
              >
                {headerLinks.map((link, index) => (
                  <li key={index} className={classNames("relative group")}>
                    <Link
                      href={link.path || ""}
                      className={classNames(
                        styles.navLink,
                        (pathname === link.path ||
                          link.children?.some((child) =>
                            pathname.startsWith(child.path)
                          )) &&
                          styles.activeLink,
                        "flex items-center"
                      )}
                    >
                      {link.title}
                    </Link>

                    {/* <Link
                      href={link.path || ""}
                      className={classNames(
                        styles.navLink,
                        pathname === link.path && styles.activeLink,
                        "flex items-center "
                      )}
                    >
                      {link.title}
                      {link.children && <Icons.ChevDown />}
                    </Link> */}

                    {link.children && (
                      <ul
                        className={classNames(
                          styles.subMenu,
                          "absolute left-0 hidden group-hover:block"
                        )}
                      >
                        {link.children.map((child, childIndex) => (
                          <li
                            className={classNames(styles.subMenuItem)}
                            key={childIndex}
                          >
                            <Link
                              href={child.path}
                              className={classNames(
                                styles.subMenuLink,
                                pathname === child.path &&
                                  styles.activeSubMenuLink
                              )}
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={classNames(
                styles.header__right,
                "md:flex items-center gap-4 hidden"
              )}
            >
              <MyContext.Provider value={{ user: userCookie }}>
                <DynamicActions />
              </MyContext.Provider>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
