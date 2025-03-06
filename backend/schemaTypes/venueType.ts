import {MarkerIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const venueType = defineType({
  name: 'venue',
  title: 'Venue',
  type: 'document',
  icon: MarkerIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
