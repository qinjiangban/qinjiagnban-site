import Link from 'next/link'
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

export default function Account() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

  return (
    <div>

      <button onClick={() => disconnect()} className='Card'>断开连接</button>


      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}

      当前连接账户:
      <Link href={`https://www.oklink.com/multi-search#key=${ensName ? `${ensName} (${address})` : address}`} 
      className='web3_link'
      target='_blank'>
        {address && <b>{ensName ? `${ensName} (${address})` : address}↗</b>}
      </Link>


    </div>
  )
}