<template>
    <form action= '/Agregar' method = "POST">    
        <h1>Seleccione un curso</h1>
        <b-dropdown right text="División">
            <b-dd-item> Curso1</b-dd-item>
            <b-dd-item> Curso2 </b-dd-item>
            <b-dd-item> Curso3</b-dd-item>
        </b-dropdown>
        <div class="TablaTomarLista">
            <b-table-simple>
                <b-thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Presente</th>
                        <th>Tarde</th>
                        <th>Ausente con Permanencia</th>
                        <th>Ausente</th>
                        <th>Justificado</th>
                    </tr>
                </b-thead>
                <b-tbody>
                    <tr v-for="Alumno in Alumnos" v-bind:key="Alumno">
                        <td name = "idAlumno"></td> <!--Esto va a ser reemplazado por un h1 o algo de nombre "idAlumno" que sea reemplazado por la parte Front End con las cosas de la bd-->
                        <td>{{alumno.Nombre}}</td>
                        <td>{{alumno.Apellido}}</td>
                        <td><input type="radio" name = "valor" value = "P"></td>
                        <td><input type="radio" name = "valor" value = "T"></td>
                        <td><input type="radio" name = "valor" value = "AP"></td>
                        <td><input type="radio" name = "valor" value = "A"></td>
                        <td><input type="radio" name = "valor" value = "J"></td>
                    </tr>
                </b-tbody>
            </b-table-simple>
        </div>
        <input type ="submit" value = "Enter">
    </form>      
</template>
<script type="text/javascript">
import axios from 'axios';

export default {
    name: 'TomarLista',
    data()
    {
        return{
            Alumnos :{}
        }
    },
    mounted()
    {
        axios.get('http://localhost:3000/ListaAlumnos').then(
            (response)=>{
                this.Alumnos = response.data;
            }
        )
    }
}
</script>
<style>


    th, td
    {
        background-color: white;
        border: 1px solid grey;
        border-radius: 15px;
    }

</style>