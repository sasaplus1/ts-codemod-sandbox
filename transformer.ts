import type { Transform } from "jscodeshift";

export const parser = 'tsx'

export const transform: Transform = (file, api) => {
  const j = api.jscodeshift;

  return j(file.source)
    .toSource();
};

export default transform;
