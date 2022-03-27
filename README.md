# Desafio_Galeria_personalizada_de_Pokemones

Modulo 6

Descripcion

La  https://pokeapi.co/  ofrece  diferentes  endpoints  para  obtener  información  de  los 
pokemones,  sin  embargo  el  endpoint  principal  devuelve  la  data  que  te  muestro  en  la 
siguiente imagen:

Como  puedes  notar  solamente  nos  entrega  el  nombre  y  la  dirección  del  subrecurso  en 
donde se encuentra la data detallada de cada pokémon.

Los  creadores  de  esta  API  han  recibido miles de solicitudes de sus usuarios pidiendo que 
habiliten  un  endpoint  que  devuelva  toda  la  data  de  todos  los  pokemones  y  han  decidido 
convertir  esta  solicitud  en  un  concurso  colaborativo,  en  donde  la  comunidad  de 
desarrolladores de usuarios de la API, desarrollen la lógica en el lado del servidor con Node 
que  procese  su  data  de  los  endpoints  que  ya  disponen  y  devuelvan  un  endpoint final con 
toda la información correspondiente a los pokemones. 

En este desafío el objetivo será usar las herramientas asincrónicas de JavaScript para tomar 
la data de diferentes endpoints y unirlas en un mismo arreglo que pueda ser devuelto por un 
único endpoint como un JSON. 

En el menú de esta sesión encontrarás un Apoyo Desafío que contiene un documento HTML 
que deberá ser devuelto como un sitio web estático en una ruta particular, este documento 
está  listo  para  consumir  la  ruta  http://localhost:3000/pokemones,  exponer  el  nombre  y  la 
imagen  de  los  pokemones  como  una  galería  de  150  pokemones.  En  la  siguiente  imagen 
puedes tener una referencia de cómo se deberá ver la galería.

Requerimientos
 
1.   Hacer  uso  de  Async/Await  para  las  funciones  que  consulten  los  endpoints  de  la 
pokeapi.  
2.   Usar  el  Promise.all()  para  ejecutar  y  obtener  la  data  de  las  funciones  asíncronas 
generando un nuevo arreglo con la data a entregar en el siguiente requerimiento.      
3. Disponibilizar la ruta http://localhost:3000/pokemones que devuelva un JSON con el 
nombre  y  la  url  de  una  imagen  de  150  pokemones,  asi  como verás en la siguiente 
imagen.  

GitHub Page

https://imdamiancortes.github.io/Desafio_Galeria_personalizada_de_Pokemones/
