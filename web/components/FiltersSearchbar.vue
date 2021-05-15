<template lang="pug">
.filters.d-flex.justify-space-between.shadow-lg.p-0
  .text
    span Filtros
  .searchbar
    .badges
      Badge(v-for='badge in badges', :key='badge.title', :badge='badge')
    .edit__filters
      i.bi.bi-wrench
</template>

<script>
import Badge from '@/components/Badge'
export default {
  components: { Badge },
  data() {
    return {
      badges: [
        {
          title: 'Artículo',
          color: '#FFFAEB',
          textColor: '#946C00',
          borderColor: 'rgba(148, 108, 0, 0.21)'
        },
        {
          title: 'Inmobiliario',
          color: '#EFFAF5',
          textColor: '#257953',
          borderColor: 'rgba(37, 121, 83, 0.21);'
        },
        {
          title: 'Todos los temas',
          color: 'rgba(191, 188, 185, 0.56)',
          textColor: '#807A73',
          borderColor: '1px solid #BFBCB9;'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.filters {
  background: white;
  border-radius: 21px;

  .text {
    background: rgba(128, 122, 115, 0.5);
    border: 0.813187px solid rgba(128, 122, 115, 0.5);
    padding: 8px 45px;
    border-radius: 21px 0 0 21px;
    color: white;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .searchbar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .edit__filters {
      background: #233539;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      width: 40px;
      height: 40px;
      margin-right: 1em;
    }
  }

  .badges {
    padding: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
