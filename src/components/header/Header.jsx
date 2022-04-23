import React from "react";
import { useMoralis } from "react-moralis";
import metaMaskLogo from "../../metamask.svg";
import "./header.css";

export const Header = () => {
  // Get auth state from moralis
  const { isAuthenticated, logout, user } = useMoralis();
  const userEthAddress = user && user.get("ethAddress");

  // Handle logout
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <header>
      <nav>
        <h1 className='app-name text-style'>My-NFT Minter</h1>
        {/* Connect wallet button */}
        {isAuthenticated && (
          <button className='wallet-btn' onClick={handleLogout}>
            <img src={metaMaskLogo} alt='Metamask logo' />
            <span>
              {userEthAddress.slice(0, 4).toUpperCase()}...
              {userEthAddress.slice(-4).toUpperCase()}
            </span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={16}
              height={16}
              fill='currentColor'
              className='bi bi-power'
              viewBox='0 0 16 16'
            >
              <path d='M7.5 1v7h1V1h-1z' />
              <path d='M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z' />
            </svg>
          </button>
        )}
      </nav>
    </header>
  );
};
