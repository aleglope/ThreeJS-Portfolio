import PropTypes from "prop-types";
import React, { useEffect, useRef, useMemo } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

const Developer = React.memo(function Developer({ animationName = "idle", ...props }) {
  const group = useRef();

  const { scene } = useGLTF("/models/animations/developer.glb");
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  const { animations: idleAnimation } = useFBX("/models/animations/idle.fbx");
  const { animations: saluteAnimation } = useFBX(
    "/models/animations/salute.fbx"
  );
  const { animations: clappingAnimation } = useFBX(
    "/models/animations/clapping.fbx"
  );
  const { animations: victoryAnimation } = useFBX(
    "/models/animations/victory.fbx"
  );

  const animations = useMemo(() => {
    return [
      ["idle", idleAnimation[0]],
      ["salute", saluteAnimation[0]],
      ["clapping", clappingAnimation[0]],
      ["victory", victoryAnimation[0]],
    ].map(([name, source]) => {
      const clip = source.clone();
      clip.name = name;
      return clip;
    });
  }, [idleAnimation, saluteAnimation, clappingAnimation, victoryAnimation]);

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();
      return () => {
        if (actions[animationName]) {
          actions[animationName].fadeOut(0.5);
        }
      };
    }
  }, [actions, animationName]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={clone} />
    </group>
  );
});

useGLTF.preload("/models/animations/developer.glb");

Developer.propTypes = { animationName: PropTypes.string };
export default Developer;
