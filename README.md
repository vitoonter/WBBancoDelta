
# Web Baking - Banco Delta

## Descripción
*Web Banking Banco Delta*, es una aplicación para atender a los clientes del Banco Delta. 

Estos clientes podrán ser tanto una persona física, como una empresa.
La aplicación se encarga del front end, y se conecta a un backend de Bantotal para ejecutar las acciones.
Algunas de las cosas que los clientes podrán realizar son: consulta de saldo, movimientos, estados de cuenta, transferencias, pagos de servicios, etc.

La aplicación esta construida sobre una arquitectura de componentes, construidos con **[ReactJS](https://facebook.github.io/react/) + [Redux](https://github.com/reactjs/redux)**.


## Instalación

Antes de iniciar la instalación asegurate tener instalado [NodeJS](https://nodejs.org/) en su versión 4 o más.

*Si ya tienes instalado NodeJs sigue los siguientes pasos (desde la consola):*

```sh
$ git clone https://github.com/Bantotal/WBBancoDelta.git
$ cd WBBancoDelta
$ npm install
$ npm start
```
Listo, abre el navegador con la url http://localhost:3000 y veras la aplicación ejecutando.

## Modo de colaboración

Con fines de construir un proyecto de alta calidad, se ha diseñado una metodología o flujo de trabajo. Todos los que participen en el proyecto la deberán cumplir.

Ademas de cuidar la calidad, esta metodología ayudará al equipo a trabajar mas cómodo y con menos dolores de cabeza.

**¿Quienes puede colaborar?**
El proyecto es privado y solo podrán colaborar las personas asignadas al mismo.

### GitFlow:
Es un estricto modelo de diseño de ramas. Es considerado un flujo de trabajo avanzado, basado en buenas practicas.

Se dividen las áreas de ramas en 3 tipos:
  - A)  Bugs
  - B)  Features
  - c)  Release
  
Su estructura estricta de ramas permite trabajar proyectos masivamente grandes. Funciona bajo un líder de proyecto, que se encarga de mantener el control de las ramas.

_El proceso es el siguiente:_

![N|Solid](https://raw.githubusercontent.com/Voronenko/gitflow-release/master/images/git-workflow-release-cycle-4maintenance.png)


**A- Bugs, ramas de mantenimiento**

Cuando un bug es encontrado por un usuario, se crea un Issue en el repositorio de GitHub y se crea una rama. La rama puede llamarse con el nombre del issue creado.
Por ejemplo: “issue001”.
Es la única rama que puede subir directamente a la rama master.

**B- Features, rama de development**

Para esta sección, se dividen en dos tipos, la rama principal llamada “development”, el cual va a recibir todas las conclusiones de las siguientes ramas derivadas, las cuales son el segundo tipo, llamadas “features”.

Las ramas “features” se derivan de la rama de “development” y se pueden nombrar de acuerdo al desarrollo que se va a realizar.
Una vez que estén listas, se fusionan directamente con la rama “development”, el cual va acumulando todos los features confirmados.

**C) Raleases, rama de lanzamiento**

Conforme se vayan teniendo “features” confirmados en la rama de “development”, se creara una rama nueva llamada “release”.
Esta rama funciona para preparar los lanzamientos. Se pueden revisar ante “testing” y por auditoria de otros miembros del equipo.

En caso de que haya modificaciones por parte de este equipo, se trabaja la misma rama de “raleases”.

Una vez que se tengan listas las modificaciones, se puede subir a “master”. Regularmente este trabajo lo hará el líder del proyecto.
Como dato importante, no solo se hace una subida hacia la rama “master”, si no también hacia la rama “development”, esto con la intención de que los features restantes no tengan problemas con la actualización que hizo el equipo de “raleases”.

Finalmente, en el área d, solo denotamos que cuando se genera un release, se van generando “tags” con el numero de release realizado, v1.0.

**IMPORTANTE:**

Con fines de mantener un orden y asegurar consistencia en el código generado. Los features siempre deben ser subidos al repo mediante un pull request, nunca se debe hacer un push directamente a la rama development, mucho menos directamente a master.

El merge a development, al release o a master lo realizará el lider del proyecto.

Los colaboradores, siempre antes de desarrollar un nuevo feature, deberan hacer un "pull origin development". Y a partir de la rama development generar la nueva rama para el feature.

## Requerimientos

Los requerimientos del proyecto estan documentados en la [wiki](https://github.com/Bantotal/WBBancoDelta/wiki) del repositorio.
Generalmente se trabajará en Sprint semanales.

Ademas, cada Sprint contara con un [Milestone](https://github.com/Bantotal/WBBancoDelta/milestones), que dentro contiene los [Issues](https://github.com/Bantotal/WBBancoDelta/issues) de cada Sprint. Los miembos del equipo tomaran estos Issues que se traducen en ramas de tipo feature.
