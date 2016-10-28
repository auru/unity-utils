import test from 'ava';
import * as uri from '../src/uri';

test('normalize', t => {

    t.is(
        uri.join(),
        '/',
        'empty path'
    );

    t.is(
        uri.join('path', 'with', null),
        'path/with',
        'path with null'
    );

    t.is(
        uri.join('path', 'with', false),
        'path/with',
        'path with false'
    );

    t.is(
        uri.join('path', 'with', true),
        'path/with/true',
        'path with true'
    );

    t.is(
        uri.join('path', 'with', 1),
        'path/with/1',
        'path with 1'
    );

    t.is(
        uri.join('path', 'with', 0),
        'path/with/0',
        'path with'
    );

    t.is(
        uri.join('path', 'with', undefined),
        'path/with',
        'path with undefined'
    );

    t.is(
        uri.join('path', 'with', Infinity),
        'path/with/Infinity',
        'path with Infinity'
    );

    t.is(
        uri.join('path', 'with', NaN),
        'path/with',
        'path with NaN'
    );

    t.is(
        uri.join('/path//', '//with/', '///slashes'),
        '/path/with/slashes',
        'path with slashes'
    );

    t.is(
        uri.join('/path//', '//with/', '///more///slashes///'),
        '/path/with/more/slashes/',
        'path with more slashes'
    );

    t.is(
        uri.join('path', 'with', []),
        'path/with',
        'path with empty array'
    );

    t.is(
        uri.join('path', 'with', ['t','e','s','t']),
        'path/with/t,e,s,t',
        'path with array'
    );

    t.is(
        uri.join('path', 'with', {}),
        'path/with/[object Object]',
        'path with object'
    );

    t.is(
        uri.join('path', 'with', /^$/),
        'path/with/^$/',
        'path with regexp'
    );
});

test('normalizeQuery', t => {

    t.deepEqual(
        uri.query({ param: 'val', param2: 'val2' }),
        { param: 'val', param2: 'val2' },
        'standard'
    );

    t.deepEqual(
        uri.query(),
        undefined,
        'empty'
    );

    t.deepEqual(
        uri.query({}),
        {},
        'empty object'
    );

    t.deepEqual(
        uri.query({ param: 'val', 'nothing': '' }),
        { param: 'val' },
        'with empty string'
    );

    t.deepEqual(
        uri.query({ param: 'val', zero: 0 }),
        { param: 'val', zero: 0 },
        'with zero'
    );

    t.deepEqual(
        uri.query({ param: 'val', 'null': null }),
        { param: 'val' },
        'with null'
    );

    t.deepEqual(
        uri.query({ param: 'val', 'undefined': undefined }),
        { param: 'val' },
        'with undefined'
    );

    t.deepEqual(
        uri.query({ param: 'val', 'Infinity': Infinity }),
        { param: 'val', 'Infinity': Infinity },
        'with Infinity'
    );

    t.deepEqual(
        uri.query({ param: 'val', 'false': false }),
        { param: 'val', 'false': false },
        'with false'
    );

    t.deepEqual(
        uri.query({ param: 'val', 'false': true }),
        { param: 'val', 'false': true },
        'with false'
    );

    t.deepEqual(
        uri.query({ param: 'val', object: {} }),
        { param: 'val', object: {} },
        'with object'
    );

    t.deepEqual(
        uri.query({ param: 'val', array: [] }),
        { param: 'val', array: [] },
        'with array'
    );
});