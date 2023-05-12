export default {
    name: 'author',
    type: 'document',
    icon: () => '👤',
    title: 'Forfatter',
    fields: [
        {   name: 'name',       type: 'string',     title: 'Navn' },
        {   name: 'slug',       type: 'slug',       title: 'Internlenke',        options: { source: 'name', maxLength: 96 } },
        {   name: 'image',      type: 'image',      title: 'Bilde' },
        {   name: 'bio',        type: 'text',       title: 'Biografi' }
    ],
}