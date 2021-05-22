import Auth from "../components/Auth";
import ProfileList from "../components/ProfileList";
import Layout from "../components/Layout";
import { useUser } from "../contexts/UserContext";
import { usePublicProfiles } from "../lib/usePublicProfiles";

export default function Home() {
  const { session } = useUser();
  const { data: profiles } = usePublicProfiles();

  return (
    <Layout style={{ padding: "50px 0 100px 0" }} title="Homer Family Cookbook">
      {!session ? (
        <Auth />
      ) : (
        <div className="row">
          <div className="col-12">
            <h3>Public Profiles</h3>
            <ProfileList profiles={profiles} />
          </div>
        </div>
      )}
    </Layout>
  );
}
