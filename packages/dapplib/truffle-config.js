require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note ranch code grace drip equal general'; 
let testAccounts = [
"0xb3ea65a57377967342690d4810bf56656f7c0253897ad4c67498c4e803f9e1fd",
"0x5e39c9528d67d05d7d817e06a7766ac4d63872ae0f41fa81eac32ae171106f8c",
"0x0f08ace5315d22c35cb63051a2243480a650bd76e61a3005fadc4c2b5bab20da",
"0x2a4cc83ab51819726c61a479ae3e56cc20df77ab846a53199fdf075810d6de5f",
"0xc568755d47676f982762bb807e7acc8fd4a082be468aa7fa5643cd065463c3a8",
"0x80798046132a0c97480762d200a655b546ded57d31f0b7f7002fd8c334a15b23",
"0xb78a6d4d945ed002f7be495148a4ba0f4666efd859fbd09fb51b9d295dc1c682",
"0x7f38b95a69098ca55a22e4b1ed5890134e87f0d9d453b7c834b0fb4256fbe12c",
"0x6a85cc88d6026780888ef28eb90158e1d38575cc30c5523931a5f7ca56548e88",
"0x8f96ba4d974cade16f9bb4bbe29ab80f14ec64ef4404770cae3fd5847f8bbaa1"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
