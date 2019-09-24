<template>
    <b-table-simple>
        <b-thead>
            <tr>
                <th>IdAsistencia</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Fecha</th>
            </tr>
        </b-thead>
        <b-tbody>
            <tr v-for="Asistencia in Asistencia" v-bind:key="Asistencia">
                <td>{{Alumno.IdAsistencia}}</td>
                <td>{{Alumno.Nombre}}</td>
                <td>{{Alumno.Apellido}}</td>
                <td>{{Alumno.Fecha}}</td>
            </tr>
        </b-tbody>
    </b-table-simple>
</template>

<script>

export default {
    components:
    {

    },
    data()
    {
        return{
            Asistencia : {}
        }
    },
    methods:
    {

    }
}

</script>