<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <input type="search" class="filter form-control" @input="filter = $event.target.value" placeholder="filter por parte do título">
        <table class="table">
            <thead class="thead-dark">
                <th scope="col">ASN</th>
                <th scope="col">CNPJ</th>
                <th scope="col">User IP</th>
                <th scope="col">Razão Social</th>
                <th scope="col">Responsável</th>
            </thead>
            <tbody>
                <tr v-for="contrato of contratosWithFilter">
                    <td>{{contrato.asn}}</td>
                    <td>{{contrato.cnpj}}</td>
                    <td>{{contrato.users_ip}}</td>
                    <td>{{contrato.razao_social}}</td>
                    <td>{{contrato.responsavel}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default{

    data(){
        return{
            title: 'List Contrato Assinado',
            contratos: [],
            filter: '',
            visible: true
        }
    },
    computed: {
        contratosWithFilter(){
            if(this.filter){
                let exp = new RegExp(this.filter.trim(), 'i');
                return this.contratos.filter(contrato => exp.test(contrato.users_ip));

            }else{
                return this.contratos;
            }
        }
    },
    created(){
        let promise = this.$http.get('http://localhost:9000/api/v1/assinatura-contrato/')
            .then(response => response.json())
            .then(response => {
                this.contratos = response;
            })
            .catch(e => {
                console.log(e);
            })
    }
}

</script>

<style scoped>
    .container{
        margin-top: 30px !important;
    }
    .table{
        margin-top: 30px;
    }
</style>