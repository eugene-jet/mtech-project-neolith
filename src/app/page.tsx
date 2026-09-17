import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center gap-10 px-6">
      <header className="absolute right-4 top-4">
        <ThemeToggle />
      </header>

      <main className="flex flex-col items-center gap-8">
        <Logo className="h-40 w-auto sm:h-52" />
        <p className="text-2xl font-medium uppercase tracking-[0.35em] sm:text-3xl">
          Platform
        </p>
      </main>
    </div>
  );
}
