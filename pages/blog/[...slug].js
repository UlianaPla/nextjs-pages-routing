import { useRouter } from 'next/router';

function BlogPostsPage() {
  const router = useRouter();

  console.log(router.query); // Here is the slug property with array in value

  return (
    <div>
      <h1>The Blog Posts Page</h1>
    </div>
  );
}

export default BlogPostsPage;
