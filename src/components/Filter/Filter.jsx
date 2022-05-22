import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ value, onChange }) {
    return (
        <div className={s.section}>
            <label className={s.section_label}
                    htmlFor="findInputId">Find contacts by name</label>
                <input className={s.section_input}
                    type="text"
                    name="filter"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Search by name"
                    value={value}
                    onChange={onChange}
                    required
                /> 
            </div>
    )
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange:PropTypes.func
}

export default Filter;

