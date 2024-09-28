import styled from "@emotion/styled"

const Result = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Image = styled.img`
    display: block;
    width: 120px;
`

const Text = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`

const Price = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`

// eslint-disable-next-line react/prop-types
const Results = ({ result }) => {

    // eslint-disable-next-line react/prop-types
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result;

    return (
        <Result>
            <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="crypto image" />
            <div>
                <Price>The price is: <span>{PRICE}</span></Price>
                <Text>Highest price: <span>{HIGHDAY}</span></Text>
                <Text>Lowest price: <span>{LOWDAY}</span></Text>
                <Text>Variation: <span>{CHANGEPCT24HOUR}</span></Text>
                <Text>Last Update: <span>{LASTUPDATE}</span></Text>

            </div>
        </Result>
    )
}

export default Results