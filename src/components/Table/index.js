import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Sort from '../Sort';
import Button from '../Button';
import { withLoading } from '../Spinner';
import { SORTS } from '../../constants';
import './index.css';

const Table = ({ list, onDismiss }) => {
    const [sortKey, setSortKey] = useState('NONE');
    const [isSortReverse, setIsSortReverse] = useState(false);

    function onSort(sortKey) {
        setSortKey(sortKey);
        setIsSortReverse(prevSort => !prevSort);
    }

    const sortedList = isSortReverse
        ? SORTS[sortKey](list).reverse()
        : SORTS[sortKey](list);

    return (
        <div className="table">
            <div className="table-header">
                {Object.keys(SORTS).map(key => (
                    key !== 'NONE' &&
                    <span key={key}>
                        <Sort
                            sortKey={key}
                            onSort={onSort}
                            activeSortKey={sortKey}
                        >
                            {key}
                        </Sort>
                    </span>
                ))}
                <span>
                    Archive
                </span>
            </div>
            {sortedList.map(item =>
                <div
                    key={item.name}
                    className="table-row"
                >
                    <span className="col-sm">{item.date}</span>
                    <span className="col-sm">{item.countryCode}</span>
                    <span className="col-sm">{item.localName}</span>
                    <span className="col-sm">{item.name}</span>
                    <span className="col-sm">{item.launchYear ? item.launchYear : "N/A"}</span>
                    <span className="col-sm">{item.type}</span>
                    <span className="col-sm">{item.global ? "Yes" : "No"}</span>
                    <span>
                        <Button
                            onClick={() => onDismiss(item.name)}
                            className="button-inline">
                            Dismiss
                        </Button>
                    </span>
                </div>
            )}
        </div>
    );
}

Table.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.string.isRequired,
            localName: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired,
            launchYear: PropTypes.number,
            type: PropTypes.string.isRequired,
            global: PropTypes.bool.isRequired,
        })
    ).isRequired,
    onDismiss: PropTypes.func.isRequired,
};

export const TableWithLoading = withLoading(Table);

export default Table;
