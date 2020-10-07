import React, { useEffect } from 'react';
import MainContent from './MainContent';
import Navbar from './Navbar';
import { connect, useDispatch } from 'react-redux';
import { setUserInfo } from '../store/users';

function Home({ userId }) {
    const dispatch = useDispatch();

    useEffect(() => {
        const getUserInfo = async () => {
            await dispatch(setUserInfo(userId));
        }
        getUserInfo();
    }, [dispatch, userId]);

    return (
        <>
            <div style={{ display: "flex", height: "100vh" }}>
                <Navbar />
                <MainContent />
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        userId: state.session.user_id
    }
};

export default connect(mapStateToProps)(Home);