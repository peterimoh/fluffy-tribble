import React from 'react'
import Nav from '../../components/dashboard/nav/Nav'
import Sidebar from '../../components/dashboard/sidebar/Sidebar'
import Counter from '../../components/dashboard/counter/Counter'

const Dashboard = () => {
    return (
        <React.Fragment>
            <Nav />
            <Sidebar />
            <Counter/>
       </React.Fragment>
    )
}

export default Dashboard
