"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomInput from "components/common/customInput";
import Link from "next/link";
import CustomButton from "components/common/customButton";
import { Icons } from "assets";
import { routeConstant } from "routes/constants";
import { useFormik } from "formik";
import { toastMessage } from "components/common/toast";
// import AuthPageHeading from "components/auth/authPageHeading";
import { ResetPasswordVS } from "utils/validation";

const ResetPassword = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: ResetPasswordVS,
    onSubmit: (values) => {
      toastMessage("success", "Password has been successfully updated!");
    },
  });

  return (
    <div className={classNames(styles.auth_page_container)}>
      <div>
        {/* <AuthPageHeading
          heading="Set New Password"
          desc="Your new password must be different from previously used passwords."
        /> */}
        <div className={classNames(styles.auth_content_container)}>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <CustomInput
                required
                label="Create Password"
                type="password"
                isPassword
                Icon={Icons.LockIcon}
                placeholder="Enter password"
                name="password"
                customInputStyle="white-bg-input"
                customInputContainer="white-bg-input-max-height"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : ""
                }
              />
            </div>
            <div>
              <CustomInput
                required
                label="Confirm Password"
                type="password"
                isPassword
                Icon={Icons.LockIcon}
                placeholder="Enter password"
                name="confirmPassword"
                customInputStyle="white-bg-input"
                customInputContainer="white-bg-input-max-height"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? formik.errors.confirmPassword
                    : ""
                }
              />
            </div>
            <div className="mt-4">
              <CustomButton
                title="Set New Password"
                containerStyle="w-full bg-blue maxHeighted_btn"
                type="submit"
              />
            </div>
          </form>
          <div className={classNames(styles.backLink)}>
            <Link
              className="flex items-center gap-1"
              href={routeConstant.login.path}
            >
              <span>
                <Icons.ArrowLeft />
              </span>
              Back To Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
