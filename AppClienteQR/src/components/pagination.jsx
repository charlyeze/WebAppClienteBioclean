import PropTypes from 'prop-types';
import PageItem from './pageItem';

const Pagination = ({
  selectPage,
  totalPages,
  page,
  prevPage,
  nextPage,
}) => {
  const handlerClick = (page) => selectPage(page);
  const firstPage = () => (totalPages > 1 && prevPage) && selectPage(0);
  const endPage = () => (totalPages > 1 && nextPage) && selectPage(totalPages);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <PageItem value="Primera" handlerClick={firstPage} className={!prevPage ? 'disabled' : ''} />

        {prevPage !== null && prevPage >= 0 && (
          <PageItem value={prevPage} handlerClick={handlerClick} />
        )}

        <PageItem value={page} className="active" />

        {nextPage && <PageItem value={nextPage} handlerClick={handlerClick} />}

        <PageItem value="Última" handlerClick={endPage} className={!nextPage ? 'disabled' : ''}/>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  selectPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  prevPage: PropTypes.number,
  nextPage: PropTypes.number,
};

Pagination.defaultProps = {
  prevPage: null,
  nextPage: null,
};

export default Pagination;