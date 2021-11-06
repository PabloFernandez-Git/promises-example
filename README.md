# Promises y Async/Await 


## Promises
Las promesas son un objeto especial de JS que nos permite ejecutar un trozo de codigo y cuando este listo se devuelve (tambien puede devolver un error, pero siempre va a devolver algo).


## Async/Await

`export const loadServiceTypes = () => async (dispatch) => {
  try {
    const data = await get("apiV2/common/service-type", dispatch);
    dispatch({ type: Actions.serviceTypes, data });
  } catch (err) {
    error(err);
  }
};`
