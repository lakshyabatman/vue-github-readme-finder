<template>
    <b-container id="myCont">
          <b-spinner label="Loading..."></b-spinner>
          <h4>Please wait.</h4>
    </b-container>
</template>
<script>
export default {
  name: 'Loader'
}
</script>
<style scoped>
#myCont {
    text-align: center;
}
</style>
