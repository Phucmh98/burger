import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Burger.css'

class BugerList extends Component {
    renderBurgerList = () => {
        const { buger } = this.props;
        const burgerElements = [];
        let countIndex = 99999;

        for (let key in buger) {
            if (buger[key]) {
                burgerElements.push(
                    <div className="burger-element" key={key} style={{ zIndex: countIndex }}>
                        {buger[key].hinhDang}
                    </div>
                );
                countIndex -= 1;
            }
        }

        return burgerElements;
    }
    render() {

        return (
            <div>
                <div className="burger">
                    <div className="bread-top">
                        <div className='bread-top-effect'>

                        </div>
                    </div>
                    {this.renderBurgerList()}


                    <div className="bread-bottom">
                        <div className="bread-bottom-effect"></div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        buger: state.BaiTapBuger.buger
    }
}

export default connect(mapStateToProps)(BugerList)