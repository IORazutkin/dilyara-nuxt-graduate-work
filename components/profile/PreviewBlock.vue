<template>
  <div class="component">
    <div class="component__info">
      <div class="component__info__avatar">
        <label class="img-container">
          <img v-if="!user.avatar" src="@/assets/img/icons/profile-default.png">
          <img v-else :src="'http://localhost:8080/avatar/' + user.avatar">
          <input type="file" @change="avatarUpdate">
        </label>
      </div>
      <div class="component__info__text">
        <div v-if="user.email" class="email">
          {{ user.email }}
        </div>
        <div class="name">
          {{ user.fullName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import User from '~/types/User'

@Component
export default class extends Vue {
  get user (): User {
    return this.$store.getters['user/getUser']
  }

  avatarUpdate (e: any) {
    const files = e.target.files || e.dataTransfer.files
    if (files) {
      const formData = new FormData()
      // @ts-ignore
      formData.append('file', files[0], files[0]?.name)

      this.$axios.$post('/api/user/avatar', formData).then((user: User) => {
        this.$store.commit('user/setUser', user)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.component {
  background-color: #333333;
  display: flex;
  flex-direction: column-reverse;

  &__info {
    background-color: white;
    padding: 24px;
    display: flex;

    &__avatar {
      width: 150px;
      position: relative;

      .img-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        background-color: white;
        border-radius: 50%;
        padding: 5px;
        bottom: -10px;
        margin: 0;
        width: 150px; height: 150px;
        cursor: pointer;
        overflow: hidden;

        img {
          display: block;
          max-width: 100%;
          max-height: 100%;
        }

        input {
          display: none;
        }
      }
    }

    &__text {
      margin-left: 20px;

      .name {
        font-family: "Roboto Slab", sans-serif;
        font-size: 10px;
        line-height: 9px;
      }

      .email {
        font-size: 14px;
        line-height: 14px;
        font-weight: bold;
        margin-bottom: 8px;
      }
    }
  }
}
</style>
