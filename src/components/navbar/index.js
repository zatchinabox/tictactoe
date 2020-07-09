import React from "react";
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    background-color: #485575;
    position: fixed;
    display: flex;
    color: white;
    top: 0;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    @media (max-width: 768px) {
        justify-content: center;
    }
    .title {
        font-size: 1.6em;
        @media (max-width: 768px) {
            display: none;
        }
    }
    .stats-container {
        display: flex;
        @media (max-width: 768px) {
            font-size: 0.7em;
        }
    }
    .spacer {
        width: 20px;
    }
`;

const Navbar = ({stats}) => {
    return (
        <Container>
            <div className="title">Tic Tac Toe</div>
            <div className="stats-container">
                <span>Player 1 wins: {stats.player1Wins}</span>
                <div className="spacer" />
                <span>Player 2 wins: {stats.player2Wins}</span>
                <div className="spacer" />
                <span>Draws: {stats.draws}</span>
            </div>
        </Container>
    );
};

const mapStateToProps = (state) => {
    const stats = state.connectedApp.stats;
    return { stats };
};

export default connect(mapStateToProps, null)(Navbar);