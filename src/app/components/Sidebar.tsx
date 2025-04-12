import Link from "next/link";
import AddTask from "./AddTask";
import Profile from "./Profile";

export default function Sidebar() {
  return (
    <aside className="flex w-full max-w-xs flex-col justify-between gap-8 rounded-md bg-neutral-900/60 p-4">
      <Link
        href={"/"}
        className="w-fit transition-transform duration-300 hover:scale-110"
      >
        <img src="../favicon.ico" alt="logo" className="size-8" />
      </Link>
      <ul className="flex flex-col gap-2">
        <li>
          <AddTask />
        </li>
        <li>
          <Profile />
        </li>
      </ul>
    </aside>
  );
}
