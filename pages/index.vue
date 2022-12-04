<template>

    <div>
        <div class="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-3">
            <div v-for="product in products" :key="product.id" class="card w-96 bg-base-100 shadow-xl">
                <figure><img :src="product.img" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-sm">{{ product.name }}</h2>

                    <div class="card-actions justify-between">
                        <p>{{ product.price }}</p>
                        <button @click="addToCart(product)" class="btn btn-primary">add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useCart } from "../stores/cart"
import { useProductStore } from "../stores/product"
const store = useProductStore()
const cartStore = useCart()
const products = computed(() => store.allProducts)
function addToCart(product) {
    cartStore.add(product)
}
</script>

<style>

</style>