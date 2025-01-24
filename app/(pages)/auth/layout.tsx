"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import Image from "next/image";
import { Images } from "assets";
// import AuthSlider from "components/auth/authSlider";
import { routeConstant } from "routes/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: any;
}

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  return (
    <>
      <div className={classNames(styles.auth_layout_wrapper)}>
        <div className={classNames(styles.customContainer)}>
          <main
            className={classNames(
              styles.auth_layout_main,
              "md:grid grid-cols-12 lg:gap-16 gap-8"
            )}
          >
            <div className="lg:col-span-5 md:col-span-6 col-span-12 h-full flex flex-col">
              {pathname !== routeConstant.signUp.path && (
                <div className={classNames(styles.logo, "")}>
                  <Link href={routeConstant.home.path}>
                    <Image
                      width={120}
                      height={85}
                      src={Images.Logo}
                      alt="logo"
                    />
                  </Link>
                </div>
              )}
              <div className="flex items-center h-full">{children}</div>
            </div>
            <div
              className={classNames(
                styles.auth_layout_content,
                "hidden md:block lg:col-span-7 col-span-6"
              )}
            >
              {/* <AuthSlider /> */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
