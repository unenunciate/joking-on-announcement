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
            {false && (
              <button
                onClick={() => router.push("https://app.jokingon.com/login")}
                className="w-5/6 p-2 font-bold bg-black rounded-lg outline-none sm:w-2/3 md:w-1/2 lg:w-1/3 text-lemon-meringue ring-black ring-2 active:scale-75"
              >
                {" "}
                Application{" "}
              </button>
            )}
            <PopupButton
              id="ROgN6Csu"
              className="w-5/6 p-2 font-bold bg-black rounded-lg outline-none sm:w-2/3 md:w-1/2 lg:w-1/3 text-lemon-meringue ring-black ring-2 active:scale-75"
            >
              Request Access
            </PopupButton>
          </div>
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
          href="https://polkadot.network/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-24 -ml-2 font-bold text-lemon-meringue">
            Built On
          </div>
          <img
            src="/polkadot.svg"
            alt="Polkadot Logo"
            className="items-center w-24 h-10"
          />
        </a>
      </footer>
    </div>
  );
}
