import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          priority
          alt="Next.js logo"
          className="dark:invert"
          height={38}
          src="https://nextjs.org/icons/next.svg"
          width={180}
        />
        <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
          Welcome to Your Next.js Starter Template
        </h1>
        <p className="text-center sm:text-left text-gray-600 dark:text-gray-300">
          Kickstart your Next.js project with this pre-configured template, ready to go!
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-4">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] hover:text-white text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/TRIPLE-ADE/nextjs-starter-template"
            rel="noopener noreferrer"
            target="_blank"
          >
            View on GitHub
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://github.com/TRIPLE-ADE/nextjs-starter-template/archive/refs/heads/main.zip"
            rel="noopener noreferrer"
            target="_blank"
          >
            Download Starter
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            aria-hidden
            alt="File icon"
            height={16}
            src="https://nextjs.org/icons/file.svg"
            width={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            aria-hidden
            alt="Window icon"
            height={16}
            src="https://nextjs.org/icons/window.svg"
            width={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            aria-hidden
            alt="Globe icon"
            height={16}
            src="https://nextjs.org/icons/globe.svg"
            width={16}
          />
          Go to nextjs.org →
        </a>
        <Button>Powered by Vercel</Button>
      </footer>
    </div>
  );
}
