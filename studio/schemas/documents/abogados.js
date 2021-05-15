export default {
  title: 'Abogados',
  name: 'abogados',
  type: 'document',
  fields: [
    {
      title: 'Nombre',
      name: 'nombre',
      type: 'string',
    },
    {
      title: 'Apellido',
      name: 'apellido',
      type: 'string',
    },
    {
      title: 'ID de correo',
      name: 'idCorreo',
      type: 'slug',
    },
    {
      title: 'Foto',
      name: 'foto',
      type: 'image',
      options: {
        hotspot: true 
      }
    },
    {
      title: 'Filiación',
      name: 'filiacion',
      type: 'string'
    },
    {
      title: 'Filiación INGLÉS',
      name: 'filiacionIngles',
      type: 'string'
    },
    {
      title: 'Perfil',
      name: 'perfil',
      type: 'textoRico'
    },
    {
      title: 'Peril INGLÉS',
      name: 'prefilIngles',
      type: 'textoRico'
    }

  ]
}