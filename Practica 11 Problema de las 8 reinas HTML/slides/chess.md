# Práctica 11. Ajedrez. Programación Gráfica y Orientada a Objetos en JS.
### Factor de ponderación: 9

### Objetivos

Los objetivos de esta práctica son:

* Poner en práctica metodologías y conceptos de Programación Orientada a Objetos.
* Practicar el proceso de pruebas de software (testing) utilizando Mocha y Chai.
* Practicar la evaluación del cubrimiento de código usando Istanbul.
* Poner en práctica la metodología de desarrollo TDD.
* Desarrollar páginas HTML sencillas.
* Practicar el uso de diseño web a través de CSS

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
Edite el fichero `README.md` del directorio principal de su proyecto
e incluya en ese fichero, en primer lugar, la URL de la página `index.html` de este proyecto,
alojada en su la máquina IaaS de la asignatura.
En esa página índice ha de enlazar (se indica el texto de cada uno de los enlaces):

* Ejecución de la aplicación (enlace `Chess`)
* Documentación de la aplicación (enlace `Chess - Documentación`)
* Resultados de las pruebas desarrolladas (enlace `Chess - Tests`)
* Informe de cubrimiento de código (enlace `Chess - Cubrimiento`)
* Diagrama UML de la aplicación (enlace `Chess - UML`)
* Reserve asimismo en `index.html` un enlace adicional (`Ejercicio evaluación`) para el ejercicio que realizará
  durante la sesión de evaluación.

**Todas** las páginas que se enlacen desde `index.html` han de tener como título (etiqueta
`title` de HTML) apellidos y nombre del autor de la aplicación. 
Asimismo apellidos y nombre deben figurar en las diferentes páginas indexadas (etiqueta `h1` de HTML).

Indexe en esa página principal cualquier resultado adicional que desee mostrar como evidencias para la evaluación de su trabajo.

El servidor web que aloja estas páginas ha de seguir funcionando después de cerrar la sesión en la máquina
IaaS-ULL que aloja el servidor para posibilitar la evaluación del trabajo realizado.

### Ajedrez

En esta práctica se propone tomar como punto de partida el programa que resuelve el problema de
las 8 reinas para añadirle una interfaz gráfica basada en HTML y CSS y poder ejecutar el programa a través de esa interfaz web.

Para la realización de esta práctica resulta conveniente, aunque no imprescindible, que estudien mínimamente el patrón arquitectónico 
[MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) 
(Modelo Vista Controlador). 
Se trata de un patrón (arquitectónico, no de diseño) independiente del lenguaje
sobre el que resulta fácil encontrar información. 

### Especificacines de la aplicación de ajedrez

* Utilice en el desarrollo de la aplicación un enfoque orientado a objetos: 
identifique clases, objetos y métodos para resolver el problema propuesto. 
Utilice alguna herramienta para generar un diagrama UML que represente las 
clases que utiliza su programa y muestre ese diagrama a través de `index.html`.

* En el desarrollo de la aplicación que se propone, aplique el
[enfoque TDD](https://en.wikipedia.org/wiki/Test-driven_development) 
iterando las fases que se definen en esa metodología:
Red - Green - Refactor - [Integrate] y escribiendo los tests y la documentación de la aplicación al mismo tiempo que desarrolla el código.

* Comience por adaptar su programa del problema de las 8 reinas al paradigma orientado a objetos:
  identifique clases y métodos y reescriba ese programa de forma correspondiente.

* Desarrolle una página web cuya interfaz gráfica se asemeje lo más posible, en cuanto a su apariencia, no en
  cuanto a sus funcionalidades, a la que se muestra en esta imagen:
![Ajedrez](https://raw.githubusercontent.com/fsande/PAI-Labs-Public-Data/master/img/p11_Chess/chess.png "Ajedrez")
  También puede ver la interfaz que se pretende imitar en [esta página de juego on-line de ajedrez](https://lichess.org/MgfoDUSW/black).
	Su página ha de imitar colores, tipografías, tamaños y distribución de los elementos.

Se colocarán en la página enlaces similares a los que figuran en la página de referencia, pero en su caso
	esos enlaces no estarán operativos (no enlazan a otras páginas).

Mientras que debe Ud. imitar tamaño, disposición y colores del tablero de ajedrez, las fichas no tienen porqué
	parecerse a las de la web de referencia. Localice Ud. imagenes de fichas de ajedrez que le parezcan
	adecuadas para incorporarlas a su desarrollo.

* Añada un pie de página (*footer*) en el que incluya información sobre la Universidad,
  titulación y asignatura.

* Sustituya en su página los dos paneles a la izquierda del tablero (el panel del tipo de partida y el del
  chat de espectador) por los nuevos elementos que se indican a continuación:

1. Una casilla (*checkbox*) que permita seleccionar el tipo de problema que se va a mostrar: 8 reinas / 8 reinas
   generalizado. El texto será `8 reinas generalizado` y si el *checkbox* está seleccionado se resolverá el
	 problema generalizado; si no lo está, se resolverá el problema "clásico".

2. Un botón `Generar solución` que al ser pulsado dibuje en el tablero una solución al problema elegido
(casilla anterior).

3. Un segundo botón `Siguiente solución` que al ser pulsado muestre en el tablero la siguiente solución al
problema elegido.

4. Un tercer botón `Partida de ajedrez` que al ser pulsado dibuje en el tablero la configuración inicial de
las piezas de una partida de ajedrez. 

* Sustituya en su página el panel que figura a la derecha del tablero en la web de referencia e incluya en él
  un panel en el que, para cada solución que se muestre para el problema de las 8 reinas imprima 
	en [notación algebraica](https://en.wikipedia.org/wiki/Algebraic_notation_(chess)) las posiciones que ocupa
	cada una de las 8 reinas ubicadas en el tablero.
	
* No añada a la interfaz gráfica (web) de su programa otros elementos que los que se describen en esta especificación.
  Trate asimismo de ceñirse a la utilización de los elementos HTML y CSS estudiados en las clases de teoría.
