module.exports = (fileInfo, api, options) => {
  const j = api.jscodeshift;

  return j(fileInfo.source)
    .find(j.ExpressionStatement, {
      expression: {
        callee: {
          type: 'MemberExpression',
          object: { type: 'Identifier', name: 'console' },
        }
      },
    })
    .remove()
    .toSource();
};
