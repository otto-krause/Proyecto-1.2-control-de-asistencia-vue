<template>
  <div>
    <b-form @submit.prevent="PostAsistencia">
      <h1>Seleccione un curso</h1>
      <b-dropdown right text="División">
        <b-dd-item v-for="(Curso, index) in Cursos" v-bind:key="index">
          <b-button block variant="dark" @click="ObtenerAlumnos(Curso.idDivision)">{{Curso.Division}}</b-button>
        </b-dd-item>
      </b-dropdown>
      <b-input type="date" v-model="fecha"></b-input>
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
              <template>
                <td>{{Asistencia[index].dniAlumno = Alumno.dniAlumno}}</td>
                <td>{{Alumno.Nombre}}</td>
                <td>{{Alumno.Apellido}}</td>
                <td>
                  <b-form-group>
                    <b-form-radio-group
                      id="'radios'+index"
                      v-model="Asistencia[index].valor"
                      buttons
                      name="'radios'+index"
                    ></b-form-radio-group>
                  </b-form-group>
                </td>
              </template>
            </tr>
          </b-tbody>
        </b-table-simple>
      </div>
      <b-button type="submit">Enter</b-button>
    </b-form>
    <b-button @click="MostrarAlgo(Asistencia[1].valor)"></b-button>
  </div>
</template>
<script type="text/javascript">

import axios from 'axios';

export default {
  components:
  {
  },
  name: "TomarLista",
  data() {
    return {
      fecha: "",
      Asistencia: [],
      Alumnos: [],
      Opciones: [
        { text: "Presente" },
        { text: "Tarde" },
        { text: "Ausente con Permanencia" },
        { text: "Ausente" },
        { text: "Ausente Justificado" }
      ],
      Cursos: {}
    };
  },
  mounted() {
    this.ObtenerCursos();
  },
  methods: {
    MostrarAlgo(algo)
    {
      console.log(algo);
    },
    GenerarVacias(largo) {
      this.Asistencia = [];
      console.log("Se intentó limpiar el array de Asistencia ");
      console.log(largo);
      for (var i = 0; i < largo; i++) {
        this.Asistencia.push({
          valor: "",
          dniAlumno: "",
          fecha: ""
        });
      }
    },
    PostAsistencia() {
      this.Asistencia.forEach(asistenciaActual => {
        asistenciaActual.fecha = this.fecha;
      });
      //console.log(JSON.stringify(this.Asistencia));
    },
    ObtenerAlumnos(division) {
      console.log("Intentando obtener alumnos");
      axios.get("http://localhost:3000/ListaAlumnos/" + division)
        .then(response => {
          this.Alumnos = response.data;
          this.GenerarVacias(this.Alumnos.length);
        })
        .catch(function (error) {
        {
          console.log("FRACASÉ");
          console.log(error);
        }
      });
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
