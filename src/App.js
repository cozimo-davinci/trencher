import './App.css';
import { useState, useEffect } from 'react';

const App = () => {

  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    document.title = "Trencher";
  }, []);


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
          src={`${process.env.PUBLIC_URL}/img/mishgan.png`}
          alt="$MISHGAN"
          className="w-96 h-96 mx-auto 
          rounded-full border-white border-4 mt-4
          hover:scale-110 hover:shadow-xl hover:shadow-green-400"
        />
        <h1 className="text-4xl text-red-600 font-extrabold mt-6">$MISHGAN TRENCHER</h1>

        <h2 className='text-3xl font-bold mt-8'>IMPORTANT DISCLAIMER</h2>
        <p className='mt-10 text-2xl font-semibold bg-slate-800 
        rounded-lg border-2 border-white hover:scale-105 w-4/5 mx-auto hover:shadow-2xl hover:shadow-green-500 p-6 leading-relaxed'>
          <strong className='text-purple-700'>As a blockchain enthusiast,</strong> I've been disappointed with the current state of meme coins.
          That's why I've launched this project – to set a new standard and potentially make history.

          <h3 className='text-purple-600 text-3xl mt-6'>Behind the Scenes:</h3>
          <ul className='list-disc list-inside ml-6 mt-4'>
            <li><strong className='text-yellow-400'>Developer Commitment:</strong> I will purchase the token at around $10, showing my faith in the project.</li>
            <li><strong className='text-yellow-400'>Airdrop:</strong> All my holdings will be airdropped to the community via our X account to foster a fair distribution.</li>
            <li><strong className='text-yellow-400'>No Bots:</strong> There will be no use of sniper or market-making bots to manipulate the market.</li>
            <li><strong className='text-yellow-400'>Personal Responsibility:</strong> I am not responsible for your investment outcomes; your decisions drive your results.</li>
            <li><strong className='text-yellow-400'>Community-Driven:</strong> I'm just a developer with a vision to improve this market through collective action.</li>
          </ul>

          <h3 className='text-purple-600 text-3xl mt-6'>Project Goals:</h3>
          <ul className='list-disc list-inside ml-6 mt-4'>
            <li><strong className='text-yellow-400'>Historical Impact:</strong> Like Dogecoin and Shiba Inu, our aim is to demonstrate the power of community in reaching a $1B+ market cap or more.</li>
            <li><strong className='text-yellow-400'>Blockchain's Potential:</strong> We want to showcase what's possible with blockchain technology through collective effort.</li>
          </ul>

          <h3 className='text-purple-600 text-3xl mt-6'>Final Thoughts:</h3>
          <ul className='list-disc list-inside ml-6 mt-4'>
            <li><strong className='text-yellow-400'>Community Power:</strong> The success of this token depends on the power of the community.</li>
            <li><strong className='text-yellow-400'>Investment Caution:</strong> If you're not in it for the long haul or lack conviction, please reconsider investing in this token.</li>
          </ul>

          <h3 className='text-purple-600 text-3xl mt-6'>How to Participate:</h3>
          <p className='mt-4'>
            <strong className='text-yellow-400'>Airdrop Opportunity:</strong> To receive the airdrop, engage with our pinned post on our official X account.
          </p>

          <p className='text-center mt-6 text-orange-600 text-2xl font-extrabold'>S.O.R.T.E.D</p>
        </p>

        <h3 className='text-3xl font-bold mt-10 text-cyan-500'>Twitter Instructions</h3>
        <p className='mt-4 text-2xl font-semibold bg-slate-800 
        rounded-lg border-2 border-white hover:scale-105 w-1/3 mx-auto hover:shadow-2xl hover:shadow-green-500'>
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
            src={`${process.env.PUBLIC_URL}/img/2_decisions.png`}
            alt="Side Left"
            className="w-96 h-auto animate-fadeIn hover:scale-110 hover:shadow-2xl hover:shadow-green-500"
          />
          <p className="text-left ml-10 max-w-md text-2xl font-semibold hover:scale-105
          hover:shadow-lg hover:shadow-green-400 hover:border-white hover:border-2 hover:rounded-lg">
            <span className="text-purple-600 text-3xl">Yo</span>, this meme coin? It's the ultimate grindlord of the meme coin fam, out here hustling harder than a gamer on a no-sleep raid for those fat stacks of cash. Picture this: our dude's living in the trenches, but not the war kind, the meme kind - where every day is a battle for the biggest bag. They're in it, grinding like there's no tomorrow, turning every meme into a money-making machine. We're talking 24/7, no breaks, just pure dedication to the art of stacking them coins.
          </p>
        </div>

        {/* Second Image & Text */}
        <div className="flex flex-row-reverse items-center max-w-4xl w-full mt-14">
          <img
            src={`${process.env.PUBLIC_URL}/img/room_suggestion_meme.png`}
            alt="Side Right"
            className="w-96 h-auto animate-fadeIn border-white border-4 mt-12 hover:scale-110 hover:shadow-2xl hover:shadow-green-500"
          />
          <p className="text-right mr-10 max-w-md text-2xl font-semibold
          hover:scale-105
          hover:shadow-lg hover:shadow-green-400 hover:border-white hover:border-2 hover:rounded-lg">
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
