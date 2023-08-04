import libraryHelperVariable from '@mhal007/monorepo-npm-library-helper'

console.log('library-helper variable value is ' + libraryHelperVariable)

console.log('Hello World from library-1');

const changingThisDoesntTriggerANewVersionAutomatically = 4;

export default changingThisDoesntTriggerANewVersionAutomatically
