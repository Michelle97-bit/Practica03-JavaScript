<!DOCTYPE html>
<html>
    <head>

        <title>Galeria de Imagenes en HTML</title>

    </head>


    <body>

        <?php
            $img = $_GET['img'];
            echo '<img class="imagenes" src="./images/'. $img . '.jpg" alt="imagen" > </article>'
        ?>
        
    </body>
</html>