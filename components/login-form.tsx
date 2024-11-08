'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { ko } from '@/constants/languages'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">{ko.login.title}</h2>
          <p className="text-sm text-gray-500">
            {ko.login.subtitle}
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">{ko.login.email.label}</label>
            <input
              id="email"
              placeholder={ko.login.email.placeholder}
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium">{ko.login.password.label}</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
                <span className="sr-only">
                  {showPassword ? ko.login.password.hide : ko.login.password.show}
                </span>
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            {ko.login.submit}
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">
              {ko.login.divider}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <button 
            className="flex w-full items-center justify-center rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            onClick={() => {}}
          >
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            {ko.login.socialLogin.google}
          </button>
          <button 
            className="flex w-full items-center justify-center rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            onClick={() => {}}
          >
            <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 5.16c-.94.42-1.95.7-3 .82 1.08-.64 1.91-1.66 2.3-2.87-1.01.6-2.13 1.03-3.32 1.27-1.95-2.08-5.21-2.19-7.29-.23-1.34 1.26-1.91 3.13-1.49 4.92C5.97 8.83 3.17 7.18 1.28 4.62c-1.66 2.86-.83 6.53 1.95 8.38-.91-.03-1.8-.28-2.59-.8v.08c0 2.98 2.11 5.52 5.01 6.1-.84.23-1.72.26-2.57.1.82 2.55 3.2 4.29 5.89 4.34-2.23 1.75-4.99 2.7-7.83 2.7-.51 0-1.01-.03-1.51-.09 2.89 1.85 6.24 2.83 9.66 2.83 11.59 0 17.93-9.6 17.93-17.93 0-.27 0-.54-.02-.81 1.23-.89 2.3-2 3.15-3.27" />
            </svg>
            {ko.login.socialLogin.x}
          </button>
          <button 
            className="flex w-full items-center justify-center rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            onClick={() => {}}
          >
            <svg className="mr-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M18.7 0H1.3C.6 0 0 .6 0 1.3v17.4c0 .7.6 1.3 1.3 1.3h17.4c.7 0 1.3-.6 1.3-1.3V1.3c0-.7-.6-1.3-1.3-1.3zM10 15.5L4.5 7h11L10 15.5z"/>
            </svg>
            {ko.login.socialLogin.naver}
          </button>
          <button 
            className="flex w-full items-center justify-center rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            onClick={() => {}}
          >
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.557 1.707 4.8 4.27 6.054-.188.702-.682 2.545-.78 2.94-.123.49.178.483.376.351.155-.103 2.466-1.675 3.464-2.353.541.08 1.1.123 1.67.123 4.97 0 9-3.185 9-7.115C21 6.185 16.97 3 12 3"/>
            </svg>
            {ko.login.socialLogin.kakao}
          </button>
        </div>

        <div className="text-center text-sm space-x-2">
          <Link 
            href="/register" 
            className="text-emerald-500 hover:text-emerald-600"
          >
            {ko.login.links.register}
          </Link>
          <span className="text-emerald-500">/</span>
          <Link 
            href="/forgot-password" 
            className="text-emerald-500 hover:text-emerald-600"
          >
            {ko.login.links.forgotPassword}
          </Link>
        </div>
      </div>
    </div>
  )
}