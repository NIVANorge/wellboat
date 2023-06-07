export default {
    name: 'card',
    type: 'object',
    title: 'Kort',
    icon: () => '🐟',
    fields: [
        {   name: 'type',     type: 'string',     title: 'Type' },
        {   name: 'text',     type: 'string',     title: 'Tekst' },
    ],
    preview: {
        select: {
            type: 'type',
            text: 'text',
        },
        prepare({ type, text }: { type: string, text: string }) {
            return {
                title: `${type}: ${text}`,
            }
        }
    }
}