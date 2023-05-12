export default {
    name: 'recommendation',
    type: 'document',
    title: 'Anbefaling',
    icon: () => '📋',
    fields: [
        {   name: 'title',     type: 'string',     title: 'Tittel' },    
        {   name: 'slug',      type: 'slug',       title: 'Internlenke',        options: { source: 'title', maxLength: 96 } },
        {   name: 'author',    type: 'reference',  title: 'Forfatter',      to: { type: 'author' } },
        {   name: 'mainImage', type: 'image',  title: 'Hovedbilde' },
        {   name: 'body',      type: 'text', title: 'Brødtekst' },
        {   name: 'excerpt',   type: 'text', title: 'Ingress' },
        {   name: 'categories', type: 'array',     title: 'Kategorier',  of: [{ type: 'reference', to: { type: 'category' } }] },
        {   name: 'publishedAt', type: 'datetime', title: 'Publisert dato' },
        {   name: 'relatedArticles', type: 'array', title: 'Relaterte anbefalinger', of: [{ type: 'reference', to: { type: 'recommendation' } }] },
        {   name: 'situation', type: 'reference', title: 'Situasjon', to: { type: 'situation' } },
        {   name: 'referanse', type: 'array', title: 'Referanse', of: [{ type: 'reference', to: { type: 'referenceArticle' } }] },
    ],
}