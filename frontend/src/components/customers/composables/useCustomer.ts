import { CustomerService } from "@/services/CustomerService";
import { onMounted, ref } from "vue";

function useCustomer() {
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

    return {
        customers, loading, getCustomers,
    }
}

export {
    useCustomer,
}