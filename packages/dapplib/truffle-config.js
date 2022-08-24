require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note meadow coach good prison off gift'; 
let testAccounts = [
"0xb24132a18517cb630485c6694aec23c7814b22bd99f117440c80d7141ea64ac0",
"0xb88d106f37dbf6221817ef8c9d4f4f85bbd7c25a354b1e2baa9d62f6bd9a0c52",
"0x233b91b1b98e396ebb26dad983591f5cd58d668d58a0c6a2d16a1f95f0b5dbf4",
"0x4b2aa31bcb7a98da630a0059928e50af6750aa620b2f071551e3273455f5a853",
"0x79929ac910871d54eac6c3f89b3eef0cd3c9f5ea254b4aa9eec380f9f9206384",
"0xbe4ea57f1bf7b4b190f76b3d9929f58e42d6568f7bb23bb9bee23d97eaab39f9",
"0x3c29d50bdd79dd6fe80056938de98533ea431f5156a38a620bd61203e613e220",
"0xe8db8a27537ee20f56a79284f47fa5669eb6a7a5b6e31b9efb5365733b0cf37f",
"0x8cae3d64c78c56839b16b680fcd1ffa31570f5dbc292a76e5e87168a953f2d88",
"0x58da329c11f1d396e2f36bf2f021baf16715c999a54185fcfd0a8e5072589412"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

