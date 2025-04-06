import "./globals.css";
import { Albert_Sans } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";

const alberts_sans = Albert_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "ACM @ UCR",
  description:
    "ACM at UCR is the largest student-run technical organization with a focus on Computer Science. Our goal is to help our members develop their technical and professional skills to help them in school and the tech industry",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={alberts_sans.className}>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
