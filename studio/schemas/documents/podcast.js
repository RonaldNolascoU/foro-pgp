export default {
  title: 'Podcasts',
  name: 'podcast',
  type: 'document',
  fields: [
    {
      title: 'Título',
      name: 'titulo',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'Presionar GENERATE cuando se haya escrito el título',
      validation: Rule => Rule.required(),
      options: {
        source: 'titulo',
        slugify: input => input
                  .toLowerCase()
                  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                  .replace(/\s+/g, '-')
      }
    },
    {
      title: 'Imagen',
      name: 'imagen',
      type: 'image',
    },
    {
      title: 'Fecha',
      name: 'fecha',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    },
    {
      title: 'Código de Spotify',
      name: 'spotify',
      description: 'Código que aparece al final de la URL del episodio https://open.spotify.com/episode/[CÓDIGO]]',
      type: 'string'
    },
    {
      title: 'Abogado(s)',
      name: 'abogados',
      type: 'array',
      of: [
        { 
          type: 'reference',
          to: [{ type: 'abogados'}],
        }
      ]
    },
    {
      title: 'Contenido',
      name: 'contenido',
      type: 'textoRico'
    },
    {
      title: 'Categorías',
      name: 'categorias',
      type: 'array',
      description: '¿Con qué servicios se relaciona la pregunta?',
      of: [
        {
          type: 'reference',
          to: [{type: 'servicios'}]
        }
      ],
      options: {
        layout: 'tags'
      }
    },
  ]
}
