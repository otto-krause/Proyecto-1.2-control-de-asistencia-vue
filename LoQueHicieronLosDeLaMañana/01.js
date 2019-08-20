const app=new Vue({
    el:'#app',
    data: {
        fondo: 'bg-white',
        Alumnos:[
            {nombre:'',faltas:'',}
        ],
        nombre:'',
        faltas:'',
    },
   methods:
   {
       agregarAlumno(){
           if(this.nombre!=""&&this.faltas!=""){
            this.Alumnos.push({nombre:this.nombre,faltas:this.faltas});
            this.nombre="";
            this.faltas="";
           }
           else
           {
               alert("Ingrese el Alumno y su asistencia");
                }
             },
        }
     })