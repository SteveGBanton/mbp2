import React from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { monthDayYearAtTime } from '@cleverbeagle/dates';
import Clipboard from 'clipboard';
import matchSorter from 'match-sorter';

import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';

import 'react-table/react-table.css';
import ReactTable from 'react-table';

import ShortLinks from '../../../../../api/ShortLinks/ShortLinks';
import Clicks from '../../../../../api/Clicks/Clicks';
import NotFound from '../../../../components/NotFound/NotFound.jsx';
import Loading from '../../../../components/Loading/Loading';
import './ViewLinkStats.scss';

const handleRemove = (_id, history) => {
  Meteor.call('link.remove', { _id }, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      Bert.alert('Link deleted!', 'success');
      history.push('/links');
    }
  });
};

const renderDocument = (doc, match, history, user, clicks) => (
  (doc)
    ? (
      <div className="view-shortlink">
        {(() => { const clipboard = new Clipboard('.copy-btn'); })()}
        <div
          className="sm-label"
          style={{
            margin: '20px 0 15px 20px',
          }}
        >
          Link Created {monthDayYearAtTime(doc.createdAt)}
        </div>
        <div className="view-shortlink-box-container">
          <div className="view-shortlink-boxes view-shortlink-box1">
            <h3>ShortLink URL</h3>
            <div className="center-box sm-label">
              <div
                className="copy-btn pointer"
                onClick={() => Bert.alert('Link Copied!', 'success')}
                role="button"
                tabIndex={0}
                onKeyPress={() => Bert.alert('Link Copied!', 'success')}
                data-clipboard-text={(doc && doc.shortLink) ? `${Meteor.absoluteUrl()}${doc.shortLink}` : ''}
              >
                <span style={{ fontSize: 13 }}>
                  {(doc && doc.shortLink) ? `${Meteor.absoluteUrl()}${doc.shortLink}` : ''}
                </span>
                <FontIcon
                  className="material-icons"
                  style={{ color: '#559', marginLeft: 5, fontSize: 12 }}
                >
                  content_copy
                </FontIcon>
              </div>
            </div>
          </div>
          <div className="view-shortlink-boxes view-shortlink-box1">
            <h3>Target URL</h3>
            <div className="center-box sm-label">
              <a href={doc.url} target="_blank">{doc && doc.url}</a>
            </div>
          </div>
          <div className="view-shortlink-boxes view-shortlink-box1">
            <h3>Total Clicks</h3>
            <div className="lg-label center-box">{doc && doc.clicks}</div>
          </div>
          <div className="view-shortlink-boxes view-shortlink-box1">
            <h3>Delete</h3>
            <div className="center-box">
              <RaisedButton
                onClick={() => handleRemove(doc._id, history)}
                backgroundColor="lightcoral"
                labelColor="#FFF"
                label="Delete Link"
              />
            </div>
          </div>
        </div>
        <h3
          style={{
            marginTop: 30,
            marginLeft: 20,
            marginBottom: -10,
          }}
        >
          Click Log Last 30 Days
        </h3>
        <div className="view-shortlink-click-table">
          <ReactTable
            data={clicks}
            columns={[
              {
                columns: [
                  {
                    Header: 'Date Clicked',
                    id: 'dateClicked',
                    filterAll: true,
                    maxWidth: 200,
                    minWidth: 100,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["dateClicked"] }),
                    accessor: (d => (
                      (d.dateClicked)
                        ? monthDayYearAtTime(d.dateClicked)
                        : '')),
                    Cell: row => (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%',
                          height: '100%',
                          fontSize: 10,
                        }}
                      >
                        {row.value}
                      </div>
                    ),
                  },
                  {
                    Header: 'IP Address',
                    id: 'ipAddress',
                    accessor: 'ipAddress',
                    filterAll: true,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["ipAddress"] }),
                    maxWidth: 200,
                    minWidth: 100,
                    Cell: row => (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%',
                          height: '100%',
                        }}
                      >
                        {row.value}
                      </div>
                    ),
                  },
                  {
                    Header: 'Device Type',
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["deviceType"] }),
                    accessor: 'deviceType',
                    filterAll: true,
                    minWidth: 200,
                    Cell: row => (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          width: '100%',
                          height: '100%',
                          fontSize: 12,
                        }}
                      >
                        {row.value}
                      </div>
                    ),
                  },
                ],
              },
            ]}
            filterable
            defaultSorted={[
              {
                id: 'createdAt',
                desc: true,
              },
            ]}
            defaultPageSize={10}
            noDataText="No clicks recorded"
            className="-highlight"
          />
        </div>

      </div>
    )
    : <NotFound />
);

export const ViewLinkStats = ({
  loading,
  doc,
  match,
  history,
  user,
  clicks,
}) => (
  !loading ? renderDocument(doc, match, history, user, clicks) : <Loading />
);

ViewLinkStats.defaultProps = {
  clicks: [],
  doc: {},
  user: null,
};

ViewLinkStats.propTypes = {
  loading: PropTypes.bool.isRequired,
  doc: PropTypes.shape({}),
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({}),
  clicks: PropTypes.arrayOf(PropTypes.shape({})),
};

export default createContainer(({ match }) => {
  const { shortLink } = match.params;
  const subscription = Meteor.subscribe('shortLinks.view', shortLink);
  const doc = ShortLinks.findOne({ shortLink });
  const linkId = (doc) ? doc._id : 'noid';

  /*
   *  Arguments to publication are linkId, dateFrom, dateTo.
   *  When not specified, dateFrom = 30 days ago, dateTo = Today.
   */
  Meteor.subscribe('clicks.oneLinkList', linkId, null, null);

  const clicks = Clicks.find({
    linkId,
    dateClicked: { $gte: (new Date("2017-12-14").toISOString()) },
  }).fetch();

  return {
    loading: !subscription.ready(),
    doc,
    clicks,
  };
}, ViewLinkStats);
