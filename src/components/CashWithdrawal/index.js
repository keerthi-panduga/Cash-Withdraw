import {Component} from 'react'

import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state={balance:2000}

  deleAmount = value => {
   this.setState(pre=>({balance:pre.balance-value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance}=this.state

    return (
      <div className="main-container">
        <div className="card">
          <div className="fist-container">
            <button className="button-s">s</button>
            <h1 className="name">Saha Willimons</h1>
          </div>
          <div className="sec-container">
            <p className="third-heading">Your Balance</p>
            <p className="sec-heading">{balance}</p>
          </div>
          <div className="third-container">
            <p className="sec-heading">Withdraw</p>
            <p className="third-heading">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="list-container">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                buttonList={each}
                deleAmount={this.deleAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
