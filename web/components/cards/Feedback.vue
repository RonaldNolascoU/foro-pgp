<template lang="pug">
  .card-container.p-2.w-25.width-res
    .card-border.m-3
        div
            p.title-font.primary.pt-2.ps-2 Comentarios

        .border-top.pt-3.ps-2
            p.feedback-font.secondary.my-0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor lectus eget augue sagittis iaculis. Maecenas vel ultrices sapien. Curabitur pulvinar placerat est. 
            .d-flex.align-items-center.pt-3.pb-4
                i.sprites.person  
                span.ms-1.author-font Juan Martín Fierro
        
        .border-top.pt-3.ps-2
            p.feedback-font.secondary.my-0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor lectus eget augue sagittis iaculis. Maecenas vel ultrices sapien. Curabitur pulvinar placerat est. 
            .d-flex.align-items-center.pt-3.pb-4
                i.sprites.person  
                span.ms-1.author-font Juan Martín Fierro


        .d-flex.justify-content-center.align-items-center.position-relative.outside-btn
            nuxt-link.secondary-btn.text-light.radius-left.d-flex.align-items-center.justify-content-center.text-decoration-none.px-2.btn-text-size(to='/feedback')
                span.ms-1 Comentar
                
            nuxt-link.secondary-btn.text-light.radius-right.text-decoration-none.d-flex.align-items-center.justify-content-center.btn-text-size(to='/to-expand') 
                span.mx-3 Expandir
    
</template>

<script>
export default {}
</script>

<style></style>
