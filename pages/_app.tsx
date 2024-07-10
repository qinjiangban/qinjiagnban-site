import "./css/globals.css";
import "./css/Novice.css";
import "./css/Home.css";

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
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
    </div>
  );
}
