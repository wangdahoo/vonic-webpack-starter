<template>
  <div class="page has-navbar" v-nav="{ title: 'About', showBackButton: true, onBackButtonClick: back }">
    <div class="page-content text-center">
      <h2 class="padding">Nothing here.</h2>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      back() {
        $router.back('/')
      }
    }
  }
</script>
