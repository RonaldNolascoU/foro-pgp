export default {
  title: 'Invitados',
  name: 'invitados',
  type: 'object',
  fields: [
    {
      title: 'Nombre',
      name: 'nombre',
      type: 'string'
    },
    {
      title: 'Empresa',
      name: 'empresa',
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
