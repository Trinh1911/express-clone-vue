<template>
  <MainLayout>
    <div id="ShoppingCartPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div v-if="false" class="h-[500px] flex items-center justify-center">
        <div class="pt-20">
          <img
            src="./../public/images/cart-empty.png"
            class="mx-auto"
            width="250"
          />
          <div class="text-xl text-center mt-4">No items yet?</div>
          <div v-if="false" class="flex text-center">
            <NuxtLink
              to="/login"
              class="bg-[#FD374F] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4"
            >
              Sign in
            </NuxtLink>
          </div>
        </div>
      </div>
      <div v-else class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[65%]">
          <div class="bg-white rounded-lg p-4">
            <div class="text-2xl font-bold mb-2">Shopping Cart (0)</div>
          </div>

          <div class="bg-[#FEEEEF] rounded-lg p-4 mt-4">
            <div class="text-red-500 font-bold">
              Welcome Deal applicable on 1 item only
            </div>
          </div>

          <div id="Items" class="bg-white rounded-lg p-4 mt-4">
            <div v-for="product in products">
              <CartItem
                :product="product"
                :selectedArray="selectedArray"
                @selectedRadio="selectedRadioFunc"
              />
            </div>
          </div>
        </div>
        <div class="md:hidden block my-4"></div>
        <div class="md:w-[35%]">
          <div id="Summary" class="bg-white rounded-lg p-4">
            <div class="text-2xl font-extrabold mb-2">Summary</div>
            <div class="flex items-center justify-between my-4">
              <div class="font-semibold">Total</div>
              <div class="text-2xl font-semibold">
                $ <span class="font-extrabold">{{ totalPriceComputed }}</span>
              </div>
            </div>
            <button
              @click="goToCheckout"
              class="flex items-center justify-center bg-[#FD374F] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4"
            >
              Checkout
            </button>
          </div>
          <div id="PaymentProtection" class="bg-white rounded-lg p-4 mt-4">
            <div class="text-lg font-semibold mb-2">Payment methods</div>
            <div class="flex items-center justify-start gap-8 my-4">
              <div v-for="card in cards">
                <img class="h-6" :src="card" />
              </div>
            </div>
            <div class="border-b"></div>
            <div class="text-lg font-semibold mb-2 mt-2">Buyer Protection</div>
            <p class="my-2">
              Get full refund if the item is not as described or if is not
              delivered
            </p>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()

let selectedArray = ref([])
// loading khi component render lại
onMounted(() => {
    setTimeout(() => userStore.isLoading = false, 200)
})
const cards = ref([
  "/images/visa.png",
  "/images/mastercard.png",
  "/images/paypal.png",
  "/images/applepay.png",
]);
const totalPriceComputed = computed(() => {
    let price = 0
    userStore.cart.forEach(prod => {
        price += prod.price
    })
    return price / 100
})
const selectedRadioFunc = (e) => {
// nếu mảng rỗng thì đẩy product đã chọn vào mảng
if (!selectedArray.value.length) {
    selectedArray.value.push(e)
    return
}
// nếu mảng đã có phần tử thì kiểm tra xem phần tử đó có trùng với pr ta chọn không
// nếu trùng thì xóa phần tử, không trùng thì thêm phần từ
selectedArray.value.forEach((item, index) => {
    if (e.id != item.id) {
        selectedArray.value.push(e)
    } else {
        selectedArray.value.splice(index, 1);
    }
})
}
const goToCheckout = () => {
    let ids = []
    userStore.checkout = []
    // push id của từng phần tử của selectedArray vào mảng ids
    selectedArray.value.forEach(item => ids.push(item.id))
    // lọc ra các phần tử có id 
    let res = userStore.cart.filter((item) => {
      // kiểm tra xem id của item có nằm trong mảng ids không thông qua indexOf
      // nếu trả về -1 thì không có trong ids, nếu trả về 0 hoặc lớn hơn -1 thì nằm trong ids
        return ids.indexOf(item.id) != -1
    })
    res.forEach(item => userStore.checkout.push(toRaw(item)))
    return navigateTo('/checkout')
  }
const products = [
  {
    id: 1,
    title: "Product 1",
    description: "Description for product 1",
    url: "https://i.pinimg.com/originals/37/2b/ea/372beacf683f0062fa749d2fbc94184f.jpg",
    price: 100,
  },
  {
    id: 2,
    title: "Product 2",
    description: "Description for product 2",
    url: "https://i.pinimg.com/originals/37/2b/ea/372beacf683f0062fa749d2fbc94184f.jpg",
    price: 200,
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description for product 3",
    url: "https://i.pinimg.com/originals/37/2b/ea/372beacf683f0062fa749d2fbc94184f.jpg",
    price: 300,
  },
  {
    id: 4,
    title: "Product 4",
    description: "Description for product 4",
    url: "https://i.pinimg.com/originals/37/2b/ea/372beacf683f0062fa749d2fbc94184f.jpg",
    price: 400,
  },
  {
    id: 5,
    title: "Product 5",
    description: "Description for product 5",
    url: "https://i.pinimg.com/originals/37/2b/ea/372beacf683f0062fa749d2fbc94184f.jpg",
    price: 500,
  },
  {
    id: 6,
    title: "Product 6",
    description: "Description for product 6",
    url: "https://i.pinimg.com/originals/37/2b/ea/372beacf683f0062fa749d2fbc94184f.jpg",
    price: 600,
  },
  {
    id: 7,
    title: "Product 7",
    description: "Description for product 7",
    url: "https://i.pinimg.com/originals/37/2b/ea/372beacf683f0062fa749d2fbc94184f.jpg",
    price: 700,
  },
  {
    id: 8,
    title: "Product 8",
    description: "Description for product 8",
    url: "https://i.pinimg.com/originals/37/2b/ea/372beacf683f0062fa749d2fbc94184f.jpg",
    price: 800,
  },
  {
    id: 9,
    title: "Product 9",
    description: "Description for product 9",
    url: "https://i.pinimg.com/originals/37/2b/ea/372beacf683f0062fa749d2fbc94184f.jpg",
    price: 900,
  },
  {
    id: 10,
    title: "Product 10",
    description: "Description for product 10",
    url: "https://i.pinimg.com/originals/37/2b/ea/372beacf683f0062fa749d2fbc94184f.jpg",
    price: 1000,
  },
];
</script>
