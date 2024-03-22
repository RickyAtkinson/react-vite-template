import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center gap-x-6 p-6">
        <a
          className="font-medium text-indigo-600 hover:text-indigo-400"
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={viteLogo}
            className="logo h-24 transition duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
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
            className="logo react h-24 transition duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="mb-8 text-5xl">Vite React Template</h1>
      <div className="card">
        <button
          className="border-1 mb-5 rounded-lg border border-solid border-transparent bg-stone-950 px-5 py-2 text-lg transition duration-200 hover:border-indigo-400"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="mb-2">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-neutral-400">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
