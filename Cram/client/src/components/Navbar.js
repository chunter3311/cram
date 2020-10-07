import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { logout } from '../store/session';
import styles from '../styles/navbar.module.css';


function Navbar({ history }) {
    const dispatch = useDispatch();
    const handleLogout = async (e) => {
        e.preventDefault();
        const res = await dispatch(logout());
        // await dispatch(toggleUserModal());
        if (res.ok) {
            history.replace("/login")
        }
        return;
    }

    const users = useSelector(state => state.entities.users);
    const getUsername = Object.values(users).map(user => {
        return user.username;
    })

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
            <ul className={styles.extra_navlinks}>
                <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
            </ul>
        </nav>
    );
}
export default withRouter(Navbar);