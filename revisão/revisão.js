function revisao(){
    let nome = "João"
    console.log(nome);
    if (true){
        let sobrenome = "Roccela";
    }
    //console.log(sobrenome); //variável sobrenome nao existe neste contexto
    const idade = 40;
    console.log(idade);
    //idade = 41;

    const precoOriginal = 100
    const desconto = 20
    let precoFinal = precoOriginal - desconto

    console.log("Preço Original: " + precoOriginal)
    console.log("Desconto: " + desconto)
    console.log("Preço Final: " + precoFinal)
}

revisao();