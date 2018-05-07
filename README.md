# FRONT END CHALLENGE - NINJA EDITION.

Hoy Bitso es el principal mercado de divisas digital de México y estamos muy orgullosos de eso y la neta  lo hemos logrado gracias al equipo que tenemos, pero como tu sabes, el reto crece cada día y es momento de llevar a nuestro equipo de ingeniería al siguiente nivel 🚀.

Estamos buscando al mejor Front End Developer en México. Como miembro de Bitso tendrás la oportunidad de hacer un gran impacto al ecosistema de divisas digitales en México, construirás productos dirigidos a miles de usuarios, podrás trabajar directamente con miembros fundadores de Bitso, colaborarás con un equipo de diseño y UX de primer nivel y contribuirás con tu código en uno de los mejores equipos de ingeniería en México 👊💥.

## Premios
Por medio de este Coding Challenge, los mejores van a tener la oportunidad tener un lugar dentro del equipo de Bitso y aparte ganar unos premios bastante jugosos. Así que prepara tu terminal, abre tu editor de textos y ¡a tirar código!

* 1er lugar 50,000 pesos.
* 2ndo lugar 30,000 pesos.
* 3er lugar 10,000 pesos.

## Instrucciones
Lo que tienes que hacer es lo siguiente:

1. Haz un fork de éste repositorio.
2. Tendrás que programar un proyecto traduciendo los diseños que vienen en `Assets.zip` en un código robusto, funcional, legible y fácil de mantener.
3. Tendrás que usar el API de Bitso.
4. Deberás de usar las siguientes tecnologías obligatoriamente: HTML5, CSS3/Less, JavaScript y React. Otros tecnologías están totalmente permitidas, siempre y cuando las justifiques (como pre-procesadores, linters, manejadores de paquetes, etc).
5. Tendrás hacer contribuciónes regulares a tu código a partir del momento de que haces tu fork.
6. Cuando tu código esté listo, haz un pull request al repositorio original.
7. Incluye instrucciones claras de como correr tu proyecto en el README.

## Evaluación
Esto es lo que evaluaremos:

1. Calidad del código: 30 puntos.

    * Tu código es legible.
    * Tu código sigue una buena guía de estilo.
    * Tu código es mantenible.
    * Tu código es escalable.
    * Tu código es eficiente.
    * Tu código está bien documentado.

2. Uso de recursos: 25 puntos.
    * Mediremos el uso de CPU y RAM de tu solución en el diferentes navegadores y sistemas operativos.

3. Fidelidad al diseño: 20 puntos.

    * Nuestro equipo de diseño evaluará qué tan cerca está la solución de los diseños proporcionados.

4. Tiempo: 15 Puntos

    * Tienes hasta el 6 de junio para entregar tu proyecto. Si lo mandas antes del 19 de mayo tendrás 10 puntos extras.

5. Creatividad: 10 puntos

    * Encuentras maneras de mejorar el diseño y justificarlas.

6. Otros: 15 puntos c/u:

    * Tu propuesta es reponsiva y se ajusta a diferentes tamaño de pantallas, especialmente celulares.
    * Tu código incluye pruebas.
    * Tus animaciones son preciosas.
    
## Notas sobre el API

* La documentación del API de Bitso la podrás encontrar [aquí](https://bitso.com/api_info)
* Para obtener la información de `open`, `close`, `high` y `low` de las transacciones por día en un periodo de tiempo, deberás consultar el siguiente URL: 
```https://bitso.com/trade/chartJSON/<book>/<timeframe>```
dónde `book` es el libro a consultar y `timeframe` puede tomar estos valores:
    * `1month`
    * `3months`
    * `1year`
    
    Por ejemplo: `https://bitso.com/trade/chartJSON/btc_mxn/1month` regresará información de el último mes del mercado BTC/MXN.
