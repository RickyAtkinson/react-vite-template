import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-dvh min-w-80 flex-col justify-center">
      <div className="mb-8 flex justify-center gap-x-10">
        <a
          className="font-medium text-indigo-600 hover:text-indigo-400"
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={viteLogo}
            className="logo h-24 animate-pulse transition duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a
          className="font-medium text-indigo-600 hover:text-indigo-400"
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={reactLogo}
            className="logo react h-24 animate-[spin_16s_linear_infinite] transition duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="mb-8 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Vite React Template
      </h1>
      <div>
        <button
          className="border-1 mb-8 rounded-lg border border-solid border-transparent bg-zinc-800 px-5 py-2 text-lg transition duration-200 hover:border-indigo-400"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <p className="eading-7 [&:not(:last-child)]:mb-6">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p className="leading-7 text-zinc-400 [&:not(:last-child)]:mb-6">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}
