# 9. Integración Continua _(Continuous Integration)_.

La integración continua favorece no solo la legibilidad del código sino además la prevención de errores y si se producen, favorece su localización rápida y sencilla. Además permite tener conciencia en todo momento del trabajo que se lleva desarrollado y también permite tener a mano cuando el Dueño del Producto lo solicite una versión perfectamente funcional y con los últimos avances.

>La forma de llevar a cabo la integración continua es introducir todos los cambios producidos a lo largo del día a final de la jornada. Todos los cambios se introducen en el sistema, al menos, una vez al día. Los cambios deberán ser integrados siempre continuamente y no acumularlos e integrarlos de un golpe todos.

El tratar de retrasar la inserción de cambios en nuestro código lo único que produce son problemas. Si ya sabemos que un código claro y simple es mas fácil de manejar y de entender también deberíamos saber que los cambio que se acumulan pueden convertirse en un obstáculo difícilmente superable. La idea es tener siempre versiones simples y manejables del sistema. Esto también se puede aplicar a los cambios que se deben introducir en versiones pasadas.

>La integración continua propone que todo el código desarrollado por los miembros del equipo encuentren un punto de alojamiento común, en el cuál
deban enviarse diariamente, previo correr las pruebas de integración, a fin de verificar que lo nuevo, no “rompa” lo anterior. Estos puntos de alojamiento en común, suelen ser repositorios, los cuales pueden manejarse ampliando las ventajas de la integración, mediante software de control de versiones.

En este punto, las Pruebas de Integración, juegan un papel fundamental, puesto que de ellos depende la integración de lo nuevo con lo ya desarrollado. Independientemente de los repositorios, jamás se logrará una integración continua real, si no existen Pruebas de Integración.
