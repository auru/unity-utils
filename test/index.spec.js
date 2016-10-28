import test from 'ava';
import { uri as uriFromIndex } from '../src';
import utils from '../src';
import * as uriFromFile from '../src/uri';

test('uri imports are identical', t => {

    // join
    t.is(
        uriFromIndex.join,
        uriFromFile.join,
    );
    t.is(
        utils.uri.join,
        uriFromFile.join,
    );
    t.is(
        utils.uri.join,
        uriFromIndex.join,
    );

    // query
    t.is(
        uriFromIndex.query,
        uriFromFile.query,
    );
    t.is(
        utils.uri.query,
        uriFromFile.query,
    );
    t.is(
        utils.uri.query,
        uriFromIndex.query,
    )
});