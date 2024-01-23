# Examen programador NodeJS
Se necesita desarrollar una aplicación web en NodeJS con un front en React(+Vite) que
posea un conjunto reducido de características propias de un Blog de Internet.

La funcionalidad que deberá de proveer será la siguiente:

- Alta de entradas
- Mostrar un listado de entradas
- Búsquedas
- Mostrar detalle de una entrada.


- http://localhost:8080/api/entradas

Para crear una nueva entrada selecciona el metodo **POST** con la url descrita y el body lo enviamos como JSON

> **titulo** -> coloca el titulo de la entrada.

> **autor** -> Coloca los autor de la entrada.

> **contenido** -> Coloca el contenido de la entrada.

`
{
    "titulo": "Primer entrada",
    "autor": "Esli Castillo",
    "contenido": "Esta es la primer entrada del blog para probar las funcionalidades iniciales del api para la aplicacion"
}
`

Esto devolvera un objeto JSON con la informacion agregada

`
{
    "id": 4,
    "titulo": "Primer entrada",
    "autor": "Esli Castillo",
    "contenido": "Esta es la primer entrada del blog para probar las funcionalidades iniciales del api para la aplicacion",
    "fecha_publicacion": false,
    "updatedAt": "2024-01-23T00:36:10.016Z",
    "createdAt": "2024-01-23T00:36:10.016Z"
}
`

- http://localhost:8080/api/entradas

Para listar todas las entradas selecciona el metodo **GET** con la url descrita

Esto devolvera un objeto JSON con todos los usuarios que se encuentran en la base de datos

`
[
     {
        "id": 2,
        "titulo": "tercer entrada",
        "autor": "jesus",
        "contenido": "probando desde el front el registro de las entradas",
        "fecha_publicacion": false,
        "createdAt": "2024-01-22T23:37:08.662Z",
        "updatedAt": "2024-01-22T23:37:08.662Z"
    },
    {
        "id": 3,
        "titulo": "Segunda entrada",
        "autor": "Esli Castillo",
        "contenido": "Esta es la segunda entrada del blog para probar las funcionalidades iniciales del api para la aplicacion",
        "fecha_publicacion": false,
        "createdAt": "2024-01-23T00:35:58.899Z",
        "updatedAt": "2024-01-23T00:35:58.899Z"
    }
]
`

- http://localhost:8080/api/entradas/{id}

Para listar el detalle de una sola entrada selecciona el metodo **GET** con la url descrita y colocamos el id de la entrada a mostrar

Esto devolvera un objeto JSON con el detalle de la entrada

`
{
    "id": 2,
    "titulo": "tercer entrada",
    "autor": "jesus",
    "contenido": "probando desde el front el registro de las entradas",
    "fecha_publicacion": false,
    "createdAt": "2024-01-22T23:37:08.662Z",
    "updatedAt": "2024-01-22T23:37:08.662Z"
}
`

- http://localhost:8080/api/entradas/{id}

Para eliminar una entrada selecciona el metodo **DELETE** con la url descrita y colocamos el id de la entrada a eliminar

Esto devolvera un objeto JSON con el detalle de la accion

`
{
    "message": "Entrada was deleted successfully!"
}
`

- http://localhost:8080/api/entradas?titulo={texto}

Para buscar una entrada selecciona el metodo **GET** con la url descrita y colocamos como parametro la columna (titulo, autor, contenido) y el valor a buscar.

Esto devolvera un objeto JSON con el detalle de la o las entradas encontradas

`
[
    {
        "id": 4,
        "titulo": "Primer entrada",
        "autor": "Esli Castillo",
        "contenido": "Esta es la primer entrada del blog para probar las funcionalidades iniciales del api para la aplicacion",
        "fecha_publicacion": false,
        "createdAt": "2024-01-23T00:36:10.016Z",
        "updatedAt": "2024-01-23T00:36:10.016Z"
    }
]
`