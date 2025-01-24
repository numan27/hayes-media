"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomFileUpload from "components/common/customProfileUpload";
import CustomInput from "components/common/customInput";
import { Icons } from "assets";
import CustomPhoneInput from "components/common/customPhoneInput";
import CustomButton from "components/common/customButton";
import { useState } from "react";

interface ProfileSettingsProps {
  isHaveDob?: boolean;
}

function ProfileSettings({ isHaveDob }: ProfileSettingsProps) {
  const [educations, setEducations] = useState([
    { institute: "", degree: "", completionDate: "" },
  ]);

  const [experience, setExperience] = useState([
    { institute: "", designation: "", startDate: "", endData: "" },
  ]);

  const addEducation = () => {
    setEducations([
      ...educations,
      { institute: "", degree: "", completionDate: "" },
    ]);
  };
  const addExperience = () => {
    setExperience([
      ...experience,
      { institute: "", designation: "", startDate: "", endData: "" },
    ]);
  };

  return (
    <div className={classNames(styles.settingsWrapper)}>
      <div className={classNames(styles.settingsContainer)}>
        <h4>Settings</h4>

        {/* Basic */}
        <section className={classNames(styles.sectionContainer)}>
          <h6>Account Information</h6>
          <div className="mt-4 mb-3">
            <label>Your Profile Photo</label>
          </div>
          <CustomFileUpload />
          <form
            className={classNames(
              styles.profileForm,
              "grid grid-cols-12 gap-3"
            )}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="xs:col-span-6 col-span-12">
              <CustomInput
                customInputStyle="white-bg-input"
                customInputContainer="white-bg-input-max-height"
                label="First Name"
                placeholder="Arlene"
                required
              />
            </div>
            <div className="xs:col-span-6 col-span-12">
              <CustomInput
                customInputStyle="white-bg-input"
                customInputContainer="white-bg-input-max-height"
                label="Last Name"
                placeholder="McCoy"
                required
              />
            </div>
            <div className="xs:col-span-6 col-span-12">
              <CustomInput
                type="email"
                customInputStyle="white-bg-input"
                customInputContainer="white-bg-input-max-height"
                label="Email"
                Icon={Icons.Email}
                IconDirection="left"
                placeholder="contact@arlenemccopy.com"
                required
              />
            </div>
            <div className="xs:col-span-6 col-span-12">
              <CustomPhoneInput
                required
                name="phone"
                label="Phone Number"
                customInputContainer="transparentPhoneInput"
              />
            </div>
            {isHaveDob && (
              <div className="col-span-6">
                <CustomInput
                  customInputStyle="white-bg-input"
                  customInputContainer="white-bg-input-max-height"
                  Icon={Icons.Calendar}
                  label="Date of Birth"
                  IconDirection="left"
                  type="date"
                  isDate
                  placeholder="dd/mm/yy"
                />
              </div>
            )}
            <div className={isHaveDob ? "col-span-6" : "col-span-12"}>
              <CustomInput
                customInputStyle="white-bg-input"
                customInputContainer="white-bg-input-max-height"
                Icon={Icons.LocationPin}
                label="Mailing Address"
                IconDirection="left"
                placeholder="2972 123 Main Street, Boston, MA 02116, USA"
                required
              />
            </div>
            <div
              className={classNames(
                styles.buttonContainer,
                "col-span-12 ml-auto mb-4"
              )}
            >
              <CustomButton
                title="Save Changes"
                containerStyle="bg-blue maxHeighted_btn w-full"
              />
            </div>
          </form>
        </section>

        {/* Education */}
        <section className={classNames(styles.sectionContainer)}>
          <h6>Educational Background</h6>
          <form className={classNames(styles.profileForm, "mt-4")}>
            {educations.map((education, index) => (
              <div key={index} className="grid grid-cols-12 gap-3">
                <div className="col-span-12">
                  <CustomInput
                    customInputStyle="white-bg-input"
                    customInputContainer="white-bg-input-max-height"
                    Icon={Icons.EducationIcon}
                    IconDirection="left"
                    label="Institute"
                    placeholder="University of Springfield"
                    required
                  />
                </div>
                <div className="xs:col-span-6 col-span-12">
                  <CustomInput
                    customInputStyle="white-bg-input"
                    customInputContainer="white-bg-input-max-height"
                    Icon={Icons.BookIcon}
                    IconDirection="left"
                    label="Degree"
                    placeholder="Bachelor of Science in Computer Science"
                    required
                  />
                </div>
                <div className="xs:col-span-6 col-span-12">
                  <CustomInput
                    isDate
                    type="date"
                    customInputStyle="white-bg-input"
                    customInputContainer="white-bg-input-max-height"
                    Icon={Icons.CalendarBlank}
                    IconDirection="left"
                    label="Expected Completion Date"
                    placeholder="May 11, 2018"
                    required
                  />
                </div>
              </div>
            ))}

            <div className={classNames(styles.buttonContainer, "mt-3 pb-3")}>
              <div className="flex justify-between items-center flex-wrap gap-2 w-full">
                <CustomButton
                  title="Add New Education"
                  Icon={Icons.PlusIcon}
                  IconDirection="left"
                  containerStyle="outlined-button-blue maxHeighted_btn"
                  onClick={(e) => {
                    e.preventDefault();
                    addEducation();
                  }}
                />

                <CustomButton
                  title="Save Changes"
                  containerStyle="bg-blue maxHeighted_btn"
                />
              </div>
            </div>
          </form>
        </section>

        {/* Experience */}
        <section className={classNames(styles.sectionContainer)}>
          <h6>Professional Experience</h6>
          <form className={classNames(styles.profileForm, "mt-4")}>
            {experience.map((experience, index) => (
              <div key={index} className="grid grid-cols-12 gap-3">
                <div className="col-span-12">
                  <CustomInput
                    customInputStyle="white-bg-input"
                    customInputContainer="white-bg-input-max-height"
                    Icon={Icons.WorkIcon}
                    IconDirection="left"
                    label="Institute"
                    placeholder="University of Springfield"
                    required
                  />
                </div>
                <div className="sm:col-span-4 xs:col-span-6 col-span-12">
                  <CustomInput
                    customInputStyle="white-bg-input"
                    customInputContainer="white-bg-input-max-height"
                    Icon={Icons.DesignationIcon}
                    IconDirection="left"
                    label="Designation"
                    placeholder="Associate Professor"
                    required
                  />
                </div>
                <div className="sm:col-span-4 xs:col-span-6 col-span-12">
                  <CustomInput
                    isDate
                    type="date"
                    customInputStyle="white-bg-input"
                    customInputContainer="white-bg-input-max-height"
                    Icon={Icons.CalendarBlank}
                    IconDirection="left"
                    label="From"
                    placeholder="September 25, 2022"
                    required
                  />
                </div>
                <div className="sm:col-span-4 xs:col-span-6 col-span-12">
                  <CustomInput
                    isDate
                    type="date"
                    customInputStyle="white-bg-input"
                    customInputContainer="white-bg-input-max-height"
                    Icon={Icons.CalendarBlank}
                    IconDirection="left"
                    label="To"
                    placeholder="February 19, 2023"
                    required
                  />
                </div>
              </div>
            ))}

            <div className={classNames(styles.buttonContainer, "mt-3 pb-3")}>
              <div className="flex justify-between items-center flex-wrap gap-2 w-full">
                <CustomButton
                  title="Add New Experience"
                  Icon={Icons.PlusIcon}
                  IconDirection="left"
                  containerStyle="outlined-button-blue maxHeighted_btn"
                  onClick={(e) => {
                    e.preventDefault();
                    addExperience();
                  }}
                />

                <CustomButton
                  title="Save Changes"
                  containerStyle="bg-blue maxHeighted_btn"
                />
              </div>
            </div>
          </form>
        </section>

        {/* Password */}
        <section className={classNames(styles.sectionContainer)}>
          <h6>Change Password</h6>
          <form
            className={classNames(
              styles.profileForm,
              "grid grid-cols-12 gap-3 mt-4"
            )}
          >
            <div className="col-span-12">
              <CustomInput
                customInputStyle="white-bg-input"
                customInputContainer="white-bg-input-max-height"
                isPassword
                Icon={Icons.LockIcon}
                IconDirection="left"
                label="Current Password"
                placeholder="BBOdkRITPj8xCxt"
                required
              />
            </div>
            <div className="xs:col-span-6 col-span-12">
              <CustomInput
                customInputStyle="white-bg-input"
                customInputContainer="white-bg-input-max-height"
                isPassword
                Icon={Icons.LockIcon}
                IconDirection="left"
                label="New Password"
                placeholder="WVt1XzT7t9k74jj"
                required
              />
            </div>
            <div className="xs:col-span-6 col-span-12">
              <CustomInput
                customInputStyle="white-bg-input"
                customInputContainer="white-bg-input-max-height"
                isPassword
                Icon={Icons.LockIcon}
                IconDirection="left"
                label="Confirm Password"
                placeholder="WVt1XzT7t9k74jj"
                required
              />
            </div>
            <div
              className={classNames(
                styles.buttonContainer,
                "col-span-12 ml-auto mb-1"
              )}
            >
              <CustomButton
                title="Save Changes"
                containerStyle="bg-blue maxHeighted_btn w-full"
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default ProfileSettings;
