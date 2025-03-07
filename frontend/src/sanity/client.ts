import { createClient } from 'next-sanity'

export const client = createClient({
	projectId: process.env.PUBLIC_NEXT_PROJECT_ID,
	dataset: 'production',
	apiVersion: '2024-11-01',
	useCdn: false,
})
