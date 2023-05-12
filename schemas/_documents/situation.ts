export default {
    name: 'situation',
    type: 'document',
    title: 'Situasjon',
    icon: () => '🐟',
    fields: [
        {   name: 'title',     type: 'string',     title: 'Tittel' },
        {   name: 'slug',      type: 'slug',       title: 'Internlenke',        options: { source: 'title', maxLength: 96 } },
        {   name: 'description', type: 'text',     title: 'Beskrivelse', description: 'Describe this situation for SEO purposes.' },
        {   name: 'image',     type: 'image',      title: 'Bilde' },
    ]
}