import { Chain } from 'wagmi'

export const SPC = {
  id: 3669,
  name: 'SenjePower',
  network: 'SenjePower',
  nativeCurrency: {
    decimals: 18,
    name: 'SenjePower',
    symbol: 'SPC',
  },
  rpcUrls: {
    public: { http: ['https://rpc.senjepowersscan.com'] },
    default: { http: ['https://rpc.senjepowersscan.com'] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: 'https://snowtrace.io' },
    default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 11_907_934,
    },
  },
} as const satisfies Chain
