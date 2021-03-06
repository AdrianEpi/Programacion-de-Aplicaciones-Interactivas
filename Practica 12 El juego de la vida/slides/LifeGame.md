# Práctica 12. El juego de la vida. Programación Gráfica,  Orientada a Objetos y dirigida por eventos en JS.
### Factor de ponderación: 10

### Objetivos

Los objetivos de esta práctica son:

* Poner en práctica metodologías y conceptos de Programación Orientada a Objetos.
* Practicar el proceso de pruebas de software (testing) utilizando Mocha y Chai.
* Practicar la evaluación del cubrimiento de código usando Istanbul.
* Poner en práctica la metodología de desarrollo TDD.
* Desarrollar páginas HTML sencillas.
* Practicar el uso de diseño web a través de CSS.
* Practicar programación orientada a eventos.

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
Diseñe una página `index.html` con una apariencia que se ajuste a la de 
[esta imagen](https://raw.githubusercontent.com/fsande/PAI-Labs-Public-Data/master/img/index-html.png)
y que servirá como índice para esta práctica.

En esa página índice ha de enlazar (se indica el texto de cada uno de los enlaces) en la parte superior de la página, tal como se indica en la imagen de referencia las páginas correspondientes a:

* Ejecución de la aplicación (`Life`)
* Documentación de la aplicación (`Life - Documentación`)
* Resultados de las pruebas desarrolladas (`Life - Tests`)
* Informe de cubrimiento de código (`Life - Cubrimiento`)
* Diagrama UML de la aplicación (`Life - UML`)
* Reserve asimismo enlaces adicionales (`Ejercicio evaluación N`) para los ejercicios que realizará
  durante la sesión de evaluación.

Haga que todas estas páginas dispongan de un enlace `Indice` que enlace con la página índice.

Las páginas que se enlacen desde `index.html` han de tener como título (etiqueta
`title` de HTML) apellidos y nombre del autor de la aplicación. 
Asimismo apellidos y nombre de autor/a deben figurar en las diferentes páginas indexadas en lugar visible.

Indexe en esa página principal cualquier resultado adicional que desee mostrar como evidencias para la evaluación de su trabajo.

El servidor web que aloja estas páginas ha de seguir funcionando después de cerrar la sesión en la máquina
IaaS-ULL que aloja el servidor para posibilitar la evaluación del trabajo realizado.

### The fantastic combinations of John Conway's new solitaire game *life*

*The fantastic combinations of John Conway's new solitaire game "life"* es el título de 
[este artículo](http://www.ibiblio.org/lifepatterns/october1970.html)
publicado por Martin Gardner en octubre de 1970 en la sección *Juegos Matemáticos*
de la revista Scientific American.
A través de ese artículo se dio a conocer al gran público el trabajo del matemático británico John H. Conway,
quien [falleció el pasado 11 de abril](https://www.nytimes.com/2020/04/15/technology/john-horton-conway-dead-coronavirus.html) a causa del Covid19.
A Conway su colega, medalla Fields y premio Abel, sir Michael Atiyah, le describió como “el matemático más mágico del mundo”. 
Muchas de sus grandes contribuciones científicas nacieron de su gran afición a los juegos.

El [juego de la vida](https://en.wikipedia.org/wiki/Conway's_Game_of_Life) es un buen ejemplo de un 
[autómata celular](https://mathworld.wolfram.com/GameofLife.html), 
un modelo matemático para un sistema dinámico que evoluciona en pasos discretos.
Desde un punto de vista teórico, el interés del juego de la vida procede de que 
es equivalente a una máquina universal de Turing, es decir, todo lo que se puede computar 
algorítmicamente se puede computar en el juego de la vida.

En esta práctica se propone desarrollar una aplicación JavaScript que implemente 
[el juego de la vida](http://www.scholarpedia.org/article/Game_of_Life).

### Especificacines de la aplicación

* Utilice en el desarrollo de la aplicación un enfoque orientado a objetos.

* Aplique igualmente el
[enfoque TDD](https://en.wikipedia.org/wiki/Test-driven_development) 
iterando las fases de esa metodología.

* Es fácil encontrar en la web simulaciones del juego de la vida que pueden servirle de inspiración para la interfaz gráfica de su desarrollo.
Tiene Ud. libertad para diseñar estéticamente la página `life.html` que sirve de interfaz gráfica a su simulación, pero ha de lograr que se trate de una página única que ha de mostrar toda la simulación del juego sin que el usuari tenga que desplazarse hacia el final de la página para ver contenidos de la misma.
Utilice sus conocimientos de desarrollo web para diseñar una página que sea al mismo tiempo simple y atractiva.

* Diseñe un pie de página (*footer*) en el que incluya información sobre la Universidad,
  titulación, asignatura y autor/a del programa.

* Tome [estas](https://en.wikipedia.org/wiki/Conway's_Game_of_Life#Rules) 
  como reglas que rigen la evolución del juego.

* Las dimensiones del universo (número de filas y columnas) serán fijas y se elegirán de modo que el
  juego se pueda ver adecuadamente en pantalla completa, maximizando en la medida de lo posible estas dimensiones.

* El programa dispondrá de botones para Iniciar el juego (`Inicio`), para pararlo (`Fin`),
  para ponerlo en pausa (`Pausa`) y para ejecutar un solo paso de evolución del juego (`Paso`).

* Dispondrá asismimo de un campo (`Número de células:`) que sirve al usuario para establecer el número de
  células que se incluyen inicialmente en el mundo.

* El programa dispondrá de un [control deslizador](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) (slider) 
  que permitirá modificar la velocidad de evolución del juego.

* La configuración inicial de células en el juego se establecerá de forma aleatoria.

* Al pulsar `Inicio`, el juego evoluciona libremente a la velocidad seleccionada con el control deslizador.
  Si en lugar de `Inicio` se pulsa `Paso`, el juego evoluciona una única generación.
	Si se pulsa `Fin` el juego detiene su ejecución.

* No añada a la interfaz gráfica (web) de su programa otros elementos que los que se describen en esta especificación.
  Trate asimismo de ceñirse a la utilización de los elementos HTML y CSS estudiados en las clases de teoría.
