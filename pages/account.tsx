import Layout from "../components/Layout";
import Account from "../components/Account";
import Auth from "../components/Auth";

import { useUser } from "../contexts/UserContext";

const MyAccount = () => {
  const { session } = useUser();

  return (
    <Layout title="My Account">
      {!session ? (
        <Auth />
      ) : (
        <div className="">
          <div className="">
            <h3>My Account</h3>
            <Account session={session} />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default MyAccount;
