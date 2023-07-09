import React from 'react'
import SecondaryNavBar from '../../navigation/components/SecondaryNavBar';
import Main from './Main';
import Row from './Row';
import requests from '../../services/Requests';

function Home() {
    return (
        <>
            <SecondaryNavBar />
            <Main />
            <Row title='Popular' fetchURL={requests.requestPopular} />
            <Row title='Top rated' fetchURL={requests.requestTopRated} />
            <Row title='Trending' fetchURL={requests.requestTrending} />
            <Row title='Horror' fetchURL={requests.requestHorror} />
            <Row title='Up coming' fetchURL={requests.requestUpcoming} />
        </>
    )
}

export default Home
