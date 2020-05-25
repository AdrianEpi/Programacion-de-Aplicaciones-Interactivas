# Práctica 10. Tiro parabólico. Programación Gráfica y Orientada a Objetos en JS.
### Factor de ponderación: 9

### Objetivos

Los objetivos de esta práctica son:

* Poner en práctica metodologías y conceptos de Programación Orientada a Objetos.
* Practicar el proceso de pruebas de software (testing) utilizando Mocha y Chai.
* Practicar la evaluación del cubrimiento de código usando Istanbul.
* Poner en práctica la metodología de desarrollo TDD.
* Desarrollar páginas HTML sencillas.

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

* Ejecución de la aplicación (enlace `Projectile`)
* Documentación de la aplicación (enlace `Projectile - Documentación`)
* Resultados de las pruebas desarrolladas (enlace `Projectile - Tests`)
* Informe de cubrimiento de código (enlace `Projectile - Cubrimiento`)
* Diagrama UML de la aplicación (enlace `Projectile - UML`)
* Reserve asimismo en `index.html` un enlace adicional (`Ejercicio evaluación`) para el ejercicio que realizará
  durante la sesión de evaluación.

**Todas** las páginas que se enlacen desde `index.html` han de tener como título (etiqueta
`title` de HTML) apellidos y nombre del autor de la aplicación. 
Asimismo apellidos y nombre deben figurar en las diferentes páginas indexadas (etiqueta `h1` de HTML).

Indexe en esa página principal cualquier resultado adicional que desee mostrar como evidencias para la evaluación de su trabajo.

El servidor web que aloja estas páginas ha de seguir funcionando después de cerrar la sesión en la máquina
IaaS-ULL que aloja el servidor para posibilitar la evaluación del trabajo realizado.

### Tiro parabólico

Se denomina 
[movimiento parabólico](https://www.ck12.org/c/physics/projectile-motion-for-an-object-launched-at-an-angle/lesson/Projectile-Motion-for-an-Object-Launched-at-an-Angle-PHYS/)
al realizado por un objeto cuya trayectoria describe una parábola. 
Se corresponde con la trayectoria ideal de un proyectil que se mueve en un medio que no ofrece 
resistencia al avance y que está sujeto a un campo gravitatorio uniforme.
En [esta referencia](http://galia.fc.uaslp.mx/~medellin/Applets/Tiro/Tiro.htm)
hay información adicional sobre las leyes que rigen el comportamiento del tiro parabólico.

En esta práctica se propone desarrollar un programa `projectile.js`
que simulará el lanzamiento de un proyectil disparado desde un punto dado con una velocidad y ángulo
de disparo iniciales.
Se tomará [esta imagen](https://raw.githubusercontent.com/fsande/PAI-P10-Projectile/master/projectile.png) como referencia de lo que se mostrará en el lienzo principal de la aplicación
a desarrollar.

### Especificacines de la aplicación de simulación de tiro parabólico

* Utilice en el desarrollo de la aplicación un enfoque orientado a objetos: 
identifique clases, objetos y métodos para resolver el problema propuesto. 
Utilice alguna herramienta para generar un diagrama UML que represente las 
clases que utiliza su programa y muestre ese diagrama a través de `index.html`.

* En el desarrollo de la aplicación que se propone, aplique el
[enfoque TDD](https://en.wikipedia.org/wiki/Test-driven_development) 
iterando las fases que se definen en esa metodología:
Red - Green - Refactor - [Integrate] y escribiendo los tests y la documentación de la aplicación al mismo tiempo que desarrolla el código.

* La simulación se mostrará en una página `projectile.html` que tendrá 4 partes diferenciadas:
P1 el canvas donde se dibuja la trayectoria del proyectil,
P2, un segundo canvas por debajo del anterior en el que se mostrará la información (distancia recorrida,
tiempo transcurrido, etc.) y
P3, un tercer panel en el que figuran los botones y controles de parámetros de entrada.
La sección P4 contiene información y enlaces adicionales.

* El canvas principal (P1) será de forma rectangular y abarcará la mayor parte del viewport del naveador.

* El canvas de P2 estará inicialmente vacío y en él se imprimirá
información relativa al lanzamiento que se realice, una vez que el proyectil finalice su trayectoria.
La información a reflejar es: 
tiempo transcurrido (`t`) en segundos, 
distancia recorrida horizontalmente (`x`) en metros, 
altura del proyectil (`y`) en metros y
altura máxima alcanzada (`y max`) también en metros.

* En el tercer panel (P3) el programa debe mostrar sendos campos de texto en los que el usuario
podrá introducir velocidad inicial y ángulo del lanzamiento. 

* También en P3 se dispondrá un *checkbox* en el que el usuario elige si se dibuja o no la trayectoria del proyectil. 
Las trayectorias correspondientes a diferentes lanzamientos se dibujarán con diferentes colores, que se superpondrán en 
el lienzo de P1. P2 mostrará la información correspondiente al último lanzamiento y esa información debe
borrarse con cada nuevo lanzamiento.

* En el origen de coordenadas, se representará el cañón que efectúa el disparo mediante una flecha (vector)
  cuyo ángulo con el eje de abcisas coincida con el ángulo del disparo (la flecha se dibuja
	cuando se active el botón `Lanzar` orienta en función del valor del ángulo introducido).

* Para el primer proyectil lanzado, la escala de distancia (eje X) se configurará dinámicamente de
  modo que ese primer lanzamiento "no se salga de la escala".

* Siempre que la apliación cumpla con las especificaciones anteriores, todo lo demás (colores, disposición de los paneles, escalas,
  etc.) queda a elección del desarrollador.
	Asimismo, cada desarrollo puede incluir, de forma opcional y según el criterio de su autor/a, aquellos elementos
	gráficos que contribuyan a una mayor calidad del diseño final.

* El diseño del HTML de esa página brinda una oportunidad para practicar los elementos HTML que se han estudiado hasta ahora.
  Consiga, p. ej. que su página tenga secciones *header* y *footer*. En la cabecera coloque al menos sus
	apellidos y nombre. Utilice el footer para colocar información sobre la asignatura, titulación, etc.

* Para la interactividad necesaria (campos de texto, botones, *checkbox*) consulte 
  los elementos HTML [`input`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
	y
	[`button`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
	así como el método
	[getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById).
	[Esta referencia](https://www.tutorialrepublic.com/faq/how-to-get-the-value-of-text-input-field-using-javascript.php)
	puede servir de ejemplo sobre cómo proceder.

* No se pretende que se utilicen elementos CSS o HTML no estudiados hasta esta fecha.

* Se propone que en la sección P4 se presente información sobre el tiro parabólico así como
  enlaces a páginas de referencia que se utilicen para este trabajo y
  cualquier elemento que les parezca oportuno e interesante.

* Para visualizar la información de P4 habría que desplazarse (*scroll*) en la página puesto que la vista 
  inicial de la misma debiera estar ocupada en su mayor parte por las secciones P1, P2 y P3.
