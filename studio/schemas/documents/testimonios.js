export default {
  title: 'Testimonios',
  name: 'testimonios',
  type: 'document',
  fields: [
    {
      title: 'Nombre',
      name: 'nombre',
      type: 'string'
    },
    {
      title: 'Compañía',
      name: 'compania',
      type: 'string'
    },
    {
      title: 'Resumen',
      name: 'resumen',
      type: 'string'
    },
    {
      title: 'Foto',
      name: 'foto',
      type: 'image',
      options: {
        hotspot: true 
      }
    }
  ]
}