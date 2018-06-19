<template>
	<container>
		<h2>{{ title }} {{ asn }}</h2>
		<table class="table">
			<thead class="thead-dark">
				<tr>
					<th>ASN</th>
					<th>Razão Social</th>
					<th>CNPJ</th>
					<th>Responsável</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{{searchasn.id}}</td>
					<td>{{searchasn.razao_social}}</td>
					<td>{{searchasn.cnpj}}</td>
					<td>{{searchasn.responsavel}}</td>
				</tr>
			</tbody>
		</table>
	</container>
	
</template>

<style>
	
</style>

<script>
	import Container from '../shared/container/Container.vue';
	export default{
		components:{
        	'container': Container
   		},
   		data(){
	        return{
	            title: 'Info do ASN: ',
	            searchasn: [],
	            asn: this.$route.params.asn
	        }
	    },
	    created(){
	        let promise = this.$http.get('http://localhost:9000/api/v1/assinatura-contrato/'+ this.asn + '/')
	            .then(response => response.json())
	            .then(response => {
	                this.searchasn = response;
	            })
	            .catch(e => {
	                console.log(e);
	            })
	    }
	}
</script>