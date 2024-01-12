import { getPostBySlug } from 'lib/api'
import Container from 'components/container'
export default function Schedulre ({
  title,
  publish,
  content,
  eyecatch,
  categories
}) {
  return (
    <Container>
      <h1>title</h1>
    </Container>
  )
}

export async function getStaticProps () {
  const slug = 'schedule'

  const post = await getPostBySlug(slug)

  return {
    iprops: {
      title: post.title,
      publish: post.publish,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories
    }
  }
}