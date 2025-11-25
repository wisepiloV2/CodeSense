import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;