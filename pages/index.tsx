import Auth from "../components/Auth";
import ProfileList from "../components/ProfileList";
import Layout from "../components/Layout";
import { useUser } from "../contexts/UserContext";
import { usePublicProfiles } from "../lib/usePublicProfiles";

export default function Home() {
  const { session } = useUser();
  const { data: profiles } = usePublicProfiles();

  return (
    <Layout title="Homer Family Cookbook">
      {!session ? (
        <Auth />
      ) : (
        <>
          <h3 className="mb-4">Public Profiles</h3>
          <ProfileList profiles={profiles} />
        </>
      )}
    </Layout>
  );
}
