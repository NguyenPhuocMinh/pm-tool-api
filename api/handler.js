export default function handler(request, response) {
  console.log('🚀 ~ file: auth.js:2 ~ handler ~ request', request);

  return response.status(200).json({ message: 'Hello handler' });
}
