"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomInput from "components/common/customInput";
import Link from "next/link";
import CustomButton from "components/common/customButton";
import { Icons } from "assets";
import { useRouter } from "next13-progressbar";
import { routeConstant } from "routes/constants";
import { useDispatch } from "react-redux";
import { setAuthReducer } from "redux/reducers/authSlice";
import { useCookies } from "react-cookie";
import { useFormik } from "formik";
import { LoginVS } from "utils/validation";
// import AuthPageHeading from "components/auth/authPageHeading";

const initialValues: LoginType = {
  email: "",
  password: "",
};

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [cookie, setCookie] = useCookies();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: LoginVS,
    onSubmit: (values, actions) => {
      handleLogin(values);
    },
  });

  const { handleChange, handleSubmit, values, touched, errors, isSubmitting } =
    formik;

  const handleLogin = (values: LoginType) => {
    dispatch(
      setAuthReducer({
        isLoggedIn: true,
        user: {
          email: values.email,
        },
        token: "token",
      })
    );
    setCookie(
      "user",
      JSON.stringify({
        isLoggedIn: true,
      }),
      {
        path: "/",
        maxAge: 3600 * 24 * 30,
        sameSite: true,
      }
    );
    setCookie("token", "token", {
      path: "/",
      maxAge: 3600 * 24 * 30,
      sameSite: true,
    });
    router.push(routeConstant.home.path);
  };

  return (
    <div className={classNames(styles.auth_page_container, "h-full")}>
      <div>
        {/* <AuthPageHeading
          heading="Welcome back 👋🏼"
          desc="Please login to access exclusive features and make the most of your stay."
        /> */}
        <div className={classNames(styles.auth_content_container)}>
          <form onSubmit={handleSubmit}>
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
                value={values.email}
                error={touched.email && errors.email ? errors.email : ""}
                onChange={handleChange("email")}
              />
              <CustomInput
                required
                label="Password"
                type="password"
                name="password"
                isPassword
                Icon={Icons.LockIcon}
                placeholder="Enter password"
                customInputStyle="white-bg-input"
                customInputContainer="white-bg-input-max-height"
                value={values.password}
                error={
                  touched.password && errors.password ? errors.password : ""
                }
                onChange={handleChange("password")}
              />
            </div>
            <div className="text-right">
              <Link href={routeConstant.forgotPassword.path}>
                Forgot password?
              </Link>
            </div>
            <div className="mt-4">
              <CustomButton
                title="Login"
                containerStyle="w-full bg-blue maxHeighted_btn"
                type="submit"
                loading={isSubmitting}
                disabled={isSubmitting}
              />
            </div>
          </form>
          <div className={classNames(styles.link_container)}>
            <p>Don’t have an account?</p>
            <Link href={routeConstant.signUp.path}>Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
