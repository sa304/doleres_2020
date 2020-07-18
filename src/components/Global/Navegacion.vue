 <template>
  <div>
    <!-- navbar bootstrap -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand ml-5" href="#">Selecciona los valores económicos aquí --></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="mr-5">
              <router-link to="/">TODOS</router-link>
            </li>

            <li class="mr-5">
              <router-link to="/uf">UF</router-link>
            </li>

            <li class="mr-5">
              <router-link to="/utm">UTM</router-link>
            </li>

            <li class="mr-5">
              <router-link to="/dolar">DOLAR</router-link>
            </li>

            <li class="mr-5">
              <router-link to="/euro">EURO</router-link>
            </li>

            <li class="mr-5">
              <router-link to="/libra_cobre">LIBRA DE COBRE</router-link>
            </li>

            <li class="mr-5">
              <router-link to="/bitcoin">BITCOIN</router-link>
            </li>

<li class="mr-5">
              <router-link to="/fecha">FECHA</router-link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    <!-- navbar bootstrap -->
  </div>
</template>
 
 
