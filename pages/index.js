import Head from 'next/head';
import axios from 'axios';

import crypto from 'crypto';

import {useState, useCallback} from 'react';
import { PopupButton } from '@typeform/embed-react'

export default function Home() {
  const [email, setEmail] = useState('');
  const createNewSubscriber= useCallback(async (email) => {
    console.log('Creating new subscriber: ', email);
    let result;
    try{
      result = await axios.post(
        `${
          process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://localhost:1337'
        }/auth/local/register`,
        {username:email, password:crypto.randomBytes(16), email:email, role:{name:"Member"}}
      );
    }catch(e){
      console.log("ERROR",e);
    }
    console.log("Result:", result);
    setEmail('');
  });

  
  return (
    <div className="flex flex-col items-center justify-center h-screen max-h-screen min-h-screen bg-maximum-red">
      <Head>
        <title>Joking On</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full max-h-[90%] px-20 text-center bg-maximum-red space-y-4">
        <PopupButton
          id="ROgN6Csu"
          className="absolute px-8 py-2 text-xs font-bold bg-black rounded-lg text-lemon-meringue top-4 right-8 active:scale-75"
        >
          Request Comedian Access
        </PopupButton>
        <h1 className="min-w-full p-2 mt-24 text-6xl font-bold text-black">
          JokingOn
        </h1>

        <div className="flex flex-col items-center justify-center w-full -mb-24 space-y-4">
          <label className="p-4 text-xl font-bold">Join our newsletter</label>
          <input
            type="text"
            className="w-full p-2 mx-4 border-2 border-black rounded-lg outline-none text-lemon-meringue placeholder-lemon-meringue sm:w-2/3 bg-maximum-red"
            placeholder="What's your email?"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button
            className="w-1/3 p-2 font-bold bg-black rounded-lg outline-none text-lemon-meringue sm:mt-4 ring-black ring-2 active:scale-75"
            onClick={(e) => {
              e.preventDefault();
              createNewSubscriber(email);
            }}
          >
            Submit
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-around max-w-4xl -mt-32 sm:w-full">
          <a className="text-center rounded-xl text-maximum-red focus:text-maximum-black sm:w-5/6 hover:text-black">
            <h3 className="font-bold">NFT Raise</h3>
            <p className="">
              To join our NFT Raise, please send the NFT(s), ethereum mainnet
              only, that you would like to contribute to:
              <span className="block text-sm text-maximum-red hover:text-black">
                0xD70ac44Eb0055d089aDF96F0318f3509C5C70cAa
              </span>
              Eventually, I will send back the amount of laugh tokens I feel the
              NFT you sent was worth. You may send multiple NFTs.
              <span className="block p-4 text-xs sm:text-sm">
                Disclaimer: The secondary market value, or the value of a
                particular NFT when I choose to sell it, doesn't contribute to
                my decision of how many laugh tokens to send you. ERC20 tokens
                are not a substitute for NFTs. ERC20 received will not result in
                reciprocation of laugh tokens. Any ERC20 tokens sent will not be
                returned. This raise ends whenever I decide it does.
              </span>
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-[10%] p-2 bg-black">
        <a
          className="flex items-center justify-center"
          href="https://www.immutable.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="mr-4 text-maximum-red">Powered by</div>
          <img
            src="https://assets-global.website-files.com/5f7eec37ff782e797edabe11/60e443ed35f546d0d2ede08f_logo-main-p-500.png"
            alt="Immutable Logo"
            className="h-4 ml-2"
          />
        </a>
      </footer>
    </div>
  );
}
