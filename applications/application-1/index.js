import library1Variable from '@mhal007/monorepo-npm-library-1'

console.log('library-1 variable value is ' + library1Variable)

console.log('Hello World from application-1');

const changingThisDoesntTriggerANewVersionAutomatically = 3;

export default changingThisDoesntTriggerANewVersionAutomatically
