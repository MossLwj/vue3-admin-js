//  获取当前svg目录下所有为svg的文件
const req = require.context("@/assets/svg", false, /\.svg/);
//  解析获取的svg文件的文件名，并返回
const requireAll = requireContext => {
  return requireContext.keys().map(requireContext);
};
requireAll(req);
