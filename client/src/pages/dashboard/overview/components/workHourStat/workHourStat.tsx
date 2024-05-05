import React from "react";
import "./style.scss";
import {  IconClock } from "@tabler/icons-react";
import {
  ThemeIcon,
  Progress,
  Text,
  Group,
  Badge,
  Paper
} from "@mantine/core";

export const WorkHourStat = () => {
  return (
    <Paper radius="md" withBorder className={"card w-[300px]"}>
      <ThemeIcon className={"icon"} size={60} radius={60}>
        <IconClock
          style={{ width: '32px', height: '32px' }}
          stroke={1.5}
        />
      </ThemeIcon>

      <h2  className={"title text-center mb-2"}>
        Avg. Work Hour
      </h2>
      <Text c="dimmed" ta="center" fz="sm">
        60 hr / week
      </Text>

      <Group justify="space-between" mt="xs">
        <Text fz="sm" c="dimmed">
          Progress
        </Text>
        <Text fz="sm" c="dimmed">
          62%
        </Text>
      </Group>

      <Progress value={62} mt={5} />

      <Group justify="space-between"  mt="md">
        <Text fz="sm">20 / 36 km</Text>
        <Badge size="sm">4 days left</Badge>
      </Group>
    </Paper>
  );
};
