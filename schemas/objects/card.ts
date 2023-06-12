export default {
    name: 'card',
    type: 'object',
    title: 'Kort',
    //TODO make type and icons dropdown
    icon: () => '🐟',
    fields: [
        {   name: 'type',     type: 'string',     title: 'Type', options: { list: [{value: 'recommendation', title: 'Anbefaling'}, {value: 'risk', title: 'Risiko'}] }},
        {   name: 'text',     type: 'text',     title: 'Tekst' },
    ],
    preview: {
        select: {
            type: 'type',
            text: 'text',
        },
        prepare({ type, text }: { type: string, text: string }) {
            const typeText = type === 'recommendation' ? 'Anbefaling' : 'Risiko'
            return {
                title: `${typeText}: ${text}`,
            }
        }
    }
}