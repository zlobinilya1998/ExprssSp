<template>
  <v-card title="Корзина" text="" variant="tonal">
    <v-card-actions>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.name }}
          <br />{{ `${item.price} руб.` }}<v-btn>Купить</v-btn>
        </li>
        <div>Сумма заказа:{{ totalPrice }}</div>
      </ul>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/useCartStore";

const { items, totalPrice } = useCartStore();
</script>
