
import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-background w-screen">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-10 lg:grid-cols-3 lg:text-center mx-auto text-primary bg-background pb-20">
        <a
          href=""
          className="group flex flex-col justify-center items-center rounded-lg border border-active border-transparent px-5 py-4 mx-12 my-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-xl font-semibold`}>
            About{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn more about how to<br></br>maximize ReelRadar!
          </p>
        </a>

        <a
          href=""
          className="group flex flex-col justify-center items-center rounded-lg border border-active border-transparent px-5 py-4 mx-12 my-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-xl font-semibold`}>
            Share{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Send this link to your friends<br></br>and family!
          </p>
        </a>

      <a
          href=""
          className="group flex flex-col justify-center items-center rounded-lg border border-active border-transparent px-5 py-4 mx-12 my-4"
          target="_blank"
          rel="noopener noreferrer"
        >
        <h2 className={`mb-3 text-xl font-semibold`}>Contact{' '}</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Connect with us and share<br></br>your feedback! 
        </p>
      </a>

      </div>
    </footer>
  );
}

export default Footer;

