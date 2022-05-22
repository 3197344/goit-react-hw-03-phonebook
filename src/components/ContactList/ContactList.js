import PropTypes from 'prop-types';
import ContactsElementList from '../ContactsElementList/ContactsElementList';
import s from '../ContactList/ContactList.module.css';


function Contacts  ({ contacts, delContact }) {
    return (
        <ul className={s.section}>
            {contacts.map(({ name, number, id }) => 

                <ContactsElementList
                    key={id}
                    name={name}
                    number={number}
                    delContact={() => delContact(id)} />
            )}
        </ul>
    )
};
Contacts.propTypes = {
    contacts: PropTypes.arrayOf
        (PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        })
        ),
    delContact: PropTypes.func,
};

export default Contacts;