export default {
    extends: ["@commitlint/config-conventional"],
    rules: {
      "type-case": [2, "always", "lower-case"],
      "subject-case": [2, "always", "sentence-case"],
    },
  };
  