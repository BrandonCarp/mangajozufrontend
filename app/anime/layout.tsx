import Navbar from "../ui/navbar/navbar";
import Footer from "../ui/footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="">
        <main className="">{children}</main>
      </body>
    </html>
  );
}
