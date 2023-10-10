import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

function TopBar() {
    return (
        <div>
            <MDBNavbar light bgColor='' style={{background:'#1c2238'}}>
                <MDBContainer fluid>
                    <MDBNavbarBrand tag="span" className='mb-0 h1 text-light'>QUOTE GENERATOR</MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default TopBar