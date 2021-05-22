import { useQuery } from "react-query";
import { supabase } from "./supabaseClient";
import { Profile } from "./constants";

async function getPublicProfiles() {
  try {
    const { data, error } = await supabase
      .from<Profile>("profiles")
      .select("id, username, avatar_url, website, updated_at")
      .order("updated_at", { ascending: false });

    if (error || !data) {
      throw error || new Error("Error fetching profiles");
    }
    console.log("Public profiles:", data);
    return data;
  } catch (error) {
    console.log("error", error.message);
  }
}

export function usePublicProfiles() {
  return useQuery("publicProfiles", getPublicProfiles);
}
