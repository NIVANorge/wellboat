import {CardPreview} from '../components/CardPreview'

export default {
    name: 'card',
    type: 'object',
    title: 'Kort',
    icon: () => '🐟',
    components: {
        preview: CardPreview
    },
    fields: [
        {   name: 'type',     type: 'string',     title: 'Type', options: { list: [{value: 'recommendation', title: 'Anbefaling'}, {value: 'risk', title: 'Risiko'}] }},
        {   name: 'text',     type: 'text',     title: 'Tekst' },
    ],
    preview: {
        select: {
            type: 'type',
            text: 'text',
        },
    }
}