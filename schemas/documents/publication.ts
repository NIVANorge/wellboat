export default {
    name: 'publication',
    type: 'document',
    title: 'Publikasjon',
    icon: () => '📚',
    fields: [
        {   name: 'title',     type: 'string',     title: 'Tittel' },
        {   name: 'slug',      type: 'slug',       title: 'Internlenke',  options: { source: 'title', maxLength: 96 } },
        {   name: 'authors',     type: 'string',     title: 'Forfattere' },
        {   name: 'journal', type: 'string', title: 'Publikkasjonsted' },
        {   name: 'publishedYear', type: 'date', title: 'År',
            options: {
                dateFormat: 'YYYY',
                calendarTodayLabel: 'I år',
            },
             },
        {   name: 'url',      type: 'url',       title: 'Lenke' },
        {   name: 'location',     type: 'string',      title: 'Sted' },
        {   name: 'summary',     type: 'string',     title: 'Oppsummering' },
        {   name: 'format', type: 'string', title: 'Format' },
        {   name: 'body',      type: 'array', title: 'Brødtekst', of: [{ type: 'block' }] },
        {   name: 'topics', type: 'array', title: 'Emner', of: [{ type: 'reference', to: { type: 'topic' } }] },
        {   name: 'access', type: 'string', title: 'Tilgang', options: { list: ['Åpen', 'Lukket'] } },
        ],
}