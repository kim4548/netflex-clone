import React from 'react'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Row from '../../components/Row'
import requests from '../../api/requests'

export default function MainPage() {
  return (
    <div>
    
   
    <Banner />
    <Row 
    title="NETFLEX_ORIGNALS"
    id="NO"
    fetchUrl ={requests.fetchNewFlixOriginals}
    isLargeRow
    />
    <Row 
      title="Trending_Now"
      id="TN"
      fetchUrl ={requests.fetchTrending}
    />
    <Row   title="Action Movies"
    id="AM"
    fetchUrl ={requests.fetchActionMovies}/>
    <Row 
      title="Comedy Movies"
      id="CM"
      fetchUrl ={requests.fetchComedyMovies}/>
   <Footer />
   
      </div>
  )
}
