async function buscarDados(){
    try{
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users")

        if(!resposta.ok){
            throw new Error("Erro na rede: " + resposta.status );
        }
        const dados = await resposta.json();
        console.log(dados);
    } catch (erro){
        console.error("Houve um problema com a requisição: ", erro);
    }
}
buscarDados();