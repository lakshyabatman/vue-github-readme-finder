<template>
            <b-card no-body class="overflow-hidden">
                <b-row no-gutters>
                <b-col md="4">
                    <b-card-img :src="avatar" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                    <b-card-body :title="name || 'No Name'">
                    <b-card-text>
                        {{bio || 'No Bio :('}}
                    </b-card-text>
                    <ul>
                        <li><b>Followers: </b> {{followers}}</li>
                        <li><b>Following: </b>{{following}}</li>
                    </ul>
                    <a :href="link">
                        <b-button variant="primary">Github Profile</b-button>
                    </a>
                    </b-card-body>
                </b-col>
                </b-row>
            </b-card>
</template>

<script>
export default {
  name: 'UserDetails',
  props: {
    name: String,
    bio: String,
    following: Number,
    followers: Number,
    avatar: String,
    link: String
  }
}
</script>
