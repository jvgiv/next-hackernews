import fetch from 'isomorphic-fetch'
import Error from 'next/error'
import StoryList from '../components/StoryList'

class Index extends React.Component {
    
    static async getInitialProps() {
        let stories;
        try {
            const response = await fetch(`https://node-hnapi.herokuapp.com/news?page=1`);
            stories = await response.json();
        } catch (error) {
            console.log(error)
            stories = [];
        }


        return { stories }
    }

    render() {
        const { stories } = this.props

        if (stories.length === 0) {
            return <Error statusCode={503} />
        } 
        return (
            <>
                <h1>hacker next</h1>
                <StoryList stories={stories} />
            </>
        )
    }
}

export default Index