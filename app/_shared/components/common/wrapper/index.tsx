import Footer from "../footer";
import Header from "../header";

const Wrapper = ({ children, user }: any) => {
  return (
    <>
      <Header userCookie={user} />
      <main className="min-h-screen h-full bg-black">{children}</main>
      <Footer />
    </>
  );
};

export default Wrapper;
