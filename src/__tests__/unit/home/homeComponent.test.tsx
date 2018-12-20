import * as React from 'react';
import { Router } from 'react-router-dom';
import { render } from 'react-testing-library';
import HomeComponent from '../../../components/Home/homeComponent';
  
import createBrowserHistory from 'history/createBrowserHistory';

test('Renders the <IncomeStatsPeriodical/> component', () => {
    // We must simulate a browser history for our component
    // as it is reliant on the context 
    const history = createBrowserHistory({
        basename: '/'
    })

    const {
        getByTestId,
        unmount,
    } = render(
        <Router history={history}>
            <HomeComponent />
        </Router>
    );

    const IncomeStatsPeriodical:any = getByTestId('income-stats-card-periodical');
    expect(IncomeStatsPeriodical).toBeInstanceOf(HTMLElement);

    unmount();
})