import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import { FaArrowUp } from "react-icons/fa";
import SiteHeader from "./SiteHeader";
import HeroSection from "@/container/Home/HeroSection";

interface LayoutProps {
  children: React.ReactNode;
}

export default function LayOut({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <SiteHeader />
      <NavigationBar />
      <main>

        {children}
        <Footer />
        {/* <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
          <FaArrowUp />
        </a> */}
      </main>
    </>
  );
}