<template>

	<container>
		<h1>{{title}}</h1>
		<select v-model="select" v-on:change="chamaApi(select)" class="form-control">
			<option disabled value="">Select an ASN</option>
			<option v-for="as in asns">{{as.asn}}</option>

		</select>
		<table v-if="visible" class="table">
			<thead class="thead-dark">
				<tr>
					<th>ASN</th>
					<th>Razão Social</th>
					<th>CNPJ</th>
					<th>Responsável</th>
					<th>Telefones</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{{searchasn.asn}}</td>
					<td>{{searchasn.razao_social}}</td>
					<td>{{searchasn.cnpj}}</td>
					<td>{{searchasn.responsavel}}</td>
					<td>{{searchasn.telefones}}</td>
				</tr>
			</tbody>
		</table>
	</container>

</template>

<script>
import Container from '../shared/container/Container.vue';
export default{
	components:{
		'container': Container
	},
	data(){
		return{
			title: 'ASN',
			'select': '',
			asns: [],
			'searchasn': [],
			visible: false
		}
	},
	created(){
		let promise = this.$http.get('http://localhost:9000/api/v1/info-cobranca/')
            .then(response => response.json())
            .then(response => {
                this.asns = response;
            })
            .catch(e => {
                console.log(e);
            })
	},
	methods:{
		chamaApi(params){
			let promise = this.$http.get('http://localhost:9000/api/v1/info-cobranca/'+params+'/')
	            .then(response => response.json())
	            .then(response => {
	                this.searchasn = response;
	                this.visible = true;
	            })
	            .catch(e => {
	                console.log(e);
	                this.visible = false;
	            })
		}
	}
}
</script>

<style scoped>
	.table{
		margin-top:30px;
	}
</style>