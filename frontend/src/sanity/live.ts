import { client } from '@/sanity/client' //from the file frontend/src/sanity/client.ts !!Not from the package @sanity/client
import { defineLive } from 'next-sanity'

export const { sanityFetch, SanityLive } = defineLive({
	client: client.withConfig({ apiVersion: 'vX' }),
})
