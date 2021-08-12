# FELICITACIONES.

En primer lugar y por encima de todo, te quiero felicitar, me parece que te quedo bastante bien y que fuiste ful
cuidadoso con los detalles lo cual es excelente.

Si bien esta bastante bien, hay una serie de mejoras que se pueden tomar en cuenta y que con la intención de que puedas
seguir evolucionando debemos atacar, las describiré a continuación
> NOTA: 17

## Correcciones en archivos de estilo.

1. Excelente que manejaste el archivo de variables y uno principal, sin embargo, en el archivo de estilos principal hay
   una serie de colores que estan puestos de forma directa y no por medio de variables, mi recomendación es que los
   ajustes cambiandolo por variables cuyo nombres representen un poco el uso principal del mismo
    1. Te agrego [acá](https://material.io/resources/color/#!/?view.left=0&view.right=0) la herramienta de color-tools,
       no es necesario que la uses, pero por dudas de que te sea útil:
    2. Aca te
       dejo [un post interesante](https://webdesign.tutsplus.com/articles/quick-tip-name-your-sass-variables-modularly--webdesign-13364)
       que habla un poco acerca de como manejar una buena nomeclatura, no es necesario lo sigas al pie de la letra la
       idea es solo que tengas una referencia de como ordenarlo y a partir de alli apliques tu criterio
2. lineas como la de los botones, estando en scss, puedes simplificarla haciendo uso de la herencia anidada que ellos
   permiten (no sé si ese es el término que ellos le dan)

```scss
.btn {
  > .clean {

  }

  > . signs {
      
  }
}

```
3. Hablando de los botones, fijate que usas el mismo "color" para los botones en
hover, sin embargo, no estás usando la misma forma de asignación, a eso debes
prestarle especial atención ya que son el tipo de cosas que cuando requieres
hacer ajustes impactan en el tiempo de solución.
4. `.btn > input` 
   1. Usaste un div para crear el estilo del boton y adentro
   el input. podrias eliminar el div y dejar directamente el input
   aparte.
   2. hay un [tag html `<button>](https://developer.mozilla.org/es/docs/Web/HTML/Element/button)` que te seria más útil
   y a nivel de semántica me parece que es mejor, no es necesrio
   pero estaria bueno lo modifiques y uses, así te asocias
   tambien con nuevos selectores html.
   3. si en esos botones estan usando la misma clase `.btn`
   que está abajo, podrias envolver tanto al input como al resto
   de estilos adentro de las llaves de la clase .btn
   ```scss
      .btn {
          // contenido clases hijas
      }  
   ```
5. Tienes varias clases en ingles, otras en espaniol. En general
no es buena practica ligar los lenguajes porque hace que sea díficil
intuir los nombres de las variables cuando se trabaja en equipo. Deberias
intentar usar o espaniol o ingles. Una recomendación mejor aún pero no necesaria, intenta manejar todo en ingles, eso
tiene varios puntos positivos
   1. Todos los lenguajes estan en ingles, al forzarte a usar el lenguaje habituas a tu cerebro a que lo maneje
   2. Estandariza el codigo y lo simplifica tambien pues las palabras en ingles suelen
   ser más cortas y concisas además de que no tienen caracteres especiales.
   3. Practicas ingles que, como te he dicho antes...... te sirve.


## Observaciones de la web

1. La calculadora no es responsive, es necesario que se pueda adaptar a los distintos dispositivos.


### Notas
> (si no uso la enie es porque tengo que estar cambiado mi teclado y me da flojera)