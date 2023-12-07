
// write your NFT miner here
import {Address, TonClient} from "ton"
import {getHttpEndpoint} from "@orbs-network/ton-access";


async function main () {

  const wallet = Address.parse(
    '0QC7FxZAzUz5vAbMBiOlY_pgGV0o-aqJyag9QVL5Rv3evOqq'
    );
  const collection = Address.parse(
    'kQC7FxZAzUz5vAbMBiOlY_pgGV0o-aqJyag9QVL5Rv3evLdv'
    );


// get the decentralized RPC endpoint in Testnet
const endpoint = await getHttpEndpoint({
    network: 'testnet',
  });

  // initialize ton library
  const apiKey = '71a9c081c90f26f306bb84313a84aad6d494a4e8085b245f2882dfe4cf971dee'
  const client = new TonClient({ endpoint, apiKey })

    // ... previous code

    const miningData = await client.callGetMethod(collection, 'get_mining_data')

 console.log(miningData)
}
main()