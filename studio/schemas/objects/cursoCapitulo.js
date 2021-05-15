export default {
  title: 'Capítulo de curso',
  name: 'cursoCapitulo',
  type: 'object',
  fields: [
    {
      title: 'Número',
      name: 'numero',
      type: 'number'
    },
    {
      title: 'Título',
      name: 'titulo',
      type: 'string'
    },
    {
      title: 'Descripción',
      name: 'descripcion',
      type: 'textoRico'
    }, 
    {
      title: 'Código de YouTube',
      name: 'youtube',
      description: 'Código que aparece al final de la URL del video https://www.youtube.com/watch?v=[CÓDIGO]&t=0s O https://youtu.be/[CÓDIGO]',
      type: 'string'
    },  
  ]
}