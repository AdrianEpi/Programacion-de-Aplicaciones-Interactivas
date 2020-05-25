# Práctica 2. Números 'Pedrisco'
### Factor de ponderación: 5
Se ha comprobado experimentalmente para números naturales muy grandes que si a un número natural, `n`, se le somete al siguiente proceso, al que denominaremos *pedrisco*:
 1. Si el número es par, dividirlo por 2
 2. Si es impar, multiplicarlo por 3 y sumar 1
 3. Si `n` es igual a 1, parar el proceso. Si `n` es distinto de 1 volver al paso 1

todos los números naturales acaban tomando el valor 1 después de un cierto número de iteraciones del proceso. Por ejemplo, si se toma `n = 5`:

`n`<sub>0</sub> = 5  

`n`<sub>1</sub> = 3 * 5 + 1 = 16

`n`<sub>2</sub> = 16 / 2 = 8

`n`<sub>3</sub> = 8 / 2 = 4

`n`<sub>4</sub> = 4 / 2 = 2

`n`<sub>5</sub> = 2 / 2 = 1

Se observa  que para `n`=5, el proceso *pedrisco* se itera 5 veces antes de su finalización (el último número acaba siendo 1).
Se desconoce si esta es una propiedad intrínseca a los números naturales o bien si se trata de una particularidad para la que aún no se ha encontrado ningún contraejemplo.

La práctica consiste en desarrollar un programa en JavaScript (`pedrisco.js`) que tome como entrada dos números `N` y `M` (`N` < `M`) e imprima en pantalla el número de iteraciones que se realiza el proceso para todos los números  `N` <= `n`  <= `M`.
El programa debe tomar los valores de entrada por línea de comandos:

    node pedrisco.js N M

E imprimirá `N-M+1` líneas con el formato:

    <número> - <número de interaciones>

El programa calculará asimismo los números `p` y `q` (N <= `p`, `q` <=$ M) que requieren el máximo y mínimo número de iteraciones del proceso 'pedrisco' en ese rango.

Se requiere que el código esté escrito siguiendo los criterios especificados en la [Google JavaScript Style Guide][1].
Estudie ese documento y ponga en práctica todo lo que él se indica.
Esa guía de estilo es la que se utilizará en la asignatura y la conformidad de todos los programas presentados como prácticas es un requisito en la evaluación de los mismos.

Estudie [esta referencia][2] para aprender a trabajar con parámetros pasados en línea de comandos a un programa ejecutado con Node.js.

Este [código de ejemplo][3] (ejecútelo en la consola de Node, no en el REPL.it) puede servirle de ayuda inicialmente.

[1]: https://google.github.io/styleguide/jsguide.html "Google JavaScript Style Guide"
[2]: https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/ "How to parse command line arguments"
[3]: https://repl.it/@fsande/commandLineArguments "Command line arguments code example"
