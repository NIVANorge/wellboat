export default {
  name: 'caseStudy',
  type: 'document',
  title: 'Case',
  icon: () => '⚓️',
  fields: [
    {name: 'title', type: 'string', title: 'Tittel'},
    {name: 'slug', type: 'slug', title: 'Internlenke', options: {source: 'title', maxLength: 96}},
    {name: 'description', type: 'string', title: 'Beskrivelse'},
    {name: 'publishedAt', type: 'datetime', title: 'Publisert dato'},
    {name: 'author', type: 'string', title: 'Skrevet av'},
    {
      name: 'richtext',
      type: 'array',
      title: 'Brødtekst',
      of: [
        {
          type: 'block',
          of: [
            {
              title: 'Bilde',
              type: 'image',
            },
            {
              title: 'Video',
              type: 'file',
            },
            {
              title: 'Artikkel',
              name: 'article',
              type: 'reference',
              to: [{type: 'article'}],
            },
            {
              title: 'Publikasjon',
              name: 'publication',
              type: 'reference',
              to: [{type: 'publication'}],
            },
          ],
        },
      ],
    },
  ],
}
