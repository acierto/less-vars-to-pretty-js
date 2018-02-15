/* eslint-disable */
const path = require('path');
const reporters = require('jasmine-reporters');
const reporter = new reporters.JUnitXmlReporter({
    consolidateAll: false,
    savePath: path.resolve(__dirname, '..', '..', 'build', 'test-results', 'jest'),
});
jasmine.getEnv().addReporter(reporter);

require('console-error-throws-error');
/* eslint-enable */
