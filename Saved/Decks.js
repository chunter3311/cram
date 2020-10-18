import React, { useState, useEffect } from "react"
import '../styles/index.css';
import styles from '../styles/notebook.module.css';
import { toggleCreateNotebookModal } from '../store/ui'
import { useDispatch, useSelector } from 'react-redux';
import NewNotebookModal from './NewNotebookModal';


function Notebooks(props) {
    const dispatch = useDispatch();
    const createNotebook = useSelector(state => state.ui.createNotebook)
    
    const [title, setTitle] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        setErrors([]);
    }, [title]);

    const CreateNotebookModal = (e) => {
        e.preventDefault()
        dispatch(toggleCreateNotebookModal());
    }

    return (
        <main className={styles.notebooks_container}>
            {createNotebook ? <NewNotebookModal CreateNotebookModal={CreateNotebookModal}/> : ""}
            <h1>Notebooks</h1>
            <div className={styles.notebooks_title_bar}>
                <div className={styles.notebooks_title}>
                    <h2>My notebook list</h2>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.newNotebook} onClick={CreateNotebookModal}>
                        <svg style={{ width: "24px", height: "24px" }} fill="none" xmlns="http://www.w3.org/2000/svg" className="_3rHKgsdA1qX-_9ks50GGiT"><path d="M5.955 4.5H8.03v15H5.955v-15z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M9.281 19.5v-15h7.09c.921 0 1.667.746 1.667 1.666v7.294h-.025a4.583 4.583 0 00-4.346 6.04H9.28zm5.88-9.167a.75.75 0 000-1.5h-3a.75.75 0 000 1.5h3z" fill="currentColor"></path><path d="M18.638 15.549a.625.625 0 10-1.25 0v1.904h-1.846a.625.625 0 100 1.25h1.846v1.846a.625.625 0 001.25 0v-1.846h1.904a.625.625 0 100-1.25h-1.904v-1.904z" fill="currentColor"></path></svg>
                        New Notebook
                    </button>
                </div>
            </div>
        </main>
    );
}
export default Notebooks;