import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction): void {
    const { method, originalUrl } = req;
    const start = Date.now();

    res.on('finish', (): void => {
      const { statusCode } = res;
      const contentLength = res.get('content-length');
      const responseTime = Date.now() - start;

      this.logger.log(`${method} ${originalUrl} ${statusCode} ${contentLength} ${responseTime}ms`);
    });

    next();
  }
}
