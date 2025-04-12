"use client";

import { Plus } from "@phosphor-icons/react";

export default function AddTask() {
  return (
    <button className="group flex w-full cursor-pointer items-center justify-between gap-2 text-neutral-300/40">
      <span className="rounded bg-neutral-800/40 p-3 transition-colors duration-500 group-hover:bg-emerald-800/60 group-hover:text-neutral-300">
        <Plus className="size-4" weight="bold" />
      </span>
      <p className="flex-1 rounded bg-neutral-800/40 p-3 text-start leading-none font-bold uppercase transition-colors duration-500 group-hover:bg-neutral-800/60 group-hover:text-neutral-300">
        add habit
      </p>
    </button>
  );
}
