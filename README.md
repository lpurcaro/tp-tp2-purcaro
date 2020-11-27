# Publicar ensayos clínicos

## Levantar el proyecto
1) Instalar las dependencias del proyecto y de los modulos que consume el mismo.
    * En el directorio raiz
    * En `./modulos/NodeJsEmailSenderModule`
    * En `./modulos/pdf-generator`
    
    Ejecutar el comando:

    ```
    npm install
    ```

2) Ingresar email y pass en el archivo `.env` que se encuentra en el directorio raíz. Este va a ser la persona que emita los emails que se envien desde la aplicacion.

    **Si el envio falla por cuestiones de permisos, se puede configurar la cuenta de gmail para permitirlo entrando [acá](https://myaccount.google.com/security?pli=1#connectedapps) y habilitando la opcion `Allow less secure app` *
    
3) En el directorio raíz del levantar el servidor con el comando
    
    ```
    npm start
    ```

4) La aplicación se levanta en el puerto 8080, por lo que la url base cuando queramos consumir la api va a ser `localhost:8080`

## Documentacion de la Api

Es necesario, cuando se ejecuten métodos de tipo `POST`, tener seteados los siguientes headers:
    
    
    Content-Type: application/json
    Content-Length: <calculated when request is sent>
    

#### Ensayos Clínicos

Url Base: `/api/ensayo`
* POST : `/`

    Da  de alta un Ensayo Clínico a partir de un json con el siguiente formato:
    ```
  {
     "laboratorio":{
        "nombre":"Bayer SA",
        "direccion":"Munro, Provincia de Buenos Aires",
        "telefono":"011 4762-7000",
        "email":"contacto@bayer.com",
        "logo":"https://1000marcas.net/wp-content/uploads/2020/01/Bayer-Logo.png"
     },
     "enrolador":{
        "nombre":"Lucila Purcaro",
        "ensayosPublicados":8,
        "email":"lucila.purcaro@gmail.com"
     },
     "fechaInicio":"03-11-2020",
     "fechaFin":"20-01-2021",
     "titulo":"Prueba de Minoxidil",
     "descripcion":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
     "pacientes":20,
     "requisitos":[
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
     ],
     "id":1,
     "colors":{
        "primary":"#05BCFF",
        "secondary":"#8AD329"
     }
  } 
  ``` 

    Este metodo ejecuta en orden las siguientes funcionalidades:
    * Guarda el ensayo clinico en memoria
    * Genera un pdf con los datos de dicho ensayo clínico
    * Envia un email a la persona que cargó el ensayo confirmandole que fue guardado correctamente y enviandole el pdf como comprobante.
