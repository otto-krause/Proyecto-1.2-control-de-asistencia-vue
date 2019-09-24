<template>
    <b-navbar variant="danger" type="dark" fixed="top">
        <b-navbar-brand href="#">
            AsistenciaDesu
        </b-navbar-brand>
            <b-navbar-item> <router-link to="/TomarLista" text-variant="white"> Tomar Lista</router-link> </b-navbar-item>
            <b-navbar-item> <router-link to="/VerAsistencia" text-variant="white"> Ver Asistencia</router-link> </b-navbar-item>
    </b-navbar>
</template>
<script>
export default 
{
    name: "Navigation",
    data() 
    {
        return {};
    },
}
</script>