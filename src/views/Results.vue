<template>
    <div>
      <Loader v-if="isLoading"/>
      <b-container v-else-if="notFound">
        <ErrorBox>
          User Not Found
        </ErrorBox>
      </b-container>
        <b-container v-else >
            <UserDetails :name="name || login" :bio="bio" :link="githubUrl" :following="following" :followers="followers" :avatar="avatar" />
            <b-list-group class="mt-5">
            <b-list-group-item v-for="(repo,index) in repos" :key="index" @click="() => RepoClick(repo)">{{repo}}</b-list-group-item>
            <b-list-group-item v-if="repos.length ==0">No Repos</b-list-group-item>
          </b-list-group>
        </b-container>
    </div>
</template>
<script>
import Loader from '@/components/Loader.vue'
import UserDetails from '@/components/UserDetails.vue'
import ErrorBox from '@/components/ErrorBox.vue'
export default {
  name: 'Results',
  data: function () {
    return {
      isLoading: true,
      avatar: '',
      login: '',
      name: '',
      bio: '',
      githubUrl: '',
      repos: [],
      followers: 0,
      following: 0,
      errFlag: 0,
      notFound: false
    }
  },
  components: {
    ErrorBox,
    Loader,
    UserDetails
  },
  methods: {
    fetchUser (user) {
      var name = this.$route.params.name
      return fetch(`https://api.github.com/users/${name}`)
        .then(resp => resp.json())
        .then(data => {
          if (data.message === 'Not Found') {
            this.notFound = true
          } else {
            this.avatar = data.avatar_url
            this.name = data.name
            this.bio = data.bio
            this.githubUrl = data.html_url
            this.followers = data.followers
            this.following = data.following
            this.login = data.login
            return data
          }
        })
    },
    fetchRepos () {
      if (!this.notFound) {
        fetch(`https://api.github.com/users/${this.$route.params.name}/repos`)
          .then(resp => resp.json())
          .then(data => data.forEach(repo => {
            this.repos.push(repo.full_name)
          }))
      }
    },
    RepoClick (repo) {
      this.$router.push(`/${repo}`)
    }
  },
  mounted () {
    this.fetchUser(this.$route.params.name)
      .then(this.fetchRepos)
      .then(() => {
        this.isLoading = false
      })
      .catch(err => {
        console.log(err)
        this.notFound = true
      })
  }
}
</script>
<style >
ul {
    list-style: none;
    margin-left: 0
}
.list-group-item:hover{
  background-color:blue;
  color:white;
  cursor: pointer;
}
</style>
