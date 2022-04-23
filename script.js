const collection = require('./data/collection.json')
const axios = require('axios').default

async function main() {
  let unsold = 0
  const owners = {}
  for (const item of collection.data) {
    if (item.trade.tradeCount === 0) {
      unsold++

      const mint = item.info.mint
      const resp = await axios.get(`https://api.solscan.io/token/holders?token=${mint}&offset=0&size=1`)
      const owner = resp.data.data.result[0].owner

      if (!owners[owner]) {
        owners[owner] = 1
      } else {
        owners[owner] += 1
      }
    }
  }
  console.log('owners', owners)
  console.log('unsold', unsold)
}

main()
