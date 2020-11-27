import React, { Component } from 'react'
import '../css/purchasedService.css'
import Service from './service'
import { getData } from '../api/apiConfig'
import Sum from './sum'

export default class extends Component {
    constructor() {
        super()
        let response = getData("https://jsonkeeper.com/b/356L")
               this.state = {
            purchased: response.data.purchased_services
        }

    }


    render() {
        return (
            <div className="purchase">
                PURCHASED SERVICES<br />
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                {
                    this.state.purchased.map((mainService) => {
                        return <Service mainService={mainService} />;
                    })
                }
                <Sum mainService={this.state.purchased} />
            </div>
        )
    }
}
