async function greet() {
  let data = undefined
  try {
    const response = await fetch("http://localhost...")
    data = await response.json();
    console.log(data);
  } catch (error) {
    if (error instanceof TypeError) console.log("Error de tipo");
    if (error instanceof SyntaxError) console.log("Error de sintaxis");
    if (error instanceof ReferenceError) console.log("Error de referencia");
  } finally {
    if (data) {
      console.log("Mostar UI");
    } else {
      console.log("Avisarle al usuario");
    }
  }
  return message;
}

console.log(greet());
