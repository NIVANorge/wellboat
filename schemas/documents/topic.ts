export default {
    name: 'topic',
    type: 'document',
    title: 'Emne',
    icon: () => '⛴️',
    fields: [
        {   name: 'title',     type: 'string',     title: 'Tittel' },
        {   name: 'slug',      type: 'slug',       title: 'Internlenke',  options: { source: 'title', maxLength: 96 } },
        {   name: 'shortDescription',     type: 'text',     title: 'Kort Beskrivelse', description: 'Kort beskrivelse som forteller hva emnet inneholder. Vises på forsiden som forhåndsvisningstekst.' },
        {   name: 'description',     type: 'array', description: 'Her skrives en generell informasjon om forberedelser, og hva man finner under lenken.', title: 'Beskrivelse', of: [{ type: 'block' }]},
        {   name: 'articles', type: 'array', title: 'Artikler/Tema', of: [{ type: 'reference', to: { type: 'article' } }] }
    ]
}