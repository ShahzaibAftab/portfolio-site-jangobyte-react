import React from 'react'
import Header from './Header.jsx'
import Main from './Main.jsx'
import Numbers from './Numbers.jsx'
import Deliver from './Deliver';
import Perks from './Perks.jsx';
import Footer from './Footer.jsx';
const HomePage = () => {
    return (
        <div>
            <Header />
            <Main />
            <Numbers />
            <Deliver />
            <Perks />
            <Footer />
        </div>
    )
}

export default HomePage
