import coreWebVitals from "eslint-config-next/core-web-vitals";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  ...coreWebVitals,
  {
    name: "opennext-build-output",
    ignores: [".open-next/**"],
  },
];

export default eslintConfig;
