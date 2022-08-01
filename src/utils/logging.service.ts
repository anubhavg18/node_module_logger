import { createLogger, format, transports, Logger } from 'winston';

const printFormat = (info: any): string => {
  let result = `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`;

  if (info.stack) {
    result = `${result}\n${info.stack}`;
  }

  return result;
};

const getLogStyle = (logStyle: string): any => {
  if (logStyle === 'cli') {
    return format.combine(
      format.colorize({ all: true }),
      format.printf(printFormat),
    );
  } else {
    return format.combine(format.json());
  }
};

const getLogger = (moduleName: string): Logger => {
  return createLogger({
    level: 'info',
    format: format.combine(
      format.label({ label: moduleName }),
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      format.errors({ stack: true }),
      format.splat(),
      getLogStyle('cli'),
    ),
    defaultMeta: { service: 'Saudia Airlines Managed Services' },
    transports: [new transports.Console()],
  });
};

export { getLogger, Logger };
