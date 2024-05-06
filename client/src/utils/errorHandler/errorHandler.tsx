import React from "react";
import { IconX, IconCheck } from "@tabler/icons-react";
import { Notification, rem } from "@mantine/core";

interface ErrorHandlerProps {
  isSuccess: boolean;
  isError: boolean;
  message: string;
}

export const errorHandler: (
  props: ErrorHandlerProps
) => React.ReactElement | null = ({ isSuccess, isError, message }) => {
  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;
  return (
    <div>
      {isError ? (
        <Notification icon={xIcon} color="red" title="Bummer!">
          {message}
        </Notification>
      ) : isSuccess ? (
        <Notification icon={checkIcon} color="green" title="Success!">
          {message}
        </Notification>
      ) : null}
    </div>
  );
};
