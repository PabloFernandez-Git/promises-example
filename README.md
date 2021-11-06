# Promises y Async/Await 


## Fetch
Una petición básica de fetch es realmente simple de realizar. Eche un vistazo al siguente código:

`fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));`

Aquí estamos recuperando un archivo JSON a través de red e imprimiendo en la consola. El uso de fetch() más simple toma un argumento (la ruta del recurso que quieres obtener) y devuelve un objeto Promise conteniendo la respuesta, un objeto Response.

Esto es, por supuesto, una respuesta HTTP no el archivo JSON. Para extraer el contenido en el cuerpo del JSON desde la respuesta, usamos el método json()

## Promises
El objeto Promise (Promesa) es usado para computaciones asíncronas. Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.

Las promesas son un objeto especial de JS que nos permite ejecutar un trozo de codigo, y cuando este listo, se devuelve (tambien puede devolver un error, pero siempre va a devolver algo).


## Async/Await

`export const loadServiceTypes = () => async (dispatch) => {
  try {
    const data = await get("apiV2/common/service-type", dispatch);
    dispatch({ type: Actions.serviceTypes, data });
  } catch (err) {
    error(err);
  }
};`


### Fuente
Carlos Azaustre - Aprende JavaScript (youtube)
