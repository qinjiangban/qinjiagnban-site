import * as React from 'react'
import {
    type BaseError,
    useSendTransaction,
    useWaitForTransactionReceipt
} from 'wagmi'
import { parseEther } from 'viem'
import Link from 'next/link'
export default function SendTransaction() {
    const {
        data: hash,
        error,
        isPending,
        sendTransaction
    } = useSendTransaction()

    async function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const to = '0x96286bb80c494d5917f4d0f9a8e7255023ef6ee6'
        const formData = new FormData(e.target as HTMLFormElement)
        const value = formData.get('value') as string
        sendTransaction({ to, value: parseEther(value) })
    }

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({
            hash,
        })

    return (
        <div>

            <form onSubmit={submit} >
                {/* <input name="address" placeholder="区块链地址" required style={{ width: '100%', padding: '10px', boxShadow: '0 0 2px #ea7411' }} /> */}
                <input name="value" placeholder="打赏数量 ETH" required style={{ padding: '10px', boxShadow: '0 0 2px #ea7411' }} />
                <button
                    disabled={isPending}
                    type="submit"
                >
                    <div className='Card'>
                        {isPending ? '确认...' : '发送'}
                    </div>
                </button>


                {hash && <div>交易哈希: <Link href={`https://www.oklink.com/zh-hans/multi-search#key=${hash}`} target='_blank'
                className='web3_link'
                >{hash}↗</Link> </div>}

                {isConfirming && <div className='Card'>正在等待确认...</div>}

                {isConfirmed && <div className='Card'>交易已确认</div>}

                {error && (
                    <div>错误: {(error as BaseError).shortMessage || error.message}</div>
                )}
            </form>
        </div>
    )
}