<template lang="pug">
div
    .d-flex.align-items-center.flex-wrap.justify-content-md-start.justify-content-center
        span.info-title-font.secondary Sus Datos
        .d-flex.justify-content-center.py-4
            nuxt-link.d-flex.align-items-center.ms-5.small-btn.text-light.btn-radius.text-decoration-none.px-2.fs-18.text-nowrap.primary-bg(to='/take-course')
                span.mx-4.px-3 Editar
        .d-flex.justify-content-center.py-4
            nuxt-link.d-flex.align-items-center.ms-5.small-btn.text-green.btn-radius.text-decoration-none.px-2.fs-18.text-nowrap.primary-bg-bordered(to='/take-course')
                span.mx-2 Eliminar su Perfil

    .card-container.p-2
        .card-border.m-3
            .row.m-4
                .col-12.col-md-4.mt-3
                    .primary.btn-text-size Nombre
                    .secondary.btn-text-size Maria Herrera
                .col-12.col-md-4.mt-3
                    .primary.btn-text-size Apellido
                    .secondary.btn-text-size Padilla
                .col-12.col-md-4.mt-3
                    .primary.btn-text-size Correo
                    .secondary.btn-text-size mpadilla@pgplegal.com
                .my-3.d-none.d-md-block
                .col-12.col-md-4.mt-3
                    .primary.btn-text-size Empresa
                    .secondary.btn-text-size Pinilla, González & Prieto
                .col-12.col-md-4.mt-3
                    .primary.btn-text-size Cargo
                    .secondary.btn-text-size Abogada
                .col-12.col-md-4.mt-3
                    .primary.btn-text-size Sector
                    .secondary.btn-text-size Legal
</template>

<script>
export default {}
</script>

<style></style>
