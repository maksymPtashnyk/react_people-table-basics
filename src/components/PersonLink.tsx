import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Person } from '../types';

type Props = {
  person: Person,
};

export const PersonLink: React.FC<Props> = ({ person }) => {
  return (
    <Link
      to={`/people/${person?.slug}`}
      className={classNames({
        'has-text-danger': person && person.sex === 'f',
      })}
    >
      {person.name}
    </Link>
  );
};