<template>
    <div class="">
        <div class="flex items-center justify-center flex-col mt-24" v-if="allProducts.length == 0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-16 h-16">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

            <span class="text-2xl"> cart Empty </span>
            <nuxt-link class="bg-black px-10 py-3 rounded-xl mt-5 text-white" to="/">home</nuxt-link>
        </div>
        <div v-else
            class="grid 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-1 4xl:grid-cols-1 lg:grid-cols-3 5xl:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
            <div v-for="item in allProducts" :key="item.id" class="
          card
          mt-10
        
          2xl:w-96
          xl:w-96
          lg:w-96
          xs:w-72 xs:ml-8
          md:w-96
          sm:w-96
          5xl:ml-3 5xl:w-96
          4xl:ml-20
          2xl:ml-5xl:ml-5
          lg:ml-5
          md:ml-52
          sm:ml-32
          shadow-xl
        ">

                <figure>
                    <img class="mt-5" :src="item.img" alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{{ item.name }}</h2>
                    <p class="">{{ item.price }}</p>
                    <div class="card-actions">
                        <button @click="increment(item.id)"
                            class="button-sm border-none rounded-full p-1.5 bg-black text-white">
                            +
                        </button>
                        <div class="mt-2">{{ item.quantity }}</div>
                        <button @click="decrement(item.id)"
                            class="button-sm border-none rounded-full p-1.5 bg-black text-white">
                            -
                        </button>
                        <div class="mt-2">
                            {{ totalAmount }}
                        </div>

                        <div class="
                flex
                2xl:-ml-28
                xl:-ml-28
                lg:-ml-28
                md:-ml-28
                sm:-ml-28
                4xl:-ml-28
                5xl:-ml-28
                xs:-ml-28
                space-x-3
                mt-12
              ">
                            <button @click="removeItemFromCart(item.id)" class="
                  rounded-xl
                  border-none
                  btn btn-sm
                  bg-red-400
                  w-14
                  h-14
                  text-white
                ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </button>
                            <button @click="clear" class="
                  btn btn-sm
                  rounded-xl
                  2xl:ml-0
                  xl:ml-0
                  lg:ml-0
                  md:ml-0
                  sm:ml-0
                  4xl:ml-0
                  5xl:ml-0
                  border-none
                  xs:ml-4
                  bg-red-400
                  w-14
                  h-14
                  text-white
                ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                </svg>
                            </button>

                            <button @click="Checkout" class="
                  rounded-xl
                  border-none
                  bg-red-400
                  w-14
                  h-14
                  btn btn-sm
                  text-white
                ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>
  
<script setup>

import Swal from "sweetalert2";
import { useCart } from "../stores/cart"
import { computed } from "vue";
const cartStore = useCart()
useHead({
    title: 'cart'
})
const allProducts = computed(() => cartStore.allProducts);
const totalAmount = computed(() => cartStore.totalAmount);
function clear() {
    cartStore.clear();
}
function increment(id) {
    cartStore.increment(id);
}
function decrement(id) {
    cartStore.decrement(id);
}
function removeItemFromCart(id) {
    cartStore.remove(id);
}
function Checkout() {
    Swal.fire({
        title: "product success",
        icon: "success",
        showConfirmButton: "false",
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: "top",
    });
}
</script>
  
<style>

</style>