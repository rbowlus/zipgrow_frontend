import React from 'react'
import { Switch, Route} from 'react-router-dom'
import { Home } from './Home'
import { AboutArduino } from './about/Arduino'
import { AboutHydroponics } from './about/Hydroponics'
import { SeedLibrary } from './grow/SeedLibrary'
import { NewGrow } from './grow/NewGrow'
import { GrowHistory } from './grow/GrowHistory'
import { Contact } from './Contact'
// import { NavbarNew } from '../components/NavbarNew'
import { Footer } from '../components/Footer'
import '../custom.css'
import { Navbar } from '../components/Navbar'

export const Main = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className="container">
                <Switch>
                    <Route exact path={'/'} render={() => <Home />} />
                    <Route exact path={'/about-arduino'} render={()  => <AboutArduino /> }/>
                    <Route exact path={'/about-hydroponics'} render={()  => <AboutHydroponics /> }/>
                    <Route exact path={'/seed-library'} render={()  => <SeedLibrary /> }/>
                    <Route exact path={'/new-grow'} render={()  => <NewGrow /> }/>
                    <Route exact path={'/grow-history'} render={()  => <GrowHistory /> }/>
                    <Route exact path={'/contact'} render={()  => <Contact /> }/>
                </Switch>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
