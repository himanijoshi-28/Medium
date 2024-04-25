import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}
const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className=" flex  justify-start flex-col border-b border-slate-200 ">
        <div className="flex items-center justify-start w-screen">
          <div className="flex justify-center flex-col">
            <Avatar name={authorName} />{" "}
          </div>
          <div className="font-light pl-2">{authorName} </div>
          <div className=""> &#9679;</div>
          <div className="pl-2 font-thin text-slate-400"> {publishedDate}</div>
        </div>
        <div className="font-extrabold text-xl">{title}</div>
        <div className="font-normal text-sm mt-2 text-slate-500">
          {content.slice(0, 100) + "..."}
        </div>
        <div className="text-[14px] text-slate-400 my-8">{`${Math.ceil(
          content.length / 100
        )} minutes`}</div>
      </div>
    </Link>
  );
};

export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}

export default BlogCard;
