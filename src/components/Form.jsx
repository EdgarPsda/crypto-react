import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import Error from "./Error"
import useSelectCurrency from "../hooks/useSelectCurrency"
import { currencies } from "../data/currency"

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Form = ({ setCurrencies }) => {

    const [cryptos, setCryptos] = useState([]);
    const [error, setError] = useState(false);


    const [currency, SelectCurrency] = useSelectCurrency('Select Currency', currencies);
    const [cryptoCurrency, SelectCryptoCurrency] = useSelectCurrency('Select Cryptocurrency', cryptos);

    useEffect(() => {
        const apiRequest = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
            const res = await fetch(url);
            const result = await res.json();

            const cryptoArray = result.Data.map(crypto => {
                const obj = {
                    id: crypto.CoinInfo.Name,
                    name: crypto.CoinInfo.FullName
                }

                return obj;
            });

            setCryptos(cryptoArray);

        }

        apiRequest();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        if ([currency, cryptoCurrency].includes('')) {
            setError(true);
            return
        }
        setError(false);
        setCurrencies({
            currency,
            cryptoCurrency
        });

    }



    return (
        <>
            {error && <Error>All fields are required.</Error>}
            <form onSubmit={handleSubmit}>
                <SelectCurrency></SelectCurrency>
                <SelectCryptoCurrency></SelectCryptoCurrency>
                <InputSubmit type="submit" value="Quote" />
            </form>
        </>
    )
}

export default Form