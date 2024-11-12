<template>
    <v-card class="customer pa-3" variant="tonal">
        <div>ID: {{ item.id }}</div>
        <div>{{ item.name }}</div>
        <div>{{ item.email }}</div>
        <div>{{ item.phone }}</div>
        <v-btn class="ml-auto" @click="remove" icon size="x-small">
            <v-icon color="error">mdi-delete-circle-outline</v-icon>
        </v-btn>
    </v-card>
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
    await CustomerService.remove(props.item);
    emit('remove');
};

</script>
