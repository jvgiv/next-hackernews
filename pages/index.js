import fetch from 'isomorphic-fetch'
import Error from 'next/error'
import StoryList from '../components/StoryList'
import Layout from '../components/Layout'
import Link from 'next/link'

class Index extends React.Component {
    
    static async getInitialProps({ req, res, query }) {
        let stories;
        let page;

        try {
            page = Number(query.page) || 1;
            const response = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
            stories = await response.json();
        } catch (error) {
            console.log(error)
            stories = [];
        }


        return { page, stories }
    }

    componentDidMount() {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker
                .register('/service-worker.js')
                .then(registration => {
                    console.log('SW Reg Success', registration)
                })
                .catch(err => {
                    console.log('sw reg failure', err.message)
                })
        }
    }

    render() {
        const { page, stories } = this.props

        if (stories.length === 0) {
            return <Error statusCode={503} />
        } 
        return (
            <Layout title="Hacker Next Clone" description="A Hacker News clone made with NextJS">
                <StoryList stories={stories} />

                <footer>
                    {page === 1 ? null : 
                    <Link href={`/?page=${page - 1}`}>
                        <a>Previous Page ({page - 1})</a>
                    </Link>
                    }
                    <Link href={`/?page=${page + 1}`}>
                        <a>Next Page ({page + 1})</a>
                    </Link>
                </footer>

                <style jsx>{`
                    footer {
                        padding: 1em;
                        display: flex;
                        justify-content: space-around;
                    }
                    footer a {
                        font-weight: bold;
                        text-decoration: none;
                        color: black;
                    }
                `}</style>
            </Layout>
        )
    }
}

export default Index