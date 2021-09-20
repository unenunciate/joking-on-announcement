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
        <title>JokingOn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full max-h-[90%] px-8 text-center bg-maximum-red space-y-4">
        
        <h1 className="min-w-full pt-4 text-6xl font-bold text-black">
          JokingOn
        </h1>

        <div className="flex flex-col items-center justify-center min-w-full -mb-8 space-y-4">
          <label className="p-4 text-xl font-bold">Join our newsletter</label>
          <input
            type="text"
            className="w-full p-2 mx-4 text-white placeholder-white border-2 border-black rounded-lg outline-none sm:w-2/3 bg-maximum-red"
            placeholder="What's your email?"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="flex flex-col items-center justify-center w-full space-y-4 sm:mt-4">
          <button
            className="w-5/6 p-2 font-bold bg-black rounded-lg outline-none text-lemon-meringue ring-black ring-2 active:scale-75"
            onClick={(e) => {
              e.preventDefault();
              createNewSubscriber(email);
            }}
          >
            Submit
          </button>
          <PopupButton
          id="ROgN6Csu"
          className="w-5/6 p-2 font-bold bg-black rounded-lg outline-none text-lemon-meringue ring-black ring-2 active:scale-75"
        >
          Request Comedian Access
        </PopupButton>
      </div>
        </div>

        <div className="flex flex-wrap items-center justify-around max-w-4xl -mt-16 sm:w-full">
          <a className="text-center rounded-xl text-maximum-red focus:text-maximum-black sm:w-5/6 hover:text-black">
            <h3 className="font-bold">NFT Raise</h3>
            <p className="text-sm">
              To join our NFT Raise, please send the NFT(s), ethereum mainnet
              only, that you would like to contribute to:
              <span className="block text-xs text-maximum-red hover:text-lemon-meringue">
                0xD70ac44Eb0055d089aDF96F0318f3509C5C70cAa
              </span>
              Eventually, we will send back the amount of laugh tokens we feel the
              NFT you sent was worth. You may send multiple NFTs.
              <span className="block p-4 text-[8px] sm:text-xs">
                Disclaimer: The secondary market value, or the value of a
                particular NFT when we choose to sell it, doesn't contribute to
                our decision of how many laugh tokens to send you. ERC20 tokens
                are not a substitute for NFTs. ERC20 received will not result in
                reciprocation of laugh tokens. Any ERC20 tokens sent will not be
                returned. This raise ends whenever we decide it does.
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
