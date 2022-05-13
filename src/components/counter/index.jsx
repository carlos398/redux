import React from 'react'
import {deposit, descount} from '../store/amount/action'

import {selectCurrentAmount} from '../store/amount/reducer'
import {connect} from 'react-redux'

const mapStateToProp = (state) => {
  return {
    amount: selectCurrentAmount(state)
  };
};

const Counter = ({amount, deposit, descount}) => {
  return (
    <div>
        <h1>{amount}</h1>
        <button onClick={()=> deposit()}>increase 10</button>
        <button onClick={()=> descount()}>decrease -10</button>

    </div>
  )
}

export default connect(mapStateToProp, {deposit, descount})(Counter)