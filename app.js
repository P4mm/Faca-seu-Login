function login() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const linguagem = document.getElementById("linguagem").value;

  if ((nome, idade, linguagem == "")) {
    alert("Você dever preencher todos os campos para continuar!");
  } else {
    document.getElementById(
      "mensagem"
    ).innerHTML = `😀 Parabéns ${nome}! Você tem ${idade} anos e está aprendendo ${linguagem}.`;

    document.getElementById(
      "pergunta"
    ).innerHTML = `<div class="perguntas"<label>Você está gostando de aprender ${linguagem}?</label><br><br>
  <button type="submit" onclick="sim()">Sim</button> <button type="submit" onclick="nao()">Não</button></div>`;
  }
}

function sim() {
  document.getElementById("resposta").innerHTML =
    "<h2>Muito bom! Continue estudando e você terá muito sucesso!🚀</h2>";
}

function nao() {
  document.getElementById("resposta").innerHTML =
    "<h2>Ahh que pena...Mas não desanime 🤩. Abaixo vou deixar um link onde você pode aprender diversas linguagens e escolher a que mais te interresar: https://www.youtube.com/c/Alura</h2>";
}
