<template>

	<table v-if="visible" class="table">
		<thead class="thead-dark">
				<slot name="thead"></slot>
		</thead>
		<tbody>
				<slot name="tbody"></slot>
		</tbody>
	</table>

</template>

<script>
export default{
	props:{
		visible:{
			type: Boolean,
			required: true
		}
	}
}
</script>

<style>
	
</style>