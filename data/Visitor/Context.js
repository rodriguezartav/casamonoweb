import React, { useReducer, useContext, createContext } from "react";
import Reducer from "./Reducer";
import { load, alert } from "./Actions";
import { isMobile } from "../utils";

import { useMutation } from "../Api";

const StateContext = createContext();
const DispatchContext = createContext();

const initState = {
  visitors: { count: 0 },
  visitor: {
    name: "",
    uniqueId: "",
    id: null,
    pages: [],
  },
  contact: {
    phone: null,
  },
  shop: {},
  cart: {},
  alerts: [],
  video: {
    token: null,
    activeSinkId: null,
    settings: {
      trackSwitchOffMode: undefined,
      dominantSpeakerPriority: "standard",
      bandwidthProfileMode: "collaboration",
      maxTracks: isMobile ? "5" : "10",
      maxAudioBitrate: "16000",
      renderDimensionLow: "low",
      renderDimensionStandard: "960p",
      renderDimensionHigh: "wide1080p",
    },
  },
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initState);

  React.useEffect(() => {
    try {
      load(dispatch, initState);
    } catch (e) {}
  }, []);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useNotify = () => {
  const dispatch = React.useContext(DispatchContext);
  const state = React.useContext(StateContext);

  return [
    (message, color) => {
      alert(dispatch, message, color);
    },
    () => {
      dispatch({
        type: "REMOVE_ALERT",
        payload: state.alerts[state.alerts.length - 1] || {},
      });
    },
  ];
};

export const useMutate = (url) => {
  const dispatch = React.useContext(DispatchContext);
  const state = React.useContext(StateContext);

  return useMutation(url);
};

export const useAction = (action, params) => {
  if (typeof window === "undefined") return [null, {}];

  const dispatch = React.useContext(DispatchContext);
  const state = React.useContext(StateContext);

  return action(dispatch, params);
};

export const useGlobalState = () => {
  const context = React.useContext(StateContext);
  if (context === undefined) {
    throw new Error("useCrmState must be used within a CountProvider");
  }
  return context;
};

export const useGlobalDispatch = () => {
  const context = React.useContext(DispatchContext);
  if (context === undefined) {
    throw new Error("useCrmDispatch must be used within a CountProvider");
  }
  return context;
};
