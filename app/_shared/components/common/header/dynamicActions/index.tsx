import styles from "../style.module.scss";
import { useContext } from "react";
import { MyContext } from "utils/myContext";
import CustomButton from "components/common/customButton";
import CustomAnimatedBorder from "components/common/customAnimatedBorder";
import classNames from "classnames";
import dynamic from "next/dynamic";

const DynamicActions = () => {
  // const {
  //   auth: { isLoggedIn },
  // } = useSelector((state: any) => state.root);
  // const [becomeFellowModal, setBecomeFellowModal] = useState(false);

  // const openFellowModal = () => {
  //   setBecomeFellowModal(true);
  // };

  // const closeFellowModal = () => {
  //   setBecomeFellowModal(false);
  // };

  const handleScrollToQuote = () => {
    const quoteSection = document.getElementById("get-a-quote");

    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth", block: "center" });

      quoteSection.classList.add("soft-glow");

      setTimeout(() => {
        quoteSection.classList.remove("soft-glow");
      }, 2000);
    }
  };

  return (
    <>
      <div
        className={classNames(
          styles.actionContainer,
          "xs:gap-3 gap-2 items-center flex"
        )}
      >
        {/* {isLoggedIn ? (
          <>
            <ProfileDropdown />
            <div className="hidden sm:block">
              <CustomButton
                title="Become a Fellow"
                Icon={Icons.Briefcase}
                IconDirection="left"
                containerStyle="outlined-button-secondary"
                onClick={openFellowModal}
              />
            </div>
          </>
        ) : ( */}
        <>
          <CustomAnimatedBorder
            gradientColors="linear-gradient(135deg, #EC1E24 0%, #141212 50%, #902880 100%)"
            animationSpeed="4s"
            borderRadius="8px"
          >
            <CustomButton
              title="Get A Quote"
              containerStyle="transparent-button"
              onClick={handleScrollToQuote}
            />
          </CustomAnimatedBorder>
          <a href="tel:+17134834953" target="_blank" rel="noopener noreferrer">
            <CustomButton
              title="Call Now"
              containerStyle={classNames(styles.login_btn)}
            />
          </a>
        </>
        {/* )} */}
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(DynamicActions), {
  ssr: false,
  loading: () => {
    const value = useContext(MyContext);
    const { user } = value;

    const handleScrollToQuote = () => {
      const quoteSection = document.getElementById("get-a-quote");

      if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: "smooth", block: "center" });

        quoteSection.classList.add("soft-glow");

        setTimeout(() => {
          quoteSection.classList.remove("soft-glow");
        }, 2000);
      }
    };

    return (
      <div
        className={classNames(
          styles.actionContainer,
          "gap-3 items-center hidden sm:flex"
        )}
      >
        {user?.isLoggedIn ? (
          <>
            <h5>User Profile</h5>
          </>
        ) : (
          <>
            <CustomAnimatedBorder
              gradientColors="linear-gradient(135deg, #EC1E24 0%, #141212 50%, #902880 100%)"
              animationSpeed="4s"
              borderRadius="8px"
            >
              <CustomButton
                title="Get A Quote"
                containerStyle="transparent-button"
                onClick={handleScrollToQuote}
              />
            </CustomAnimatedBorder>
            <a
              href="tel:+17134834953"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomButton
                title="Call Now"
                containerStyle={classNames(styles.login_btn)}
              />
            </a>
          </>
        )}
      </div>
    );
  },
});
