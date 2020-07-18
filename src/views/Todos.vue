<template>
  <div id="home" class="container">


  

    <table class="bg-white text-justify">
      <thead class="bg-success text-left">
        <tr>
          <th scope="col">codigo</th>
          <th scope="col"> | nombre</th>
          <th scope="col"> | unidad_medida</th>
          <th scope="col"> | fecha</th>
          <th scope="col"> | valor</th>
        </tr>
      </thead>
      <tbody v-for="peso in pesos" :key="peso">
        <tr>
          <th scope="row">{{peso.codigo}}</th>
          <td>{{peso.nombre}}</td>
          <td>{{peso.unidad_medida}}</td>
          <td>{{peso.fecha}}</td>
          <td class="text-right">{{peso.valor}}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import axios from "axios";

export default {
  async created() {
    const response = await axios.get("https://mindicador.cl/api/");
    this.pesos = response.data;
  },
  data() {
    return {
      pesos: []
    }
  },
  name: "Todos",
  components: {}
};
</script>
<style>
</style>
