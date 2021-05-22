import Layout from "../components/Layout";
import Account from "../components/Account";
import Auth from "../components/Auth";

import { useUser } from "../contexts/UserContext";

const MyAccount = () => {
  const { session, user } = useUser();

  return (
    <Layout style={{ padding: "50px 0 100px 0" }} title="My Account">
      {!session ? (
        <Auth />
      ) : (
        <div className="row">
          <div className="col-12">
            <h3>My Account</h3>
            <Account key={user?.id} session={session} />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default MyAccount;
