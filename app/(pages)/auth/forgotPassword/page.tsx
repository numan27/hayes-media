"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomInput from "components/common/customInput";
import Link from "next/link";
import CustomButton from "components/common/customButton";
import { Icons } from "assets";
import { useRouter } from "next13-progressbar";
import { routeConstant } from "routes/constants";
import { useFormik } from "formik";
import * as Yup from "yup";
// import AuthPageHeading from "components/auth/authPageHeading";

const ForgotPassword = () => {
  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      router.push(routeConstant.resetPassword.path);
    },
  });

  return (
    <div className={classNames(styles.auth_page_container)}>
      <div>
        {/* <AuthPageHeading
          heading="Forgot password?"
          desc="Enter the email address associated with your account and we'll send you 4-digit OTP code to reset your password."
        /> */}
        <div className={classNames(styles.auth_content_container)}>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <CustomInput
                required
                label="Email Address"
                type="email"
                name="email"
                Icon={Icons.Email}
                placeholder="e.g. abc@example.com"
                customInputStyle="white-bg-input"
                customInputContainer="white-bg-input-max-height"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : ""
                }
              />
            </div>
            <div className="mt-4">
              <CustomButton
                title="Send Code"
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

export default ForgotPassword;
