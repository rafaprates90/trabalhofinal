/* SPDX-License-Identifier: CC-BY-4.0
(c) Desenvolvido por Rafael Prates */

pragma solidity 0.8.6;

contract RegistroDeAuditorias {
    
    struct Contingencia {
        string nomeDaEmpresa;
        string nomeDoEscritorio;
        string periodoDeApuracao;
        uint processosAtivos;
        uint valorRemoto;
        uint valorPossivel;
        uint valorProvavel;
        uint valorTotal;
    }

    address public owner;

    Contingencia[] public contingencias;

    constructor() {
        owner = msg.sender;
    }

    function registrarContingencias(
        string memory paramNomeDaEmpresa,
        string memory paramNomeDoEscritorio,
        string memory paramPeriodoDeApuracao,
        uint paramProcessosAtivos,
        uint paramValorRemoto,
        uint paramValorPossivel,
        uint paramValorProvavel,
        uint paramValorTotal
    ) external returns (bool) {
        require(msg.sender == owner, "Somente o dono do contrato pode registrar o resultado da auditoria");
        Contingencia memory novoRegistroDeContingencia = Contingencia(paramNomeDaEmpresa, paramNomeDoEscritorio, paramPeriodoDeApuracao, paramProcessosAtivos, paramValorRemoto, paramValorPossivel, paramValorProvavel, paramValorTotal);
        contingencias.push(novoRegistroDeContingencia);
        return true;
        
        
    }
    
}
