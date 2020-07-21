import React, { useState, useEffect } from 'react';
import Form from '../Form';
import { TableWithLoading } from '../Table';
import Calendar from '../Calendar';
import Footer from '../Footer';
import {
    PATH_BASE,
    DEFAULT_YEAR,
    COUNTRIES,
    DEFAULT_COUNTRY,
    IMAGES,
} from '../../constants';
import './index.css';

const getImage = (imageCountry) => require(`./images/${imageCountry}.jpg`);

const fetchData = async (url, setHits, setIsLoading, setError) => {
    // debugger;
    setIsLoading(true);
    fetch(url, {
        method: 'GET',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
        .then(response => response.json())
        .then(hits => {
            setHits(hits);
            setIsLoading(false);
        })
        .catch(error => setError(error));
};

function Home() {
    const DEFAULT_COUNTRY_CODE = COUNTRIES[DEFAULT_COUNTRY];

    const [hits, setHits] = useState(null);
    const [year, setYear] = useState(DEFAULT_YEAR);
    const [countryCode, setCountryCode] = useState(DEFAULT_COUNTRY_CODE);
    const [url, setUrl] = useState(`${PATH_BASE}/${DEFAULT_YEAR}/${DEFAULT_COUNTRY_CODE}`);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [imageCountry, setImageCountry] = useState(DEFAULT_COUNTRY_CODE);

    function onSelectSubmit(event) {
        event.preventDefault();
        console.log(`in sumbmit ${PATH_BASE}/${year}/${countryCode}`);
        setUrl(`${PATH_BASE}/${year}/${countryCode}`);
        if (IMAGES.indexOf(countryCode) !== -1) {
            setImageCountry(countryCode)
        }
        else {
            setImageCountry('DEFAULT');
        }
    }

    function onDismiss(name) {
        const isNotName = item => item.name !== name;
        setHits(prevHits => prevHits.filter(isNotName));
    }

    useEffect(() => {
        fetchData(url, setHits, setIsLoading, setError);
    }, [url]);



    return (
        <>
            <div className="page" style={{
                backgroundImage: `url(${getImage(imageCountry)})`
            }}>

                <div className="interactions">

                    <Calendar />

                    <Form
                        defaultYear={DEFAULT_YEAR}
                        defaultCountry={DEFAULT_COUNTRY}
                        onYearChange={event => setYear(event.target.value)}
                        onCountryChange={event => setCountryCode(COUNTRIES[event.target.value])}
                        onSubmit={onSelectSubmit}
                    >
                        Retrieve Public Holidays
                </Form>
                </div>

                {
                    error && <div className="interactions">
                        <p>Something went wrong...</p>
                    </div>

                }

                {
                    !error && hits && <TableWithLoading
                        list={hits}
                        onDismiss={onDismiss}
                        isLoading={isLoading}
                    />
                }
            </div>


            <Footer />
        </>
    );
}

export default Home;
