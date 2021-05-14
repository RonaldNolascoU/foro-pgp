<template lang="pug">
div
  .row
    .col-2
      ProfileButton
    .col-2
      Avatar(:img='"/users/fondo.png"', :width='74', :height='74')
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

  .row.mt-5
    .col-12
      CardHero(
        :title='"Foro PGP"',
        :subtitle='"Conocimiento jurídico en línea para personas y empresas"',
        :includeLogo='true'
      )

  .row.mt-5
    .col-12
      File(:type='"image"', :url='"/img_preview.png"')
  .row.mt-5
    .col-12
      VideoContent

  RecentPosts.mt-5

  .row.mt-5
    Testimonials

  .row.mt-5
    FiltersSearchbar
</template>

<script>
import ProfileButton from '@/components/ProfileButton'
import Avatar from '@/components/Avatar'
import NeedALawyerButton from '@/components/NeedALawyerButton'
import Breadcrumb from '@/components/Breadcrumb'
import PostTitle from '@/components/PostTitle'
import UserHero from '@/components/users/UserHero'
import CardHero from '@/components/pgp/CardHero'
import File from '@/components/File'
import VideoContent from '@/components/VideoContent'
import RecentPosts from '@/components/RecentPosts'
import Testimonials from '@/components/Testimonials'
import FiltersSearchbar from '@/components/FiltersSearchbar'

export default {
  components: {
    ProfileButton,
    Avatar,
    NeedALawyerButton,
    Breadcrumb,
    PostTitle,
    UserHero,
    CardHero,
    File,
    VideoContent,
    RecentPosts,
    Testimonials,
    FiltersSearchbar
  }
}
</script>

<style lang="scss" scoped></style>
