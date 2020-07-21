import React from 'react';

const Spinner = () => (
    <div className="interactions">
        <i className="fa-2x fa fa-spinner fa-spin"></i>
    </div>
);

export const withLoading = Component => ({ isLoading, ...rest }) =>
    isLoading
        ? <Spinner />
        : <Component {...rest} />

export default Spinner;
