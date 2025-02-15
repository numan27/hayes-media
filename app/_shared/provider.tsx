"use client";
import { CookiesProvider } from "react-cookie";
import { ToastContainer } from "react-toastify";
import { Next13ProgressBar } from "next13-progressbar";
import "react-toastify/dist/ReactToastify.css";

const CustomProvider = ({ children }: any) => {
  return (
    <div>
      <Next13ProgressBar
        height="4px"
        color="#ED1C24"
        options={{ showSpinner: false }}
        showOnShallow
      />
      <CookiesProvider>{children}</CookiesProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default CustomProvider;
