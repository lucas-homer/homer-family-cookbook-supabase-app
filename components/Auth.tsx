import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Auth({}) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (email: string) => {
    try {
      setLoading(true);
      const { error, user } = await supabase.auth.signIn({ email });
      if (error) throw error;
      console.log("user", user);
      alert("Check your email for the login link!");
    } catch (error) {
      console.log("Error thrown:", error.message);
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-6">
      <div className="">
        <h1 className="">Homer Family Cookbook</h1>
        <p className="">
          Find your favorite recipes, comment on them, or add your own. Create a
          user profile and upload an avatar image.
        </p>
      </div>
      <div className="grid grid-rows-3 grid-cols-1 gap-4">
        <p className="">Sign in via magic link with your email below</p>
        <label>
          Email
          <input
            className="ml-2 pl-1 bg-gray-100 w-full"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <div>
          <button
            onClick={e => {
              e.preventDefault();
              handleLogin(email);
            }}
            className="bg-blue-800 text-white py-2 px-4 rounded-md"
            disabled={loading}
          >
            {loading ? (
              <img className="" src="loader.svg" />
            ) : (
              <span>Send magic link</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
