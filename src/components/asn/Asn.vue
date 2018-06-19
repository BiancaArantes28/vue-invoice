<template>

	<container>
		<h1>{{title}}</h1>
		<select v-model="selected" v-on:change="chamaApi(selected)">
			<option disabled selected>Choose ASN</option>
			<option v-for="as in asns">{{as.asn}}</option>

		</select>
		
		<my-table :visible="visible">
			
			<slot name="thead">
				<tr>
					<th>Test</th>
				</tr>
			</slot>
			<slot name="tbody">
				<tr>
					<td>Test</td>
				</tr>
			</slot>
		</my-table>
	</container>

</template>

<script>
import Container from '../shared/container/Container.vue';
import MyTable from '../shared/table/MyTable.vue';
export default{
	components:{
		'container': Container,
		'my-table': MyTable
	},
	data(){
		return{
			title: 'ASN',
			'selected': '',
			asns: [],
			'searchasn': [],
			visible: true
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