<template lang="pug">
div
  .row
    .col-2
      ProfileButton
    .col-2
      Avatar(:width='74', :height='74')
    .col-2
      NeedALawyerButton
    .col-2
      Breadcrumb
    .col-4
      PostTitle(
        :title='"Hacienda Bogotá cumple un año con términos suspendidos"'
      )
  .row
    .col-6
      UserHero
</template>

<script>
import ProfileButton from '@/components/ProfileButton'
import Avatar from '@/components/Avatar'
import NeedALawyerButton from '@/components/NeedALawyerButton'
import Breadcrumb from '@/components/Breadcrumb'
import PostTitle from '@/components/PostTitle'
import UserHero from '@/components/users/UserHero'

export default {
  components: {
    ProfileButton,
    Avatar,
    NeedALawyerButton,
    Breadcrumb,
    PostTitle,
    UserHero
  }
}
</script>

<style lang="scss" scoped></style>
