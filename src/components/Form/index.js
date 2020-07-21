import React from 'react';
import PropTypes from 'prop-types';
import { COUNTRIES, YEARS } from '../../constants';
import './index.css';

const Form = ({
    defaultYear,
    defaultCountry,
    onYearChange,
    onCountryChange,
    onSubmit,
    children
}) =>
    <form className="form-inline text-center" onSubmit={onSubmit}>
        <div className="form-group mb-2">
            <select
                name="select-year"
                className="form-control"
                defaultValue={defaultYear}
                onChange={onYearChange}
            >
                {YEARS.map(year =>
                    <option key={year}>
                        {year}
                    </option>)
                }
            </select>
        </div>
        <div className="form-group mx-sm-3 mb-2">
            <select
                name="select-country-code"
                className="form-control"
                defaultValue={defaultCountry}
                onChange={onCountryChange}
            >
                {Object.entries(COUNTRIES).map(entry =>
                    <option key={entry[1]}>
                        {entry[0]}
                    </option>)
                }
            </select>
        </div>
        <button className="btn btn-primary mb-2" type="submit">
            {children}
        </button>
    </form>

Form.propTypes = {
    defaultYear: PropTypes.number.isRequired,
    defaultCountry: PropTypes.string.isRequired,
    onYearChange: PropTypes.func.isRequired,
    onCountryChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Form;
