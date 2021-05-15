export default {
  name: 'preguntasRespuestas',
  type: 'document',
  title: 'Preguntas y respuestas',
  fieldsets: [
    {name: 'pregunta', title: 'Pregunta'},
    {name: 'respuesta', title: 'Respuesta'}
  ],
  fields: [
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug'
    },
    {
      title: 'Pregunta',
      name: 'pregunta',
      type: 'string',
      fieldset: 'pregunta'
    },
    {
      title: 'ID usuario de Firebase',
      name: 'idUsuario',
      type: 'string',
      fieldset: 'pregunta'
    },
    {
      title: 'Nombre del usuario',
      name: 'nombreUsuario',
      type: 'string',
      fieldset: 'pregunta'
    },
    {
      title: 'Respuesta',
      name: 'respuesta',
      type: 'string',
      fieldset: 'respuesta'
    },
    {
      title: 'Abogado',
      name: 'abogado',
      type: 'reference',
      to: [{ type: 'abogados'}],
      fieldset: 'respuesta'
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
      title: 'Fecha',
      name: 'fecha',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    }
  ]
}
