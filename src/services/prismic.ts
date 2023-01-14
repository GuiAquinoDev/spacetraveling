import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import sm from '../../sm.json'

interface PrismicProps {
  req?: prismic.HttpRequestLike
}

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

export const createClient = (config: PrismicProps) => {
  const client = prismic.createClient(sm.apiEndpoint)

  prismicNext.enableAutoPreviews({
    client,
    req: config.req
  })

  return client
}