import dotenv from 'dotenv';

dotenv.config();

export default Object.freeze({
  getPort: () => process.env.PORT || null,
  getAuthSecret: () => process.env.AUTH_SECRET,
  getSessionExpireTime: () => process.env.SESSION_EXPIRE_TIME,
  getLinearApiKey: () => process.env.LINEAR_API_KEY
});
