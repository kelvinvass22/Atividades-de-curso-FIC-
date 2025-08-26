let atletas = [15, 22, 19, 12, 34, 51];

function filtrarAdultos(grupo) {
    return grupo.filter(anos => anos >= 18);
}

console.log("Jogadores maiores de idade:", filtrarAdultos(atletas));
