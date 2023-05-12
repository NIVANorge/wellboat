export default {
    name: 'category',
    type: 'document',
    title: 'Kategori',
    icon: () => '📁',
    fields: [
        {   name: 'title',     type: 'string',     title: 'Tittel' },
        {   name: 'slug',      type: 'slug',       title: 'Internlenke',        options: { source: 'title', maxLength: 96 } },
        {   name: 'description', type: 'text',     title: 'Beskrivelse', description: 'Describe this category for SEO purposes.' },
        {   name: 'image',     type: 'image',      title: 'Bilde' },
        {   name: 'parentCategory', type: 'reference', title: 'Overkategori', to: { type: 'category' } }
    ],
}