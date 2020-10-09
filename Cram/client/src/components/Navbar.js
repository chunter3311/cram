import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { logout } from '../store/session';
import styles from '../styles/navbar.module.css';
import { setSelectedDeck } from '../store/session';


function Navbar({ history }) {
    const dispatch = useDispatch();
    // const decks = useSelector(state => state.entities.decks);

    const handleLogout = async (e) => {
        e.preventDefault();
        const res = await dispatch(logout());
        if (res.ok) {
            history.replace("/login")
        }
        return;
    }

    // const handleSelect = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.value)
    //     dispatch(setSelectedDeck(Number(e.target.value)))
    //     history.replace('/notes');
    //     return;
    // }

    const users = useSelector(state => state.entities.users);
    const getUsername = Object.values(users).map(user => {
        return user.username;
    })

    // const select_decks = Object.values(decks).map(ele => {
    //     return (
    //         <li key={ele.id}>
    //             <button value={ele.id} onClick={handleSelect}>{ele.title}</button>
    //         </li>
    //     )
    // });

    return (
        <nav className={styles.sidebar_nav}>
            <div className={styles.usernameWrapper}>
                <div className={styles.usernameLabel}>
                    <span className={styles.usernameLabelIcon}>☻</span> {getUsername}
                </div>
                <div className={styles.logoutLabel}>
                    <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
                </div>
            </div>
            <hr />
            <ul className={styles.navlinks}>
                <li><NavLink to="/decks" activeclass="active">My Decks</NavLink></li>
                {/* {select_decks} */}
            </ul>
            <ul className={styles.extra_navlinks}>
                <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
            </ul>
        </nav>
    );
}
export default withRouter(Navbar);