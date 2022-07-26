// Application
export const appName = process.env.APP_NAME;
export const appVersion = process.env.APP_VERSION;
export const port = process.env.PORT;

// Database
export const mongoUri = process.env.mongoKey;

// AWS S3
export const awsS3Endpoint = process.env.AWS_S3_ENDPOINT;
export const awsS3AccessKey = process.env.AWS_ACCESS_KEY_ID;
export const awsS3SecretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
export const awsS3BucketName = process.env.AWS_S3_BUCKET_NAME;
export const awsRegion = process.env.AWS_REGION;

// Logger
export const loggerLogLevel = 'info';
export const loggerLogStyle = 'cli';
