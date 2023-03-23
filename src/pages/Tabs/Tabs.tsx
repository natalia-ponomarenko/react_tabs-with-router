import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TabItem } from '../../components/TabItem';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs:FC = () => {
  const { tabId = '' } = useParams();

  const selectedContent
  = tabs.find((tab) => tab.id === tabId)?.content || <p>Please select a tab</p>;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div>
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => (
              <TabItem
                tab={tab}
                key={tab.id}
                tabId={tabId}
              />
            ))}
          </ul>
        </div>
        <div
          className="block"
          data-cy="TabContent"
        >
          {selectedContent}
        </div>
      </div>
    </>
  );
};
