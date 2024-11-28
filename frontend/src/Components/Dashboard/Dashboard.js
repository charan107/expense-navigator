import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { rupee } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const { totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses, user } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>Welcome, {user ? user.username : 'Guest'}</h1> {/* Display username */}
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {rupee} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {rupee} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    {rupee} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title">Min <span>Salary</span>Max</h2>
                        <div className="salary-item">
                            <p>
                            ₹{Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                            ₹{Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p>
                            ₹{Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                            ₹{Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    .stats-con {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;

        .chart-con {
            grid-column: 1 / 4;
            height: 400px;

            .amount-con {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;

                .income, .expense {
                    grid-column: span 2;
                }

                .income, .expense, .balance {
                    background: #FFFAF1; /* Soft cream */
                    border: 2px solid #E2E2E2;
                    box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.1);
                    border-radius: 15px;
                    padding: 2rem;
                    transition: all 0.3s ease-in-out;
                    overflow: hidden;

                    p {
                        font-size: 3.5rem;
                        font-weight: 700;
                        color: #2D4C8E; /* Deep blue */
                        margin: 0;
                    }

                    &:hover {
                        transform: translateY(-5px); /* Slightly lift the card */
                        box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.15); /* Enhanced shadow */
                        background-color: #FFEFDC; /* Lighter cream on hover */
                        cursor: pointer;
                    }
                }

                .balance {
                    grid-column: 2 / 4;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    gap: 1rem;
                    min-width: 350px;
                    height: 150px;
                    
                    p {
                        color: #2ECC71; /* Emerald Green */
                        font-size: 4.5rem;
                        font-weight: 700;
                        opacity: 0.9;
                        margin: 0;
                        word-wrap: break-word;
                        text-align: center;
                    }

                    &:hover {
                        transform: translateY(-5px); /* Slightly lift the balance card */
                        box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.15); /* Enhanced shadow */
                        background-color: #D1F5D4; /* Light green on hover */
                        cursor: pointer;
                    }
                }
            }
        }

        .history-con {
            grid-column: 4 / -1;

            h2 {
                margin: 1.5rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 1.8rem;
                color: #2D4C8E;
                font-weight: 700;
                transition: color 0.3s ease;

                &:hover {
                    color: #FF7043; /* Warm Coral */
                }
            }

            .salary-title {
                font-size: 1.4rem;
                color: #FF7043; /* Warm Coral color for titles */
                font-weight: 600;

                span {
                    font-size: 1.8rem;
                    color: #FF7043;
                    font-weight: 700;
                }
            }

            .salary-item {
                background: #FFFAF1;
                border: 2px solid #F1F1F1;
                box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
                padding: 1.5rem;
                border-radius: 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.5rem;
                transition: all 0.3s ease-in-out;

                &:hover {
                    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
                    transform: translateY(-4px);
                    background-color: #FFEFDC; /* Lighter cream on hover */
                    cursor: pointer;
                }

                p {
                    font-weight: 600;
                    font-size: 1.6rem;
                    color: #333333;
                    margin: 0;
                }
            }
        }
    }
`;

export default Dashboard;

