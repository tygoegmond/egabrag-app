#!/usr/bin/env node

const {writeFile, readFile, readdir} = require('fs');
const {promisify} = require('util');
const path = require('path');

const folder = 'node_modules/react-native/Libraries/Renderer/implementations/';

const pattern = new RegExp(
    'throw ReactError[\\s\\S]{0,80}Text strings must be rendered within a <Text> component[\\s\\S]{0,80}[^()]\\)[;,]'
    , 'gm');

const patchFile = async (file) => {
    const content = (await promisify(readFile)(file)).toString();
    const patched = content.replace(pattern, () => {
        const fileRegEx = new RegExp('dev');
        if (fileRegEx.test(file))
            return '';
        else
            return '{}';
    });
    await promisify(writeFile)(file, patched);
};

const patchAll = async () => {
    const files = await promisify(readdir)(folder);

    await Promise.all(files.map(file => path.join(folder, file)).map(patchFile));
};

patchAll();