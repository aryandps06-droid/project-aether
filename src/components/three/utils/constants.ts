export const CORE_RADIUS = 0.72;

export const INNER_RADIUS = 0.28;

export const SHELL_RADIUS = 1.08;

export const RING_COUNT = 3;

export const PARTICLE_COUNT = 1800;

export const CAMERA_DISTANCE = 6;
export const CAMERA = {
  fov: 45,
  near: 0.1,
  far: 100,
  position: [0, 0, 6] as const,
};

export const CORE = {
  radius: 0.5,
  detail: 8,
};

export const INNER_CORE = {
  radius: 0.18,
};

export const SHELL = {
  radius: 0.9,
};

export const PARTICLES = {
  count: 1800,
  spread: 18,
};

export const RINGS = {
  count: 3,
};

export const COLORS = {
  background: "#050505",
  surface: "#111111",
  red: "#dc2626",
  glow: "#ff4d4d",
  white: "#ffffff",
};