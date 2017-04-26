var replace = require("replace");

replace({
    regex: "\"{{",
    replacement: "{{",
    paths: ['./dist/assets/styles.css.twig'],
    recursive: true,
    silent: true,
  });
replace({
    regex: "}}\"",
    replacement: "}}",
    paths: ['./dist/assets/styles.css.twig'],
    recursive: true,
    silent: true,
  });
replace({
    regex: "sans-serif\"",
    replacement: "sans-serif",
    paths: ['./dist/assets/styles.css.twig'],
    recursive: true,
    silent: true,
  });
