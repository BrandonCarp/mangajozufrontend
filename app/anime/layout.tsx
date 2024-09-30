import Navbar from "../ui/navbar/nav-links";
import Footer from "../ui/footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className=" bg-black ">
        <Navbar />
        <div></div>
        <Footer />
      </div>

      <Navbar />
      <main className="bg-black">{children}</main>
      <Footer />
    </>
  );
}
