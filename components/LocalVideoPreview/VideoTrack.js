import React, { useRef, useEffect } from "react";

import { Track } from "twilio-video";
import useMediaStreamTrack from "../../hooks/useMediaStreamTrack/useMediaStreamTrack";

export default function VideoTrack({ track, isLocal, priority }) {
  const ref = useRef(null);
  const mediaStreamTrack = useMediaStreamTrack(track);

  useEffect(() => {
    const el = ref.current;
    el.muted = true;
    if (track.setPriority && priority) {
      track.setPriority(priority);
    }
    track.attach(el);
    return () => {
      track.detach(el);
      if (track.setPriority && priority) {
        // Passing `null` to setPriority will set the track's priority to that which it was published with.
        track.setPriority(null);
      }
    };
  }, [track, priority]);

  // The local video track is mirrored if it is not facing the environment.
  const isFrontFacing =
    mediaStreamTrack?.getSettings().facingMode !== "environment";
  const style =
    isLocal && isFrontFacing ? { transform: "rotateY(180deg)" } : {};

  return (
    <video
      ref={ref}
      style={{ width: "100%", maxHeight: "100%", objectFit: "contain" }}
    />
  );
}
