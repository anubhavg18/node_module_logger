"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerLogStyle = exports.loggerLogLevel = exports.awsRegion = exports.awsS3BucketName = exports.awsS3SecretAccessKey = exports.awsS3AccessKey = exports.awsS3Endpoint = exports.mongoUri = exports.port = exports.appVersion = exports.appName = void 0;
exports.appName = process.env.APP_NAME;
exports.appVersion = process.env.APP_VERSION;
exports.port = process.env.PORT;
exports.mongoUri = process.env.mongoKey;
exports.awsS3Endpoint = process.env.AWS_S3_ENDPOINT;
exports.awsS3AccessKey = process.env.AWS_ACCESS_KEY_ID;
exports.awsS3SecretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
exports.awsS3BucketName = process.env.AWS_S3_BUCKET_NAME;
exports.awsRegion = process.env.AWS_REGION;
exports.loggerLogLevel = 'info';
exports.loggerLogStyle = 'cli';
//# sourceMappingURL=config.js.map