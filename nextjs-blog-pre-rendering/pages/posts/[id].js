// import Layout from '../../components/layout'
//
// export default function Post() {
//     return <Layout>
//         <>
//             <p>Thanh HUyen</p>
//         </>
//     </Layout>
// }
// export async function getStaticPaths() {
//     // Return a list of possible value for id
// }
//
// export async function getStaticProps({ params }) {
//     // Fetch necessary data for the blog post using params.id
// }

import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    console.log("Data 4", postData);

    return {
        props: {
            postData
        }
    }
}