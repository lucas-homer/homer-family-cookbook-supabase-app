import { Profile } from "../lib/constants";
import Avatar from "./Avatar";

export default function ProfileCard({ profile }: { profile: Profile }) {
  const lastUpdated = profile.updated_at ? new Date(profile.updated_at) : null;
  return (
    <div className="flex flex-wrap items-center bg-gray-100 p-4 rounded shadow hover:shadow-md">
      <Avatar url={profile.avatar_url} size={100} className="" />
      <div className="pl-4">
        <p className="font-semibold">{profile.username}</p>
        <a className="text-green-500" href={profile.website} target="_blank">
          {profile.website}
        </a>
        <p>
          <small>
            Last updated{" "}
            {lastUpdated
              ? `${lastUpdated.toLocaleDateString()} ${lastUpdated.toLocaleTimeString()}`
              : "Never"}
          </small>
        </p>
      </div>
      <div />
    </div>
  );
}
