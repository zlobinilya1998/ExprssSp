<template>
    <div class="create-customer-form">
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
            <v-text-field v-model="dto.email" placeholder="Е-mail" :rules="[Validation.required, Validation.isEmail]">
                <template #append-inner>
                    <v-icon>mdi-email</v-icon>
                </template>
            </v-text-field>
            <v-btn @click="submit" block>Создать</v-btn>
        </v-form>
    </div>
</template>

<script setup lang="ts">
import { CustomerService } from '@/services/CustomerService';
import { CustomerCreateDto } from '@/types/dto/CustomerDto';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Validation } from '@/utils/validation';

const router = useRouter();

const form = ref(null);
const dto = ref(new CustomerCreateDto());
const loading = ref(false);
const submit = async () => {
    const { valid } = await form?.value?.validate();
    if (!valid) return;
    loading.value = true;
    try {
        await CustomerService.create(dto.value);
        router.push({ name: 'customers' })
    } catch (e) {
        console.log(e)
    }
    loading.value = false;
}


</script>

<style lang="scss" scoped>
.create-customer-form {
    max-width: 500px;
    margin: 0 auto;
}
</style>