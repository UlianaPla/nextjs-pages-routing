import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query); // Here is the id property

  function loadProjectHandler() {
    // load data...
    // router.push('/clients/max/projecta') // option 1
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: router.query.id, clientprojectid: "projecta" },
    }); // option 2
  }

  return (
    <div>
      <h1> The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
