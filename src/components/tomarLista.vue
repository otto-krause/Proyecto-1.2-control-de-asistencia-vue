<template>
    <form action= '/Agregar' method = "POST">    
        <h1>Seleccione un curso</h1>
        <b-dropdown right text="División">
            <b-dd-item v-for="Curso in Cursos" v-bind:key = "Curso"><b-button block variant="dark" @click ="ObtenerChabones(Curso.idDivision)"> {{Curso.Division}}</b-button></b-dd-item>
        </b-dropdown>
        <b-input type="date"></b-input>
        <div class="TablaTomarLista">
            <b-table-simple responsive>
                <b-thead>
                    <tr>
                        <th>DNI</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Asistencia</th>
                    </tr>
                </b-thead>
                <b-tbody>
                    <tr v-for="Alumno in Alumnos" v-bind:key="Alumno">
                        <td>{{Alumno.DNI}}</td>
                        <td>{{Alumno.Nombre}}</td>
                        <td>{{Alumno.Apellido}}</td>
                        <td>
                            <b-form-group>
                                <b-form-radio-group      
                                    id="btn-radios-1"
                                    v-model="selected"
                                    :options="Opciones"
                                    buttons
                                    name="radios-btn-default"
                                ></b-form-radio-group>
                            </b-form-group>
                        </td>
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
            Alumnos :{},
            Opciones: [
                {text: 'Presente'},
                {text: 'Tarde'},
                {text: 'Ausente con Permanencia'},
                {text: 'Ausente'},
                {text: 'Ausente Justificado'}
            ],
            Cursos:{}
        }
    },
    mounted()
    {  
        this.ObtenerChabones(1);
        this.ObtenerCursos();
    },
    methods:{
        ObtenerChabones(division)
        {            
            axios.get('http://localhost:3000/ListaAlumnos/' + division).then(
            (response)=>{
                this.Alumnos = response.data;
            });
        },
        AgregarChabones()
        {
            axios.post('http://localhost:3000/Agregar/').then(

            )
        },
        ObtenerCursos()
        {
            axios.get('http://localhost:3000/ObtenerCursos/').then(
            (response)=>{
                this.Cursos = response.data;
            });
        }
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