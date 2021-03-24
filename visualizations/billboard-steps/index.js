import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, HeadingText, NrqlQuery, Spinner, PlatformStateContext, AutoSizer, BillboardChart } from 'nr1';

export default class BillboardStepsVisualization extends React.Component {
  // Custom props you wish to be configurable in the UI must also be defined in
  // the nr1.json file for the visualization. See docs for more details.
  static propTypes = {
    nrqlQueries: PropTypes.arrayOf(
      PropTypes.shape({
        accountId: PropTypes.number,
        query: PropTypes.string,
      })
    ),

    filters: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        filter: PropTypes.string
      })
    ),
  };

  render() {
    const { nrqlQueries, filters } = this.props;

    const nrqlQueryPropsAvailable =
      nrqlQueries &&
      nrqlQueries[0] &&
      nrqlQueries[0].accountId &&
      nrqlQueries[0].query;

    if (!nrqlQueryPropsAvailable) {
      return <EmptyState />;
    }

    const slicesize = ((100 / filters.length)) + "%";
    // correct any nulls 
    for (var i = 0; i < filters.length; i++) {
      if (filters[i].filter == null) {
        filters[i].filter = " ";
      }
      if (filters[i].title == null) {
        filters[i].title = " ";
      }
    }

    return (
      <PlatformStateContext.Consumer>
        {({ timeRange }) => (
          <AutoSizer>
            {({ width, height }) => (

              <div
                className="container"
                style={{ height, width }}
              >
                {
                  filters.map((d, i) => {
                    const sinceClause = (timeRange) ? `SINCE ${(timeRange.begin_time) ? timeRange.begin_time / 60000 : timeRange.duration / 60000} minutes ago` : '',
                      untilClause = (timeRange) ? (timeRange.end_time) ? `UNTIL ${timeRange.end_time / 60000} minutes ago` : '' : '';

                      console.log("since: " + sinceClause);
                      console.log("until: " + untilClause);
                    return (

                      <div
                        key={i}
                        className={"block"}
                        style={{ height: slicesize }}
                      >
                        <div className="header" style={{ fontSize: (height/filters.length)*.10  + "px" }}>{d.title}</div>
                        <div className="billboard-guts">

                          <BillboardChart
                            fullWidth fullHeight
                            query={`${nrqlQueries[0].query} ${(d.filter) ? d.filter : ''} ${sinceClause} ${untilClause}`}
                            accountId={nrqlQueries[0].accountId}
                          />
                        </div>
                        <div className="footer"></div>
                      </div>
                    );
                  })
                }
              </div>
            )}
          </AutoSizer>
        )}
      </PlatformStateContext.Consumer>
    );
  }
}

const EmptyState = () => (
  <Card className="EmptyState">
    <CardBody className="EmptyState-cardBody">
      <HeadingText
        spacingType={[HeadingText.SPACING_TYPE.LARGE]}
        type={HeadingText.TYPE.HEADING_3}
      >
        Please provide at least one NRQL query(without a SINCE/UNTIL) & account ID pair
      </HeadingText>
      <HeadingText
        spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
        type={HeadingText.TYPE.HEADING_4}
      >
        An example NRQL query you can try is(note: no time period in query)
      </HeadingText>
      <code>SELECT count(*) FROM Transaction</code>
    </CardBody>
  </Card>
);

const ErrorState = () => (
  <Card className="ErrorState">
    <CardBody className="ErrorState-cardBody">
      <HeadingText
        className="ErrorState-headingText"
        spacingType={[HeadingText.SPACING_TYPE.LARGE]}
        type={HeadingText.TYPE.HEADING_3}
      >
        Oops! Something went wrong.
      </HeadingText>
    </CardBody>
  </Card>
);
