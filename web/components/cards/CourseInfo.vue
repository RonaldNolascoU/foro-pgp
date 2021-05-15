<template lang="pug">
  .card-container.p-2
    .card-border.m-3
        div
            p.title-font.primary.pt-3.pb-4.ms-3 El curso incluye:
            
            .secondary.secondary-font.mt-0.mb-3.d-flex.mx-0.align-items-center
                .w-20.text-center
                    i.sprites.video
                .ms-1.w-75.text-nowrap 3 horas de video a demanda
            .secondary.secondary-font.mt-0.mb-3.d-flex.mx-0.align-items-center
                .w-20.text-center
                    i.sprites.doc
                .ms-1.w-75.text-nowrap 3 artículos
            .secondary.secondary-font.mt-0.mb-3.d-flex.mx-0.align-items-center
                .w-20.text-center
                    i.sprites.unlimited
                .ms-1.w-75.text-nowrap Acceso ilimitado
            .secondary.secondary-font.mt-0.mb-3.d-flex.mx-0.align-items-center
                .w-20.text-center
                    i.sprites.phone
                .ms-1.w-75.text-nowrap Disponible también en celuar
            .secondary.secondary-font.mt-0.mb-3.d-flex.mx-0.align-items-start
                .w-20.text-center
                    i.sprites.message
                .ms-1.w-75 Foro de discusión con las abogadas

            .d-flex.justify-content-center.pt-4
                nuxt-link.secondary-btn.text-light.btn-radius.text-decoration-none.px-2.btn-text-size-lg.text-nowrap.px-4(to='/take-course')
                    span Tomar el curso
</template>

<script>
export default {}
</script>

<style></style>
