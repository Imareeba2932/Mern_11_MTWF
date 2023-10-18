import React from 'react'
import Data from './DummyData2'

const WeatherCard = () => {
    const weatherCondition = (temp) => {
        if(temp <=28){
            return 'card-bg-blue';
        }else {
            return 'card-bg-red';
        }

    };

    const displayCards = () => {
        return Data.map((obj) =>  (
        <div className='col-md-4 mb-3'>
            <div className={`card shadow ${weatherCondition(obj.Temperature)}`}>
                <img className='card-img-top img' src={obj.img} alt='loading'/>
                <div className='card-body'>
                    <h3 className='card-title text-dark'>{obj.location}</h3>
                    <hr/>
                    <h5 className='card-subtitle mb-2'>Temperature: {obj.Temperature}</h5>
                    <h5 className='card-text'>Humidity: {obj.Humidity}</h5>
                </div>
            </div>
        </div>

    ));
};
  return (
    <div>
        <section className='py-5'>
            <h1 className='text-center'>Today's Sky Story</h1>
            <div className='container'>
                <div className='row mt-5'>
                    {displayCards()}
                </div>
            </div>
        </section>
    </div>
  )
}

export default WeatherCard