<template lang="pug">
  .card-container.p-2
    .card-border.m-3
        div
            p.title-font.primary.pt-4 Fecha de Publicacion
            p.normal-font.secondary.my-0 Lunes, 14 de junio de 2021

        div
            p.title-font.primary.pt-5 Autores
            p.normal-font.secondary.my-0 María Helena Padilla
            p.normal-font.secondary.my-0 Melitza Lopez
            p.normal-font.secondary.my-0 Viviana Africano

        div
            p.title-font.primary.pt-5 Servicio
            p.normal-font.secondary.my-0 Tributario

        .d-flex.justify-content-center.align-items-center.position-relative.outside-btn
            nuxt-link.secondary-btn.text-green.radius-left.d-flex.align-items-center.justify-content-center.text-decoration-none.px-2.btn-text-size(to='/share')
                i.sprites.share  
                span.ms-1 Compartir
                
            nuxt-link.secondary-btn.text-light.radius-right.text-decoration-none.d-flex.align-items-center.justify-content-center.btn-text-size(to='/contact-us') 
                span.mx-3 Contactar
    
</template>

<script>
export default {}
</script>

<style></style>
