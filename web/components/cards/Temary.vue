<template lang="pug">
  .card-container.p-2.w-25.width-res
    .card-border.m-3
        div
            p.title-font.primary.pt-3.pb-4.ms-3 Temario
            
            .secondary.secondary-font.mt-0.mb-3
                .ms-1 1. horas de video a demanda
            .secondary.secondary-font.mt-0.mb-3
                .ms-1 2. artículos
            .secondary.secondary-font.mt-0.mb-3
                .ms-1 3. Acceso ilimitado
            .secondary.secondary-font.mt-0.mb-3
                .ms-1 4. Disponible también en celuar
            .secondary.secondary-font.mt-0.mb-3
                .ms-1 5. Foro de discusión con las abogadas Foro de discusión con las abogadas Foro de discusión con las abogadas

            .d-flex.justify-content-center.py-4
                nuxt-link.secondary-btn.text-light.btn-radius.text-decoration-none.px-2.btn-text-size-lg.text-nowrap.px-4.primary-bg(to='/take-course')
                    span Inscribirse
</template>

<script>
export default {}
</script>

<style></style>
