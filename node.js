export default function handler(req, res) {
  const a = parseFloat(req.query.a) || 0;
  const b = parseFloat(req.query.b) || 0;
  const sum = a + b;
  return res.status(200).json({
    num1: a,
    num2: b,
    result: sum
  });
}
