import { useAccount } from 'wagmi'
import Account from '../components/Account'
import WalletOptions from '../components/WalletOptions'
import SendTransaction from '../components/SendTransaction'
export default function Web3() {
  function ConnectWallet() {
    const { isConnected } = useAccount()
    if (isConnected) return <Account />
    return <>
      点击连接，已安装的钱包：
      <WalletOptions />
    </>
  }
  return (
    <div className='web3'>
      <div className='WalletOptions'>

        <ConnectWallet />
        <SendTransaction />
      </div>



      <div className='WalletOptions'>
        <p>在EVM网络mint一个NFT</p>
        <div className="position:relative;width:100%;padding-top:calc(97.61% + 72px)">
          <iframe src="https://zora.co/collect/zora:0x92cea0e698f42d15d136c5257eeff5cafcc6552a/1/embed?referrer=0xcd284038f2E68c6A43b04695f84377f38686eE56" className="border:0;background-color:transparent;position:absolute;inset:0" width="100%" height="100%" sandbox="allow-pointer-lock allow-same-origin allow-scripts allow-popups"></iframe>
        </div>


      </div>








    </div>
  )
}
