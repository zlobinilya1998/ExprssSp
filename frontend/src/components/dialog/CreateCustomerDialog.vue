<template>
    <v-dialog v-model="show" max-width="400">
        <template #activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" class="ml-auto" color="success">Новый заказчик</v-btn>
        </template>
        <v-card class="pa-2" variant="elevated">
            <v-card-title>Создать заказчика</v-card-title>
            <v-form ref="form">
                <v-text-field v-model="dto.name" placeholder="Имя" :rules="[Validation.required]">
                    <template #append-inner>
                        <v-icon>mdi-account-edit</v-icon>
                    </template>
                </v-text-field>
                <v-text-field v-model="dto.phone" placeholder="Телефон"
                    :rules="[Validation.required, Validation.phone.isRu]">
                    <template #append-inner>
                        <v-icon>mdi-phone</v-icon>
                    </template>
                </v-text-field>
                <v-text-field v-model="dto.email" placeholder="Е-mail"
                    :rules="[Validation.required, Validation.isEmail]">
                    <template #append-inner>
                        <v-icon>mdi-email</v-icon>
                    </template>
                </v-text-field>
                <v-btn class="mt-4" @click="submit" color="success" :loading="loading" block>Создать</v-btn>
            </v-form>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
import { CustomerService } from '@/services/CustomerService';
import { CustomerCreateDto } from '@/types/dto/CustomerDto';
import { ref } from 'vue';
import { Validation } from '@/utils/validation';

interface IEmits {
    (event: 'create'): void,
}

const emit = defineEmits<IEmits>();

const show = ref(false);
const { dto, form, loading, submit } = useCreateCustomer();

function useCreateCustomer() {
    const form = ref<{ validate: () => ({ valid: boolean }) } | null>(null);
    const dto = ref(new CustomerCreateDto());
    const loading = ref(false);
    const submit = async () => {
        if (!form.value) return;
        const { valid } = await form.value.validate();
        if (!valid) return;
        loading.value = true;
        try {
            await CustomerService.create(dto.value);
            show.value = false;
            dto.value = new CustomerCreateDto();
            emit('create');
        } catch (e) {
            console.log(e)
        }
        loading.value = false;
    }

    return {
        form, dto, loading, submit
    }
}
</script>