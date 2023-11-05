import "@/app/globals.css";
import Layout from "@/components/layouts/layout-1";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: {
        lang: string;
    };
}) {

    return (<Layout>{children}</Layout>);
}