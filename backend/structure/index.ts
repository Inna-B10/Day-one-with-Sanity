import {CalendarIcon, MarkerIcon, PinIcon, UsersIcon} from '@sanity/icons'
import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem()
        .title('Upcoming Events')
        .schemaType('event')
        .icon(CalendarIcon)
        .child(S.documentList().title('Upcoming Events').filter('date >= now()')),
      S.listItem()
        .title('Past Events')
        .schemaType('event')
        .icon(CalendarIcon)
        .child(S.documentList().title('Past Events').filter('date < now()')),
      S.divider(),

      S.documentTypeListItem('event').title('Events').icon(PinIcon),
      S.documentTypeListItem('artist').title('Artists').icon(UsersIcon),
      S.documentTypeListItem('venue').title('Venues').icon(MarkerIcon),
    ])
