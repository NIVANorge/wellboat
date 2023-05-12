export default {
    name: 'referenceArticle',
    type: 'document',
    title: 'Referanse',
    icon: () => '📖',
    fields: [
        {   name: 'referenceId',     type: 'number',     title: 'Referanse Nummer' },
        {   name: 'title',     type: 'string',     title: 'Title' },
        {   name: 'referenceMetadata',     type: 'string',     title: 'Referanseinfo' },
        {   name: 'slug',      type: 'slug',       title: 'Internlenke',        options: { source: 'title', maxLength: 96 } },
        {   name: 'url',      type: 'url',       title: 'Lenke' },
        {   name: 'articleAuthors', type: 'text',     title: 'Artikkelforfattere' },
        {   name: 'year',     type: 'date',      title: 'År', options: { dateFormat: 'YYYY' } },
    ]
}