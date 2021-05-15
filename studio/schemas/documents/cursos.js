export default {
  title: 'Cursos',
  name: 'cursos',
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
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      }
    },
    {
      title: 'Capítulos',
      name: 'capitulos',
      type: 'array',
      of: [
        {type: 'cursoCapitulo'}
      ]
    },
    {
      title: 'Abogado(s)',
      name: 'abogados',
      type: 'array',
      of: [
        { 
          type: 'reference',
          to: [{ type: 'abogados'}],
        },
        {
          type: 'invitados'
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
