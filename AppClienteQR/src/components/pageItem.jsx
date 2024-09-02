import PropTypes from 'prop-types';

const PageItem = ({ value, handlerClick, className }) => (
  <li className={`page-item ${className}`} onClick={() => handlerClick(value)}>
    <a className="page-link fs-5" href="#">
      {value}
    </a>
  </li>
);

PageItem.propTypes = {
  value: PropTypes.node.isRequired,
  handlerClick: PropTypes.func,
  className: PropTypes.string,
};

PageItem.defaultProps = {
  className: "",
};

export default PageItem;