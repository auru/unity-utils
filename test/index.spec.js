import test from 'ava';
import { uri as uriFromIndex } from '../src';
import utils from '../src';
import * as uriFromFile from '../src/uri';

test('uri imports are identical', t => {
    t.is(
        uriFromIndex.normalize,
        uriFromFile.normalize,
    );

    t.is(
        utils.uri.normalize,
        uriFromFile.normalize,
    );

    t.is(
        utils.uri.normalize,
        uriFromIndex.normalize,
    )
});