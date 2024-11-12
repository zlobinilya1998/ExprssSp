<template>
    <div>
        <div class="d-flex">
            <v-card-title>Заказчики</v-card-title>
            <CreateCustomerDialog @create="getCustomers"/>
        </div>
        <Loader v-if="loading" />
        <div class="customers" v-else-if="customers.length">
            <div class="d-flex justify-space-between">
                <div>Количество заказчиков {{ customers.length }}</div>
            </div>
            <Customer v-for="item in customers" :item="item" @remove="getCustomers" />
        </div>
        <EmptyRecord v-else />
    </div>
</template>

<script setup lang="ts">
import Customer from '@/components/customers/Customer.vue';
import Loader from 'components/shared/Loader.vue';
import EmptyRecord from '@/components/shared/EmptyRecord.vue';
import { useCustomer } from '@/components/customers/composables/useCustomer';
import CreateCustomerDialog from '@/components/dialog/CreateCustomerDialog.vue';

const { customers, loading, getCustomers } = useCustomer();

</script>

<style scoped>
.customers {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 900px;
    margin: 0 auto;
}

.customer {
    display: flex;
    gap: 20px;
    align-items: center;
}
</style>