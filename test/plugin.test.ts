import superJsonWithNext from '../src';
import pluginTester from 'babel-plugin-tester';
import * as path from 'path';

pluginTester({
  plugin: superJsonWithNext,
  pluginOptions: {
    exclude: ['smth'],
  },
  fixtures: path.join(__dirname, 'pages'),
});
