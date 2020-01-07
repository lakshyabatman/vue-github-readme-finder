<template>
  <div class="home">
    <b-container>
       <b-row align-h="center">
        <b-col cols="6" offset="2" >
                    <b-form-group
                      id="input-group-1"
                      label-for="input-1"
                    >
                      <b-form-input
                        id="input-1"
                        type="email"
                        v-model="input"
                        required
                        placeholder="Enter Github User Name"
                      ></b-form-input>
                    </b-form-group>
        </b-col>
        <b-col cols="4">
            <b-button @click="Search" variant="outline-primary">Search</b-button>
        </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  data: function () {
    return {
      input: ''
    }
  },
  methods: {
    Search: function () {
      this.$router.push(`/${this.input}`)
    }
  }
}
</script>
