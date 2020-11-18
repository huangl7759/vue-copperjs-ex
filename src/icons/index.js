const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('../icons', false, /\.svg$/)
requireAll(req)