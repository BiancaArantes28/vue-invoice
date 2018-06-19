<template>
<div>
<h1>Contrato</h1>
	<table v-if="visible" class="table">
		<thead class="thead-dark">
			<tr>
				<th>ASN</th>
				<th>Revisão</th>>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>{{contrato.asn}}</td>
				<td>{{contrato.revisao}}</td>
			</tr>
		</tbody>
	</table>

</div>
</template>

<script>

export default{
	props: ['id'],
	data(){
		return{
			'contrato': []
		}
	},
	created(){
		let promise = this.$http.get('http://localhost:9000/api/v1/contrato-cobranca/'+id+'/')
            .then(response => response.json())
            .then(response => {
                this.contrato = response;
            })
            .catch(e => {
                console.log(e);
            })
	}
}
	
</script>

<style>
	
</style>