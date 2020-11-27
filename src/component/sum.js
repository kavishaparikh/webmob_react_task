import React, { Component } from 'react'
import '../css/sum.css'
export default class sum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sum: 0
        }
    }
    render() {
        var sum = 0
        return (
            <div>
                {
                    this.props.mainService.map((mainService) => {
                        var val = 0;

                        var subService = mainService.purchased_office_template.purchased_office_services;
                        subService.map((subservice) => {
                            val = val + parseFloat(subservice.price);
                        })

                        sum += val;
                        return <div className="sum">
                            <p>service {mainService.id}</p>
                            <p>kr {val}</p>
                            </div>

                    })

                }

                <div className="sum">
                    <p> Total </p>
                    <p>kr {sum} /-</p>

                </div>
            </div>
        )
    }
}
