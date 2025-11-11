// src/Home.tsx - Modern Responsive Light/Dark Mode dApp Landing with Waitlist Form & Footer

import { useWallet } from '@txnlab/use-wallet-react'
import React, { useState } from 'react'
import {
  AiOutlineDeploymentUnit,
  AiOutlineSend,
  AiOutlineStar,
  AiOutlineWallet,
} from 'react-icons/ai'
import {
  BsArrowUpRightCircle,
  BsWallet2,
  BsSun,
  BsMoon,
  BsGithub,
  BsTwitterX,
  BsLinkedin,
} from 'react-icons/bs'
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa'

// Frontend modals
import AppCalls from './components/AppCalls'
import ConnectWallet from './components/ConnectWallet'
import NFTmint from './components/NFTmint'
import Tokenmint from './components/Tokenmint'
import Transact from './components/Transact'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false)
  const [openMintModal, setOpenMintModal] = useState<boolean>(false)
  const [openTokenModal, setOpenTokenModal] = useState<boolean>(false)
  const [openAppCallsModal, setOpenAppCallsModal] = useState<boolean>(false)
  const [darkMode, setDarkMode] = useState<boolean>(false)

  // Waitlist form state
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false)

  const { activeAddress } = useWallet()

  const cardBase =
    'rounded-xl shadow-md hover:shadow-lg transition border bg-opacity-70 backdrop-blur-sm p-5 flex flex-col items-start gap-3'
  const iconStyle = 'text-3xl'

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setName('')
    setEmail('')
    setTimeout(() => setFormSubmitted(false), 3000) // hide success message after 3s
  }

  return (
    <div
      className={`relative min-h-screen flex flex-col font-inter transition-colors duration-500 ${
        darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
      }`}
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-indigo-300 via-pink-200 to-emerald-300 dark:from-indigo-900 dark:via-purple-800 dark:to-gray-800 opacity-60"
        style={{
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite',
        }}
      ></div>

      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      {/* Navbar */}
      <nav
        className={`w-full flex items-center justify-between px-6 py-4 sticky top-0 z-20 border-b transition-colors ${
          darkMode
            ? 'bg-gray-800 border-gray-700'
            : 'bg-white border-gray-200 shadow-sm'
        }`}
      >
        <div className="flex items-center gap-2">
          <div
            className={`h-8 w-8 flex items-center justify-center rounded-lg text-sm font-semibold ${
              darkMode ? 'bg-indigo-500 text-white' : 'bg-indigo-600 text-white'
            }`}
          >
            A
          </div>
          <div className="font-semibold tracking-wide">
            Algorand dApp Template
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition ${
              darkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-yellow-300'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {darkMode ? <BsSun className="text-xl" /> : <BsMoon className="text-xl" />}
          </button>

          {/* Wallet Connect */}
          <button
            onClick={() => setOpenWalletModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition"
          >
            <BsWallet2 className="text-white" />
            {activeAddress ? 'Wallet Linked' : 'Connect Wallet'}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="flex flex-col items-center text-center py-16 px-6">
        <div
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-medium mb-5 border ${
            darkMode
              ? 'bg-indigo-900 text-indigo-200 border-indigo-700'
              : 'bg-indigo-50 text-indigo-700 border-indigo-100'
          }`}
        >
          <AiOutlineWallet />
          <span>Algorand Universal Actions</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold mb-3">
          Build Faster with a Universal dApp Surface
        </h1>
        <p
          className={`max-w-xl mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Trigger common Algorand actions — payments, NFT minting, token creation, and contract
          calls — from a clean, unified interface.
        </p>

        {!activeAddress && (
          <button
            onClick={() => setOpenWalletModal(true)}
            className="px-6 py-3 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 shadow-md transition"
          >
            Connect Wallet to Get Started
          </button>
        )}
      </header>

      {/* Features */}
      <main id="features" className="flex-1 flex flex-col items-center px-6 pb-16">
        {activeAddress ? (
          <div className="w-full max-w-5xl">
            <h2 className="text-xl font-semibold mb-6">
              Available Actions
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <button
                className={`${cardBase} ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => setOpenPaymentModal(true)}
              >
                <div
                  className={`p-3 rounded-lg ${
                    darkMode ? 'bg-indigo-900 text-indigo-300' : 'bg-indigo-100 text-indigo-700'
                  }`}
                >
                  <AiOutlineSend className={iconStyle} />
                </div>
                <div>
                  <p className="text-base font-medium">Send Payment</p>
                  <p
                    className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    Transfer ALGO or assets.
                  </p>
                </div>
              </button>

              <button
                className={`${cardBase} ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => setOpenMintModal(true)}
              >
                <div
                  className={`p-3 rounded-lg ${
                    darkMode ? 'bg-pink-900 text-pink-300' : 'bg-pink-100 text-pink-700'
                  }`}
                >
                  <AiOutlineStar className={iconStyle} />
                </div>
                <div>
                  <p className="text-base font-medium">Mint NFT</p>
                  <p
                    className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    Create a simple NFT collection.
                  </p>
                </div>
              </button>

              <button
                className={`${cardBase} ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => setOpenTokenModal(true)}
              >
                <div
                  className={`p-3 rounded-lg ${
                    darkMode
                      ? 'bg-emerald-900 text-emerald-300'
                      : 'bg-emerald-100 text-emerald-700'
                  }`}
                >
                  <BsArrowUpRightCircle className={iconStyle} />
                </div>
                <div>
                  <p className="text-base font-medium">Create Token</p>
                  <p
                    className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    Spin up a new ASA instantly.
                  </p>
                </div>
              </button>

              <button
                className={`${cardBase} ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => setOpenAppCallsModal(true)}
              >
                <div
                  className={`p-3 rounded-lg ${
                    darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  <AiOutlineDeploymentUnit className={iconStyle} />
                </div>
                <div>
                  <p className="text-base font-medium">Contract Interactions</p>
                  <p
                    className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    Call ARC-4 or app methods.
                  </p>
                </div>
              </button>
            </div>
          </div>
        ) : (
          <div
            className={`text-center mt-8 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            <p>Connect your wallet to access all actions.</p>
          </div>
        )}
      </main>

      {/* Waitlist / Feedback Section */}
      <section
        className={`w-full bg-opacity-60 backdrop-blur-sm py-12 px-6 flex justify-center transition-colors ${
          darkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-900'
        }`}
      >
        <div className="w-full max-w-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">Join Our Waitlist</h3>
          <p className="text-sm mb-6">
            Enter your name and email to stay updated or send feedback about our dApp.
          </p>

          <form
            onSubmit={handleWaitlistSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
            />
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold"
            >
              Submit
            </button>
          </form>

          {formSubmitted && (
            <p
              className={`mt-4 text-sm font-medium ${
                darkMode ? 'text-green-400' : 'text-green-600'
              }`}
            >
              Thanks for joining our waitlist!
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`w-full border-t transition-colors ${
          darkMode
            ? 'bg-gray-800 border-gray-700 text-gray-300'
            : 'bg-white border-gray-200 text-gray-600'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-8">
          {/* About */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-sm leading-relaxed">
              A modern Algorand dApp template demonstrating wallet integration, NFTs, token creation, and smart contract interactions.
            </p>
            <p className="text-xs mt-2 italic">Built on Algorand</p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 flex flex-col md:items-center">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm">
              <li>
                <a href="#" className="hover:text-indigo-500 transition">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition">Learn</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition">Contact</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition">Docs</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex-1 flex flex-col md:items-end">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4 text-xl">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">
                <BsTwitterX />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">
                <BsLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">
                <BsGithub />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">
                <FaDiscord />
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">
                <FaTelegramPlane />
              </a>
            </div>
          </div>
        </div>

        <div
          className={`text-center text-xs py-4 border-t ${
            darkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500'
          }`}
        >
          © 2025 Algorand Builders. All rights reserved.
        </div>
      </footer>

      {/* Modals */}
      <ConnectWallet
        openModal={openWalletModal}
        closeModal={() => setOpenWalletModal(false)}
      />
      <Transact
        openModal={openPaymentModal}
        setModalState={setOpenPaymentModal}
      />
      <NFTmint openModal={openMintModal} setModalState={setOpenMintModal} />
      <Tokenmint openModal={openTokenModal} setModalState={setOpenTokenModal} />
      <AppCalls
        openModal={openAppCallsModal}
        setModalState={setOpenAppCallsModal}
      />
    </div>
  )
}

export default Home
