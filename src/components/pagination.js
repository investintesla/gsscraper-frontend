import React from 'react';
import styles from '../styles/Pagination.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/fontawesome-free-solid';

function Pagination({ currentPage, totalPageCount, onPageChange }) {
    const canGoBack = currentPage > 1;
    const canGoForward = currentPage < totalPageCount;

    const maxPages = 3;

    let startPage = currentPage - Math.floor(maxPages / 2);
    if (startPage < 1) {
        startPage = 1;
    }

    let endPage = startPage + maxPages - 1;
    if (endPage > totalPageCount) {
        endPage = totalPageCount;
        startPage = Math.max(1, endPage - maxPages + 1);
    }

    const pagesToShow = [];

    for (let i = startPage; i <= endPage; i++) {
        pagesToShow.push(i);
    }

    return (
        <div className={styles.pagination}>
            <button onClick={() => onPageChange(currentPage - 1)} disabled={!canGoBack}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>

            {pagesToShow.map((page) => (
                <button
                    key={page}
                    className={page === currentPage ? styles.activePage : ''}
                    onClick={() => onPageChange(page)} // Added this onClick handler
                >
                    {page}
                </button>
            ))}

            <button
                className=''
            >
                ...
            </button>

            <button
                key={totalPageCount}
                className={totalPageCount === currentPage ? styles.lastPage : ''}
                onClick={() => onPageChange(totalPageCount)} // Added this onClick handler
            >
                {totalPageCount}
            </button>

            <button onClick={() => onPageChange(currentPage + 1)} disabled={!canGoForward}>
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </div>
    );
}

export default Pagination;
