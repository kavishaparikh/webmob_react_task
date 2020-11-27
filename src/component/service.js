import React, { Component } from 'react'
import '../css/service.css'

export default class service extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mainservice: props.mainService.name,
            subservice: props.mainService.purchased_office_template.purchased_office_services,
        }
    }
    render() {

        return (
            <div>
                <h4>{this.state.mainservice}</h4>
                {
                    this.state.subservice.map((subservices) => {
                        return <div className="service">
                            <img src={subservices.image} alt="image1" style={{ paddingRight: 5, float: "left", height: 95, width: 95, borderRadius: 5 }} />
                            <div>
                                <div className="servicehead">
                                    <p>{subservices.name}</p>
                                    <p>kr {subservices.price}</p>
                                </div>
                                <div className="">
                                    {subservices.description}
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
        )
    }
}
