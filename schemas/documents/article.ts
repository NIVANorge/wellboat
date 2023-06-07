export default {
  name: 'article',
  type: 'document',
  title: 'Artikkel/Tema',
  icon: () => '🧑‍🏫',
  fields: [
    {name: 'title', type: 'string', title: 'Tittel'},
    {name: 'slug', type: 'slug', title: 'Internlenke', options: {source: 'title', maxLength: 96}},
    {name: 'description', type: 'string', title: 'Beskrivelse'},
    {name: 'publishedAt', type: 'datetime', title: 'Publisert dato'},
    {
      name: 'body',
      type: 'array',
      title: 'Brødtekst',
      of: [
        {
          type: 'block',
        },          
        {
          title: 'Case',
          name: 'case',
          type: 'reference',
          to: [{type: 'caseStudy'}],
        },
        {
          title: 'Publikasjon',
          name: 'publication',
          type: 'reference',
          to: [ {type: 'publication'}],
        },
        {
          title:  'Bilde',
          type: 'image',
        },
        {
          title: 'Video',
          type: 'file',
        },
        {
          type: 'card',
        },
      ],
    },
    {
      name: 'cases',
      type: 'array',
      title: 'Caser',
      of: [{type: 'reference', to: {type: 'caseStudy'}}],
    },
  ],
}
