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
    <div
      className="container mx-auto py-10 h-screen flex flex-col"
      style={style}
    >
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="flex-none">
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
      <main className="pt-8 flex-grow">{children}</main>
      <footer className="flex-none">
        <a
          target="_blank"
          href="https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fsupabase%2Fsupabase%2Ftree%2Fmaster%2Fexamples%2Fnextjs-ts-user-management&project-name=supabase-user-management&repository-name=supabase-user-management&demo-title=Supabase%20User%20Management&demo-description=An%20example%20web%20app%20using%20Supabase%20and%20Next.js&demo-url=https%3A%2F%2Fsupabase-nextjs-ts-user-management.vercel.app&demo-image=https%3A%2F%2Fi.imgur.com%2FZ3HkQqe.png&integration-ids=oac_jUduyjQgOyzev1fjrW83NYOv&external-id=nextjs-user-management"
        >
          <img src="https://vercel.com/button" />
        </a>
      </footer>
    </div>
  );
};

export default Layout;
