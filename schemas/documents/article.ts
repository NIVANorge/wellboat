export default {
  name: 'article',
  type: 'document',
  title: 'Artikkel/Tema',
  icon: () => '🧑‍🏫',
  fields: [
    {name: 'title', type: 'string', title: 'Tittel'},
    {name: 'slug', type: 'slug', title: 'Internlenke', options: {source: 'title', maxLength: 96}},
    {name: 'description', type: 'text', title: 'Kort Beskrivelse', description: 'Kort beskrivelse som forteller hva artikkelen inneholder. Vises på forsiden som forhåndsvisningstekst og i artikkelen som ingress/introduksjon'},
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
          type: 'card',
        },
        {
          title:  'Bilde',
          type: 'image',
          icon: () => '🖼️',
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
          title: 'Video',
          type: 'file',
          icon: () => '📹',
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
