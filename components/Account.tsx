import { useState, useEffect } from "react";
import {
  useUser,
  useSupabaseClient,
  Session,
} from "@supabase/auth-helpers-react";
import { Database } from "../utils/database.types";
import Avatar from "./Avatar";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
type Profiles = Database["public"]["Tables"]["user"]["Row"];

export default function Account({ session }: { session: Session }) {
  const supabase = useSupabaseClient<Database>();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<Profiles["username"]>("");
  const [name, setname] = useState<Profiles["name"]>("");
  const [phone_no, setAvatarUrl] = useState<Profiles["phone_no"]>("");


  const router = useRouter();
  useEffect(() => {
    
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!user) throw new Error("No user");

      let { data, error, status } = await supabase
        .from("user")
        .select()

      console.log(data);

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        // setUsername(data.username);
        // setname(data.name);
        // setAvatarUrl(data.phone_no);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({
    username,
    name,
    phone_no,
  }: {
    username: Profiles["username"];
    name: Profiles["name"];
    phone_no: Profiles["phone_no"];
  }) {
    try {
      setLoading(true);
      if (!user) throw new Error("No user");

      const updates = {
        id: user.id,
        username,
        name,
        phone_no,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("user").upsert(updates);
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-widget">
      <Avatar
        uid={user!.id}
        url={phone_no}
        size={150}
        onUpload={(url) => {
          setAvatarUrl(url);
          updateProfile({ username, name, phone_no: url });
        }}
      />
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">name</label>
        <input
          id="name"
          type="name"
          value={name || ""}
          onChange={(e) => setname(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() => updateProfile({ username, name, phone_no })}
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>

      <div>
        <button
          className="button block"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
