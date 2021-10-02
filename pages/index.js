import Head from 'next/head';

import { useRouter } from 'next/router';

import { PopupButton } from '@typeform/embed-react'

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center h-screen max-h-screen min-h-screen bg-maximum-red">
      <Head>
        <title>JokingOn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-around flex-1 w-full max-h-[90%] px-8 text-center bg-maximum-red space-y-8">
        <h1 className="min-w-full text-6xl font-bold text-black">
          <a
            href="https://www.jokingon.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            JokingOn
          </a>
        </h1>

        <div className="flex flex-col items-center justify-center min-w-full -mb-8">
          <div className="flex flex-col items-center justify-center w-full space-y-4">
            <button onClick={() => router.push("https://app.jokingon.com/login")} className="w-5/6 p-2 font-bold bg-black rounded-lg outline-none sm:w-2/3 md:w-1/2 lg:w-1/3 text-lemon-meringue ring-black ring-2 active:scale-75"> Application </button>
            <PopupButton
              id="ROgN6Csu"
              className="w-5/6 p-2 font-bold bg-black rounded-lg outline-none sm:w-2/3 md:w-1/2 lg:w-1/3 text-lemon-meringue ring-black ring-2 active:scale-75"
            >
              Request Access
            </PopupButton>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-around max-w-4xl -mt-16 sm:w-full">
          <a className="text-center rounded-xl text-maximum-red focus:text-maximum-black sm:w-5/6 lg:w-1/2 hover:text-black">
            <h3 className="font-bold">NFT Raise</h3>
            <p className="text-sm">
              To join our NFT Raise, please send the NFT(s), only ethereum mainnet
              or Avax C-Chain accepted, that you would like to contribute to:
              <span className="block text-xs text-maximum-red hover:text-lemon-meringue">
                0xD70ac44Eb0055d089aDF96F0318f3509C5C70cAa
              </span>
              Eventually, we will send back the amount of joke tokens we feel
              the NFT you sent was worth. You may send multiple NFTs.
              <span className="block p-4 text-[8px] sm:text-xs">
                Disclaimer: The secondary market value, or the value of a
                particular NFT when we choose to sell it, doesn't contribute to
                our decision of how many joke tokens to send you. Fungible tokens
                are not a substitute for NFTs. Fungible tokens received will not result in
                reciprocation of joke tokens. Any ERC20 tokens sent will not be
                returned. This raise ends whenever we decide it does.
              </span>
            </p>
          </a>
        </div>
        <a
          href="https://www.twitter.com/jokingonlaugh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/twitter.png" width={64} height={64} />
        </a>
      </main>

      <footer className="flex items-center justify-center w-full h-[10%] p-2 bg-black">
        <a
          className="flex items-center"
          href="https://www.avax.network/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-24 -ml-2 font-bold text-lemon-meringue">
            Built On
          </div>
          <img
            src="/avax.svg"
            alt="Avax Logo"
            className="items-center w-24 h-10"
          />
        </a>
      </footer>
    </div>
  );
}
