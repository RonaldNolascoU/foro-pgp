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
    UserHero

  .row.mt-5
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

  .mt-5
    FiltersSearchbar

  .mt-5.d-flex.justify-content-center
    PreviousNextButton

  .mt-5.d-flex.justify-content-center
    SubscribeCard

  .d-flex.justify-content-center.mt-5
    PostCard
    br
    br
  .d-flex.justify-content-center.mt-5
    EventInfo
    br
    br
  .d-flex.justify-content-center.mt-5
    UserInfo
    br
    br
  .d-flex.justify-content-center.mt-5
    Temary
    br
    br
  .d-flex.justify-content-center.mt-5
    Feedback
    br
    br
  .d-flex.justify-content-center.mt-5
    CourseInfo
    br
    br
  .d-flex.justify-content-center.mt-5.mb-5
    FaqInfo
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
import PreviousNextButton from '@/components/PreviousNextButton'
import SubscribeCard from '@/components/SubscribeCard'
import CourseInfo from '@/components/cards/CourseInfo'
import FaqInfo from '@/components/cards/FaqInfo'
import Feedback from '@/components/cards/Feedback'
import Temary from '@/components/cards/Temary'
import UserInfo from '@/components/cards/UserInfo'
import EventInfo from '@/components/cards/EventInfo'
import PostCard from '@/components/cards/PostCard'

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
    FiltersSearchbar,
    PreviousNextButton,
    SubscribeCard,
    CourseInfo,
    FaqInfo,
    Feedback,
    Temary,
    UserInfo,
    EventInfo,
    PostCard
  }
}
</script>

<style lang="scss" scoped></style>
