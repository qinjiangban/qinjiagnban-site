import "../css/globals.css";
import "../css/Novice.css";
import "../page/Home.css";
import '../page/web3.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'

import { Inter } from "next/font/google";
import { config } from "../config/Wagmi";
const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {

  return (

    <div className={inter.className}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </WagmiProvider>

    </div>
  );
}
