import React from 'react';
import styled, { css } from 'styled-components';
import { refineNum } from 'helpers/calculation/calculator';
import { Link } from 'react-router-dom';

const AssetTableItemBlock = styled.article`
    height: 4rem;
`;

const AssetTableItemLink = styled(Link)`
    /* space indicate purpose */
    border: 1px dashed red;

    padding: 1rem 1rem;
    margin: 1rem auto;
    display: flex;
    justify-content: space-evenly;

    background: var(--brightest-white);

    .testText { color: var(--navy); }
    .coin-img { height: 40px; }
`;

const AssetTableItem = ({ assetObj, gbpRate, dailyTotal }) => {

    const amount = assetObj['amount'];
    const currentPrice = parseFloat(refineNum(assetObj['currentValue'], gbpRate));
    const currentTotal = parseFloat(assetObj['currentTotal']);
    const openPrice = parseFloat(refineNum(assetObj['openValue'], gbpRate));
    const openTotal = parseFloat(assetObj['openTotal']);

    // percentages
    const dailyPercentage = (((currentPrice / openPrice) - 1) * 100).toFixed(2);
    const refinedDailyPer = Math.round(dailyPercentage * 100) / 100;
    const volPerToTotal =  ((currentTotal / dailyTotal) * 100).toFixed(2);
    
    return (
        <AssetTableItemBlock >
            <AssetTableItemLink to={`/chart/@${assetObj.product_id}`}>
                {assetObj !== null ? 
                <>
                    <img className="coin-img" src={`/images/${assetObj.name}.svg`} />
                    <div className="testText">{assetObj.fullname}</div>
                    <div className="testText">{assetObj.name}</div>
                    <div className="testText">{amount}</div>
                    <div className="testText">{currentPrice}</div>
                    <div className="testText">{currentTotal}</div>
                    <div className="testText">{refinedDailyPer} %</div>
                    <div className="testText">{volPerToTotal} %</div>

                    {/* <div className="testText">{dailyVol}</div> */}
                </>
                :
                <></>
                }
            </AssetTableItemLink>
        </AssetTableItemBlock>
    )
}

export default AssetTableItem;