import { InjectedConnector } from '@web3-react/injected-connector';

export const MetaMask = new InjectedConnector({
    supportedChainIds: [1, 3, 56, 97, 137, 80001],
});
