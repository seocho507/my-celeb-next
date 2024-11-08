import LoginForm from "@/components/login-form";
import { ko } from "@/constants/languages";

export default function Page() {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* Left Panel - Server Component */}
      <div className="flex flex-col items-center justify-center bg-emerald-500 p-8 text-white">
        <div className="mb-8">
          {/* <Image
            src="/placeholder.svg"
            alt="Logo"
            width={200}
            height={80}
            className="dark:invert"
            priority
          /> */}
        </div>
        <h1 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          {ko.landing.title}
        </h1>
      </div>
      
      {/* Right Panel - Client Component */}
      <LoginForm />
    </div>
  )
}
