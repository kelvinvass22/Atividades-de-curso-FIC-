let perfis = ["Levi", "joao", "maria"];

function acessarLogin(pessoa) {
    if (perfis.includes(pessoa)) {
        console.log(`Bem-vindo, ${pessoa}!`);
    } else {
        console.log("Usuário não encontrado");
    }
}

acessarLogin("Levi");
acessarLogin("Pedro");
