const contractAddress = "0x9F8Bb0cEa7Bfd76df97522B3282c0196cfAA6cF3";
var smartContract;
var smartContractWithSigner;
const ABI = [
	
            {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "contingencias",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "nomeDaEmpresa",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "nomeDoEscritorio",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "periodoDeApuracao",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "processosAtivos",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "valorRemoto",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "valorPossivel",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "valorProvavel",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "valorTotal",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "paramNomeDaEmpresa",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "paramNomeDoEscritorio",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "paramPeriodoDeApuracao",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "paramProcessosAtivos",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "paramValorRemoto",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "paramValorPossivel",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "paramValorProvavel",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "paramValorTotal",
                    "type": "uint256"
                }
            ],
            "name": "registrarContingencias",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]