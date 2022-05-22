import React from "react";
import PropTypes from 'prop-types';
import s from "../ContactsElementList/ContactsElementList.module.css"

function ContactsElementList( {name, number, delContact} ) {
    return (        
        <li className={s.section_item }>
            <span className={s.name}>{name}:</span>
            {number}
            <button
                onClick={delContact}
                className={s.section_btn}>Delete</button>
        </li>
            )
    
};
ContactsElementList.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    delContact: PropTypes.func
};

export default ContactsElementList;