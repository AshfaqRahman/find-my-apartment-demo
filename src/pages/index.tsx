import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "components/Account";
import Link from "next/link";
import Product from "components/Product";
import { useRouter } from "next/router";





const Home = () => {
  const router = useRouter();
  const Redirect =()=>{
    router.push('/advancedsearch')
    return (<></>)
  }
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <Auth
          providers={["github", "apple"]}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        // <Account session={session} />
        // <Product />
        <Redirect/ >
      )}
    </div>
  );
};

export default Home;
