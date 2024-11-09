import { CustomerService } from "@/services/CustomerService";
import { onMounted, ref } from "vue";

function useCustomer() {
    const customers = ref([]);
    const loading = ref(false);
    const error = ref(false);
    const getCustomers = async () => {
        loading.value = true;
        try {
            customers.value = await CustomerService.getAll();
        } catch (e) {
            console.error(e);
            error.value = true;
        }
        loading.value = false;
    }

    onMounted(() => {
        getCustomers();
    })

    return {
        customers, loading, error, getCustomers
    }
}

export {
    useCustomer,
}