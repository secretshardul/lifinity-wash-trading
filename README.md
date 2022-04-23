# Wash trading investigation

## Find the discord message
1. Checked- Metaplex, Anchor, Serum
2. Possibly missed- Degen Ape Academy
3. Look


## Explorer approach

- [Solscan page for flares](https://solscan.io/collection/e68bf9abf20e179549afa0205087a6f449db4527b575df0adb589542ac52fd52)- 'minted' indicates that NFTs were minted but never sold again. A lot of NFTs of this type
    1. Count of NFTs with no primary sale
    2. Biggest minters

## Questions

- Were all 10k NFTs sold?: Yes. 30 are kept reserve for partnerships.
- Sold on 26th within 2 hours.


## Data samples

1. Unsole

```json
{
    "info": {
        "_id": "61c8ad9ac5c37f3d0b19574c",
        "key": 4,
        "updateAuthority": "H5q7Z2FJ5KaWmtGquGqoYJYrM73BEpoabzas5y12s38T",
        "mint": "GKUTrZ8aJUj2hCXYftxnfGjbFJMWqBneszLJZzVW77HK",
        "data": {
            "name": "LIFINITY Flares #9996",
            "symbol": "LIFINITY",
            "uri": "https://arweave.net/Rzj-ZqNTYNJm_AQw9t20GhBEyNqFeFLM7103dZq1Kfg",
            "sellerFeeBasisPoints": 500,
            "creators": [
                {
                    "address": "EWyWxSkxWHWGzxfCd9kG7zGrKTUDbZGiV6VbFJF8YfqN",
                    "verified": 1,
                    "share": 0
                },
                {
                    "address": "GmS7MqCNzo9kTQKYvJD7pDKoBNHwc7qyRAwvJUUxfRjr",
                    "verified": 0,
                    "share": 100
                }
            ],
            "id": 9996
        },
        "primarySaleHappened": 1,
        "isMutable": 1,
        "mintTx": "5WhStd6Mivyrg8CPD1k3r9bXuo7xMHqfG3dRXmuWmU2PGzJGLDFspWKbZdtD1CnwhBfveYT1x5B2MQR4YJGRBdWr",
        "createdTime": 1640541568,
        "msgsource": "minttx",
        "collection": "LIFINITY Flares",
        "collectionId": "e68bf9abf20e179549afa0205087a6f449db4527b575df0adb589542ac52fd52",
        "meta": {
            "name": "LIFINITY Flares #9996",
            "symbol": "LIFINITY",
            "description": "Lifinity Flares is a set of 10,000 animated NFTs that directly combine NFTs with DeFi. They are designed to bootstrap liquidity on Lifinity and perpetually create value for the holders. All sale proceeds are deposited into Lifinity's liquidity pools. Royalties and trading fees are either used to buy back Lifinity Flares or are reinvested into the pools. The team takes zero profit. All value accrues to NFT holders.",
            "seller_fee_basis_points": 500,
            "image": "https://www.arweave.net/mulEaO3mwObjzr4dmWkU2JwVgvKIrhrHl6hwcPF5GPk?ext=webp",
            "external_url": "https://lifinity.io",
            "attributes": [
                {
                    "trait_type": "Type",
                    "value": "Standard"
                },
                {
                    "trait_type": "Color",
                    "value": "Red"
                },
                {
                    "trait_type": "Fire type",
                    "value": "Flare"
                },
                {
                    "trait_type": "Background",
                    "value": "Hexagon"
                },
                {
                    "trait_type": "Eyes",
                    "value": "SOL"
                },
                {
                    "trait_type": "Eyewear",
                    "value": "Sunglasses"
                },
                {
                    "trait_type": "Mouth",
                    "value": "Laugh"
                },
                {
                    "trait_type": "Accessory",
                    "value": "Bowtie"
                },
                {
                    "trait_type": "Favorite Burnable",
                    "value": "Rubber"
                }
            ],
            "collection": {
                "name": "LIFINITY Flares",
                "family": "LIFINITY Flares"
            },
            "properties": {
                "files": [
                    {
                        "uri": "https://www.arweave.net/mulEaO3mwObjzr4dmWkU2JwVgvKIrhrHl6hwcPF5GPk?ext=webp",
                        "type": "image/webp"
                    }
                ],
                "category": "image",
                "creators": [
                    {
                        "address": "GmS7MqCNzo9kTQKYvJD7pDKoBNHwc7qyRAwvJUUxfRjr",
                        "share": 100
                    }
                ]
            }
        },
        "family": "LIFINITY Flares"
    },
    "trade": {
        "tradeCount": 0
    }
}
```


2. Sold

```json
{
    "info": {
        "_id": "61c8ad9bc5c37f3d0b195751",
        "key": 4,
        "updateAuthority": "H5q7Z2FJ5KaWmtGquGqoYJYrM73BEpoabzas5y12s38T",
        "mint": "5MeYfuJjGFyrePZiXb57fuCE9ZJu9L7jLy6a38KVrzcY",
        "data": {
            "name": "LIFINITY Flares #10000",
            "symbol": "LIFINITY",
            "uri": "https://arweave.net/ljVa2fpb-ZU0qna0FLfnF56E1Y43bU0YadJz_BvBR6Q",
            "sellerFeeBasisPoints": 500,
            "creators": [
                {
                    "address": "EWyWxSkxWHWGzxfCd9kG7zGrKTUDbZGiV6VbFJF8YfqN",
                    "verified": 1,
                    "share": 0
                },
                {
                    "address": "GmS7MqCNzo9kTQKYvJD7pDKoBNHwc7qyRAwvJUUxfRjr",
                    "verified": 0,
                    "share": 100
                }
            ],
            "id": 10000
        },
        "primarySaleHappened": 1,
        "isMutable": 1,
        "mintTx": "3BmcMQtrFyeUs1Xe6QjkUVjMHXinjUASYFmr4SFH5USV3GjYmDkLYGYFdfhxiZzWz219DDctCG8JDfXDnXhD8xBx",
        "createdTime": 1640541569,
        "msgsource": "minttx",
        "collection": "LIFINITY Flares",
        "collectionId": "e68bf9abf20e179549afa0205087a6f449db4527b575df0adb589542ac52fd52",
        "meta": {
            "name": "LIFINITY Flares #10000",
            "symbol": "LIFINITY",
            "description": "Lifinity Flares is a set of 10,000 animated NFTs that directly combine NFTs with DeFi. They are designed to bootstrap liquidity on Lifinity and perpetually create value for the holders. All sale proceeds are deposited into Lifinity's liquidity pools. Royalties and trading fees are either used to buy back Lifinity Flares or are reinvested into the pools. The team takes zero profit. All value accrues to NFT holders.",
            "seller_fee_basis_points": 500,
            "image": "https://www.arweave.net/NCP9SVjXrDhVWA9SuvWwPtYpw4fm7cuGybEVADyAmCE?ext=webp",
            "external_url": "https://lifinity.io",
            "attributes": [
                {
                    "trait_type": "Type",
                    "value": "Standard"
                },
                {
                    "trait_type": "Color",
                    "value": "Blue"
                },
                {
                    "trait_type": "Fire type",
                    "value": "Zap"
                },
                {
                    "trait_type": "Eyes",
                    "value": "Laughing"
                },
                {
                    "trait_type": "Mouth",
                    "value": "Smile 2"
                },
                {
                    "trait_type": "Favorite Burnable",
                    "value": "Oil"
                }
            ],
            "collection": {
                "name": "LIFINITY Flares",
                "family": "LIFINITY Flares"
            },
            "properties": {
                "files": [
                    {
                        "uri": "https://www.arweave.net/NCP9SVjXrDhVWA9SuvWwPtYpw4fm7cuGybEVADyAmCE?ext=webp",
                        "type": "image/webp"
                    }
                ],
                "category": "image",
                "creators": [
                    {
                        "address": "GmS7MqCNzo9kTQKYvJD7pDKoBNHwc7qyRAwvJUUxfRjr",
                        "share": 100
                    }
                ]
            }
        },
        "family": "LIFINITY Flares"
    },
    "trade": {
        "tradeCount": 1,
        "tradeTime": 1641166475,
        "price": 5500000000,
        "dex": "magiceden",
        "signature": "nLzcjGUjdcZ8bSZgm4WgUdwgxKq6zFdnxFyEgzXY6ZXks8iu9dhKgKd6G8gUeEKvVEZNvA5RxJaVEFGTHs2HK3z"
    }
}
```

## links

1. Honey partnership- https://twitter.com/Lifinity_io/status/1482357878954786820?s=20&t=q216xxg-0Bjzst4HUEEnMA
2. Chest finance partnership- https://twitter.com/Lifinity_io/status/1482288269282971648?s=20&t=q216xxg-0Bjzst4HUEEnMA
3. Armani- https://twitter.com/hyperspacexyz/status/1478465472597086208?s=20&t=q216xxg-0Bjzst4HUEEnMA
4. Ninja- https://twitter.com/Lifinity_io/status/1478031359247806465?s=20&t=q216xxg-0Bjzst4HUEEnMA
