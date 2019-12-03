<! DOCTYPE html>
<html>
  <head>
    <meta charset = "UTF-8" />
    <title> Hola mundo </title>
    <script src = "https://unpkg.com/react@16/umd/react.development.js"> </script>
    <script src = "https://unpkg.com/react-dom@16/umd/react-dom.development.js"> </script>
    
    <! - No use esto en producción: ->
    <script src = "https://unpkg.com/@babel/standalone/babel.min.js"> </script>
  </head>
  <cuerpo>
    <div id = "root"> </div>
    <script type = "text / babel">

      ReactDOM.render (
        <h1> ¡Hola, mundo! </h1>,
        document.getElementById ('root')
      );

    </script>
    <! -
      Nota: esta página es una excelente manera de probar React pero no es adecuada para la producción.
      Compila lentamente JSX con Babel en el navegador y utiliza una gran versión de desarrollo de React.

      Lea esta sección para una configuración lista para producción con JSX:
      https://reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project

      En un proyecto más grande, puede usar una cadena de herramientas integrada que incluye JSX en su lugar:
      https://reactjs.org/docs/create-a-new-react-app.html

      También puede usar React sin JSX, en cuyo caso puede eliminar Babel:
      https://reactjs.org/docs/react-without-jsx.html
    ->


    
  </body>
</html>