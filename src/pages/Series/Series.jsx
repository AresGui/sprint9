import React from 'react'
import SecondaryNavBar from '../../navigation/components/SecondaryNavBar/SecondaryNavBar';
import Row from '../Home/Row';
import series from '../../services/SeriesRequests';

function Series() {
  return (
    <div>
      <SecondaryNavBar />
      <Row title='Airing today' fetchURL={series.airingToday} />
      <Row title='On the air' fetchURL={series.onTheAir} />
      <Row title='Popular' fetchURL={series.popular} />
      <Row title='Top rated' fetchURL={series.topRated} />
    </div>
  )
}

export default Series;
