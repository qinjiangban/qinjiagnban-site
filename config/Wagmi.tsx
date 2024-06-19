
import { mainnet, polygon, arbitrum, optimism, base, zkSync, linea, meter, metis, xLayer, okc, bsc, opBNB, merlin, bevmMainnet, rootstock, sepolia, } from 'wagmi/chains'
import { injected, } from 'wagmi/connectors'
import { http, createConfig } from 'wagmi'



// Get projectId at https://cloud.walletconnect.com
//const projectId = process.env.WALLET_CONNECT_ID || 'WALLET_CONNECT_ID'

export const metadata = {
    name: '覃江扮',
    description: '覃江扮个人网站',
    url: 'http://qinjiangban.site',
    icons: ['/favicon.ico']
}

export const config = createConfig({
    chains: [mainnet, polygon, arbitrum, optimism, base, zkSync, linea, meter, metis, xLayer, okc, bsc, opBNB, merlin, bevmMainnet, rootstock, sepolia],
    transports: {
        [mainnet.id]: http(),
        [polygon.id]: http(),
        [arbitrum.id]: http(),
        [optimism.id]: http(),
        [base.id]: http(),
        [zkSync.id]: http(),
        [linea.id]: http(),
        [meter.id]: http(),
        [metis.id]: http(),
        [xLayer.id]: http(),
        [okc.id]: http(),
        [bsc.id]: http(),
        [opBNB.id]: http(),
        [merlin.id]: http(),
        [bevmMainnet.id]: http(),
        [rootstock.id]: http(),
        [sepolia.id]: http(),
    },
    ssr: false,
    /*   storage: createStorage({
        storage: cookieStorage
      }), */
    connectors: [
        injected(),
        //walletConnect({ projectId }),
        //metaMask(),
        //safe(),
    ],

})