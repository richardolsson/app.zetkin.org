import { FC } from 'react';
import { FlagOutlined } from '@mui/icons-material';
import { Box, Divider, Typography } from '@mui/material';

import CallAssignmentOverviewListItem from './items/CallAssignmentOverviewListItem';
import EventClusterOverviewListItem from './items/EventClusterOverviewListItem';
import isEventCluster from 'features/campaigns/utils/isEventCluster';
import messageIds from 'features/campaigns/l10n/messageIds';
import SurveyOverviewListItem from './items/SurveyOverviewListItem';
import TaskOverviewListItem from './items/TaskOverviewListItem';
import useClusteredActivities from 'features/campaigns/hooks/useClusteredActivities';
import ZUICard from 'zui/ZUICard';
import ZUIEmptyState from 'zui/ZUIEmptyState';
import {
  ACTIVITIES,
  CampaignActivity,
} from 'features/campaigns/models/CampaignActivitiesModel';
import { Msg, useMessages } from 'core/i18n';

type OverviewListProps = {
  activities: CampaignActivity[];
  focusDate: Date | null;
  header: string;
};

const ActivitiesOverviewCard: FC<OverviewListProps> = ({
  activities,
  focusDate,
  header,
}) => {
  const messages = useMessages(messageIds);
  const clustered = useClusteredActivities(activities);
  const truncActivities = clustered.slice(0, 6);
  const numExtra = clustered.length - truncActivities.length;

  return (
    <ZUICard header={header}>
      {clustered.length === 0 && (
        <ZUIEmptyState
          message={messages.activitiesOverview.empty()}
          renderIcon={(props) => <FlagOutlined {...props} />}
        />
      )}
      {truncActivities.map((activity, index) => {
        if (activity.kind === ACTIVITIES.CALL_ASSIGNMENT) {
          return (
            <Box key={`ca-${activity.data.id}`}>
              {index > 0 && <Divider />}
              <CallAssignmentOverviewListItem
                activity={activity}
                focusDate={focusDate}
              />
            </Box>
          );
        } else if (isEventCluster(activity)) {
          return (
            <Box key={`cluster-${activity.events[0].id}`}>
              {index > 0 && <Divider />}
              <EventClusterOverviewListItem
                cluster={activity}
                focusDate={focusDate}
              />
            </Box>
          );
        } else if (activity.kind === ACTIVITIES.SURVEY) {
          return (
            <Box key={`survey-${activity.data.id}`}>
              {index > 0 && <Divider />}
              <SurveyOverviewListItem
                activity={activity}
                focusDate={focusDate}
              />
            </Box>
          );
        } else if (activity.kind === ACTIVITIES.TASK) {
          return (
            <Box key={`task-${activity.data.id}`}>
              {index > 0 && <Divider />}
              <TaskOverviewListItem activity={activity} focusDate={focusDate} />
            </Box>
          );
        }
      })}
      {numExtra > 0 && (
        <Box textAlign="center">
          <Typography>
            <Msg
              id={messageIds.activitiesOverview.extraActivities}
              values={{ numExtra }}
            />
          </Typography>
        </Box>
      )}
    </ZUICard>
  );
};

export default ActivitiesOverviewCard;
