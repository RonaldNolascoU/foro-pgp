export default {
  title: 'Formatos',
  name: 'formatos',
  type: 'document',
  fields: [
    {
      title: 'Servicio',
      name: 'servicio',
      type: 'string'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'Presionar GENERATE cuando se haya escrito el título',
      validation: Rule => Rule.required(),
      options: {
        source: 'servicio',
        slugify: input => input
                  .toLowerCase()
                  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                  .replace(/\s+/g, '-')
      }
    },
    {
      title: 'Categoría',
      name: 'categoria',
      type: 'servicios'
    },
    {
      title: 'Formatos',
      name: 'formatos',
      type: 'array',
      of: [
        {type: 'formato'}
      ]
    }
  ]
}