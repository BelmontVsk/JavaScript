var idade = 66
console.log(`Voce tem ${idade} anos.`)
if (idade < 16) {
    console.log('Menor de idade, Não vota')
} else if (idade < 18 || idade > 65) {
        console.log('Seu voto é opcional')
} else {
    console.log('Maior de idade, o voto é obrigatorio')
} 
