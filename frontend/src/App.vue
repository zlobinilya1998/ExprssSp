<template>
  <Loader v-if="loading" />
  <div class="customers" v-else-if="customers.length">
    <Customer v-for="item in customers" :item="item" @remove="getCustomers" />
  </div>
  <div v-else>Записи отсутствуют</div>
</template>

<script setup lang="ts">
import Customer from 'components/Customer.vue';
import Loader from 'components/shared/Loader.vue';
import { CustomerService } from 'services/CustomerService';
import { onMounted, ref } from 'vue';

const customers = ref([]);
const loading = ref(false);
const getCustomers = async () => {
  loading.value = true;
  try {
    customers.value = await CustomerService.getAll();
  } catch (e) {
    console.log(e);
  }
  loading.value = false;
}

onMounted(() => {
  getCustomers();
})

</script>



<style scoped>
.customers {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
