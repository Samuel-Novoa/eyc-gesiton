import React from 'react'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

const Main = ({ children }) => {
    return (
        <>
            <NavigationBar />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Main