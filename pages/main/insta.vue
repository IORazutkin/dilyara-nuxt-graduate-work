<template>
  <div class="insta">
    <total-stat />
    <div class="insta__posts">
      <post-item v-for="post in posts" :key="post.id" :data="post" />
      <button v-if="after" class="insta__posts__btn submit-btn" @click="$fetch">
        Загрузить еще
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TotalStat from '~/components/insta/TotalStat.vue'
import PostItem from '~/components/insta/PostItem.vue'
import { InstagramPost } from '~/types/InstagramPost'

@Component({
  components: { PostItem, TotalStat }
})
export default class extends Vue {
  posts: InstagramPost[] = []
  after: string | null = null

  async fetch () {
    const params = {
      after: this.after
    }

    const response = await this.$axios.$get('/api/facebook/posts?' + require('qs').stringify(params))
    this.posts.push(...response.posts)
    this.after = response.after
  }
}
</script>

<style lang="scss" scoped>
.insta {
  width: 100%;
  padding: 15px;

  &__posts {
    margin-top: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;

    &__btn {
      grid-column: 1/4;
    }
  }
}
</style>
