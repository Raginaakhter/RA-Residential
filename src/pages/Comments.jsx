import React from 'react';
import moment from 'moment';

const Comments = () => {
    return (
        <div>
            {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
    );
};

export default Comments;
