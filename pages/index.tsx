import Auth from "../components/Auth";
import ProfileList from "../components/ProfileList";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { Profile } from "../lib/constants";
import Layout from "../components/Layout";
import { useUser } from "../contexts/UserContext";

export default function Home() {
  const { session } = useUser();
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    getPublicProfiles();
  }, []);

  async function getPublicProfiles() {
    try {
      const { data, error } = await supabase
        .from<Profile>("profiles")
        .select("id, username, avatar_url, website, updated_at")
        .order("updated_at", { ascending: false });

      if (error || !data) {
        throw error || new Error("No data");
      }
      console.log("Public profiles:", data);
      setProfiles(data);
    } catch (error) {
      console.log("error", error.message);
    }
  }

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
