<template>
    <div class="customer">
        <div>ID: {{ item.customer_id }}</div>
        <div>{{ item.name }}</div>
        <div>{{ item.email }}</div>
        <div>{{ item.phone }}</div>
        <div>{{ item.loyalty_points }}</div>
        <div>{{ item.address }}</div>
        <button @click="remove">Удалить</button>
    </div>
</template>

<script lang="ts" setup>
import { Customer } from 'models/Customer';
import { CustomerService } from 'services/CustomerService';

interface IProps {
    item: Customer,
}

interface IEmits {
    (event: 'remove'): void,
}

const props = defineProps<IProps>()
const emit = defineEmits<IEmits>()
const remove = async () => {
    await CustomerService.remove(props.item.customer_id);
    emit('remove');
};

</script>
