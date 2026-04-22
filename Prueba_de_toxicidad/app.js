import "@tensorflow/tfjs";
import * as toxicity from "@tensorflow-models/toxicity";

const threshold = 0.5; // qué tan estricto querés ser

async function analizarTexto() {
  const modelo = await toxicity.load(threshold);

  const textos = ["you stupid", "hello my friend"];

  const resultados = await modelo.classify(textos);

  resultados.forEach((r) => {
    console.log("Etiqueta:", r.label);
    console.log("Resultados:", r.results);
  });
}

analizarTexto();
