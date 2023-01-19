// Questão 1
/*
let usuarios = []
let n = Number(prompt('Digite o tamanho do array: '))

for(let i = 0; i < n; i++){
    usuarios.push(prompt('Qual o nome do usuário?'))
}
document.write(`
    O tamanho do array é: ${n}<br>
    Os nomes dos usuários são: ${usuarios}<br>
`)*/



// Questão 2
/*
let usuarios = []

let n = Number(prompt('Digite o tamanho do array: '))

for(let i = 0; i < n; i++){
    usuarios.push(prompt('Qual o nome do usuário?'))
}


document.write(`
    O tamanho do array é: ${n}<br>
    Os nomes dos usuários são: ${usuarios.sort()}
`)*/


// Questão 3 
/*
var i = 0;
var iaux = 0;
var usuario = [];
var usuariovogal = [];
var n = Number(prompt('Digite o tamanho do array: '))

while (true){

    if(i == n){
        break;
    }
    var valor = window.prompt('Qual o nome do usuário ?')
    console.log(valor[0].toLowerCase())

    if(valor[0].toLowerCase() == 'a' || valor[0].toLowerCase() == 'e' || valor[0].toLowerCase() == 'i' || valor[0].toLowerCase() == 'o' || valor[0].toLowerCase() == 'u'){
     usuariovogal[iaux] = valor;
     iaux++; 
    }
    usuario[i] = valor;
    i++
}
document.write(`
    O tamanho do array é: ${n}<br>
    Os nomes dos usuários são: ${usuario.sort()}<br>
    Os nomes dos usuários começado com vogais: ${usuariovogal.sort()}
`)*/

// Questão 4
/*
var array = [];

do {
    var opc = Number(prompt(`
        Escolha a opção desejada: 

        1- Inserir novo registro
        2- Editar Registro
        3- Excluir Registro
        4- Ver registros no console
        5- Procurar registros por nome
        6- Sair
    `));

    switch (opc) {
        case 1:

            var name = prompt("Digite o nome do cliente")
            var listaaux = []
            listaaux.push(name)
            array.push(listaaux)
            break

        case 2:

            var busc = prompt("Digite o nome do registro a ser editado")
            for(i = 0;i < array.length; i++){

                if(array[i][0]==busc){
                    alert('Registro encontrado!')
                    var name = prompt("Digite o nome do cliente")
                    var listaaux = []
                    listaaux.push(name)
                    array[i]=listaaux
                }
            }
            break

        case 3:

            var busc = prompt("Digite o nome do registro a ser excluído")
            for(i = 0; i < array.length; i++){

                if(array[i][0]==busc){
                    array[i]=null
                    alert('Registro encontrado e excluído!')
                }
            }
            break

        case 4:

            for(i=0;i<array.length;i++){
                console.log(array[i])
            }
            break;

        case 5:

            var busc = prompt("Digite o nome do registro a ser procurado")
            for(i = 0; i < array.length; i++){
                if(array[i][0]==busc){
                    alert('Registro encontrado, cheque o console')
                    console(array[i])
                } 
                else {
                    alert ('O registro não foi encontrado!')
                }
            }
            break

        case 6:

            alert('Sair...')
            break

        default:

            alert('Opção inválida');
            break
    }
    
} while(opc!=6)
*/



// Questão 5
/*
var array = [];

do {
    var opc = Number(prompt(`
        Escolha a opção desejada: 

        1- Inserir novo registro
        2- Editar Registro
        3- Excluir Registro
        4- Ver registros no console
        5- Procurar registros por nome
        6- Sair
    `));

    switch (opc) {
        case 1:

            var nome = prompt("Digite o nome do cliente: ")
            var listaaux = []
            listaaux.push(nome)
            array.push(listaaux)
            break

        case 2:

            var busc = prompt("Digite o nome do registro a ser editado: ")
            for(i = 0;i < array.length; i++){

                if(array[i][0]==busc){
                    alert('Registro encontrado!')
                    var nome = prompt("Digite o nome do cliente: ");
                    var listaaux = []
                    listaaux.push(nome)
                    array[i]=listaaux
                }
            }
            break

        case 3:

            var busc = prompt("Digite o nome do registro a ser excluído: ")
            for(i = 0; i < array.length; i++){

                if(array[i][0]==busc){
                    array[i]=null;
                    alert('Registro encontrado e excluído!')
                }
            }
            break

        case 4:

            for(i=0;i<array.length;i++){
                console.log(array[i]);
            }
            break;

        case 5:

            var busc = prompt("Digite o nome do registro a ser procurado: ");
            for(i = 0; i < array.length; i++){
                if(array[i][0]==busc){
                    alert('Registro encontrado, cheque o console')
                    console.log(array[i])
                } 
                else {
                    alert ('O registro não foi encontrado!')
                }
            }
            break

        case 6:

            alert('Sair...')
            break

        default:

            alert('Opção inválida')
            break
    }
    
} while(opc!=5)*/


// Questão 6
/*
var array = [];
    do {
        var opc = Number(prompt(`
            Escolha a opção desejada
            1- Inserir novo registro
            2- Ver registros
            3- Procurar registros por nome
            4- Ver prêmios do registro pelo nome
            5- Sair
        `));
        switch (opc) {
            case 1:

                var nome = prompt("Digite o nome do cliente: ");
                var qtdpdt = prompt("Digite a quantidade de produtos comprados: ");
                var total = Number(prompt("Digite o valor total da compra: "));
                var listaaux = []
                listaaux.push(nome, qtdpdt, total);
                array.push(listaaux)
                break;

            case 2:

                for(i = 0; i < array.length; i++){
                    console.log(array[i])
                }
                break;

            case 3:

                var busc = prompt("Digite o nome do registro a ser procurado: ")
                for(i = 0; i < array.length; i++){
                    if(array[i][0]==busc){
                        alert('Registro encontrado, cheque o console')
                        console.log(array[i])
                    } else{
                        alert('Registro não encontrado')
                    }
                }
                break;

            case 4:

                var maior=[0,0,0];
                for(a = 0 ; a < array.length; a++){
                    if(array[a][2]>maior[2]){
                        maior=array[a];
                    }
                }
                var busc = prompt("Digite o nome do registro a ser procurado: ")
                for(i = 0; i < array.length; i++){
                    if(array[i][0]==busc){
                        alert('Registro encontrado!');
                        if(maior[0]==busc){
                            alert("Você ganhou um cashback no valor de 10% da sua compra!!!")
                        } else{
                            alert("Você ganhou um cupom de 5% de desconto na sua próxima compra (máximo de desconto 25 reais)!!!")
                        }
                    }else{
                        alert('Registro não encontrado!');
                    }
                }
                break;

            case 5:

                alert('Sair...')
                break;

            default:

                alert('Opção inválida');
                break;
        }
        
    } while(opc!=5);
*/