import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './index.css';

const Sort = ({
    sortKey,
    activeSortKey,
    onSort,
    children
}) => {
    const sortClass = ['button-inline']; //'fa fa-sort'

    if (sortKey === activeSortKey) {
        sortClass.push('button-active');
    }

    return (
        <Button
            onClick={() => onSort(sortKey)}
            className={sortClass.join(' ')}
        >
            {' '}
            {children}
        </Button>
    );
}

Sort.propTypes = {
    sortKey: PropTypes.string.isRequired,
    activeSortKey: PropTypes.string.isRequired,
    onSort: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Sort;
