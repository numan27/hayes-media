"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import CustomButton from "components/common/customButton";
import Link from "next/link";
import { routeConstant } from "routes/constants";
import { toastMessage } from "components/common/toast";
import { FormikErrors, FormikTouched, useFormik } from "formik";
import { RegisterVS, ResetPasswordVS } from "utils/validation";

const SignUp = () => {
  const [step, setStep] = useState(1);

  const initialValuesStepOne: RegisterType = {
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    address: "",
    phone: "",
  };

  const initialValuesStepTwo: CreatePasswordType = {
    password: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    initialValues: step === 1 ? initialValuesStepOne : initialValuesStepTwo,
    validationSchema: step === 1 ? RegisterVS : ResetPasswordVS,
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      if (step === 1) {
        nextStep();
      } else {
        if (isStepTwoValues(values)) {
          completeRegistration(values);
          resetForm();
        }
      }
    },
  });

  const isStepTwoValues = (
    values: typeof formik.values
  ): values is CreatePasswordType => {
    return (values as CreatePasswordType).password !== undefined;
  };

  const { handleChange, handleSubmit, values, touched, errors, resetForm } =
    formik;

  const nextStep = () => {
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        setStep(2);
      } else {
        toastMessage(
          "error",
          "Please fill out all required fields before proceeding."
        );
      }
    });
  };

  const prevStep = () => setStep(1);

  const completeRegistration = (values: CreatePasswordType) => {
    console.log("Final Values:", values);
    toastMessage("success", "Account Created Successfully");
    resetForm();
  };

  const touchedStepOne = touched as FormikTouched<RegisterType>;
  const touchedStepTwo = touched as FormikTouched<CreatePasswordType>;

  const errorsStepOne = errors as FormikErrors<RegisterType>;
  const errorsStepTwo = errors as FormikErrors<CreatePasswordType>;

  return (
    <div className={classNames(styles.auth_page_container)}>
      <div>
        {step === 1 && (
          <StepOne
            handleChange={handleChange}
            values={values as RegisterType}
            touched={touchedStepOne}
            errors={errorsStepOne}
          />
        )}
        {step === 2 && (
          <StepTwo
            handleChange={handleChange}
            values={values as CreatePasswordType}
            touched={touchedStepTwo}
            errors={errorsStepTwo}
            handleSubmit={handleSubmit}
          />
        )}
        <div className="flex items-center gap-2">
          {step === 2 && (
            <CustomButton
              onClick={prevStep}
              title="Back"
              containerStyle="w-full maxHeighted_btn bg-blue"
            />
          )}
          <CustomButton
            // @ts-ignore
            onClick={handleSubmit}
            title={step === 1 ? "Continue" : "Signup"}
            containerStyle="w-full maxHeighted_btn bg-blue"
          />
        </div>

        {step === 1 && (
          <div className={classNames(styles.link_container)}>
            <p>Already have an account?</p>
            <Link href={routeConstant.login.path}>Login</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
