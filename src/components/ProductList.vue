<template lang="html">
  <div>
    <ul>
      <li v-for="p in products">
        {{p.title}} - {{p.price}}
        <br>
        <button @click="addToCart(p)"
        type="button" name="button">Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters({
    products: 'allProducts'
  }),
  methods: mapActions({
    products: 'addToCart'
  }),
  data () {
    return {}
  },
  // dispatch发布一个动作
  mounted () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>
<style lang="css">
</style>
