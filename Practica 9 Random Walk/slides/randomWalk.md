# Práctica 9. Random Walk. Programación Gráfica y Orientada a Objetos en JS.
### Factor de ponderación: 8

### Objetivos

Los objetivos de esta práctica son:

* Poner en práctica metodologías y conceptos de Programación Orientada a Objetos.
* Practicar el proceso de pruebas de software (testing) utilizando Mocha y Chai.
* Practicar la evaluación del cubrimiento de código usando Istanbul.
* Poner en práctica la metodología de desarrollo TDD.

### Rúbrica de evaluacion del ejercicio
Se señalan a continuación los aspectos más relevantes (la lista no es exhaustiva)
que se tendrán en cuenta a la hora de evaluar este ejercicio:
* El comportamiento del programa debe ajustarse a lo solicitado en este enunciado.
* El programa debe ajustarse al paradigma de Orientación a Objetos: identifique en el problema propuesto clases, objetos y métodos que permitan resolver el problema siguiedo este paradigma.
* Se tendrán en cuenta los sucesivos avances en el proyecto que han de reflejarse a través de las sucesivos progresos (*commits*) efectuados al repositorio del proyecto.
* Deben usarse estructuras de datos adecuadas para representar los diferentes elementos que intervienen en el problema.
* Se valorará la capacidad del programador(a) de introducir cambios en el programa desarrollado.
* Han de aportarse los tests utilizados para probar la aplicación en su fase de desarrollo.
* Han de aportarse los informes sobre cubrimiento de código de su aplicación.
* El formato del código ha de cumplir con lo establecido en la [Guía de Estilo de Google](https://google.github.io/styleguide/jsguide.html)
para Javascript. Utilice [ESLint](https://eslint.org/), convenientemente configurado, si se considera necesario para cumplir con este requisito.
* El código ha de estar documentado con [JSDoc](https://jsdoc.app/).
* Modularidad: el programa ha de escribirse de modo que las diferentes funcionalidades
que se precisen sean encapsuladas en módulos, clases, funciones y métodos cuya extensión léxica se
mantenga acotada.
* Eficiencia del código desarrollado.

### Presentación de resultados y ejecución de la aplicación
**Comience su trabajo** subiendo a la tarea correspondiente del aula virtual de la asignatura el enlace (git) a su repositorio privado de trabajo para esta práctica.

Toda la información que sigue (se indica el texto de cada uno de los enlaces):
* Ejecución de la aplicación (enlace `Random Walk`)
* Documentación de la aplicación (enlace `Random Walk - Documentación`)
* Resultados de las pruebas desarrolladas (enlace `Random Walk - Tests`)
* Informe de cubrimiento de código (enlace `Random Walk - Cubrimiento`)
* Diagrama UML de la aplicación (enlace `Random Walk - UML`)
* Reserve asimismo en `index.html` un enlace adicional (`Ejercicio evaluación`) para el ejercicio que realizará
  durante la sesión de evaluación.

Se ha de mostrar a través de una página `index.html` alojada en el servidor de su máquina IaaS de la asignatura. 
**Todas** las páginas que se enlacen desde `index.html` han de tener como título (etiqueta
`title` de HTML) apellidos y nombre del autor de la aplicación. 
Asimismo apellidos y nombre deben figurar en las diferentes páginas indexadas (etiqueta `h1` de HTML).

Indexe en esa página principal cualquier resultado adicional que desee mostrar como evidencias para la evaluación de su trabajo.

El servidor web que aloja estas páginas ha de seguir funcionando después de cerrar la sesión en la máquina
IaaS-ULL que aloja el servidor para posibilitar la evaluación del trabajo realizado.

### Camino Aleatorio
El [camino aleatorio](https://en.wikipedia.org/wiki/Random_walk)
o paseo aleatorio, abreviado en inglés como RW (*Random Walks*), es una formalización matemática 
de la trayectoria que resulta de hacer sucesivos pasos aleatorios. 
Por ejemplo, la ruta trazada por una molécula mientras viaja por un líquido o un gas, el camino que sigue un animal en su 
búsqueda de comida, el precio de una acción fluctuante y la situación financiera de un jugador pueden tratarse como un camino aleatorio.

### Especificacones de la aplicación Random Walk
En esta práctica se propone desarrollar una aplicación JavaScript `random-walk.js` que muestre una camino aleatorio que comience en el centro de
un Canvas de forma rectangular que abarque la mayor parte del viewport del naveador y finalice cuando el
camino alcance cualquiera de los bordes del canvas.

* Utilice en el desarrollo de la aplicación un enfoque orientado a objetos: identifique clases, objetos y métodos para resolver el problema propuesto. Utilice alguna herramienta para generar un diagrama UML que represente las clases que utiliza su programa y muestre ese diagrama en una página indexada en `index.html`.

* En el desarrollo de la aplicación que se propone, aplique el
[enfoque TDD](https://en.wikipedia.org/wiki/Test-driven_development) 
iterando las fases que se definen en esa metodología:
Red - Green - Refactor - [Integrate] y escribiendo los tests y la documentación de la aplicación al mismo tiempo que desarrolla el código.

* Antes de comenzar a dibujar el camino aleatorio (CA), 
el programa mostrará en el lienzo una cuadrícula con una determinada densidad (número de intersecciones).
Esta [figura](https://raw.githubusercontent.com/fsande/PAI-P09-RandomWalk/master/random-walk.png)  
muestra ejemplos de caminos aleatorios dibujados sobre retículas de diferente densidad.

* Elija para la cuadrícula inicial una densidad que le parezca apropiada para que el comportamiento del programa sea atractivo a un usuario final.

* El CA comenzará a dibujarse automáticamente una vez cagada la página en el navegador, sin esperar por ninguna interacción por parte del usuario.

* El CA (tal como muestra la [figura](https://raw.githubusercontent.com/fsande/PAI-P09-RandomWalk/master/random-walk.png)) 
se dibujará de modo que sólo recorre líneas de la cuadrícula (no se pueden trazar líneas de forma arbitraria en el lienzo).

* El CA se irá dibujando segmento a segmento, partiendo del centro del lienzo y dejando trancurrir 0,5 segundos entre el dibujo de un segmento y el siguiente que se dibuje.

Se deja libertad para cada que cada autor/a diseñe la página HTML en la que se embebe el lienzo (canvas) de la manera que
prefiera, pero la aplicación deberá al menos contemplar las especificaciones contempladas en este documento.
El diseño del HTML de esa página brinda una oportunidad para practicar los elementos HTML que se han estudiado hasta ahora.
No se pretende que se utilicen elementos CSS o HTML no estudiados hasta esta fecha.

Se sugiere que, debajo del canvas la página muestre
* Un breve texto explicativo de lo que es un camino aleatorio
* Enlaces a páginas de referencia que se hayan utilizado para realizar este trabajo.
* Cualquier elemento que les parezca oportuno e interesante.
Para visualizar esa información habría que desplazarse (*scroll*) en la página puesto que la vista inicial de la misma debiera estar ocupada en su mayor parte por el lienzo que muestra el camino aleatorio.
