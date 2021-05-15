import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document types
import abogados from './documents/abogados'
import articulos from './documents/articulos'
import cursos from './documents/cursos'
import formatos from './documents/formatos'
import noticias from './documents/noticias'
import podcast from './documents/podcast'
import preguntasRespuestas from './documents/preguntasRespuestas'
import servicios from './documents/servicios'
import testimonios from './documents/testimonios'
import videos from './documents/videos'
import webinars from './documents/webinars'

// Object types
import cursoCapitulo from './objects/cursoCapitulo'
import formato from './objects/formato'
import invitados from './objects/invitados'
import textoRico from './objects/textorico'

export default createSchema({
  name: 'foroPGP',
  
  types: schemaTypes.concat([
    // Documentos
    abogados,
    articulos,
    cursos,
    formatos,
    noticias,
    podcast,
    preguntasRespuestas,
    servicios,
    testimonios,
    videos,
    webinars,

    // Objetos
    cursoCapitulo,
    formato,
    invitados,
    textoRico
  ])
})
