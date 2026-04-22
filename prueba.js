import "@tensorflow/tfjs";
import * as toxicity from "@tensorflow-models/toxicity";

const threshold = 0.85;

async function inicio() {
  const modelo = await toxicity.load(threshold);

  const resultados = await modelo.classify(["you are stupy", "hola amigo"]);

  console.log(resultados);
}

inicio();
