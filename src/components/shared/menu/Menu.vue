<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    	<div class="container">
		  <a class="navbar-brand" href="#">Navbar</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul class="navbar-nav mr-auto">
		      <li class="nav-item" v-for="rota in rotas">
		        <router-link :to="rota.path ? rota.path : '/'" class="nav-item">
	              {{ rota.titulo }}
	            </router-link>

		      </li>
		    </ul>
		  </div>
		</div>
	</nav>
</template>

<script>
	export default{
		props: {
			rotas: {
				type: Array,
				required: true
			}
		}
	}
</script>

<style>

.router-link-active{
	padding: 8px;
}
.nav-item{
	padding: 8px;
}
a{
	color: #FFFFFF;
}

</style>
