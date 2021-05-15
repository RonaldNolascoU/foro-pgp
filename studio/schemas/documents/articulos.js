export default {
  title: 'Artículos',
  name: 'articulo',
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
      title: 'Autore(s)',
      name: 'autores',
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
    {
      title: '¿Dónde se publicó originalmente?',
      name: 'medio',
      type: 'string'
    },
    {
      title: 'Enlace a publicación original',
      name: 'url',
      type: 'url'
    }
  ]
}
