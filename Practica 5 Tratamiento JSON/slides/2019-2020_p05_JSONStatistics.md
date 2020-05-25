# Práctica 5. Tratamiento de Datos. Formato JSON.
### Factor de ponderación: 8

#### Tratamiento de Datos. Formato JSON.

El objetivo de esta práctica es familiarizarse con el formato JSON, crear módulos en Javascript y procesar datos para
obtener estadísticas simples sobre países.

En [este repositorio](https://github.com/samayo/country-json) se encuentran disponibles diversos datos en
formato JSON que contienen información relativa a diferentes países: sus nombres, capitales, moneda, religión,
población, etc.

Utilice el [visualizador on-line de JSON](http://jsonviewer.stack.hu/) para una primera toma de contacto con
esos datos.

**1.-** Comience por escribir diferentes módulos (ficheros `.js`), uno para cada tipología de datos, en los que se incluyan en
forma de variables (ha de elegir el tipo de variable a utilizar) la información por países correspondiente a un determinado aspecto (idioma, religión, etc.)
de cada país.
Así por ejemplo el módulo `country-population.js` debería contener una variable (variable, constante, objeto, ...) que almacenara los datos de población de cada uno de los países.
Ese módulo debería exportar esa variable para hacerla disponible a otros programas JavaScript.

**2.-** Desarrolle a continuación un programa `combine-country-data.js`que permita combinar en un único fichero `country-data.json` un conjunto de métricas
para todos los países considerados.
Haga que ese fichero `country-data.json` contenga al menos la siguiente información para cada uno de los
países:

1. Nombre
2. Abreviatura del nombre
3. Altura promedio de los varones (Avg Male Height)
4. Capital de cada país
5. Continente
6. Moneda
7. Código de la moneda
8. Religión
9. Altura
10. Esperanza de vida
11. Número de habitantes
12. Densidad de Población
13. Superficie
14. Temperatura promedio

Utilice nuevamente el [visualizador on-line de JSON](http://jsonviewer.stack.hu/) para mostrar el contenido
del fichero JSON que ha creado.

**3.-** Desarrolle como siguiente paso un programa `contry-stats.js` que utilice los datos que ha agregado para
imprimir en pantalla la información que da respuesta a las siguientes cuestiones:

1. El país más poblado del mundo es P (X habitantes) y el menos poblado es P (Y habitantes).
2. El país con mayor densidad de población en América es P.
3. Los 3 países con mayor esperanza de vida en cada uno de los continentes son: ...
4. La media de la altura promedio de los varones en cada uno de los continentes es: 
5. Los porcentajes correspondientes (en función del número de países con cada religión) a las 5 religiones más
  extendidas en el mundo son:
6. Los países con más bajas temperaturas en cada uno de los continentes son los siguientes:

El programa `country-stats.js` debería imprimir en pantalla, como única salida, frases como las que figuran en los puntos
anteriores, con los datos correspondientes a cada caso.
Así la primera línea debiera ser algo similar a (datos figurados):

`El país más poblado del mundo es China (1409517397 habitantes) y el menos poblado es Andorra (76965 habitantes)`. 

**4.-** Además de las anteriores, imprima los valores correspondientes a 3 aspectos adicionales de su elección que se
puedan extraer de los datos suministrados.

**5.-** Este punto es opcional. Desarrolle este punto solamente si los apartados anteriores le han ocupado no más de 4 horas de trabajo total.

Es fácil actualmente conseguir datos actualizados sobre la expansión del Covid-19 a nivel mundial.
[Este repositorio](https://github.com/alext234/coronavirus-stats) podría ser un ejemplo, aunque puede Ud. usar cualquier otra fuente de datos públicamente disponible.
En ese repositorio anterior [este fichero](https://github.com/alext234/coronavirus-stats/blob/master/data/bnonews-international.csv) contiene el número de casos de Covid-19 por países actualizado diariemante.
Los datos de ese fichero parecen coincidir con los que está publicando la 
[prensa nacional](https://elpais.com/sociedad/2020/03/06/actualidad/1583503629_010886.html?rel=friso-portada).
Use esta fuente o cualquier otra para añadir al fichero `country-data.json` el número de casos de Covid-19 en la fecha actual en cada país.

Si necesita convertir un fichero en formato `.csv` a formato JSON es fácil tambien hallar convertidores on-line entre ambos tipos de formato. Puede usar [este](https://www.csvjson.com/csv2json), por ejemplo.

Haga que su programa imprima una línea adicional:

'Los 5 países con mayor número de casos diagnosticados de Covid-19 en cada contienente son:`

en la que se muestren los 5 países con más casos y el número de ellos en cada uno de esos países.

### Rúbrica de evaluacion del ejercicio

Se señalan a continuación los aspectos más relevantes (la lista no es exhaustiva)
que se tendrán en cuenta a la hora de evaluar este ejercicio:
1. El comportamiento del programa debe ajustarse a lo solicitado en este enunciado.
2. Deben usarse estructuras de datos adecuadas para representar los diferentes elementos que intervienen en el problema.
3. Capacidad del programador(a) de introducir cambios en el programa desarrollado.
4. El formato del código ha de cumplir con lo establecido en la [Guía de Estilo de Google](https://google.github.io/styleguide/jsguide.html)
para Javascript. Utilice [ESLint](https://eslint.org/), convenientemente configurado, si se considera necesario para cumplir con este requisito.
5. El código ha de estar documentado con [JSDoc](https://jsdoc.app/). Haga que la documentación del programa generada con JSDoc esté disponible a través de una web alojada en su máquina IaaS de la asignatura.
6. Modularidad: el programa ha de escribirse de modo que las diferentes funcionalidades
que se precisen sean encapsuladas en módulos, funciones y métodos cuya extensión léxica se
mantenga acotada.
7. Eficiencia del código desarrollado.
