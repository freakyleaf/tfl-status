import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import buildPageTitle from '@utils/buildPageTitle';

import PageMain from '@components/PageMain';

function ViewAbout() {
  const location = useLocation();

  useEffect(() => {
    document.title = buildPageTitle('About');
  }, [ location ]);

  return (
    <div className="view view--about">
      <PageMain>
        <h1>About</h1>
        <p>An application that consumes the TfL API and displays network statuses and interactive route maps with a focus on clarity and accessibility.</p>
        <h2>Accessibility First</h2>
        <p>Both screen reader and keyboard users are considered first-class citizens, as are visually-impaired users; every attempt has been made to make the application as inclusive as possible.</p>
        <h2 className="mt-global">Data Sources</h2>
        <ul>
          <li>
            <a
              href="https://api.tfl.gov.uk/"
              rel="noreferrer"
              target="_blank"
            >
              TfL API
            </a> - statuses and basic map data.
          </li>
          <li>
            <a
              href="https://oysterfares.com/information-pages/interchanging-trains/osi-list/"
              rel="noreferrer"
              target="_blank"
            >
              Oyster Fares Central
            </a> - Out of Station Interchange (OSI) data.
          </li>
          <li>
            <a
              href="https://techforum.tfl.gov.uk/t/river-bus-observations/1847"
              rel="noreferrer"
              target="_blank"
            >
              This post by @briantist
            </a> - helped make sense of inconsistent and incorrect TfL River Bus data.
          </li>
        </ul>
      </PageMain>
    </div>
  );
}

export default ViewAbout;
