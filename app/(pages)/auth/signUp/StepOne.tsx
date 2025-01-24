"use client";

import styles from "./style.module.scss";
import CustomInput from "components/common/customInput";
import classNames from "classnames";
import CustomPhoneInput from "components/common/customPhoneInput";
import { FormikErrors, FormikTouched } from "formik";
import CustomFileUpload from "components/common/customProfileUpload";
import { Icons } from "assets";
import CustomCheckbox from "components/common/customCheckbox";
import { useState } from "react";
// import AuthPageHeading from "components/auth/authPageHeading";

interface StepOneProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: RegisterType;
  errors: FormikErrors<RegisterType>;
  touched: FormikTouched<RegisterType>;
}

const StepOne = ({ handleChange, values, touched, errors }: StepOneProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className={classNames(styles.auth_content_container)}>
      {/* <AuthPageHeading
        heading="Welcome to CareerLabs!"
        desc="Your new password must be different from previously used passwords."
      /> */}

      <div className="mt-3">
        <label className="inputLabel">Your Profile Photo</label>
      </div>
      <CustomFileUpload />
      <div className="grid grid-cols-12 gap-x-2">
        <div className="lg:col-span-6 col-span-12">
          <CustomInput
            required
            label="First Name"
            type="text"
            name="firstName"
            customInputStyle="white-bg-input"
            customInputContainer="white-bg-input-max-height"
            placeholder="Enter your first name"
            value={values.firstName}
            error={
              touched.firstName && errors.firstName ? errors.firstName : ""
            }
            onChange={handleChange}
          />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <CustomInput
            required
            label="Last Name"
            type="text"
            name="lastName"
            customInputStyle="white-bg-input"
            customInputContainer="white-bg-input-max-height"
            placeholder="Enter your last Name"
            value={values.lastName}
            error={touched.lastName && errors.lastName ? errors.lastName : ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-span-12">
          <CustomInput
            type="email"
            customInputStyle="white-bg-input"
            customInputContainer="white-bg-input-max-height"
            label="Email"
            name="email"
            Icon={Icons.Email}
            IconDirection="left"
            placeholder="contact@arlenemcopy.com"
            required
            value={values.email}
            error={touched.email && errors.email ? errors.email : ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-span-12">
          <CustomInput
            type="date"
            isDate
            customInputStyle="white-bg-input"
            customInputContainer="white-bg-input-max-height"
            label="Date of Birth"
            name="dob"
            Icon={Icons.CalendarBlank}
            IconDirection="left"
            placeholder="YYYY-MM-DD"
            required
            value={values.dob}
            onChange={(e) =>
              handleChange({
                // @ts-ignore
                target: { name: "dob", value: e.target.value },
              } as React.ChangeEvent<HTMLInputElement>)
            }
            error={touched.dob && errors.dob ? errors.dob : ""}
          />
        </div>
        <div className="col-span-12">
          <CustomPhoneInput
            required
            label="Phone Number"
            placeholder="000-000-0000"
            name="phone"
            customInputContainer="transparentPhoneInput"
            value={values.phone}
            error={touched.phone && errors.phone ? errors.phone : ""}
            onChange={(val) =>
              handleChange({
                target: { name: "phone", value: val },
              } as React.ChangeEvent<HTMLInputElement>)
            }
          />
        </div>
        <div className="col-span-12">
          <CustomInput
            required
            label="Your Address"
            type="text"
            name="address"
            placeholder="e.g. 123 Main Street"
            customInputStyle="white-bg-input"
            customInputContainer="white-bg-input-max-height"
            Icon={Icons.LocationPin}
            IconDirection="left"
            value={values.address}
            error={touched.address && errors.address ? errors.address : ""}
            onChange={handleChange}
          />
        </div>{" "}
        <div className="col-span-12 mb-3 flex items-center">
          <CustomCheckbox
            filtersCheckbox="filtersCheckbox"
            checked={checked}
            onChange={() => {
              setChecked(!checked);
            }}
          />
          <label className={classNames(styles.label)}>
            Accept to <span>Privacy Policy</span> and{" "}
            <span>Terms & conditions</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
