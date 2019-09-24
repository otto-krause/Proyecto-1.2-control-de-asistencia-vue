<template>
  <div>
    <barra/>
    <b-form @submit="PostAsistencia">
      <h1>Seleccione un curso</h1>
      <b-dropdown right text="División">
        <b-dd-item v-for="(Curso, index) in Cursos" v-bind:key="index">
          <b-button block variant="dark" @click="ObtenerChabones(Curso.idDivision)">{{Curso.Division}}</b-button>
        </b-dd-item>
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
            <tr v-for="(Alumno, index) in Alumnos" v-bind:key="index">
              <td>{{Alumno.DNI}}</td>
              <td>{{Alumno.Nombre}}</td>
              <td>{{Alumno.Apellido}}</td>
              <td>
                <b-form-group>
                  <b-form-radio-group
                    id="btn-radios-1"
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
      <b-button type="submit">Enter</b-button>
    </b-form>
  </div>
</template>
<script type="text/javascript">

import axios from 'axios';
import Barra from './Barra.vue';

export default {
  components:
  {
    Barra
  },
  name: "TomarLista",
  data() {
    return {
      Asistencia: {
        valor: "",
        dniAlumno: ""
      },
      Alumnos: {},/*[
        {
          DNI: "434343433",
          Nombre: "Nombre1",
          Apellido: "Apellido1"
        },
        {
          DNI: "434343434",
          Nombre: "Nombre2",
          Apellido: "Apellido2"
        },
        {
          DNI: "434343435",
          Nombre: "Nombre5",
          Apellido: "Apellido5"
        },
        {
          DNI: "434343436",
          Nombre: "Nombre3",
          Apellido: "Apellido3"
        },
        {
          DNI: "434343437",
          Nombre: "Nombre4",
          Apellido: "Apellido4"
        }
      ],*/
      Opciones: [
        { text: "Presente" },
        { text: "Tarde" },
        { text: "Ausente con Permanencia" },
        { text: "Ausente" },
        { text: "Ausente Justificado" }
      ],
      Cursos: {}/*[
        {
          usuario: "User1",
          idDivision: "1",
          Division: "6to CP 1"
        },
        {
          usuario: "User1",
          idDivision: "2",
          Division: "6to CP 2"
        }
      ]*/
    };
  },
  mounted() {
    this.ObtenerCursos();
  },
  methods: {
    PostAsistencia() {
      //console.log(JSON.stringify(this.Asistencia));
    },
    ObtenerChabones(division) {
      axios
        .get("http://localhost:3000/ListaAlumnos/" + division)
        .then(response => {
          this.Alumnos = response.data;
        });
    },
    AgregarChabones() {
      axios.post("http://localhost:3000/Agregar/").then();
    },
    ObtenerCursos() {
      axios.get("http://localhost:3000/ObtenerCursos/").then(response => {
        this.Cursos = response.data;
      });
    }
  }
};
</script>
<style>
th,
td {
  background-color: white;
  border: 1px solid grey;
  border-radius: 15px;
}
</style>