import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const items = ref([]);
  const addItemInCart = (item) => {
    if (!items.value.includes(item)) {
      items.value.push(item);
    }
  };
  const totalPrice  = items.value.reduce((acc,item)=>{
    return acc+=item.price
  })
  return { items, addItemInCart, totalPrice };
});
