import { useSession, getSession } from "next-auth/client";

export default function Protected() {
  const [session, loading] = useSession();

  return (
    <>
      <h1>Server Side Rendering</h1>
      <p> {JSON.stringify(session, undefined, 2)} </p>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
