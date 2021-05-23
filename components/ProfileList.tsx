import ProfileCard from "../components/ProfileCard";
import { Profile } from "../lib/constants";

type ProfileListProps = {
  profiles: Profile[] | undefined;
};

export default function ProfileList({ profiles }: ProfileListProps) {
  return (
    <>
      {profiles?.length === 0 ? (
        <p className="">There are no public profiles created yet</p>
      ) : (
        <div className="">
          {profiles?.map((profile: any) => (
            <ProfileCard profile={profile} key={profile.id} />
          ))}
        </div>
      )}
    </>
  );
}
