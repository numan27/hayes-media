"use client";

import { useState } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomSectionHeading from "components/common/customSectionHeading";
import CustomAnimatedBorder from "components/common/customAnimatedBorder";
import CustomButton from "components/common/customButton";
import CustomInput from "components/common/customInput";
import CustomTextArea from "components/common/customTextArea";

const GetQuote = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message.");

      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      }); // Reset form
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
              <form onSubmit={handleSubmit}>
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
                      value={formData.firstName}
                      // @ts-ignore
                      onChange={handleChange}
                    />
                  </div>
                  <div className="xs:col-span-6 col-span-12">
                    <CustomInput
                      required
                      label="Last Name"
                      name="lastName"
                      placeholder="Enter Last Name"
                      customInputContainer={classNames(styles.quoteInput)}
                      value={formData.lastName}
                      // @ts-ignore
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-12">
                    <CustomInput
                      required
                      label="Phone"
                      name="phone"
                      type="number"
                      placeholder="Enter Phone Number"
                      customInputContainer={classNames(styles.quoteInput)}
                      value={formData.phone}
                      // @ts-ignore
                      onChange={handleChange}
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
                      value={formData.email}
                      // @ts-ignore
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-12">
                    <CustomTextArea
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Write Message"
                      name="message"
                      customInputContainer={classNames(styles.quoteInput)}
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-red-500 text-center mt-2">{error}</p>
                )}
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
