<template>
    <container>
        <h1>{{ title }}</h1>
        <input type="search" class="filter form-control" @input="filter = $event.target.value" placeholder="filter by cnpj">
        <table class="table">
            <thead class="thead-dark">
                <th scope="col">ASN</th>
                <th scope="col">CNPJ</th>
                <th scope="col">User IP</th>
                <th scope="col">Razão Social</th>
                <th scope="col">Responsável</th>
            </thead>
            <tbody v-for="contrato of contratosWithFilter">
                    <tr>
                        
                        <td><router-link :to="{ name: 'teste', params: { asn: contrato.id } }">{{contrato.id}}</router-link></td>
                        <td>{{contrato.cnpj}}</td>
                        <td>{{contrato.users_ip}}</td>
                        <td>{{contrato.razao_social}}</td>
                        <td>{{contrato.responsavel}}</td>
                        
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
                return this.contratos.filter(contrato => exp.test(contrato.cnpj));

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
    td a{
        color: #212529;
    }
    td a:hover{
        color: blue;
        text-decoration: underline;
    }
</style>