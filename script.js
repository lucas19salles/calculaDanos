const avatarAttack = prompt("Qual é o nome do primeiro personagem? ");
const attackPower = Number(prompt("Qual é o seu poder de ataque? "));
const avatarDefense = prompt("Qual é o nome do segundo personagem? ");
let healthPoints = Number(prompt("Quantos pontos de vida ele possuir? "));
const defensePower = Number(prompt("Qual é o seu poder de defesa? "));
const shield = prompt("Ele possui um escudo? (Sim/Não)");

let damage = 0;

if ((attackPower > defensePower && shield === "Não") || shield === "não") {
  damage = attackPower - defensePower;
} else if (
  (attackPower > defensePower && shield === "Sim") ||
  shield === "sim"
) {
  damage = (attackPower - defensePower) / 2;
}

healthPoints -= damage;

alert(`${avatarAttack} causou ${damage} pontos de dano em ${avatarDefense}`);
alert(
  `${avatarAttack}\nPoder de ataque: ${attackPower} \n\n${avatarDefense}\nPontos de vida: ${healthPoints} \nPoder de defesa: ${defensePower} \nPossui escudo: ${shield}`
);
