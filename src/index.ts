import glob from 'glob';

const entries = glob.sync('**');

console.dir(entries, { colors: true });
