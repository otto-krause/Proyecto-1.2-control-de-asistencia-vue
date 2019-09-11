<template>
    <div>
        <Barra />
        <h1>Bienvenido al HOGAR.</h1>
        <p>La única casa.</p>
        <div id = "Paginas">
            <button type="button"> <a href="/tomarLista.html">Tomar Lista</a></button>
            <router-link to="/VerAsistencia"> Mostrar</router-link>
        </div>
    </div>
</template>
<script>
import Barra from './Barra.vue';

export default {
    components:
    {
        Barra
    }
}
</script>