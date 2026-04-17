import React, { useState } from 'react'
import SakuraFall from '../../features/app/effects/SakuraFall.jsx'
import { NavLink } from 'react-router-dom'

const AuthMain = () => {
  const [mode, setMode] = useState('login')

  const renderForm = () => {
    switch (mode) {
      case 'register':
        return <RegisterForm onSwitch={setMode} />
      case 'reset':
        return <ResetPasswordForm onSwitch={setMode} />
      default:
        return <LoginForm onSwitch={setMode} />
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden px-2 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <SakuraFall />
      <div className="pattern" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center py-10 text-center">
        <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-black/60 p-6 shadow-xl shadow-black/40 backdrop-blur-sm">
          <div className="mb-6 flex justify-center">
            <NavLink to='/'>
              <img src="/images/AniVerse-logo.png" alt="AniVerse Logo" className="h-20 w-auto sm:h-24 cursor-pointer"/>
            </NavLink>
          </div>
          {renderForm()}
        </div>
      </div>
    </main>
  )
}

const LoginForm = ({ onSwitch }) => (
  <div className="space-y-5">
    <div className="space-y-2 text-left">
      <h2 className="text-2xl font-semibold">Login to AniVerse</h2>
      <p className="text-sm text-gray-400">Use your account to continue exploring the best anime and manga.</p>
    </div>
    <form className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
      />
      <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
        <label className="inline-flex items-center gap-2 text-gray-300">
          <input type="checkbox" className="h-4 w-4 rounded accent-red-600" />
          Remember me
        </label>
        <button type="button" onClick={() => onSwitch('reset')} className="text-sm text-gray-300 hover:text-white underline">
          Forgot Password?
        </button>
      </div>
      <button type="submit" className="w-full rounded-2xl bg-red-700 px-4 py-3 text-white transition hover:bg-red-600">
        Login
      </button>
    </form>
    <p className="text-center text-sm text-gray-400">
      New to AniVerse?{' '}
      <button type="button" onClick={() => onSwitch('register')} className="font-semibold text-white hover:underline">
        Register now
      </button>
    </p>
  </div>
)

const RegisterForm = ({ onSwitch }) => (
  <div className="space-y-5">
    <div className="space-y-2 text-left">
      <h2 className="text-2xl font-semibold">Create your account</h2>
      <p className="text-sm text-gray-400">Join AniVerse to stream anime and read manga anytime, all in one place.</p>
    </div>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
      />
      <button type="submit" className="w-full rounded-2xl bg-red-700 px-4 py-3 text-white transition hover:bg-red-600">
        Register
      </button>
    </form>
    <p className="text-center text-sm text-gray-400">
      Already have an account?{' '}
      <button type="button" onClick={() => onSwitch('login')} className="font-semibold text-white hover:underline">
        Login
      </button>
    </p>
  </div>
)

const ResetPasswordForm = ({ onSwitch }) => (
  <div className="space-y-5">
    <div className="space-y-2 text-left">
      <h2 className="text-2xl font-semibold">Reset your password</h2>
      <p className="text-sm text-gray-400">Send a recovery link to your email and get back to AniVerse.</p>
    </div>
    <form className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
      />
      <button type="submit" className="w-full rounded-2xl bg-red-700 px-4 py-3 text-white transition hover:bg-red-600">
        Send reset link
      </button>
    </form>
    <p className="text-center text-sm text-gray-400">
      Remembered your password?{' '}
      <button type="button" onClick={() => onSwitch('login')} className="font-semibold text-white hover:underline">
        Back to login
      </button>
    </p>
  </div>
)

export default AuthMain