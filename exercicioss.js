// ------------------------------------------------------
// Função auxiliar - NÃO precisa mexer aqui
function testar(nomeExercicio, resultado, esperado) {
  const igual = JSON.stringify(resultado) === JSON.stringify(esperado);
  if (igual) {
    console.log(`✅ Correto - ${nomeExercicio}`);
  } else {
    console.log(`❌ Errado - ${nomeExercicio}`);
    console.log(`   Esperado: ${JSON.stringify(esperado)}`);
    console.log(`   Recebido: ${JSON.stringify(resultado)}`);
  }
}
// ------------------------------------------------------

/* ============================================================
   EXERCÍCIO 1 (EXEMPLO JÁ PRONTO - estude este antes de começar)
   ============================================================*/
function contarUnicos(array) {
  const semRepetidos = [...new Set(array)];
  console.log(`   Array sem repetição: [${semRepetidos}]`);
  return semRepetidos.length;
}

testar("Exercício 1 - contarUnicos", contarUnicos([1, 2, 2, 3, 4, 4, 4, 5]), 5);
console.log("   Retorno de contarUnicos:", contarUnicos([1, 2, 2, 3, 4, 4, 4, 5]));

/* ============================================================
   EXERCÍCIO 2
   ============================================================*/
function encontrarRepetidos(array) {
  // Set para guardar os elementos que já apareceram uma vez
  const vistos = new Set();
  // Set para guardar os elementos que aparecem mais de uma vez
  const repetidos = new Set();

  // Percorre cada item do array
  for (const item of array) {
    // Se já viu esse item antes, ele é repetido
    if (vistos.has(item)) {
      repetidos.add(item);
    } else {
      // Primeira vez: guarda como visto
      vistos.add(item);
    }
  }

  // Transforma o Set de repetidos em array e retorna
  return [...repetidos];
}

testar("Exercício 2 - encontrarRepetidos", encontrarRepetidos([1, 2, 2, 3, 4, 4, 4, 5]), [2, 4]);
console.log("   Retorno de encontrarRepetidos:", encontrarRepetidos([1, 2, 2, 3, 4, 4, 4, 5]));

/* ============================================================
   EXERCÍCIO 3
   ============================================================*/
function unirSemRepetir(array1, array2) {
  // Junta os dois arrays em um só
  const juntos = [...array1, ...array2];

  // Remove os repetidos com Set e transforma de volta em array
  return [...new Set(juntos)];
}

testar(
  "Exercício 3 - unirSemRepetir",
  unirSemRepetir(["Ana", "Bruno", "Carlos"], ["Bruno", "Diana", "Ana"]),
  ["Ana", "Bruno", "Carlos", "Diana"]
);
console.log("   Retorno de unirSemRepetir:", unirSemRepetir(["Ana", "Bruno", "Carlos"], ["Bruno", "Diana", "Ana"]));

/* ============================================================
   EXERCÍCIO 4
   ============================================================*/
function temRepetido(array) {
  return new Set(array).size !== array.length;
}

testar("Exercício 4 - temRepetido (sem repetido)", temRepetido([101, 102, 103]), false);
console.log("   Retorno de temRepetido (sem repetido):", temRepetido([101, 102, 103]));

testar("Exercício 4 - temRepetido (com repetido)", temRepetido([101, 102, 101]), true);
console.log("   Retorno de temRepetido (com repetido):", temRepetido([101, 102, 101]));