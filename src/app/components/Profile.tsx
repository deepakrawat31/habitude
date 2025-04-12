"use client";

import { DotsThreeVertical } from "@phosphor-icons/react";

export default function Profile() {
  return (
    <button className="group flex w-full items-center justify-between gap-2 text-neutral-300/40">
      <p className="flex-1 rounded bg-neutral-800/40 p-3 text-start leading-none font-bold uppercase transition-colors duration-500 group-hover:bg-neutral-800/60 group-hover:text-neutral-300">
        deepak
      </p>
      <span className="rounded bg-neutral-800/40 p-3 transition-colors duration-500 group-hover:bg-emerald-800/60 group-hover:text-neutral-300">
        <DotsThreeVertical className="size-4" weight="bold" />
      </span>
    </button>
  );
}
