import './App.css';
import { useState, useEffect } from 'react';

const App = () => {

  const [showTopButton, setShowTopButton] = useState(false);


  // Smooth scroll to footer
  const scrollToFooter = () => {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Show the actual button 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-green-400 min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="flex justify-end items-center bg-gray-900 py-4 px-6 
      sticky top-0 z-10 border-b-2">
        <a
          href="https://x.com/enigma_decipher"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-purple-500 font-bold
          hover:scale-105"
        >
          Twitter
        </a>
        <button
          onClick={scrollToFooter}
          className="bg-orange-500 text-black py-2 px-4 rounded
           font-bold hover:scale-105 hover:bg-orange-600 hover:text-white
           ml-4 hover:border-white hover:border-2"
        >
          Buy
        </button>
      </nav>

      {/* Header Section */}
      <header className="text-center py-10">
        <img
          src="/img/mishgan.png"
          alt="$MISHGAN"
          className="w-96 h-96 mx-auto 
          rounded-full border-white border-4 mt-4
          hover:scale-110 hover:shadow-xl hover:shadow-green-400"
        />
        <h1 className="text-4xl font-bold mt-6">$MISHGAN TRENCHER</h1>

        <h2 className='text-3xl font-bold mt-4'>Disclaimer</h2>
        <p className='mt-4 text-2xl font-semibold bg-slate-600 
        rounded-lg border-2 border-white hover:scale-105 w-80 mx-auto hover:shadow-2xl hover:shadow-green-500'>
          Developer will airdrop his all tokens to the community.
          In order to get them, please go to our twitter account and raid the pinned post.
        </p>
        <h3 className='text-3xl font-bold mt-10 text-cyan-500'>Twitter Instructions</h3>
        <p className='mt-4 text-2xl font-semibold bg-slate-600 
        rounded-lg border-2 border-white hover:scale-105 w-80 mx-auto hover:shadow-2xl hover:shadow-green-500'>
          Follow the page, drop your Wallet Address in the comments, Retweet & Like
        </p>
        <p className='text-4xl font-extrabold mt-8 text-orange-600'>$$$ GOOD LUCK TRENCHING $$$</p>
      </header>

      {/* Transition Section */}
      <div className="border-t-4 border-b-4 border-green-400 shadow-lg mb-12"></div>

      {/* Body Section */}
      <main className="flex flex-col items-center px-4 space-y-6 flex-grow">
        <h1 className='text-purple-400 font-extrabold text-4xl mb-4'>Our Mission</h1>
        {/* First Image & Text */}
        <div className="flex flex-row items-center max-w-4xl w-full">
          <img
            src="/img/2_decisions.png"
            alt="Side Left"
            className="w-96 h-auto animate-fadeIn hover:scale-110 hover:shadow-2xl hover:shadow-green-500"
          />
          <p className="text-left ml-10 max-w-md text-2xl font-semibold">
            <span className="text-purple-600 text-3xl">Yo</span>, this meme coin? It's the ultimate grindlord of the meme coin fam, out here hustling harder than a gamer on a no-sleep raid for those fat stacks of cash. Picture this: our dude's living in the trenches, but not the war kind, the meme kind - where every day is a battle for the biggest bag. They're in it, grinding like there's no tomorrow, turning every meme into a money-making machine. We're talking 24/7, no breaks, just pure dedication to the art of stacking them coins.
          </p>
        </div>

        {/* Second Image & Text */}
        <div className="flex flex-row-reverse items-center max-w-4xl w-full mt-14">
          <img
            src="/img/room_suggestion_meme.png"
            alt="Side Right"
            className="w-96 h-auto animate-fadeIn border-white border-4 mt-12 hover:scale-110 hover:shadow-2xl hover:shadow-green-500"
          />
          <p className="text-right mr-10 max-w-md text-2xl font-semibold">
            <span className="text-purple-600 text-3xl">This ain't your average Joe;</span> this is the meme coin warrior, the unsung hero of the crypto trenches. They've got memes on lock, and their wallet's getting fatter by the minute. Forget about the 9-5, this is the life of a meme coin mogul, where every post could be the one that blows up. So, if you're down for the grind, join the meme coin trenches - it's where legends are made, and wallets get filled!
          </p>
        </div>
      </main>


      {/* Footer Section */}
      <footer
        id="footer"
        className="text-center py-6 bg-gray-900 text-green-400 mt-10 border-t-2"
      >
        <p className='font-bold text-2xl'>
          Token Contract Address: <span className="text-purple-400">TBA...</span>
        </p>
        <a
          href="https://buy-meme-coin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block
           bg-purple-700 text-black 
           py-2 px-4 font-bold border-white border-2 rounded-lg mt-4 hover:bg-purple-800
           hover:text-white hover:scale-105 hover:shadow-md hover:shadow-green-400
           hover:border-black"
        >
          Buy it on <span className='font-extrabold text-emerald-500'>Pump.fun</span>
        </a>

        <p className='text-xl font-semibold mt-6'>Copyright © Deciphered Enigma. All rights reserved.</p>
      </footer>

      {/* Scroll to Top Button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-orange-500 text-black py-2 px-4 rounded-full
           font-bold hover:scale-105 hover:bg-orange-600 hover:text-white
           hover:border-white hover:border-2"
        >
          Top
        </button>
      )}


    </div>
  );
};

// Export App component
export default App;
