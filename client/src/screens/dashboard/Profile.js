import React from 'react'
import { Form } from '../../components/dashboard/form/Form'
import { DashboardParent } from './DashboardParent'

const Profile = (props) => {
    const { id } = props.match.params;
    

    return (
        <DashboardParent title='Edit Profile' fromLink="Home" currentLink='Profile'>
            <Form userID={id && id}/>
       </DashboardParent>
    )
}

export default Profile
