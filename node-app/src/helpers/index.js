const attachRequestToResponse = req => {
  let { RETURN_REQ, ALWAYS_RETURN_REQ } = process.env;
  RETURN_REQ = Number(RETURN_REQ)
  ALWAYS_RETURN_REQ = Number(ALWAYS_RETURN_REQ)
  if (!RETURN_REQ) return false;
  if (ALWAYS_RETURN_REQ) return true;
  if (req.body.returnRequest) return true;
  return false;
};
module.exports = { attachRequestToResponse };
