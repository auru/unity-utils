import { join as pathJoin } from 'path';

export function normalize(...args) {

    args = args.filter( arg => arg === 0 || Boolean(arg) ).map(String);
    return args.length ? `${pathJoin(...args)}` : '/';
}

export function queryNormalize(query) {
    for (let param in query) {
        if (query.hasOwnProperty(param) && (query[param] === undefined || query[param] === '' || query[param] === null) ) {
            delete query[param];
        }
    }
    return query;
}