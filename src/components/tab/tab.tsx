import React from "react";
import { Tabs } from "@mantine/core";
import { ITabs } from "./interface";

export const Tab: React.FC<ITabs> = ({ defaultValue }) => {
  return (
    <Tabs color="#9263f8" defaultValue={defaultValue}>
      <Tabs.List>
        <Tabs.Tab value="first">Teal tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};
