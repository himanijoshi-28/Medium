import { useBlog } from "../Hooks";
import { useParams } from "react-router-dom";
import FullBlog from "../components/FullBlog";
import Spinner from "../components/Spinner";

const Blog = () => {
  const { id } = useParams();
  const { blog, loading } = useBlog({ id: id || " " });
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }
  return (
    <>
      <div>
        <FullBlog blog={blog} />
      </div>
    </>
  );
};

export default Blog;
