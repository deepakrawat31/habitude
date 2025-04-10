import { Plus } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="flex w-full max-w-xs flex-col justify-between gap-8 rounded-md bg-neutral-900/60 p-4">
      <Link
        href={"/"}
        className="w-fit transition-transform duration-300 hover:scale-110"
      >
        <img src="../favicon.ico" alt="logo" className="size-8" />
      </Link>
      <ul className="flex flex-col gap-8">
        <li>
          <button className="flex w-full items-center justify-between gap-2 rounded-md bg-neutral-800/40 p-4 text-neutral-300/40 transition-colors duration-300 hover:bg-neutral-800/60 hover:text-neutral-300">
            <span className="leading-none font-bold uppercase">add habit</span>
            <Plus className="size-4" weight="bold" />
          </button>
        </li>
        <li></li>
      </ul>
    </aside>
  );
}
