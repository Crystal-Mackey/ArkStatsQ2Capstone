import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../hooks/useAuth";
export default function ConnectedRoute({
  isProtected,
  redirectIfAuthenticated,
  component: ComponentToRender,
  ...rest
}) {
  if (!ComponentToRender) {
    throw new Error("ConnectedRoute MUST have a prop named 'component'");
  }

  const auth = useAuth();

  if (redirectIfAuthenticated && auth.loggedIn) {
    return (
      <Route
        {...rest}
        render={({ location }) => (
          <Redirect
            to={{
              pathname: `/dashboard`,
              state: { from: location },
            }}
          />
        )}
      />
    );
  }

  if (isProtected === null || (isProtected && auth.loggedIn)) {
    return <Route {...rest} render={(renderedProps) => <ComponentToRender {...renderedProps} />} />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) => (
        <Redirect
          to={{
            pathname: `/`,
            state: { from: location },
          }}
        />
      )}
    />
  );
}

ConnectedRoute.defaultProps = {
  isProtected: null,
};
