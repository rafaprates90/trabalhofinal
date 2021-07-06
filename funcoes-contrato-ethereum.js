async function obterDadosDoContrato() {
    let contractNumberField = document.getElementById("contractNumber");
    const userInput = contractNumberField.value * 1;
    alert("valorInformadoPeloUsuario: " + userInput);
    try {
      const arrayDadosDoContrato = await smartContract.auditorias(userInput);
      console.log(arrayDadosDoContrato);
      document.getElementById("nomeDaEmpresa").innerText = arrayDadosDoContrato[0];
      document.getElementById("nomeDoEscritorio").innerText = arrayDadosDoContrato[1];
      document.getElementById("periodoDeApuracao").innerText = arrayDadosDoContrato[2];
      document.getElementById("processosAtivos").innerText = arrayDadosDoContrato[3];
      document.getElementById("valorRemoto").innerText = arrayDadosDoContrato[4];
      document.getElementById("valorPossivel").innerText = arrayDadosDoContrato[5];
      document.getElementById("valorProvavel").innerText = arrayDadosDoContrato[6];
      document.getElementById("valorTotal").innerText = arrayDadosDoContrato[7];
    } catch (err) {
      console.error(err);
      document.getElementById("nomeDaEmpresa").innerText = "";
      document.getElementById("nomeDoEscritorio").innerText = "";
      document.getElementById("periodoDeApuracao").innerText = "";
      document.getElementById("processosAtivos").innerText = "";
      document.getElementById("valorRemoto").innerText = "";
      document.getElementById("valorPossivel").innerText = "";
      document.getElementById("valorProvavel").innerText = "";
      document.getElementById("valorTotal").innerText = "";
      contractNumberField.value = 0;
      alert("Ops! Identificamos um erro ao buscar ao resultado da auditoria de numero: " + userInput);
    }
  }
  
  async function autoLoadOwner() {
    try {
      const contractOwner = await smartContract.owner();
      console.log(contractOwner);
      document.getElementById("spanOwner").innerText = contractOwner;
    } catch (err) {
      console.error(err);
      alert("Atencao! Erro ao buscar o proprietario do contrato");
    }
  }
  
  async function saveFormData() {
    try {
      var tx;
      var txReceipt;
      tx = await smartContractWithSigner.registrarContingencias(
        document.frmAuditoria.paramNomeDaEmpresa.value,
        document.frmAuditoria.paramNomeDoEscritorio.value,
        document.frmAuditoria.paramPeriodoDeApuracao.value,
        document.frmAuditoria.paramProcessosAtivos.value,
        document.frmAuditoria.paramValorRemoto.value,
        document.frmAuditoria.paramValorPossivel.value,
        document.frmAuditoria.paramValorProvavel.value,
        document.frmAuditoria.paramValorTotal.value
      );
      console.log("transacao enviada ao metamask...Aguarde", tx);
      alert("Transação enviada..." + tx.hash + " Aguarde a confirmação da Blockchain...");
      txReceipt = await tx.wait();
      console.log("transacao processada...", txReceipt);
      if (txReceipt.status == 1) {
        alert("Transação processada: " + tx.hash + "  - Registro salvo na Blockchain. Status: " + txReceipt.status);
      } else {
        alert("Transação processada: " + tx.hash + "  - Atencao! Houve um erro... Verifique através do Etherscan");
      }
    } catch (err) {
      console.error(err);
      alert("Houve um erro ao registrar o resultado da auditoria");
    }
  }