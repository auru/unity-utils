import { join as pathJoin } from 'path';

export function join(...args) {

    args = args.filter( arg => arg === 0 || Boolean(arg) ).map(String);
    return args.length ? `${pathJoin(...args)}` : '/';
}

export function query(queryObject) {
    for (let param in queryObject) {
        if (queryObject.hasOwnProperty(param) && (queryObject[param] === undefined || queryObject[param] === '' || queryObject[param] === null) ) {
            delete queryObject[param];
        }
    }
    return queryObject;
}