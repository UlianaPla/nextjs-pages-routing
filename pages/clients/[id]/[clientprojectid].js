import { useRouter } from 'next/router';

function SelectedClientProjectsPage() {
  const router = useRouter();

  console.log(router.query); // Here are two properties: id and clientprojectid

  return (
    <div>
      <h1> The Projects for a Specific Project of a Specific Client</h1>
    </div>
  );
}

export default SelectedClientProjectsPage;
