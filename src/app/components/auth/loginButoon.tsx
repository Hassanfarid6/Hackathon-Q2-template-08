import { useUser } from '@clerk/nextjs';

import {SignInButton} from "@clerk/nextjs"


export default function SignInButtonComponent() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null; // Wait until user data is loaded

  return (
    !isSignedIn && (
      // flex items-center px-3 py-2 bg-blue-100 border-2 border-slate-700 text-black text-xs rounded hover:bg-yellow-100 mx-2
      //  text-sm sm:text-base md:text-lg xl:text-xl text-black px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 
      <button className="bg-blue-100 hover:bg-blue-300 font-medium 
                 text-base text-gray-800 px-2 mb-2 ml-2 mr-2 rounded-md transition duration-200">
        <SignInButton>Sign In</SignInButton>
      </button>
    )
  );
}