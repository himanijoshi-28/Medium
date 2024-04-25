import { useBlogs } from "../Hooks";
import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import BlogSkeleton from "../components/BlogSkeleton";

const Blogs = () => {
  //store it in state
  // store directly here
  // custom hook
  const { blogs, loading } = useBlogs();
  if (loading) {
    return (
      <div className="flex items-center justify-center flex-col mt-[4.5rem]">
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
      </div>
    );
  }
  return (
    <>
      <div className="">
        <Appbar />
      </div>

      <div className="flex justify-center cursor-pointer ">
        {" "}
        <div className=" m-10 max-w-xl ">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={"2nd Feb,2024"}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
