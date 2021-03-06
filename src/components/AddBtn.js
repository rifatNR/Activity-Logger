import React from 'react'

const AddBtn = () => {
    return (
        <div className="fixed-action-btn">
            <a href="#add-log-modal" className="btn-floating btn-large red modal-trigger"> <i className="large material-icons">add</i> </a>
            <ul>
                <li><a href="#peoples-list-modal" className="btn-floating blue modal-trigger"><i className="material-icons">person</i></a></li>
                <li><a href="#add-people-modal" className="btn-floating green darken-1 modal-trigger"><i className="material-icons">person_add</i></a></li>
            </ul>
        </div>
    )
}

export default AddBtn
