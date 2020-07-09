import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Board from '../board';
import Navbar from '../navbar';
import { connectedAppOperations } from './duck';
import { boardOperations } from '../board/duck';

const Container = styled.div`
    display: inline-flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .spacer {
        height: 10px;
    }
`;

const ConnectedApp = ({ fetchStats, resetBoard }) => {
    useEffect(() => {
        fetchStats();
    }, [fetchStats]);

    const handleNewGame = () => {
        resetBoard();
    }

    return (
        <Container>
            <Navbar />
            <Board />
            <div className="spacer" />
            <button onClick={handleNewGame}>New game</button>
        </Container>
    );
};

const mapDispatchToProps = (dispatch) => {
    const fetchStats = () => dispatch(connectedAppOperations.fetchStats());
    const resetBoard = () => dispatch(boardOperations.resetBoard());
    return {fetchStats, resetBoard};
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);
