import * as React from 'react'
import { Connector, useConnect } from 'wagmi'
import { /* walletConnect,  safe, */ injected, metaMask, coinbaseWallet, } from 'wagmi/connectors'
import { metadata } from '../../config/Wagmi'

export default function WalletOptions() {
  const { connectors, connect } = useConnect()
  const walletConnectors = [
    {
      connector: injected({ shimDisconnect: true }),
      logoSrc: "/logo/browser-wallet.svg",
      buttonText: "Browser Wallet",
    },
    {
      connector: metaMask(),
      logoSrc: "/logo/MetaMask.png", // 注意：这里你可能想用不同的图标，比如 MetaMask 的图标  
      buttonText: "MetaMask",
    },
    {
      connector: coinbaseWallet({ appName: metadata.name, appLogoUrl: metadata.icons[0] }),
      logoSrc: "/logo/coinbase.svg",
      buttonText: "CoinBase",
    },]
  return (
    <>

      <div className='WalletOptions'>
        {walletConnectors.map((wc, index) => (
          <button
            type="button"
            key={wc.logoSrc}
            onClick={() => connect({ connector: wc.connector })}
            className='btn btn-outline-dark'
          >
            <img src={wc.logoSrc} alt={wc.buttonText} className='img' />
            <span className='span'>{wc.buttonText}</span>
          </button>
        ))}
      </div>
      {/*       <WalletOption
        key={connector.uid}
        connector={connector}
        onClick={() => connect({ connector })}
      /> */}
    </>
  )
}


function WalletOption({
  connector,
  onClick,
}: {
  connector: Connector
  onClick: () => void
}) {
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    ; (async () => {
      const provider = await connector.getProvider()
      setReady(!!provider)
    })()
  }, [connector])

  return (
    <>

      <button disabled={!ready} onClick={onClick} className='Card'>
        {connector.name}
      </button>
    </>
  )
}