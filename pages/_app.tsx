import "../styles/globals.css";
import { UserContextProvider } from "../contexts/UserContext";
import { supabase } from "../lib/supabaseClient";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider supabaseClient={supabase}>
      <Component {...pageProps} />;
    </UserContextProvider>
  );
}
export default MyApp;
