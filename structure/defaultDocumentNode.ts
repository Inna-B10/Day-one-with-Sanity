import DocumentsPane from 'sanity-plugin-documents-pane'
import type {DefaultDocumentNodeResolver} from 'sanity/structure'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  switch (schemaType) {
    case `artist`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(DocumentsPane)
          .options({
            query: `*[_type == "event" && references($id)]`,
            params: {id: `_id`},
            options: {perspective: 'previewDrafts'},
          })
          .title('Events'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}
