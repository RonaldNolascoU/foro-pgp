<template lang="pug">
div
    .card-container.p-0
        div
            div
                .event-bg.text-light.event-title.text-center.text-md-start.ps-md-5.d-md-flex.align-items-center
                    .w-25.width-res.me-md-5.pe-md-5.d-none.d-md-block
                    span Participación en plusvalía: Novedades jurisprudenciales

            .d-md-flex
                .w-20.width-res.position-relative.position-md-relative
                    .card-container.p-2.position-md-absolute.position-absolute.outside-card.p-4
                        div
                            .d-flex.align-items-center.mt-3
                                i.sprites.calendar.me-4
                                span.secondary.event-text Jueves, Feb. 25 <br/> 9:00 a. m
                            div.d-flex.justify-content-center.my-4
                                .w-50.border-top
                            .d-flex.align-items-center.justify-content-center
                                i.sprites.youtube.me-3
                                span.secondary Evento en vivo
                            
                            .d-flex.justify-content-center.pt-4.mt-3
                                nuxt-link.secondary-btn.text-light.btn-radius.text-decoration-none.px-2.btn-text-size-lg.text-nowrap.px-4.primary-bg(to='/take-course')
                                    span Inscribirse

                .w-75.width-res
                    .row.m-4
                        .col-12.col-lg-4.mt-3.text-center
                            - var img1 = "/users/images/img1.png"
                            img(src=img1)
                            .mt-3.pt-2.secondary.btn-text-size.normal-font.text-center Juan Manuel González
                            .primary.btn-text-size.event-role-title Inmobiliario
                        .col-12.col-lg-4.mt-3.text-center
                            - var img2 = "/users/images/img2.png"
                            img(src=img2)
                            .mt-3.pt-2.secondary.btn-text-size.normal-font.text-center María Helena Padilla
                            .primary.btn-text-size.event-role-title Tributario
                        .col-12.col-lg-4.mt-3.text-center.mb-5.mb-md-0
                            - var img3 = "/users/images/img3.png"
                            img(src=img3)
                            .mt-3.pt-2.secondary.btn-text-size.normal-font.text-center David Garzón G.
                            .primary.btn-text-size.event-role-title Derecho público
                        .my-3.d-none.d-md-block
</template>

<script>
export default {}
</script>

<style></style>
