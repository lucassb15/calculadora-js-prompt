function calculadora() {
    const operacao = Number(window.prompt('Escolha uma operação: \n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

    // Verificar se a operacao foi inserida corretamente se não exibe mensagem e retorna a funcão calculadora
    if (!operacao || operacao >= 7) {
        alert('Erro - operação inválida');
        calculadora()
    } else {
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        if (!n1 || !n2) {
            alert('Erro - parâmetros inválidos! ');
            calculadora();
        } else {
            // Função para realizar as somas
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao();
            }

            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao();
            }

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao();
            }

            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao();
            }

            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} + ${n2} é igual a = ${resultado}`)
                novaOperacao();
            }

            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}° é igual a ${resultado}`)
                novaOperacao();
            }



            // Função Para Finalizar a calculadora ou Fazer nova operação
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert(' Até Mais ! !\n Desenvolvedor: Lucas S. Barbosa');
                } else {
                    alert('Digite uma opção válida !')
                    novaOperacao();
                }
            }
        }

        // Função para escolher qual operação deseja fazer
        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;

        }
    }

}
calculadora();