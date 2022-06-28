export enum ChainName {
    ETH = 'ETH',
    RopstenETH = 'RopstenETH',
    RinkebyETH = 'RinkebyETH',
    GoerliETH = 'GoerliETH',
    KovanETH = 'KovanETH',
    BNB = 'BNB',
    MATIC = 'MATIC',
}

export const chainIdMap = new Map<number, ChainName>([
    [1, ChainName.ETH],
    [3, ChainName.RopstenETH],
    [4, ChainName.RinkebyETH],
    [5, ChainName.GoerliETH],
    [42, ChainName.KovanETH],
    [56, ChainName.BNB],
    [97, ChainName.BNB],
    [137, ChainName.MATIC],
    [80001, ChainName.MATIC],
]);

enum ExchangeAsset {
    Ethereum = 'ethereum',
    Matic = 'matic-network',
    Binance = 'binance-coin',
}

export const exchangeAssetMap = new Map<number, string>([
    [1, ExchangeAsset.Ethereum],
    [3, ExchangeAsset.Ethereum],
    [4, ExchangeAsset.Ethereum],
    [5, ExchangeAsset.Ethereum],
    [42, ExchangeAsset.Ethereum],
    [56, ExchangeAsset.Binance],
    [97, ExchangeAsset.Binance],
    [137, ExchangeAsset.Matic],
    [80001, ExchangeAsset.Matic],
]);
