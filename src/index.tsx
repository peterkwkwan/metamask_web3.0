import React from 'react';
import ReactDOM from 'react-dom';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';
import './index.css';
import App from './App';

function getLibrary(provider: ethers.providers.ExternalProvider) {
  return new ethers.providers.Web3Provider(provider);
}

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <App />
  </Web3ReactProvider>,
  document.getElementById('root'),
);
