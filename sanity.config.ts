import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'


export default defineConfig({
  name: 'default',
  title: 'Brøk Håndbok',

  projectId: '3jluwli0',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

