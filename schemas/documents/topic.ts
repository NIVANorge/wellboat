export default {
    name: 'topic',
    type: 'document',
    title: 'Emne',
    icon: () => '⛴️',
    fields: [
        {   name: 'title',     type: 'string',     title: 'Tittel' }, 
        {   name: 'slug',      type: 'slug',       title: 'Internlenke',  options: { source: 'title', maxLength: 96 } },
        {   name: 'description',     type: 'string',     title: 'Beskrivelse' }, 
        {   name: 'articles', type: 'array', title: 'Artikler/Tema', of: [{ type: 'reference', to: { type: 'article' } }] }
    ]
}