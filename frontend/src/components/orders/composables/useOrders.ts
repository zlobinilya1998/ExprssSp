import { Order } from "@/models/Order";
import { OrderService } from "@/services/OrderService";
import { onMounted, ref } from "vue";

function useOrders() {
    const loading = ref(false);
    const orders = ref<Order[]>([])
    const error = ref(false);

    const getOrders = async () => {
        loading.value = true;
        try {
            orders.value = await OrderService.getAll();
        } catch (e) {
            error.value = true;
            console.error(e);
        }
        loading.value = false;
    }

    onMounted(() => {
        getOrders();
    })

    return {
        orders, loading, error, getOrders
    }
}

export {
    useOrders,
}