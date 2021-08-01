
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

/**
 * Options shared by the TypeScript and TSX parsers.
 */
module.exports = {
  sourceType: 'module',
  // 允许代码任何地方进行 import、export
  allowImportExportEverywhere: true,
  // 允许在函数外面进行 return
  allowReturnOutsideFunction: true,
  // 从第一行开始解析代码
  startLine: 1,
  // 将所有解析的标记添加到文件节点上的标记属性
  tokens: true,
  // https://babeljs.io/docs/en/babel-parser#plugins
  plugins: [
    'asyncGenerators',
    'bigInt', //
    'classPrivateMethods',
    'classPrivateProperties',
    'classProperties',
    'decorators-legacy',
    'doExpressions',
    'dynamicImport',
    'exportDefaultFrom',
    'exportExtensions',
    'exportNamespaceFrom',
    'functionBind',
    'functionSent',
    'importMeta',
    'nullishCoalescingOperator',
    'numericSeparator',
    'objectRestSpread',
    'optionalCatchBinding',
    'optionalChaining',
    ['pipelineOperator', { proposal: 'minimal' }],
    'throwExpressions',
    'typescript'
  ],
};
