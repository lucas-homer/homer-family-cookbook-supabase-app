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
    <div className="container" style={style}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "baseline",
            gap: "4px"
          }}
        >
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
          {user && (
            <>
              |{" "}
              <Link href="/account">
                <a>Profile</a>
              </Link>{" "}
              <button style={{ marginLeft: 4 }} onClick={handleSignOut}>
                Sign Out
              </button>
            </>
          )}
          {/* |{" "}
        <Link href="/users">
          <a>Users List</a>
        </Link>{" "} */}
        </nav>
      </header>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
