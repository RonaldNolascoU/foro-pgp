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
    .col-2
      ProfileButton
    .col-2
      ProfileButton
</template>

<script>
import ProfileButton from '@/components/ProfileButton'
import Avatar from '@/components/Avatar'
import NeedALawyerButton from '@/components/NeedALawyerButton'
import Breadcrumb from '@/components/Breadcrumb'

export default {
  components: { ProfileButton, Avatar, NeedALawyerButton, Breadcrumb }
}
</script>

<style lang="scss" scoped></style>
