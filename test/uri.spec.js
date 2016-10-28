import test from 'ava';
import * as uri from '../src/uri';

test('normalize', t => {

    t.is(
        uri.normalize(),
        '/',
        'empty path'
    );

    t.is(
        uri.normalize('path', 'with', null),
        'path/with',
        'path with null'
    );

    t.is(
        uri.normalize('path', 'with', false),
        'path/with',
        'path with false'
    );

    t.is(
        uri.normalize('path', 'with', true),
        'path/with/true',
        'path with true'
    );

    t.is(
        uri.normalize('path', 'with', 1),
        'path/with/1',
        'path with 1'
    );

    t.is(
        uri.normalize('path', 'with', 0),
        'path/with/0',
        'path with'
    );

    t.is(
        uri.normalize('path', 'with', undefined),
        'path/with',
        'path with undefined'
    );

    t.is(
        uri.normalize('path', 'with', Infinity),
        'path/with/Infinity',
        'path with Infinity'
    );

    t.is(
        uri.normalize('path', 'with', NaN),
        'path/with',
        'path with NaN'
    );

    t.is(
        uri.normalize('/path//', '//with/', '///slashes'),
        '/path/with/slashes',
        'path with slashes'
    );

    t.is(
        uri.normalize('/path//', '//with/', '///more///slashes///'),
        '/path/with/more/slashes/',
        'path with more slashes'
    );

    t.is(
        uri.normalize('path', 'with', []),
        'path/with',
        'path with empty array'
    );

    t.is(
        uri.normalize('path', 'with', ['t','e','s','t']),
        'path/with/t,e,s,t',
        'path with array'
    );

    t.is(
        uri.normalize('path', 'with', {}),
        'path/with/[object Object]',
        'path with object'
    );

    t.is(
        uri.normalize('path', 'with', /^$/),
        'path/with/^$/',
        'path with regexp'
    );
});

test('normalizeQuery', t => {

    t.deepEqual(
        uri.queryNormalize({ param: 'val', param2: 'val2' }),
        { param: 'val', param2: 'val2' },
        'standard'
    );

    t.deepEqual(
        uri.queryNormalize({}),
        {},
        'empty'
    );

    t.deepEqual(
        uri.queryNormalize({ param: 'val', 'nothing': '' }),
        { param: 'val' },
        'with empty string'
    );

    t.deepEqual(
        uri.queryNormalize({ param: 'val', zero: 0 }),
        { param: 'val', zero: 0 },
        'with zero'
    );

    t.deepEqual(
        uri.queryNormalize({ param: 'val', 'null': null }),
        { param: 'val' },
        'with null'
    );

    t.deepEqual(
        uri.queryNormalize({ param: 'val', 'undefined': undefined }),
        { param: 'val' },
        'with undefined'
    );

    t.deepEqual(
        uri.queryNormalize({ param: 'val', 'Infinity': Infinity }),
        { param: 'val', 'Infinity': Infinity },
        'with Infinity'
    );

    t.deepEqual(
        uri.queryNormalize({ param: 'val', 'false': false }),
        { param: 'val', 'false': false },
        'with false'
    );

    t.deepEqual(
        uri.queryNormalize({ param: 'val', 'false': true }),
        { param: 'val', 'false': true },
        'with false'
    );

    t.deepEqual(
        uri.queryNormalize({ param: 'val', object: {} }),
        { param: 'val', object: {} },
        'with object'
    );

    t.deepEqual(
        uri.queryNormalize({ param: 'val', array: [] }),
        { param: 'val', array: [] },
        'with array'
    );
});