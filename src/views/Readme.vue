<template>
    <div>
      <Loader v-if="isLoading"/>
      <b-container v-else>
        <h1>README</h1>
        <hr>
        <div v-html="readme"></div>
      </b-container>
    </div>
</template>
<script>
import Loader from '@/components/Loader.vue'
import showdown from 'showdown'
var converter = new showdown.Converter()
export default {
  name: 'Readme',
  data: function () {
    return {
      readme: '',
      isLoading: true
    }
  },
  components: {
    Loader
  },
  methods: {
    fetchRepoDetails (name, project) {
      return fetch(`https://api.github.com/repos/${name}/${project}/readme`)
        .then(resp => resp.json())
    },
    fetchReadme (link) {
      return fetch(link)
        .then(resp => resp.text())
        .then(data => converter.makeHtml(data))
        .then(html => {
          this.isLoading = false
          this.readme = html
        })
    }
  },
  mounted () {
    var { name, project } = this.$route.params
    this.fetchRepoDetails(name, project)
      .then(data => data.download_url)
      .then(this.fetchReadme)
  }
}
</script>
