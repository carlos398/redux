const deposit = () => {
    return{
        type: 'DEPOSIT',
        payload: 10
    }
}

const descount = () => {
    return{
        type: 'DESCOUNT',
        payload: 10
    }
}

export {deposit, descount}