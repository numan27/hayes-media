"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomSectionHeading from "components/common/customSectionHeading";
import CustomAnimatedBorder from "components/common/customAnimatedBorder";
import CustomButton from "components/common/customButton";
import CustomInput from "components/common/customInput";
import CustomTextArea from "components/common/customTextArea";

const GetQuote = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Yup Validation Schema
  const validationSchema = Yup.object({
    firstName: Yup.string().trim().required("First Name is required"),
    lastName: Yup.string().trim().required("Last Name is required"),
    phone: Yup.string()
      .matches(
        /^[+\-\s()\d]+$/,
        "Phone number can only contain numbers, spaces, and symbols: + - ( )"
      )
      .required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string().trim().required("Message is required"),
  });

  // Formik Setup
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      setError("");
      setSuccess(false);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Failed to send message.");
        }

        setSuccess(true);
        resetForm(); // This will reset the form values to their initial state
      } catch (err) {
        // @ts-ignore
        setError(err.message || "Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <section id="get-a-quote" className={classNames(styles.sectionContainer)}>
      <div className={classNames(styles.customContainer)}>
        <CustomAnimatedBorder
          gradientColors="linear-gradient(135deg, #EC1E24 0%, #141212 50%, #902880 100%)"
          animationSpeed="5s"
          borderRadius="8px"
        >
          <div className={classNames(styles.contentWrapper)}>
            <CustomSectionHeading
              centered
              heading="Get A Quote"
              description=""
            />

            <div className="md:w-9/12 xs:w-10/12 w-full mx-auto">
              <form onSubmit={formik.handleSubmit}>
                <div
                  className={classNames(
                    styles.gridContainer,
                    "grid grid-cols-12 gap-4"
                  )}
                >
                  <div className="xs:col-span-6 col-span-12">
                    <CustomInput
                      required
                      label="First Name"
                      name="firstName"
                      placeholder="Enter First Name"
                      customInputContainer={classNames(styles.quoteInput)}
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.firstName && formik.errors.firstName
                      }
                    />
                  </div>
                  <div className="xs:col-span-6 col-span-12">
                    <CustomInput
                      required
                      label="Last Name"
                      name="lastName"
                      placeholder="Enter Last Name"
                      customInputContainer={classNames(styles.quoteInput)}
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.lastName && formik.errors.lastName}
                    />
                  </div>
                  <div className="col-span-12">
                    <CustomInput
                      required
                      label="Phone"
                      name="phone"
                      type="text"
                      placeholder="Enter Phone Number"
                      customInputContainer={classNames(styles.quoteInput)}
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.phone && formik.errors.phone}
                    />
                  </div>
                  <div className="col-span-12">
                    <CustomInput
                      required
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                      customInputContainer={classNames(styles.quoteInput)}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.email && formik.errors.email}
                    />
                  </div>
                  <div className="col-span-12 flex flex-col items-start gap-2.5">
                    <label htmlFor="message">
                      Message <span>*</span>
                    </label>
                    <>
                      <textarea
                        id="message"
                        name="message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        rows={6}
                        placeholder="Write Message"
                        className={classNames(styles.quoteInput, "w-full p-3")}
                      />
                      {formik.touched.message && formik.errors.message && (
                        <div
                          className={classNames(
                            styles.error,
                            "text-red-500 text-sm"
                          )}
                        >
                          {formik.errors.message}
                        </div>
                      )}
                    </>
                  </div>
                </div>

                {error && <p className="text-red-500 text-center">{error}</p>}
                {success && (
                  <p className="text-green-500 text-center mt-2">
                    Message sent successfully!
                  </p>
                )}

                <div
                  className={classNames(
                    styles.buttonContainer,
                    "flex justify-center"
                  )}
                >
                  <CustomButton
                    title={loading ? "Sending..." : "Get A Quote"}
                    disabled={loading}
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </CustomAnimatedBorder>
      </div>
    </section>
  );
};

export default GetQuote;
