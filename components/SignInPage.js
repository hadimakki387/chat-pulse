import Link from 'next/link'
import React from 'react'

function SignInPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
        <h2 className="text-5xl  font-bold">Welcome to Chat Pulse</h2>
        <p className="text-lg font-semibold">
          Log in with your account to continue
        </p>
        <div className=" flex w-60 items-center justify-between ">
          <Link
            href={"/api/auth/login"}
            className="rounded-md bg-green-700 px-8 py-3 transition-all duration-200 hover:bg-green-600"
          >
            Login
          </Link>

          <Link
            href={"/api/auth/signup"}
            className="rounded-md bg-green-700 px-8 py-3 transition-all duration-200 hover:bg-green-600"
          >
            Signup
          </Link>
        </div>
      </div>
  )
}

export default SignInPage