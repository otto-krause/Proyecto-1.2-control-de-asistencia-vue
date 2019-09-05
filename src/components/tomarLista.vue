<template>
    <form action= '/Agregar' method = "POST">    
        <h1>Seleccione un curso</h1>
        <input type="text"> 
        <div class="TablaTomarLista">
            <table>
                <tr>
                    <th>idAlumno</th>
                    <th>idSemana</th>
                    <th>Presente</th>
                    <th>Tarde</th>
                    <th>Ausente con Permanencia</th>
                    <th>Ausente</th>
                    <th>Justificado</th>
                    <th>Fecha</th>
                </tr>
                <tr>
                    <td><input type="text" name = "idAlumno"></td> <!--Esto va a ser reemplazado por un h1 o algo de nombre "idAlumno" que sea reemplazado por la parte Front End con las cosas de la bd-->
                    <td>
                        <select name = "idSemana">  <!--Esto también, ya que se debería poner un día para todo el curso.-->
                            <option value = "1">Lunes</option>
                            <option value = "2">Martes</option>
                            <option value = "3">Miércoles</option>
                            <option value = "4">Jueves</option>
                            <option value = "5">Viernes</option>
                        </select>
                    </td>
                    <td><input type="radio" name = "valor" value = "P"></td>
                    <td><input type="radio" name = "valor" value = "T"></td>
                    <td><input type="radio" name = "valor" value = "AP"></td>
                    <td><input type="radio" name = "valor" value = "A"></td>
                    <td><input type="radio" name = "valor" value = "J"></td>
                    <td><input type="date" name = "fecha"></td>
                </tr>
            </table>
        </div>
        <input type ="submit" value = "Enter">
    </form>      
</template>
<script type="text/javascript">
export default {
    
}
</script>
<style>

    html
    {
        background-color: deepskyblue;
    }

    th, td
    {
        background-color: white;
        border: 1px solid grey;
        border-radius: 15px;
    }

</style>