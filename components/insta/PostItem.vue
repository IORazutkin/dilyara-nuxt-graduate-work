<template>
  <div class="post">
    <div class="post__info">
      <div class="post__info__header">
        <div class="post__info__title">
          Публикация
        </div>
        <div class="post__info__date">
          {{ data.postDate | formatDate }}
        </div>
      </div>
      <div class="post__info__img">
        <img :src="data.mediaUrl" alt="" loading="lazy">
      </div>
      <div class="post__info__markers">
        <div class="marker like">
          {{ data.likeCount }}
        </div>
        <div class="marker comment">
          {{ data.commentsCount }}
        </div>
        <div class="marker view">
          {{ data.impressionsCount }}
        </div>
        <div class="marker save">
          {{ data.savedCount }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { InstagramPost } from '~/types/InstagramPost'

@Component
export default class extends Vue {
  @Prop() data!: InstagramPost

  mounted () {
    this.$axios.$post('/api/facebook/post', this.data).then((response) => {
      Object.assign(this.data, response)
    })
  }
}
</script>

<style lang="scss" scoped>
.post {
  background-color: white;
  padding: 16px;
  display: flex;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, .3);

  &__info {
    width: 300px;

    &__header {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      color: #666;
    }

    &__title {
      font-weight: bold;
      text-transform: uppercase;
    }

    &__img {
      height: 300px;
      margin: 16px 0;
      background-color: #666666;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-height: 100%;
        max-width: 100%;
      }
    }

    &__markers {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 12px;
      font-size: 11px;
      font-weight: bold;
      text-align: right;
    }
  }
}

.arrow-btn {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, .3);
  border-radius: 50%;
  display: block;
  width: 30px; height: 30px;
  padding: 0;
  margin-left: 8px;
}

.marker {
  line-height: 30px;
  background-size: auto 26px;
  background-repeat: no-repeat;
  background-position: left center;

  &.like {
    background-image: url(~@/assets/img/marker/like.svg);
  }

  &.save {
    background-image: url(~@/assets/img/marker/save.svg);
  }

  &.view {
    background-image: url(~@/assets/img/marker/visibility.svg);
  }

  &.comment {
    background-image: url(~@/assets/img/marker/comment.svg);
  }
}
</style>
