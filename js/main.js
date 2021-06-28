const app = Vue.createApp({
    data() {
        return {
            title: "Contador App - Vue",
            count: 0
        };
    },
    methods: {
        /* Se crearon los metodos
        disCount y addCount para los
        eventos onclik, para acceder a los 
        elementos de data tenemos que 
        usar this + variable a acceder
        y se utilizo el "-=" y "+=" para 
        sumarle un valor a la variable */
        disCount() {
            this.count -= 1;
        },
        addCount() {
            this.count += 1;
        },

        /* Esta funcion esta integrada con el dis y el add en una sola
        pero esta hecho con parametros */
        modCount(instruction = "add", limit = 1) {
            if (instruction === "dis")
                this.count -= limit;
            else
                this.count += limit;
        },
    },
});
