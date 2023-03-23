import classnames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab,
  tabId: string,
};

export const TabItem: FC<Props> = ({
  tab,
  tabId,
}) => {
  const { id, title } = tab;

  return (
    <>
      <li
        className={
          classnames({
            'is-active': tabId === id,
          })
        }
        data-cy="Tab"
      >
        <Link
          to={`../${id}`}
        >
          {title}
        </Link>
      </li>
    </>
  );
};
