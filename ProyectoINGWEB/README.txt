Integrantes:

-Matías Díaz
-Amanda Flores
-Matías Sanchez

Trabajo  a realizar:

Desarrollar una aplicación web integrando una base de datos ya sea relacional o no relacional. 

Requerimientos:

Backend:

1. Uso al menos uno de los siguientes lenguajes: PHP o nodeJS. También puede hacer
   uso de frameworks como: Laravel, nodeJSExpress o Django.

2. Definir el modelo a implementar y presentar el diseño de la base de datos de
   acuerdo al caso de estudio asignado.

3. Justificar la decisión del tipo de base de datos seleccionada. Esta justificación es
   basada con los siguientes criterios: rendimiento, tamaño de datos, capacidad,
   configuración e implementación.

4. Se debe implementar los CRUD necesarios, por lo que debe diseñarse un REST-API
   haciendo uso de algún lenguaje de programación mencionados en el punto 1.

5. Cada una de las operaciones CRUD deben tener mensajes de comunicación que le
   informe al usuario acerca del estado de la operación.

6. Indicar una política de seguridad que debe tomarse en cuenta para construir un
   backend seguro.

Frontend:

1. Diseño responsivo haciendo uso de los módulos de boostrap o material design.

2. Uso de preprocesador SASS.

3. El diseño debe tener un header y un footer, este debe conservarse en toda la
aplicación web.

4. Debe existir una interfaz gráfica de administrador, el cual existe un rol de
    administrador, y éste pueda acceder a la información a través de un inicio de sesión.
    La información que podrá acceder es:
        
        a. Reporte de los usuarios registrados.
        b. Un Reporte asociado al caso de estudio asignado: 
              
              Caso 1. Reporte de pedidos
              Caso 2. Reporte de Solicitudes que visualice en colores los tipos de
                      prioridad.
              Caso 3. Reporte de citas médicas que visualice en colores los estados.

5. Debe existir un buscador que permita filtrar la información con al menos 3 opciones.

6. Formulario de Registro, el cual solicite la siguiente información: nombres, apellidos,
    RUT, dirección de residencia, Región, Comuna, Correo electrónico, contraseña y
    confirmar contraseña. La contraseña debe guardarse encriptada en la base de datos.
    La región que se seleccione debe mostrar las comunas asociadas, este es un tipo de
    campo “Select”. Los campos deben ser obligatorios.

7. Formulario de Iniciar Sesión que tenga captcha.

8. Recordar contraseña.


Especificaciones Backend:
1- Se hace uso el framework nodejs express 
2- El tipo de base de datos seleccionada es relacional, ya que nos permite manejar los datos de una forma mas sencilla y segura
3- Se implementan los CRUD necesarios y se diseña el REST-API 
4- Se utiliza jsonwebtoken para la comunicacion del inicio de sesion con el usuario
5- Se utiliza bcrypt para encriptar las claves


Especificaciones Frontend:
1- Se realiza un diseño responsivo utilizando material.angular
2- Se utiliza el procesador SASS
3- El diseño contiene un HEADER Y UN FOOTER
4- No existe una interfaz grafica de administrador
5- No incluye buscador que permita filtrar informacion
6- Existe un formulario de registro con la informacion solicitada
7- No existe un captcha de inicio sesion
8- No existe el recordar contraseña

Inconvenientes durante el trabajo:

-Dificultad al momento de unir Backend con Frontend
-Integrar BD
-Desaparición parcial de código al momento de compartir Typescript
-Guardar información ingresada en página

Fallos: 
-Al momento de desplazarse desde /crearticket (boton "Crear ticket") a /tabla (boton "Ver tickets"),no se puede devolver a crear ticket.
-AL momento de colocar logout usted cerrara sesion, pero si usted refresca la pagina solo mostrara la barra superior con el logou, al seleccionar
el boton logout se cerrara la sesion y podra iniciar sesion nuevamente.

