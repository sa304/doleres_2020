<template>
  <div id="home" class="container">
    <table class="table bg-white text-justify">
      <thead class="bg-success text-left">
        <tr>
          <th scope="col">fecha de la cotización</th>
          <th scope="col">valor</th>
        </tr>
      </thead>
      <tbody v-for="peso in pesos" :key="peso">
        <tr>
          <td scope="row">{{peso.fecha}}</td>
          <td>{{peso.valor}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async created() {
    const response = await axios.get("https://mindicador.cl/api/utm");
    this.pesos = response.data.serie;
  },
  data() {
    return {
      pesos: []
    };
  },
  name: "Utm",
  components: {}
};
</script>

<style>
</style>