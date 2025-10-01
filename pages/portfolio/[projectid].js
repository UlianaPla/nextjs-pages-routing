import { useRouter } from 'next/router';

function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query); // concrete data that is encoded into the url.

  // send a request to some backend server
  // to fetch the piece of data with an id of router.query.projectid

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
      <p>Project ID: {router.query.projectid}</p>
    </div>
  );
}

export default PortfolioProjectPage;
