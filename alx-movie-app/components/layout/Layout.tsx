import { ComponentProps } from "@/interfaces";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Layout: React.FC<ComponentProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}

export default Layout;