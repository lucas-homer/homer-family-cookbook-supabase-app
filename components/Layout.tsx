import React, { ReactNode, CSSProperties } from "react";
import Link from "next/link";
import Head from "next/head";
import { supabase } from "../lib/supabaseClient";
import { useUser } from "../contexts/UserContext";
import Footer from "../components/Footer";

type Props = {
  children?: ReactNode;
  title?: string;
  style?: CSSProperties;
};

const Layout = ({
  children,
  title = "This is the default title",
  style
}: Props) => {
  const { user } = useUser();
  async function handleSignOut(): Promise<void> {
    await supabase.auth.signOut();
  }
  return (
    <div className="container mx-auto pt-10" style={style}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav className="flex justify-end align-baseline gap-4 text-xl">
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
          {user && (
            <div>
              <Link href="/account">
                <a>Profile</a>
              </Link>{" "}
            </div>
          )}
          {user && <button onClick={handleSignOut}>Sign Out</button>}
        </nav>
      </header>
      <main className="pt-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
