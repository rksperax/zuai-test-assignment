"use client";

import NavBar from "@/components/NavBar";
import Evaluator from "@/components/Evaluator";

export default function Home() {
    return (
        <div className="size-full flex items-start flex-grow flex-shrink-0 basis-0 self-stretch bg-[#e5ecf3]">
            <NavBar />
            <Evaluator />

            <aside className="hidden w-16 sm:flex flex-col items-end gap-3 p-3 self-stretch">

            </aside>
        </div>
    );
};
